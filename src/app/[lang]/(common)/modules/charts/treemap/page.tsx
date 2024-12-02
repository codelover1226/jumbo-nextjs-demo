import { getDictionary } from '@app/[lang]/dictionaries';
import {
  CustomContentTreemapChart,
  SimpleTreemapChart,
} from '@app/_components/charts/treemap';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

type Params = { lang: string };

const TreeMapChart = async ({ params }: { params: Params }) => {
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
        {modules.title.treemapChart}
      </Typography>
      <Grid container spacing={3.75}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <SimpleTreemapChart />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <CustomContentTreemapChart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TreeMapChart;
