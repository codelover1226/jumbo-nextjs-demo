import { getDictionary } from '@app/[lang]/dictionaries';
import { WysiwygEditor } from '@app/_components/extensions/editors/wysiwyg';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

type Params = { lang: string };

export default async function WysiwygEditorPage({
  params,
}: {
  params: Params;
}) {
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
        {extensions.title.wysiwygEditor}
      </Typography>
      <WysiwygEditor />
    </Container>
  );
}
