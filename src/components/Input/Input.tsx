import { Theme, withTheme } from '@/providers/ThemeProvider';
import { styled } from '@linaria/react';

export default function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <SInput {...props} />;
}

const SInput = withTheme(styled.input<Theme>`
  padding: 0.5rem 1rem;
  border: 2px solid ${(props) => props.theme.color.primary};
  border-radius: ${(props) => props.theme.radii.base};
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};
  font-size: 1rem;
  margin: 0;
  box-shadow: 4px 4px 0 0 ${(props) => props.theme.color.primary};
  will-change: transform;

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
    border: 2px solid #ccc;
    padding: 0.5rem 1rem;
    box-shadow: 4px 4px 0 0 #ccc;
  }

  &:hover:not(:disabled) {
    &:not(:active) {
      background-color: ${(props) => props.theme.color.backgroundLight};
    }

    transform: scale(1.025);
    & + button {
      transform: scale(1.025);
    }
  }

  &:focus,
  &:active {
    outline: none;
    border: 2px solid ${(props) => props.theme.color.secondary};
    box-shadow: 4px 4px 0 0 ${(props) => props.theme.color.secondary};
    background-color: ${(props) => props.theme.color.backgroundLight};
  }

  &::placeholder {
    color: ${(props) => props.theme.color.primary};
  }
`);
