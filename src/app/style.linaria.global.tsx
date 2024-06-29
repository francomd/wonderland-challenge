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
      background-attachment: fixed;
      background-size: cover;
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='Layer_2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3CclipPath id='clippath'%3E%3Crect width='1920' height='1080' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg style='clip-path:url(%23clippath);'%3E%3Cpath d='M1375.88,136.69c1.87-.13,3.98-.25,5.79.3,2.51.77,4.79,2.58,6,4.92,1.22,2.35,1.39,5.08.56,7.59-1.21,3.64-3.61,5.28-6.93,6.87-1.92.22-3.82.26-5.68-.35-2.9-.96-5.29-2.97-6.53-5.78-1.05-2.38-1.07-5.06-.08-7.46,1.35-3.28,3.76-4.71,6.86-6.09Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1607.93,249.06c1.82-.14,3.79-.28,5.57.2,2.84.76,5.41,2.85,6.75,5.45,1.24,2.41,1.48,5.19.61,7.77-1.21,3.56-3.62,5.15-6.84,6.74-1.83.35-3.72.63-5.57.24-2.57-.54-4.9-2.19-6.27-4.42-1.58-2.56-1.93-5.78-1.09-8.65,1.1-3.75,3.51-5.61,6.85-7.33Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1747.88,126.35c1.82-.14,3.79-.28,5.57.2,2.84.76,5.41,2.85,6.75,5.45,1.24,2.41,1.48,5.19.61,7.77-1.21,3.56-3.62,5.15-6.84,6.74-1.83.35-3.72.63-5.57.24-2.57-.54-4.9-2.19-6.27-4.42-1.58-2.56-1.93-5.78-1.09-8.65,1.1-3.75,3.51-5.61,6.85-7.33Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1507.1-37c2.13,2.35,3.6,7.26,5.08,10.21,2.48,4.95,9.8,7.17,14.66,8.91-1.76.71-3.51,1.43-5.25,2.17-7.99,3.43-11.09,8.5-14.18,16.23l-.38.35c-.98-.79-1.39-2.12-1.92-3.25-4.67-9.91-7.13-11.36-17.01-15.25,13.06-5.75,13.34-6.45,19.02-19.36Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cg id='Ethereum_crypto_cryptocurrency'%3E%3Cpolygon points='1885.97 91.68 1864.97 100.27 1848.21 85.02 1873.06 55.24 1885.97 91.68' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='1863.92' y1='106.13' x2='1861.34' y2='120.54' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1884.92 97.53 1863.92 106.13 1847.16 90.87 1861.34 120.54 1884.92 97.53' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1885.97 91.68 1864.97 100.27 1848.21 85.02 1868.69 79.56 1885.97 91.68' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='1864.97' y1='100.27' x2='1873.06' y2='55.24' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1885.97 91.68 1864.97 100.27 1848.21 85.02 1873.06 55.24 1885.97 91.68' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/g%3E%3Cpath d='M1864.46,764.33c1.56-.2,3.34-.36,4.9-.13,2.74.4,5.46,2.1,6.96,4.44,1.41,2.19,1.8,4.88,1.18,7.39-.94,3.86-3.31,5.61-6.55,7.53-1.67.45-3.28.69-4.99.31-2.6-.59-4.92-2.18-6.34-4.45-1.6-2.57-2.02-5.78-1.16-8.68,1.02-3.4,2.99-4.79,6-6.41Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1375.88,997.32c1.87-.13,3.98-.25,5.79.3,2.51.77,4.79,2.58,6,4.92,1.22,2.35,1.39,5.08.56,7.59-1.21,3.64-3.61,5.28-6.93,6.87-1.92.22-3.82.26-5.68-.35-2.9-.96-5.29-2.97-6.53-5.78-1.05-2.38-1.07-5.06-.08-7.46,1.35-3.28,3.76-4.71,6.86-6.09Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1423.79,541.72c1.67-.14,3.49-.21,5.11.25,2.9.83,5.48,2.78,6.85,5.49,1.21,2.39,1.42,5.19.55,7.73-1.25,3.62-3.85,5.35-7.18,6.9-1.56.18-3.31.29-4.85-.07-2.88-.68-5.45-2.62-6.83-5.24-1.3-2.46-1.51-5.3-.64-7.93,1.2-3.63,3.72-5.45,6.99-7.13Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1671.82,460.31c1.83.07,3.59.27,5.25,1.1,2.74,1.37,4.78,3.77,5.57,6.75.7,2.66.35,5.53-1.05,7.9-1.84,3.09-4.57,4.38-7.95,5.13-2.06-.14-3.95-.37-5.8-1.36-2.63-1.4-4.57-3.79-5.28-6.7-.66-2.71-.23-5.53,1.24-7.9,1.96-3.16,4.55-4.12,8.03-4.92Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1747.88,986.99c1.82-.14,3.79-.28,5.57.2,2.84.76,5.41,2.85,6.75,5.45,1.24,2.41,1.48,5.19.61,7.77-1.21,3.56-3.62,5.15-6.84,6.74-1.83.35-3.72.63-5.57.24-2.57-.54-4.9-2.19-6.27-4.42-1.58-2.56-1.93-5.78-1.09-8.65,1.1-3.75,3.51-5.61,6.85-7.33Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1507.1,823.63c2.13,2.35,3.6,7.26,5.08,10.21,2.48,4.95,9.8,7.17,14.66,8.91-1.76.71-3.51,1.43-5.25,2.17-7.99,3.43-11.09,8.5-14.18,16.23l-.38.35c-.98-.79-1.39-2.12-1.92-3.25-4.67-9.91-7.13-11.36-17.01-15.25,13.06-5.75,13.34-6.45,19.02-19.36Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1571.61,391.54c2.12,2.02,3.6,6,4.96,8.62,10.69,20.69,12.25,22.84,34.44,32.05l-4.21,1.93c-17.99,8.44-27.19,17.75-33.98,36.6-1.85.27-8.93-14.98-10.65-17.81-6.34-10.4-17.04-15.4-27.74-20.07,21.15-11.88,28.14-17.74,37.19-41.33Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1920.68,541.62c1.92,1.7,2.96,4.6,4.11,6.86,4.91,9.7,10.9,11.7,19.81,16.7-2.59,1.65-5.53,2.84-8.23,4.32-8.34,4.58-11.16,11.03-15.03,19.18l-.32.36c-2.32-.94-4.13-8.87-5.54-11.29-3.48-5.98-8.52-8.01-14.21-11.16-.59-.33-.91-.7-1.26-1.27.92-2.84,10.71-6.98,13.51-10.05,3.45-3.8,5.2-8.97,7.17-13.64Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cg id='Ethereum_crypto_cryptocurrency-2'%3E%3Cpolygon points='1695.4 686.33 1672.62 710.58 1640.97 700.43 1656 645.59 1695.4 686.33' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='1674.78' y1='719.03' x2='1680.1' y2='739.83' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1697.56 694.78 1674.78 719.03 1643.14 708.88 1680.1 739.83 1697.56 694.78' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1695.4 686.33 1672.62 710.58 1640.97 700.43 1664.97 680.68 1695.4 686.33' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='1672.62' y1='710.58' x2='1656' y2='645.59' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1695.4 686.33 1672.62 710.58 1640.97 700.43 1656 645.59 1695.4 686.33' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/g%3E%3Cg id='Ethereum_crypto_cryptocurrency-3'%3E%3Cpolygon points='1885.97 952.31 1864.97 960.91 1848.21 945.65 1873.06 915.87 1885.97 952.31' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='1863.92' y1='966.76' x2='1861.34' y2='981.17' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1884.92 958.16 1863.92 966.76 1847.16 951.5 1861.34 981.17 1884.92 958.16' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1885.97 952.31 1864.97 960.91 1848.21 945.65 1868.69 940.19 1885.97 952.31' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='1864.97' y1='960.91' x2='1873.06' y2='915.87' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1885.97 952.31 1864.97 960.91 1848.21 945.65 1873.06 915.87 1885.97 952.31' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/g%3E%3Cpath d='M1607.93,249.06c1.82-.14,3.79-.28,5.57.2,2.84.76,5.41,2.85,6.75,5.45,1.24,2.41,1.48,5.19.61,7.77-1.21,3.56-3.62,5.15-6.84,6.74-1.83.35-3.72.63-5.57.24-2.57-.54-4.9-2.19-6.27-4.42-1.58-2.56-1.93-5.78-1.09-8.65,1.1-3.75,3.51-5.61,6.85-7.33Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cg id='Ethereum_crypto_cryptocurrency-4'%3E%3Cpolygon points='1280.16 317.05 1246.69 335.02 1216.12 312.54 1252.31 258.63 1280.16 317.05' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='1246.69' y1='335.02' x2='1252.31' y2='258.63' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1280.16 317.05 1246.69 335.02 1216.12 312.54 1252.31 258.63 1280.16 317.05' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/g%3E%3Cpath d='M1250.9.86c1.38.04,2.87.11,4.2.51,2.77.83,5.27,2.92,6.48,5.55,1.15,2.49,1.18,5.36.11,7.88-1.51,3.54-4.22,4.92-7.64,6.28-2.1.19-3.92.14-5.88-.73-2.64-1.16-4.62-3.29-5.52-6.04-.85-2.59-.64-5.47.62-7.89,1.65-3.19,4.34-4.53,7.63-5.57Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M535.94,136.69c1.87-.13,3.98-.25,5.79.3,2.51.77,4.79,2.58,6,4.92,1.22,2.35,1.39,5.08.56,7.59-1.21,3.64-3.61,5.28-6.93,6.87-1.92.22-3.82.26-5.68-.35-2.9-.96-5.29-2.97-6.53-5.78-1.05-2.38-1.07-5.06-.08-7.46,1.35-3.28,3.76-4.71,6.86-6.09Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M767.99,249.06c1.82-.14,3.79-.28,5.57.2,2.84.76,5.41,2.85,6.75,5.45,1.24,2.41,1.48,5.19.61,7.77-1.21,3.56-3.62,5.15-6.84,6.74-1.83.35-3.72.63-5.57.24-2.57-.54-4.9-2.19-6.27-4.42-1.58-2.56-1.93-5.78-1.09-8.65,1.1-3.75,3.51-5.61,6.85-7.33Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M907.95,126.35c1.82-.14,3.79-.28,5.57.2,2.84.76,5.41,2.85,6.75,5.45,1.24,2.41,1.48,5.19.61,7.77-1.21,3.56-3.62,5.15-6.84,6.74-1.83.35-3.72.63-5.57.24-2.57-.54-4.9-2.19-6.27-4.42-1.58-2.56-1.93-5.78-1.09-8.65,1.1-3.75,3.51-5.61,6.85-7.33Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1097.06,223.59c.98,1,1.47,2.63,2.05,3.9,3.64,7.93,5.35,8.58,13.08,12.54-8.59,4.53-10.9,6.93-14.75,15.88-1.07-1.02-1.86-3.11-2.58-4.43-3.41-6.19-6.36-8.06-12.5-11.33,8.16-4.93,10.75-7.88,14.7-16.56Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M667.17-37c2.13,2.35,3.6,7.26,5.08,10.21,2.48,4.95,9.8,7.17,14.66,8.91-1.76.71-3.51,1.43-5.25,2.17-7.99,3.43-11.09,8.5-14.18,16.23l-.38.35c-.98-.79-1.39-2.12-1.92-3.25-4.67-9.91-7.13-11.36-17.01-15.25,13.06-5.75,13.34-6.45,19.02-19.36Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cg id='Ethereum_crypto_cryptocurrency-5'%3E%3Cpolygon points='1046.04 91.68 1025.04 100.27 1008.27 85.02 1033.12 55.24 1046.04 91.68' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='1023.99' y1='106.13' x2='1021.4' y2='120.54' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1044.99 97.53 1023.99 106.13 1007.22 90.87 1021.4 120.54 1044.99 97.53' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1046.04 91.68 1025.04 100.27 1008.27 85.02 1028.76 79.56 1046.04 91.68' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='1025.04' y1='100.27' x2='1033.12' y2='55.24' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1046.04 91.68 1025.04 100.27 1008.27 85.02 1033.12 55.24 1046.04 91.68' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/g%3E%3Cpath d='M1024.52,764.33c1.56-.2,3.34-.36,4.9-.13,2.74.4,5.46,2.1,6.96,4.44,1.41,2.19,1.8,4.88,1.18,7.39-.94,3.86-3.31,5.61-6.55,7.53-1.67.45-3.28.69-4.99.31-2.6-.59-4.92-2.18-6.34-4.45-1.6-2.57-2.02-5.78-1.16-8.68,1.02-3.4,2.99-4.79,6-6.41Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1250.9,861.5c1.38.04,2.87.11,4.2.51,2.77.83,5.27,2.92,6.48,5.55,1.15,2.49,1.18,5.36.11,7.88-1.51,3.54-4.22,4.92-7.64,6.28-2.1.19-3.92.14-5.88-.73-2.64-1.16-4.62-3.29-5.52-6.04-.85-2.59-.64-5.47.62-7.89,1.65-3.19,4.34-4.53,7.63-5.57Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M535.94,997.32c1.87-.13,3.98-.25,5.79.3,2.51.77,4.79,2.58,6,4.92,1.22,2.35,1.39,5.08.56,7.59-1.21,3.64-3.61,5.28-6.93,6.87-1.92.22-3.82.26-5.68-.35-2.9-.96-5.29-2.97-6.53-5.78-1.05-2.38-1.07-5.06-.08-7.46,1.35-3.28,3.76-4.71,6.86-6.09Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1301.86,680.45c1.91-.13,3.83-.29,5.63.47,2.5,1.05,4.5,3.09,5.53,5.59,1.03,2.48,1.02,5.31-.09,7.77-1.37,3.04-3.82,4.42-6.81,5.57-1.49.04-3.02.1-4.48-.29-2.55-.69-4.9-2.38-6.2-4.7-1.27-2.26-1.51-4.96-.74-7.42,1.19-3.76,3.78-5.34,7.15-6.98Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M583.85,541.72c1.67-.14,3.49-.21,5.11.25,2.9.83,5.48,2.78,6.85,5.49,1.21,2.39,1.42,5.19.55,7.73-1.25,3.62-3.85,5.35-7.18,6.9-1.56.18-3.31.29-4.85-.07-2.88-.68-5.45-2.62-6.83-5.24-1.3-2.46-1.51-5.3-.64-7.93,1.2-3.63,3.72-5.45,6.99-7.13Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1142.85,381.1c1.83.07,3.59.27,5.25,1.1,2.74,1.37,4.78,3.77,5.57,6.75.7,2.66.35,5.53-1.05,7.9-1.84,3.09-4.57,4.38-7.95,5.13-2.06-.14-3.95-.37-5.8-1.36-2.63-1.4-4.57-3.79-5.28-6.7-.66-2.71-.23-5.53,1.24-7.9,1.96-3.16,4.55-4.12,8.03-4.92Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M831.88,460.31c1.83.07,3.59.27,5.25,1.1,2.74,1.37,4.78,3.77,5.57,6.75.7,2.66.35,5.53-1.05,7.9-1.84,3.09-4.57,4.38-7.95,5.13-2.06-.14-3.95-.37-5.8-1.36-2.63-1.4-4.57-3.79-5.28-6.7-.66-2.71-.23-5.53,1.24-7.9,1.96-3.16,4.55-4.12,8.03-4.92Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M907.95,986.99c1.82-.14,3.79-.28,5.57.2,2.84.76,5.41,2.85,6.75,5.45,1.24,2.41,1.48,5.19.61,7.77-1.21,3.56-3.62,5.15-6.84,6.74-1.83.35-3.72.63-5.57.24-2.57-.54-4.9-2.19-6.27-4.42-1.58-2.56-1.93-5.78-1.09-8.65,1.1-3.75,3.51-5.61,6.85-7.33Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M667.17,823.63c2.13,2.35,3.6,7.26,5.08,10.21,2.48,4.95,9.8,7.17,14.66,8.91-1.76.71-3.51,1.43-5.25,2.17-7.99,3.43-11.09,8.5-14.18,16.23l-.38.35c-.98-.79-1.39-2.12-1.92-3.25-4.67-9.91-7.13-11.36-17.01-15.25,13.06-5.75,13.34-6.45,19.02-19.36Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M731.67,391.54c2.12,2.02,3.6,6,4.96,8.62,10.69,20.69,12.25,22.84,34.44,32.05l-4.21,1.93c-17.99,8.44-27.19,17.75-33.98,36.6-1.85.27-8.93-14.98-10.65-17.81-6.34-10.4-17.04-15.4-27.74-20.07,21.15-11.88,28.14-17.74,37.19-41.33Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M1080.74,541.62c1.92,1.7,2.96,4.6,4.11,6.86,4.91,9.7,10.9,11.7,19.81,16.7-2.59,1.65-5.53,2.84-8.23,4.32-8.34,4.58-11.16,11.03-15.03,19.18l-.32.36c-2.32-.94-4.13-8.87-5.54-11.29-3.48-5.98-8.52-8.01-14.21-11.16-.59-.33-.91-.7-1.26-1.27.92-2.84,10.71-6.98,13.51-10.05,3.45-3.8,5.2-8.97,7.17-13.64Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cg id='Ethereum_crypto_cryptocurrency-6'%3E%3Cpolygon points='855.46 686.33 832.68 710.58 801.04 700.43 816.06 645.59 855.46 686.33' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='834.84' y1='719.03' x2='840.16' y2='739.83' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='857.62 694.78 834.84 719.03 803.2 708.88 840.16 739.83 857.62 694.78' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='855.46 686.33 832.68 710.58 801.04 700.43 825.04 680.68 855.46 686.33' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='832.68' y1='710.58' x2='816.06' y2='645.59' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='855.46 686.33 832.68 710.58 801.04 700.43 816.06 645.59 855.46 686.33' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/g%3E%3Cg id='Ethereum_crypto_cryptocurrency-7'%3E%3Cpolygon points='1046.04 952.31 1025.04 960.91 1008.27 945.65 1033.12 915.87 1046.04 952.31' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='1023.99' y1='966.76' x2='1021.4' y2='981.17' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1044.99 958.16 1023.99 966.76 1007.22 951.5 1021.4 981.17 1044.99 958.16' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1046.04 952.31 1025.04 960.91 1008.27 945.65 1028.76 940.19 1046.04 952.31' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='1025.04' y1='960.91' x2='1033.12' y2='915.87' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1046.04 952.31 1025.04 960.91 1008.27 945.65 1033.12 915.87 1046.04 952.31' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/g%3E%3Cg id='Ethereum_crypto_cryptocurrency-8'%3E%3Cpolygon points='1280.16 317.05 1246.69 335.02 1216.12 312.54 1252.31 258.63 1280.16 317.05' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='1245.96' y1='344.95' x2='1244.17' y2='369.4' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1279.43 326.98 1245.96 344.95 1215.39 322.47 1244.17 369.4 1279.43 326.98' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1280.16 317.05 1246.69 335.02 1216.12 312.54 1249.28 299.88 1280.16 317.05' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='1246.69' y1='335.02' x2='1252.31' y2='258.63' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='1280.16 317.05 1246.69 335.02 1216.12 312.54 1252.31 258.63 1280.16 317.05' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/g%3E%3Cpath d='M767.99,249.06c1.82-.14,3.79-.28,5.57.2,2.84.76,5.41,2.85,6.75,5.45,1.24,2.41,1.48,5.19.61,7.77-1.21,3.56-3.62,5.15-6.84,6.74-1.83.35-3.72.63-5.57.24-2.57-.54-4.9-2.19-6.27-4.42-1.58-2.56-1.93-5.78-1.09-8.65,1.1-3.75,3.51-5.61,6.85-7.33Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cg id='Ethereum_crypto_cryptocurrency-9'%3E%3Cpolygon points='440.22 317.05 406.76 335.02 376.19 312.54 412.37 258.63 440.22 317.05' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='406.76' y1='335.02' x2='412.37' y2='258.63' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='440.22 317.05 406.76 335.02 376.19 312.54 412.37 258.63 440.22 317.05' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/g%3E%3Cpath d='M410.97.86c1.38.04,2.87.11,4.2.51,2.77.83,5.27,2.92,6.48,5.55,1.15,2.49,1.18,5.36.11,7.88-1.51,3.54-4.22,4.92-7.64,6.28-2.1.19-3.92.14-5.88-.73-2.64-1.16-4.62-3.29-5.52-6.04-.85-2.59-.64-5.47.62-7.89,1.65-3.19,4.34-4.53,7.63-5.57Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M68.01,126.35c1.82-.14,3.79-.28,5.57.2,2.84.76,5.41,2.85,6.75,5.45,1.24,2.41,1.48,5.19.61,7.77-1.21,3.56-3.62,5.15-6.84,6.74-1.83.35-3.72.63-5.57.24-2.57-.54-4.9-2.19-6.27-4.42-1.58-2.56-1.93-5.78-1.09-8.65,1.1-3.75,3.51-5.61,6.85-7.33Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M257.12,223.59c.98,1,1.47,2.63,2.05,3.9,3.64,7.93,5.35,8.58,13.08,12.54-8.59,4.53-10.9,6.93-14.75,15.88-1.07-1.02-1.86-3.11-2.58-4.43-3.41-6.19-6.36-8.06-12.5-11.33,8.16-4.93,10.75-7.88,14.7-16.56Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cg id='Ethereum_crypto_cryptocurrency-10'%3E%3Cpolygon points='206.1 91.68 185.1 100.27 168.34 85.02 193.18 55.24 206.1 91.68' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='184.05' y1='106.13' x2='181.47' y2='120.54' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='205.05 97.53 184.05 106.13 167.29 90.87 181.47 120.54 205.05 97.53' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='206.1 91.68 185.1 100.27 168.34 85.02 188.82 79.56 206.1 91.68' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='185.1' y1='100.27' x2='193.18' y2='55.24' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='206.1 91.68 185.1 100.27 168.34 85.02 193.18 55.24 206.1 91.68' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/g%3E%3Cpath d='M184.59,764.33c1.56-.2,3.34-.36,4.9-.13,2.74.4,5.46,2.1,6.96,4.44,1.41,2.19,1.8,4.88,1.18,7.39-.94,3.86-3.31,5.61-6.55,7.53-1.67.45-3.28.69-4.99.31-2.6-.59-4.92-2.18-6.34-4.45-1.6-2.57-2.02-5.78-1.16-8.68,1.02-3.4,2.99-4.79,6-6.41Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M410.97,861.5c1.38.04,2.87.11,4.2.51,2.77.83,5.27,2.92,6.48,5.55,1.15,2.49,1.18,5.36.11,7.88-1.51,3.54-4.22,4.92-7.64,6.28-2.1.19-3.92.14-5.88-.73-2.64-1.16-4.62-3.29-5.52-6.04-.85-2.59-.64-5.47.62-7.89,1.65-3.19,4.34-4.53,7.63-5.57Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M461.93,680.45c1.91-.13,3.83-.29,5.63.47,2.5,1.05,4.5,3.09,5.53,5.59,1.03,2.48,1.02,5.31-.09,7.77-1.37,3.04-3.82,4.42-6.81,5.57-1.49.04-3.02.1-4.48-.29-2.55-.69-4.9-2.38-6.2-4.7-1.27-2.26-1.51-4.96-.74-7.42,1.19-3.76,3.78-5.34,7.15-6.98Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M302.92,381.1c1.83.07,3.59.27,5.25,1.1,2.74,1.37,4.78,3.77,5.57,6.75.7,2.66.35,5.53-1.05,7.9-1.84,3.09-4.57,4.38-7.95,5.13-2.06-.14-3.95-.37-5.8-1.36-2.63-1.4-4.57-3.79-5.28-6.7-.66-2.71-.23-5.53,1.24-7.9,1.96-3.16,4.55-4.12,8.03-4.92Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M-8.05,460.31c1.83.07,3.59.27,5.25,1.1,2.74,1.37,4.78,3.77,5.57,6.75.7,2.66.35,5.53-1.05,7.9-1.84,3.09-4.57,4.38-7.95,5.13-2.06-.14-3.95-.37-5.8-1.36-2.63-1.4-4.57-3.79-5.28-6.7-.66-2.71-.23-5.53,1.24-7.9,1.96-3.16,4.55-4.12,8.03-4.92Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M68.01,986.99c1.82-.14,3.79-.28,5.57.2,2.84.76,5.41,2.85,6.75,5.45,1.24,2.41,1.48,5.19.61,7.77-1.21,3.56-3.62,5.15-6.84,6.74-1.83.35-3.72.63-5.57.24-2.57-.54-4.9-2.19-6.27-4.42-1.58-2.56-1.93-5.78-1.09-8.65,1.1-3.75,3.51-5.61,6.85-7.33Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpath d='M240.8,541.62c1.92,1.7,2.96,4.6,4.11,6.86,4.91,9.7,10.9,11.7,19.81,16.7-2.59,1.65-5.53,2.84-8.23,4.32-8.34,4.58-11.16,11.03-15.03,19.18l-.32.36c-2.32-.94-4.13-8.87-5.54-11.29-3.48-5.98-8.52-8.01-14.21-11.16-.59-.33-.91-.7-1.26-1.27.92-2.84,10.71-6.98,13.51-10.05,3.45-3.8,5.2-8.97,7.17-13.64Z' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cg id='Ethereum_crypto_cryptocurrency-11'%3E%3Cpolygon points='15.52 686.33 -7.25 710.58 -38.9 700.43 -23.88 645.59 15.52 686.33' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='-5.09' y1='719.03' x2='.23' y2='739.83' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='17.69 694.78 -5.09 719.03 -36.74 708.88 .23 739.83 17.69 694.78' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='15.52 686.33 -7.25 710.58 -38.9 700.43 -14.9 680.68 15.52 686.33' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='15.52 686.33 -7.25 710.58 -38.9 700.43 -23.88 645.59 15.52 686.33' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/g%3E%3Cg id='Ethereum_crypto_cryptocurrency-12'%3E%3Cpolygon points='206.1 952.31 185.1 960.91 168.34 945.65 193.18 915.87 206.1 952.31' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='184.05' y1='966.76' x2='181.47' y2='981.17' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='205.05 958.16 184.05 966.76 167.29 951.5 181.47 981.17 205.05 958.16' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='206.1 952.31 185.1 960.91 168.34 945.65 188.82 940.19 206.1 952.31' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='185.1' y1='960.91' x2='193.18' y2='915.87' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='206.1 952.31 185.1 960.91 168.34 945.65 193.18 915.87 206.1 952.31' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/g%3E%3Cg id='Ethereum_crypto_cryptocurrency-13'%3E%3Cpolygon points='440.22 317.05 406.76 335.02 376.19 312.54 412.37 258.63 440.22 317.05' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='406.03' y1='344.95' x2='404.23' y2='369.4' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='439.49 326.98 406.03 344.95 375.46 322.47 404.23 369.4 439.49 326.98' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='440.22 317.05 406.76 335.02 376.19 312.54 409.34 299.88 440.22 317.05' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cline x1='406.76' y1='335.02' x2='412.37' y2='258.63' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3Cpolygon points='440.22 317.05 406.76 335.02 376.19 312.54 412.37 258.63 440.22 317.05' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/g%3E%3C/g%3E%3Crect width='1920' height='1080' style='fill:none; stroke:%23e8e8ff; stroke-miterlimit:10;'/%3E%3C/svg%3E");
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
