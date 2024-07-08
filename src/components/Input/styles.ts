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
  will-change: transform, background-color;
  transition:
    transform 0.2s,
    background-color 0.2s;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
    border: 2px solid #ccc;
    padding: 0.5rem 1rem;
    box-shadow: 4px 4px 0 0 #ccc;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.backgroundLight};

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

  &[data-error='true'] {
    background-color: ${({ theme }) => theme.color.error};
  }

  [type='number'] {
    -moz-appearance: textfield;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`);

export const ErrorMessage = withTheme(styled.div<Theme>`
  color: ${({ theme }) => theme.color.errorText};
  font-size: ${({ theme }) => theme.font.small};
  text-transform: uppercase;
  margin-top: 0.5rem;
  padding: 0 0.5rem;
`);
