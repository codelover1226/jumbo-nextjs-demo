import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';

import { AppSnackbar } from '@app/_components/_core';
import { CONFIG } from '@app/_config';
import '@app/_themes/assets/fonts/noir-pro/styles.css';
import { ASSET_IMAGES } from '@app/_utilities/constants/paths';
import '@app/_utilities/style/style.css';
import {
  JumboConfigProvider,
  JumboDialog,
  JumboDialogProvider,
  JumboTheme,
} from '@jumbo/components';
import { CssBaseline } from '@mui/material';
import Link from 'next/link';

declare module '@mui/material/styles' {
  interface Theme {
    type: 'light' | 'semi-dark' | 'dark';
    sidebar: {
      bgimage: string;
      overlay: {
        bgcolor: string;
        bgimage: string;
        opacity: number;
      };
    };
    jumboComponents: {
      JumboNavbar: {
        nav: {
          action: {
            active: string;
            hover: string;
          };
          background: {
            active: string;
            hover: string;
          };
          tick: {
            active: string;
            hover: string;
          };
        };
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    type?: 'light' | 'semi-dark' | 'dark';
    sidebar?: {
      bgimage?: string;
      overlay?: {
        bgcolor?: string;
        bgimage?: string;
        opacity?: number;
      };
    };
    jumboComponents?: {
      JumboNavbar?: {
        nav?: {
          action?: {
            active?: string;
            hover?: string;
          };
          background?: {
            active?: string;
            hover?: string;
          };
          tick?: {
            active?: string;
            hover?: string;
          };
        };
      };
    };
  }
}

export async function generateStaticParams() {
  return [{ lang: 'en-US' }];
}
export const metadata: Metadata = {
  title: 'Jumbo - Admin Dashboard',
  icons: `${ASSET_IMAGES}/favicon.ico`,
};

type Params = { lang: string };

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lang } = params;
  return (
    <html lang={lang} data-lt-installed='true'>
      <body cz-shortcut-listen='true'>
        <div id='root'>
          <AppRouterCacheProvider>
            <JumboConfigProvider LinkComponent={Link}>
              <JumboTheme init={CONFIG.THEME}>
                <CssBaseline />
                <JumboDialogProvider>
                  <JumboDialog />
                  <AppSnackbar>{children}</AppSnackbar>
                </JumboDialogProvider>
              </JumboTheme>
            </JumboConfigProvider>
          </AppRouterCacheProvider>
        </div>
      </body>
    </html>
  );
}
