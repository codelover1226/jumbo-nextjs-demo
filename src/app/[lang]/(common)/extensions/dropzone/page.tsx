import { getDictionary } from '@app/[lang]/dictionaries';
import {
  DzBasic,
  DzDisabled,
  DzPreviews,
  DzStyled,
  DzWithoutClick,
  DzWithoutDrag,
} from '@app/_components/extensions/dropzone';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Params = { lang: string };

export default async function Dropzone({ params }: { params: Params }) {
  const { lang } = await params;
  const { extensions } = await getDictionary(lang);
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
      <Typography variant={'h1'} mb={3}>
        {extensions.title.dropzone}
      </Typography>
      <Stack spacing={3}>
        <DzBasic />
        <DzPreviews />
        <DzStyled />
        <DzWithoutClick />
        <DzWithoutDrag />
        <DzDisabled />
      </Stack>
    </Container>
  );
}
