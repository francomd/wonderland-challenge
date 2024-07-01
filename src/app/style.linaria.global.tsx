import { wlTheme } from '@/providers/ThemeProvider';
import { css } from '@linaria/core';

export const globals = css`
  :global() {
    @layer button, rk;

    html,
    body {
      font-size: ${wlTheme.font.base};
      color: ${wlTheme.color.text};
      background-color: ${wlTheme.color.background};
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

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 100%;
      padding: 0.5rem 1rem;
      border: 2px solid ${wlTheme.color.primary};
      border-radius: ${wlTheme.radii.base};
      background-color: ${wlTheme.color.background};
      color: ${wlTheme.color.text};
      font-size: 1rem;
      margin: 0;
      box-shadow: 4px 4px 0 0 ${wlTheme.color.primary};
      will-change: transform;

      background-image: url("data:image/svg+xml;utf8,<svg fill='%23192d55' height='40' viewBox='0 0 40 40' width='40' xmlns='http://www.w3.org/2000/svg'><path d='m13.6 18.6 5.6 5.6c0.4 0.4 1.2 0.4 1.6 0l5.6-5.6c0.7-0.7 0.2-1.9-0.8-1.9h-11.2c-1 0-1.5 1.2-0.8 1.9z'/><path fill='none' d='M0,0h40v40H0V0z'/></svg>");
      background-repeat: no-repeat;
      background-position-x: 100%;
      background-position-y: 0.15rem;
      padding-right: 2rem;

      &:disabled {
        cursor: not-allowed;
        background-color: #ccc;
        border: 2px solid #ccc;
        padding: 0.5rem 1rem;
        box-shadow: 4px 4px 0 0 #ccc;
      }

      &:hover:not(:disabled):not(:active) {
        background-color: ${wlTheme.color.backgroundLight};
        transform: scale(1.025);
      }

      &:focus {
        background-color: ${wlTheme.color.backgroundLight};
      }

      &:active {
        background-color: ${wlTheme.color.backgroundDark};
      }

      &:focus,
      &:active {
        outline: none;
        border: 2px solid ${wlTheme.color.secondary};
        box-shadow: 4px 4px 0 0 ${wlTheme.color.secondary};
      }
    }
  }
`;
