import { wlTheme } from '@/providers/ThemeProvider';
import { css } from '@linaria/core';

export const globals = css`
  :global() {
    @layer override, rk;

    html,
    body {
      font-size: ${wlTheme.font.base};
      color: ${wlTheme.color.text};
      background-color: ${wlTheme.color.background};
    }

    @media screen and (max-width: ${wlTheme.breakpoints.sm}) {
      html,
      body {
        font-size: 16px;
      }
    }

    body {
      background-image: url('/assets/ethereum-background.svg');
      background-attachment: fixed;
      background-size: cover;
      background-position: bottom;
    }

    * {
      box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      line-height: 1;
    }

    h1 {
      font-size: ${wlTheme.font.heading.h1};
    }

    h2 {
      font-size: ${wlTheme.font.heading.h2};
    }

    h3 {
      font-size: ${wlTheme.font.heading.h3};
    }

    h4 {
      font-size: ${wlTheme.font.heading.h4};
    }

    h5 {
      font-size: ${wlTheme.font.heading.h5};
    }

    h6 {
      font-size: ${wlTheme.font.heading.h6};
    }

    p {
      font-size: 1rem;
    }

    small {
      font-size: ${wlTheme.font.small};
    }

    main {
      height: 100%;
    }

    @layer rk {
      div[data-rk] button {
        font-size: 16px !important;
        background-color: ${wlTheme.color.background} !important;
        border: 2px solid ${wlTheme.color.primary} !important;
        box-shadow: 4px 4px 0 0 ${wlTheme.color.primary} !important;
        margin: 0.1rem 0.25rem !important;

        & div div {
          font-size: 14px !important;
        }

        &:hover:not(:disabled):not(:active) {
          background-color: ${wlTheme.color.backgroundLight} !important;
          color: ${wlTheme.color.secondary} !important;
        }

        &:focus,
        &:active {
          outline: none;
          border: 2px solid ${wlTheme.color.secondary} !important;
          box-shadow: 4px 4px 0 0 ${wlTheme.color.secondary} !important;
          color: ${wlTheme.color.secondary} !important;
        }

        &:disabled {
          cursor: not-allowed;
          color: ${wlTheme.color.disabled};
          background-color: ${wlTheme.color.backgroundDark} !important;
          border: 2px solid ${wlTheme.color.disabled} !important;
          box-shadow: 4px 4px 0 0 ${wlTheme.color.disabled} !important;

          & > div {
            background-color: transparent !important;
          }
        }

        &:focus {
          background-color: ${wlTheme.color.backgroundLight} !important;
        }

        &:active {
          background-color: ${wlTheme.color.backgroundDark} !important;
        }

        & > div:first-child {
          border: none !important;
        }
      }
    }
  }
`;
