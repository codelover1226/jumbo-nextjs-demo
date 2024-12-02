import { getDictionary } from '@app/[lang]/dictionaries';
import SortableWrapper from '@app/_components/extensions/dnd/components/SortableWrapper/SortableWrapper';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { JumboCard } from '@jumbo/components';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

type Params = { lang: string };

export default async function DnD({ params }: { params: Params }) {
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
        {extensions.title.dnd}
      </Typography>
      <JumboCard
        title={'Drag and drop'}
        contentWrapper
        contentSx={{
          p: 0,
          '&:last-child': {
            pb: 0,
          },
        }}
      >
        <SortableWrapper />
      </JumboCard>
      {/* <DragAndDrop /> */}
    </Container>
  );
}
