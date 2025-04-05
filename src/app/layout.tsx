import React, { PropsWithChildren, ReactNode } from 'react';
import { Roboto } from 'next/font/google';
import ThemeProvider from '../context/ThemeProvider/index';
import { Box } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

interface RootLayoutProps extends PropsWithChildren {
  params: Promise<{
    lang: string;
  }>;
  children: ReactNode;
}
export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params;
  return (
    <Box
      component={'html'}
      lang={lang}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`${roboto.variable} font-sans`}
    >
      <ThemeProvider isRtl={lang === 'ar'}>{children}</ThemeProvider>
    </Box>
  );
}
