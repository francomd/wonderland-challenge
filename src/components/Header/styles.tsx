'use client';
import { Theme, breakpoint, withTheme } from '@/providers/ThemeProvider';
import { styled } from '@linaria/react';

export const SHeader = withTheme(styled.header<Theme>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-top: ${(props) => '2px solid ' + props.theme.color.text};
  box-sizing: border-box;
`);

export const SHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const SLink = withTheme(styled.a<Theme>`
  color: ${({ theme }) => theme.color.text};
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }

  ${breakpoint('sm',
    `
    font-size: 0.875rem;
    
    img {
      width: 24px;
      height: 24px;
    }
  `)}
`);
