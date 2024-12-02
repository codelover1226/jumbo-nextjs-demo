import { getDictionary } from '@app/[lang]/dictionaries';
import { MapProvider, StreetViewPanoramaMap } from '@app/_components/maps';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

interface StreetViewPanoramaProps {
  params: { lang: string };
}
export default async function StreetViewPanorama({
  params: { lang },
}: StreetViewPanoramaProps) {
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
          {modules.title.streetViewMap}
        </Typography>
        <StreetViewPanoramaMap />
      </Container>
    </MapProvider>
  );
}
