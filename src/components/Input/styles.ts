import { Theme, withTheme } from '@/providers/ThemeProvider';
import { styled } from '@linaria/react';

export const SInput = withTheme(styled.input<Theme>`
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.radii.base};
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
  font-size: 1rem;
  margin: 0;
  box-shadow: 4px 4px 0 0 ${({ theme }) => theme.color.primary};
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
      background-color: ${({ theme }) => theme.color.backgroundLight};
    }

    transform: scale(1.025);
    & + button {
      transform: scale(1.025);
    }
  }

  &:focus,
  &:active {
    outline: none;
    border: 2px solid ${({ theme }) => theme.color.secondary};
    box-shadow: 4px 4px 0 0 ${({ theme }) => theme.color.secondary};
    background-color: ${({ theme }) => theme.color.backgroundLight};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.primary};
  }
`);
