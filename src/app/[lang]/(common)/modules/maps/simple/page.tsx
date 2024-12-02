import { getDictionary } from '@app/[lang]/dictionaries';
import { MapProvider, SimpleMap } from '@app/_components/maps';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

type Params = { lang: string };

export default async function Simple({ params }: { params: Params }) {
  const { lang } = params;
  const { modules } = await getDictionary(lang);

  return (
    <MapProvider>
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
          {modules.title.simpleMap}
        </Typography>
        <SimpleMap />
      </Container>
    </MapProvider>
  );
}
