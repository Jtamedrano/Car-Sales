import React from 'react';

interface Props {
  children: string;
  click?: any;
}

export const Button = ({ children, click }: Props) => {
  const handleButtonClick = (fn: () => any) => {
    fn();
  };
  return (
    <button className="button" onClick={(e) => handleButtonClick(click)}>
      {children}
    </button>
  );
};
