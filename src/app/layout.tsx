import Header from '@/components/Header';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Web3Provider from '@/providers/Web3Provider';
import { styled } from '@linaria/react';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import 'normalize.css';
import './style.linaria.global';

const inter = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wonderland Challenge',
  description: 'By @0xfrann',
};

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Web3Provider>
          <ThemeProvider>
            <Wrapper>
              <Container>{children}</Container>
              <Header />
            </Wrapper>
          </ThemeProvider>
        </Web3Provider>
      </body>
    </html>
  );
}

const Wrapper = styled.div`
  height: 100dvh;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  height: 100%;
  padding: 1rem;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
