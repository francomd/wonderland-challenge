import { Theme, withTheme } from '@/providers/ThemeProvider';
import { styled } from '@linaria/react';

export const SBalance = styled.div`
  display: flex;
  padding: 0 4rem;
  margin-top: 1.25rem;
  text-align: center;
  gap: 1.5rem;

  & > div {
    flex: 1;
  }
`;

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
  }
`;

export const SForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  margin-top: 1rem;
  text-align: center;
`;

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
