'use client';
import { ChatAppSidebar } from '@app/_components/apps/chats';
import { ContentLayout } from '@app/_layout/ContentLayout';
import { useJumboTheme } from '@jumbo/components/JumboTheme/hooks';
import { Card, useMediaQuery } from '@mui/material';
import { useParams } from 'next/navigation';
import React from 'react';

const useChatLayout = () => {
  const { category } = useParams();
  const { theme } = useJumboTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  return React.useMemo(
    () => ({
      sidebarOptions: {
        sx:
          md && Array.isArray(category) && category[1]!
            ? { display: 'none' }
            : {
                display: 'flex',
                minWidth: 0,
                flexShrink: 0,
                flexDirection: 'column',
                width: 280,
                borderRight: 1,
                minHeight: '100%',
                borderRightColor: (theme: any) => theme.palette.divider,
                [theme.breakpoints.down('md')]: {
                  width: 'auto',
                  border: 'none',
                },
              },
      },
      wrapperOptions: {
        component: Card,
        sx: {
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
          },
        },
        container: true,
      },
      contentOptions: {
        sx: {
          p: { lg: 0, sm: 0, xs: 0 },
        },
      },
    }),
    [theme, category, md]
  );
};
const ChatAppLayout = ({ children }: { children: React.ReactNode }) => {
  const chatLayoutOptions = useChatLayout();
  return (
    <ContentLayout sidebar={<ChatAppSidebar />} {...chatLayoutOptions}>
      {children}
    </ContentLayout>
  );
};
export default ChatAppLayout;
