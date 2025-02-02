import { classnames } from '@/utils/classnames';
import React, { FC } from 'react';

import { WithChildren, WithClassName } from '@/types/common';

type TSectionProps = {
  id?: string;
};

export const Section: FC<WithChildren & WithClassName & TSectionProps> = ({
  className,
  id = '',
  children,
}) => {
  return (
    <section className={classnames('py-16', className)} id={id}>
      <div className="container">{children}</div>
    </section>
  );
};
