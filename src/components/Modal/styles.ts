import { Theme, withTheme } from '@/providers/ThemeProvider';
import { styled } from '@linaria/react';

export const SModalOverlay = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SModal = withTheme(styled.div<Theme>`
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.radii.large};
  background: ${({ theme }) => theme.color.background};
  border: 2px solid ${({ theme }) => theme.color.primary};
`);

export const SHeader = styled.div`
  position: relative;
`;

export const SCloseButton = withTheme(styled.button<Theme>`
  @layer override {
    box-shadow: none !important;
  }
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  height: 2rem;
  width: 2rem;
  background: ${({ theme }) => theme.color.primary};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  line-height: 1;
`);

export const STitle = withTheme(styled.h3<Theme>`
  margin-bottom: 1rem;
`);
