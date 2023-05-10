import React from 'react';
import { buttonStyled } from './Button.styles';
import ButtonProps from './types';

const Button: React.FC<ButtonProps> = ({ children, variant, onClick, css }) => {
  return (
    // todo fix css prop styling
    <button onClick={onClick} css={css ? css : buttonStyled(variant)}>
      {children}
    </button>
  );
};

export default Button;
