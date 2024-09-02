import { cx } from 'class-variance-authority';
import type { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { Suspense, lazy } from 'react';
import styles from './icon.module.css';

export type IconName = keyof typeof dynamicIconImports;

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
  spin?: boolean;
}

export const Icon = ({ name, className, spin, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={false}>
      <LucideIcon className={cx(styles.icon, { [styles.spin as string]: spin }, className)} {...props} />
    </Suspense>
  );
};
