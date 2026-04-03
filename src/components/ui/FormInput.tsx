'use client';

import { forwardRef, useId } from 'react';
import { cn } from '@/lib/utils';

interface FormInputBaseProps {
  label: string;
  error?: string;
  className?: string;
  wrapperClassName?: string;
}

interface FormInputText
  extends FormInputBaseProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  variant?: 'text' | 'email' | 'tel';
}

interface FormInputTextarea
  extends FormInputBaseProps,
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  variant: 'textarea';
}

interface FormInputSelect
  extends FormInputBaseProps,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  variant: 'select';
  options: { value: string; label: string }[];
}

export type FormInputProps = FormInputText | FormInputTextarea | FormInputSelect;

const sharedStyles = cn(
  'w-full rounded-sm border bg-midnight-light px-4 py-3 font-sans text-sm text-ivory',
  'placeholder:text-ivory/30',
  'transition-all duration-200',
  'focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold/40',
  'disabled:cursor-not-allowed disabled:opacity-40'
);

const borderDefault = 'border-ivory/10';
const borderError = 'border-crimson/60';

export const FormInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  FormInputProps
>((props, ref) => {
  const autoId = useId();
  const {
    label,
    error,
    className,
    wrapperClassName,
    variant = 'text',
    ...rest
  } = props;

  const id = (rest as { id?: string }).id ?? autoId;
  const errorId = `${id}-error`;

  return (
    <div className={cn('flex flex-col gap-1.5', wrapperClassName)}>
      <label
        htmlFor={id}
        className="font-sans text-xs font-medium uppercase tracking-wider text-ivory/60"
      >
        {label}
      </label>

      {variant === 'textarea' ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          id={id}
          rows={4}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            sharedStyles,
            'resize-y',
            error ? borderError : borderDefault,
            className
          )}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : variant === 'select' ? (
        <select
          ref={ref as React.Ref<HTMLSelectElement>}
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            sharedStyles,
            'appearance-none bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20d%3D%22M2%204l4%204%204-4%22%20stroke%3D%22%23C9972B%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E")] bg-[length:12px] bg-[right_12px_center] bg-no-repeat pr-10',
            error ? borderError : borderDefault,
            className
          )}
          {...(rest as React.SelectHTMLAttributes<HTMLSelectElement>)}
        >
          {(props as FormInputSelect).options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          id={id}
          type={variant}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            sharedStyles,
            error ? borderError : borderDefault,
            className
          )}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {error && (
        <p id={errorId} role="alert" className="font-sans text-xs text-crimson">
          {error}
        </p>
      )}
    </div>
  );
});

FormInput.displayName = 'FormInput';
