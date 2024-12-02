import { getDictionary } from '@app/[lang]/dictionaries';
import { CkEditorWrapper } from '@app/_components/extensions/editors/ck';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container, Typography } from '@mui/material';

type Params = { lang: string };

export default async function CkEditor({ params }: { params: Params }) {
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
      <Typography variant={'h1'} sx={{ mb: 3 }}>
        {extensions.title.ckEditor}
      </Typography>
      <CkEditorWrapper />
    </Container>
  );
}
