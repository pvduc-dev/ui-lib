import React, { ButtonHTMLAttributes, FC, RefObject, useRef } from 'react';
import { AriaButtonProps } from '@react-types/button';
import { ButtonAria, useButton } from '@react-aria/button';

interface ButtonProps extends AriaButtonProps {}

const Button: FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  const ref = useRef() as RefObject<HTMLButtonElement>;
  const { buttonProps }: ButtonAria<ButtonHTMLAttributes<HTMLButtonElement>> = useButton(props, ref);
  return (
    <button
      type="button"
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default { Button };
