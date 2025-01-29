import React from 'react';
import { classnames } from '@/utils/classnames';

type ButtonTypes = {
  children?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  handler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  aria?: string;
};

export const Button: React.FC<ButtonTypes> = ({
  children,
  type = 'button',
  className,
  handler,
  aria,
}): React.JSX.Element => {
  return (
    <button
      onClick={handler}
      type={type}
      aria-label={aria}
      className={classnames(
        'rounded-[4px] bg-blue-extra-light px-2 py-3 text-white transition-all hover:bg-blue md:flex',
        className,
      )}
    >
      {children}
    </button>
  );
};
