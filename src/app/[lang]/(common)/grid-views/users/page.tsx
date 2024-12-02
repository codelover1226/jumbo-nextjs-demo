import { getDictionary } from '@app/[lang]/dictionaries';
import { View } from '@app/_components/_core';
import { UserItem, UserProps, users } from '@app/_components/views/grid/Users';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container, Typography } from '@mui/material';

type Params = { lang: string };

export default async function UsersList({ params }: { params: Params }) {
  const { lang } = params;
  const { views } = await getDictionary(lang);
  return (
    users.length > 0 && (
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
        <Typography variant={'h2'} mb={3}>
          {views.title.users}
        </Typography>
        <View<UserProps>
          variant='grid'
          dataSource={users}
          renderItem={UserItem}
        />
      </Container>
    )
  );
}
