import React, { ReactNode } from 'react';

import style from './paidyLogo.module.scss';

type Props = {
  size?: {
    width: number;
    height: number;
  },
  className?: string;
  type?: 'Plain' | 'Cricle';
  children?: ReactNode;  
}
function PaidyLogo(props: Props) {
  const { width = 40, height=40 } = props?.size || {};
  const { type='Plain', children, className='' } = props;

  return (
    <div className={`${type === 'Cricle' ? style.logo : style.plain} ${className} `}>
      <img src={'https://images.ctfassets.net/i7it8bepy72j/jLJhzOAtmq7IyzAhg8RkD/70fe2861e845382adf77457adab78f11/logo-512.png'} width={width} height={height} />
      {children}
    </div>
  );
}

export default PaidyLogo;
