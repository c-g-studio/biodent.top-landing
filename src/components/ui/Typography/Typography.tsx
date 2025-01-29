import { FC } from 'react';

import { classnames } from '@/utils/classnames';

import { WithChildren, WithClassName } from '@/types/common';

type Props = WithChildren &
  WithClassName & {
    variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  };

export const Typography: FC<Props> = ({
  variant,
  children,
  className = '',
  ...props
}: Props) => {
  const Component = variant ?? 'p';

  return (
    <Component
      className={classnames(
        'font-inter text-xs font-normal text-zinc-200 md:text-sm',
        {
          'text-6xl font-bold text-blue-extra-dark md:text-5xl/[1.04]':
            variant === 'h1',
          'text-2xl font-medium md:text-5xl': variant === 'h2',
          'text-base font-medium md:text-lg': variant === 'h3',
        },
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
