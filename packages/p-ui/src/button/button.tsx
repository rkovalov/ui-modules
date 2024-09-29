import { type VariantProps, cva } from 'class-variance-authority';
import type { ReactElement } from 'react';
import { Button as ButtonAria, type ButtonProps as ButtonAriaProps } from 'react-aria-components';
import { Icon, type IconName, type IconProps } from '../icon';
import styles from './button.module.css';

const buttonStyles = cva(styles.base, {
  variants: {
    color: {
      brand: styles.brand,
      primary: styles.primary,
      secondary: '',
      destructive: styles.destructive,
    },
    variant: {
      solid: styles.solid,
      soft: styles.soft,
      outline: styles.outline,
      ghost: styles.ghost,
    },
    size: {
      xs: styles.xs,
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
    },
    isDisabled: {
      true: styles.isDisabled,
    },
  },
  compoundVariants: [
    {
      color: 'brand',
      variant: 'solid',
      className: styles.brandSolid,
    },
    {
      color: 'brand',
      variant: 'ghost',
      className: styles.brandGhost,
    },
    {
      color: 'brand',
      variant: 'soft',
      className: styles.brandSoft,
    },
    {
      color: 'brand',
      variant: 'outline',
      className: styles.brandOutline,
    },
    {
      color: 'primary',
      variant: 'solid',
      className: styles.primarySolid,
    },
    {
      color: 'primary',
      variant: 'ghost',
      className: styles.primaryGhost,
    },
    {
      color: 'primary',
      variant: 'soft',
      className: styles.primarySoft,
    },
    {
      color: 'primary',
      variant: 'outline',
      className: styles.primaryOutline,
    },
    {
      color: 'destructive',
      variant: 'solid',
      className: styles.destructiveSolid,
    },
    {
      color: 'destructive',
      variant: 'ghost',
      className: styles.destructiveGhost,
    },
    {
      color: 'destructive',
      variant: 'soft',
      className: styles.destructiveSoft,
    },
    {
      color: 'destructive',
      variant: 'outline',
      className: styles.destructiveOutline,
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    color: 'primary',
  },
});

export type ButtonStylesProps = VariantProps<typeof buttonStyles>;

type ButtonIconType = ReactElement | IconName;
export interface ButtonProps extends ButtonAriaProps, React.RefAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  danger?: boolean;
  default?: boolean;
  iconLeft?: ButtonIconType;
  iconRight?: ButtonIconType;
  isLoading?: boolean;
  // example https://www.radix-ui.com/themes/docs/components/button
  variant?: 'solid' | 'soft' | 'outline' | 'ghost';
  color?: 'brand' | 'primary' | 'secondary' | 'destructive';
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const iconStyles = cva(styles.icon, {
  variants: {
    left: {
      true: styles.iconLeft,
    },
    right: {
      true: styles.iconRight,
    },
  },
});

interface ButtonIconProps extends Omit<IconProps, 'name'> {
  icon: ButtonIconType;
  className?: string;
  left?: boolean;
  right?: boolean;
}

function ButtonIcon({ icon, className, left, right, ...iconProps }: ButtonIconProps) {
  return (
    <span className={iconStyles({ className, left, right })}>
      {typeof icon === 'string' ? <Icon name={icon} size={18} {...iconProps} /> : icon}
    </span>
  );
}

export function Button({
  children,
  iconLeft,
  iconRight,
  isLoading,
  className = '',
  ...otherProps
}: ButtonProps): JSX.Element {
  return (
    <ButtonAria className={buttonStyles({ ...otherProps, className })} {...otherProps}>
      <span className={styles.content}>
        {iconLeft && <ButtonIcon left icon={iconLeft} />}
        <span className={styles.children}>{children}</span>
        {isLoading ? (
          <ButtonIcon right spin icon="loader-circle" />
        ) : iconRight ? (
          <ButtonIcon right icon={iconRight} />
        ) : null}
      </span>
    </ButtonAria>
  );
}
