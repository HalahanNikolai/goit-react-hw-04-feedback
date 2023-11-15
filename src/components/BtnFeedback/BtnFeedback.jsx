import React from 'react';
import { StyledButton } from './BtnFeedback.styled';

export const BtnFeedback = ({
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

