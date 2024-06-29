import { Theme, withTheme } from '@/providers/ThemeProvider';
import { styled } from '@linaria/react';

export default function Button({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <SButton {...props}>{props.children}</SButton>;
}

const SButton = withTheme(styled.button<Theme>`
  @layer button {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.background} !important;
    border: 2px solid ${(props) => props.theme.color.primary} !important;
    border-radius: ${(props) => props.theme.radii.base};
    color: ${(props) => props.theme.color.text};
    padding: 0.5rem 1rem;
    box-shadow: 4px 4px 0 0 ${(props) => props.theme.color.primary} !important;
    font-weight: 600;
    will-change: transform;
    margin: 0 !important;

    &:hover:not(:disabled):not(:active) {
      background-color: ${(props) => props.theme.color.backgroundLight} !important;
      transform: scale(1.025);
      color: ${(props) => props.theme.color.secondary} !important;
    }

    &:focus,
    &:active {
      outline: none;
      border: 2px solid ${(props) => props.theme.color.secondary} !important;
      box-shadow: 4px 4px 0 0 ${(props) => props.theme.color.secondary} !important;
      color: ${(props) => props.theme.color.secondary} !important;
    }

    &:disabled {
      cursor: not-allowed;
      color: ${(props) => props.theme.color.disabled} !important;
      background-color: ${(props) => props.theme.color.backgroundDark} !important;
      border: 2px solid ${(props) => props.theme.color.disabled} !important;
      padding: 0.5rem 1rem;
      box-shadow: 4px 4px 0 0 ${(props) => props.theme.color.disabled} !important;
    }

    &:focus {
      background-color: ${(props) => props.theme.color.backgroundLight} !important;
    }

    &:active {
      background-color: ${(props) => props.theme.color.backgroundDark} !important;
    }
  }
`);
