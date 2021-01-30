import React from 'react';

interface BoxProps {
  children: JSX.Element[];
  className?: string;
}

export const Box = ({ children, className = '' }: BoxProps) => {
  return <div className={['box', className].join(' ')}>{children}</div>;
};
