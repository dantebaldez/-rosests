// src/components/Button/Button.tsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #9933cc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #882b99;
  }
`;

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
