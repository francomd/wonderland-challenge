import { Theme, breakpoint, withTheme } from '@/providers/ThemeProvider';
import { styled } from '@linaria/react';

export const SSelect = withTheme(styled.select<Theme>`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.radii.base};
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
  font-size: 1rem;
  margin: 0;
  box-shadow: 4px 4px 0 0 ${({ theme }) => theme.color.primary};
  will-change: transform;

  background-image: url("data:image/svg+xml;utf8,<svg fill='%23192d55' height='40' viewBox='0 0 40 40' width='40' xmlns='http://www.w3.org/2000/svg'><path d='m13.6 18.6 5.6 5.6c0.4 0.4 1.2 0.4 1.6 0l5.6-5.6c0.7-0.7 0.2-1.9-0.8-1.9h-11.2c-1 0-1.5 1.2-0.8 1.9z'/><path fill='none' d='M0,0h40v40H0V0z'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 0.15rem;
  padding-right: 2rem;

  ${breakpoint('sm',
    `
    background-position-y: 0;
  `)}

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
    border: 2px solid #ccc;
    padding: 0.5rem 1rem;
    box-shadow: 4px 4px 0 0 #ccc;
  }

  &:hover:not(:disabled):not(:active) {
    background-color: ${({ theme }) => theme.color.backgroundLight};
    transform: scale(1.025);
  }

  &:focus {
    background-color: ${({ theme }) => theme.color.backgroundLight};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.backgroundDark};
  }

  &:focus,
  &:active {
    outline: none;
    border: 2px solid ${({ theme }) => theme.color.secondary};
    box-shadow: 4px 4px 0 0 ${({ theme }) => theme.color.secondary};
  }
`);
