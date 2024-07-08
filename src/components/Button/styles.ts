import { Theme, withTheme } from '@/providers/ThemeProvider';
import { styled } from '@linaria/react';

/*
 * RainbowKit doesn't bring an ID for each component
 * !important is used to override the styles applied to RainbowKit components
 * ./style.linaria.global.tsx => @layer rk
 */

export const SButton = withTheme(styled.button<Theme>`
  @layer override {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.background} !important;
    border: 2px solid ${({ theme }) => theme.color.primary} !important;
    border-radius: ${({ theme }) => theme.radii.base};
    color: ${({ theme }) => theme.color.text};
    padding: 0.5rem 1rem;
    box-shadow: 4px 4px 0 0 ${({ theme }) => theme.color.primary} !important;
    font-weight: 600;
    will-change: transform;
    transition: transform 0.2s;
    margin: 0 !important;

    &:hover:not(:disabled):not(:active) {
      background-color: ${({ theme }) => theme.color.backgroundLight} !important;
      transform: scale(1.025);
      color: ${({ theme }) => theme.color.secondary} !important;
    }

    &:focus,
    &:active {
      outline: none;
      border: 2px solid ${({ theme }) => theme.color.secondary} !important;
      box-shadow: 4px 4px 0 0 ${({ theme }) => theme.color.secondary} !important;
      color: ${({ theme }) => theme.color.secondary} !important;
    }

    &:disabled {
      cursor: not-allowed;
      color: ${({ theme }) => theme.color.disabled} !important;
      background-color: ${({ theme }) => theme.color.backgroundDark} !important;
      border: 2px solid ${({ theme }) => theme.color.disabled} !important;
      padding: 0.5rem 1rem;
      box-shadow: 4px 4px 0 0 ${({ theme }) => theme.color.disabled} !important;
    }

    &:focus {
      background-color: ${({ theme }) => theme.color.backgroundLight} !important;
    }

    &:active {
      background-color: ${({ theme }) => theme.color.backgroundDark} !important;
    }
  }
`);
