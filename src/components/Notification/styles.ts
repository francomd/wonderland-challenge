import { Theme, withTheme } from '@/providers/ThemeProvider';
import { styled } from '@linaria/react';

type TSNotificationProps = {
  show: boolean;
  type: 'success' | 'error';
};

export const SNotification = withTheme(styled.div<TSNotificationProps & Theme>`
  position: fixed;
  top: 0;
  right: 0;
  min-height: 3rem;
  min-width: 16rem;
  width: max-content;
  max-width: 100%;
  z-index: 1000;
  padding: 1rem 1.5rem;
  padding-right: 4rem;
  margin: 1rem;
  background: ${({ theme, type }) => theme.color[type]};
  border-radius: ${({ theme }) => theme.radii.base};
  color: ${({ theme }) => theme.color.text};
  font-weight: 500;
  box-shadow: 4px 4px 0 0 ${({ theme }) => theme.color.primary};
  transform: ${({ show }) => (show ? 'translate(0, 0)' : 'translate(200%, 0)')};
  will-change: transform;
  transition: transform 0.3s ease-in-out;
`);

export const SCloseButton = withTheme(styled.button<Theme>`
  @layer override {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.text};

    /* reset styles */
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;

    &:hover,
    &:focus,
    &:active {
      background: transparent !important;
      border: none !important;
    }
  }
`);
