'use client';
import { Theme, withTheme } from '@/providers/ThemeProvider';
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
  gap: 0.5rem;
`;
