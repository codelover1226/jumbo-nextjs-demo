import { MenuItems } from '@jumbo/types';
import { useMediaQuery } from '@mui/material';

function useSmallScreen(): boolean {
  return useMediaQuery('(max-width:620px)');
}

function useMenus(menus: MenuItems) {}

export { useSmallScreen };
