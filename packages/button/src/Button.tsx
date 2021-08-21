import React, { ButtonHTMLAttributes, FC, RefObject, useRef } from 'react';
import { AriaButtonProps } from '@react-types/button';
import { ButtonAria, useButton } from '@react-aria/button';
import {FocusRing} from '@react-aria/focus';

import './button.css';

interface ButtonProps extends AriaButtonProps {}

const Button: FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  const ref = useRef() as RefObject<HTMLButtonElement>;
  const { buttonProps }: ButtonAria<ButtonHTMLAttributes<HTMLButtonElement>> = useButton(props, ref);
  return (
    <FocusRing>
      <button
        type="button"
        {...buttonProps}
        className="button"
      >
        {children}
      </button>
    </FocusRing>
  );
};

export { Button };
