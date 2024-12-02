import { getDictionary } from '@app/[lang]/dictionaries';
import { GeoLocationMap, MapProvider } from '@app/_components/maps';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
interface GeoLocationProps {
  params: { lang: string };
}
export default async function GeoLocation({
  params: { lang },
}: GeoLocationProps) {
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
          {modules.title.geoLocationMap}
        </Typography>
        <GeoLocationMap />
      </Container>
    </MapProvider>
  );
}
