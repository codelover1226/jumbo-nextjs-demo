import { getDictionary } from '@app/[lang]/dictionaries';
import { Cities } from '@app/_components/metrics/Cities';
import { Properties } from '@app/_components/metrics/Properties';
import { QueriesStatistics } from '@app/_components/metrics/QueriesStatistics';
import { VisitsStatistics } from '@app/_components/metrics/VisitsStatistics';
import { DealsClosed } from '@app/_components/widgets/DealsClosed';
import { PopularAgents } from '@app/_components/widgets/PopularAgents';
import { PropertiesList } from '@app/_components/widgets/PropertiesList';
import { RecentActivities1 } from '@app/_components/widgets/RecentActivities1';
import { YourCurrentPlan } from '@app/_components/widgets/YourCurrentPlan';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

type Params = { lang: string };

export default async function Listing({ params }: { params: Params }) {
  const { lang } = params;
  const { widgets } = await getDictionary(lang);
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
      <Grid container spacing={3.75}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Properties title={widgets.title.properties} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Cities title={widgets.title.cities} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <VisitsStatistics title={widgets.title.onlineVisits} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <QueriesStatistics title={widgets.title.onlineQueries} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <PopularAgents title={widgets.title.popularAgents} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <YourCurrentPlan title={widgets.title.yourCurrentPlan} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <DealsClosed
            title={widgets.title.dealsClosed}
            subheader={widgets.subheader.dealsClosed}
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 8 }}>
          <PropertiesList title={widgets.title.properties} />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <RecentActivities1
            title={widgets.title.recentActivities}
            scrollHeight={556}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
