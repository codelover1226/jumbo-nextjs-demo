import { getDictionary } from '@app/[lang]/dictionaries';
import {
  SimpleRadarChart,
  SpecificDomainRadarChart,
} from '@app/_components/charts/radar';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

type Params = { lang: string };

const RadarChart = async ({ params }: { params: Params }) => {
  const { lang } = params;
  const { modules } = await getDictionary(lang);
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
        {modules.title.radarChart}
      </Typography>
      <Grid container spacing={3.75}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <SimpleRadarChart />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <SpecificDomainRadarChart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default RadarChart;
