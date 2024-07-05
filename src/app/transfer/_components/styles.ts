import { Theme, breakpoint, withTheme } from '@/providers/ThemeProvider';
import { styled } from '@linaria/react';

export const SBalance = withTheme(styled.div<Theme>`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0 4rem;
  margin-top: 1.25rem;
  text-align: center;
  gap: 1.5rem;
  width: 100%;

  & > div {
    flex: 1 1 50%;
  }

  ${breakpoint('sm',
    `
    padding: 0 1rem;
  `)}
`);

export const SCard = withTheme(styled.div<Theme>`
  background: ${({ theme }) => theme.color.background};
  border: 2px solid ${({ theme }) => theme.color.primary};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radii.large};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  img {
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.color.primary};
  }
`);

export const SCoinName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1.125rem;
    letter-spacing: 0.05em;
    line-height: 0;
  }
`;

export const SForm = withTheme(styled.div<Theme>`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  margin-top: 1rem;
  text-align: center;

  ${breakpoint('sm',
    `
    padding: 0 1rem;
  `)}
`);

export const SMainActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;

  button {
    width: 8rem;
    height: 3rem;
    text-transform: uppercase;
  }
`;

export const SMintButton = withTheme(styled.button<Theme>`
  position: absolute;
  bottom: -1.5rem;
  height: 3rem;
  width: 5rem;
  border-radius: 1.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  cursor: pointer;

  @layer override {
    text-transform: uppercase !important;
    box-shadow: unset !important;
    font-size: 0.875rem !important;
  }
`);
