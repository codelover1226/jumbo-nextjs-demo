import { getDictionary } from '@app/[lang]/dictionaries';
import { MapProvider, MarkerClustererMap } from '@app/_components/maps';
import { Orders } from '@app/_components/metrics/Orders';
import { PageViews } from '@app/_components/metrics/PageViews';
import { Visits } from '@app/_components/metrics/Visits';
import { CurrentProjectsList } from '@app/_components/widgets/CurrentProjectsList';
import { DailyFeed } from '@app/_components/widgets/DailyFeed';
import { HeaderChart } from '@app/_components/widgets/HeaderChart';
import { LatestNotifications } from '@app/_components/widgets/LatestNotifications';
import { MarketingCampaign } from '@app/_components/widgets/MarketingCampaign';
import { PopularArticles } from '@app/_components/widgets/PopularArticles';
import { PopularProducts } from '@app/_components/widgets/PopularProducts';
import { RecentActivities } from '@app/_components/widgets/RecentActivities';
import { TaskListExpandable } from '@app/_components/widgets/TaskListExpandable';
import { UserPhotos } from '@app/_components/widgets/UserPhotos';
import { UserProfileCard1 } from '@app/_components/widgets/UserProfileCard1';
import { WeeklySales } from '@app/_components/widgets/WeeklySales';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';

type Params = { lang: string };

export default async function Intranet({ params }: { params: Params }) {
  const { lang } = params;
  const { widgets } = await getDictionary(lang);
  return (
    <React.Fragment>
      <HeaderChart title={widgets.title.intranet} />
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONTAINER_MAX_WIDTH,
        }}
        disableGutters
      >
        <Grid container spacing={3.75}>
          <Grid size={{ xs: 12 }}>
            <Grid container spacing={3.75}>
              <Grid size={{ xs: 12, lg: 7 }}>
                <Grid container spacing={3.75}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <PageViews title={widgets.title.pageViews} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Orders title={widgets.title.orders1} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, lg: 5 }}>
                <Visits title={widgets.title.visits} />
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 5, lg: 4 }}>
            <UserProfileCard1 />
          </Grid>
          <Grid size={{ xs: 12, md: 7, lg: 8 }}>
            <PopularArticles
              title={widgets.title.popularArticles}
              scrollHeight={423}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <RecentActivities
              title={widgets.title.recentActivities}
              scrollHeight={342}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CurrentProjectsList
              title={widgets.title.currentProjects}
              subheader={widgets.subheader.currentProjects}
              scrollHeight={341}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <DailyFeed title={widgets.title.dailyFeed} scrollHeight={400} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TaskListExpandable
              title={widgets.title.taskListExpandable}
              subheader={widgets.subheader.taskListExpandable}
              scrollHeight={395}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MarketingCampaign
              title={widgets.title.marketingCampaign}
              subheader={widgets.subheader.marketingCampaign}
              scrollHeight={428}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <LatestNotifications
              title={widgets.title.latestNotifications}
              scrollHeight={387}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <WeeklySales
              title={widgets.title.weeklySales}
              subheader={widgets.subheader.weeklySales}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <UserPhotos title={widgets.title.pictures} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <MapProvider>
              <MarkerClustererMap />
            </MapProvider>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <PopularProducts
              title={widgets.title.popularProducts}
              subheader={widgets.subheader.popularProducts}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
