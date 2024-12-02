import { getDictionary } from '@app/[lang]/dictionaries';
import { DirectionsMap, MapProvider } from '@app/_components/maps';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
interface DirectionsProps {
  params: { lang: string };
}
export default async function Directions({
  params: { lang },
}: DirectionsProps) {
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
          {modules.title.directionsMap}
        </Typography>
        <DirectionsMap />
      </Container>
    </MapProvider>
  );
}
