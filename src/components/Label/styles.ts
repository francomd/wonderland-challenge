import { styled } from '@linaria/react';

export const SLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;

  & > div {
    margin-top: 0.25rem;
    display: flex;
    flex-direction: row;
    padding: 0 0.5rem;
  }

  &:has(input):has(button) {
    & input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      flex: 1 1 100%;
    }

    & button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;
