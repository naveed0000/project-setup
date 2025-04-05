'use client';
/* eslint-disable import/no-extraneous-dependencies */
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { PropsWithChildren } from 'react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from '../theme';

const options = {
  key: 'csa',
};

const optionsRtl = {
  key: 'csa-rtl',
  stylisPlugins: [prefixer, rtlPlugin],
};


function ThemeProvider({
  children,
  isRtl = false,
}: PropsWithChildren<{ isRtl: boolean }>) {
  return (
    <AppRouterCacheProvider options={isRtl ? optionsRtl : options}>
      <MuiThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <Box component={'body'} bgcolor={'white'} suppressHydrationWarning>
            {children}
          </Box>
        </LocalizationProvider>
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
}
export default ThemeProvider;
