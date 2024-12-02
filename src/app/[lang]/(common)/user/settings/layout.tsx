import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { SettingLayoutContent } from '@app/_layout/SettingLayoutContent/SettingLayoutContent';
import { getSettingMenus } from '@app/_services/setting-menu-services';
import { MenuItems } from '@jumbo/types';
import { Container } from '@mui/material';
import React from 'react';

type Params = { lang: string };

export default async function SettingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lang } = params;
  const menus: MenuItems = await getSettingMenus(lang);
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: CONTAINER_MAX_WIDTH,
        display: 'flex',
        minWidth: 0,
        flex: 1,
        flexDirection: 'column',
      }}
      disableGutters
    >
      <SettingLayoutContent menus={menus}>{children}</SettingLayoutContent>
    </Container>
  );
}
