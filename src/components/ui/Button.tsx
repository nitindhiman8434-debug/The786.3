'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const variantStyles = {
  primary:
    'bg-gold text-midnight hover:bg-champagne focus-visible:ring-gold',
  secondary:
    'border border-gold text-gold bg-transparent hover:bg-gold/10 focus-visible:ring-gold',
  ghost:
    'bg-transparent text-ivory hover:text-champagne hover:bg-ivory/5 focus-visible:ring-ivory/40',
  wine:
    'bg-wine text-ivory hover:bg-wine/80 focus-visible:ring-wine',
} as const;

const sizeStyles = {
  sm: 'px-4 py-1.5 text-xs tracking-wider',
  md: 'px-6 py-2.5 text-sm tracking-wider',
  lg: 'px-8 py-3.5 text-base tracking-wider',
} as const;

type Variant = keyof typeof variantStyles;
type Size = keyof typeof sizeStyles;

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 font-sans font-medium uppercase',
      'rounded-sm transition-all duration-300 ease-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight',
      'disabled:pointer-events-none disabled:opacity-40',
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const inner = (
      <>
        {icon && iconPosition === 'left' && (
          <span className="shrink-0" aria-hidden="true">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="shrink-0" aria-hidden="true">{icon}</span>
        )}
      </>
    );

    if ('href' in props && props.href !== undefined) {
      const { href, ...rest } = props as ButtonAsLink;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...rest}
        >
          {inner}
        </Link>
      );
    }

    const buttonProps = props as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...buttonProps}
      >
        {inner}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
