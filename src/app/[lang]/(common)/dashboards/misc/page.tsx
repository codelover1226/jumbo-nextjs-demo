import { getDictionary } from '@app/[lang]/dictionaries';
import { FeaturedCard1 } from '@app/_components/cards';
import { MapProvider, MarkerClustererMap } from '@app/_components/maps';
import { AppUsers } from '@app/_components/widgets/AppUsers';
import { CafeStore1 } from '@app/_components/widgets/CafeStore1';
import { DailyFeed } from '@app/_components/widgets/DailyFeed';
import { ExplorePlaceCard } from '@app/_components/widgets/ExplorePlaceCard';
import { LastMonthSales } from '@app/_components/widgets/LastMonthSales';
import { LatestNotifications } from '@app/_components/widgets/LatestNotifications';
import { NewConnections } from '@app/_components/widgets/NewConnections';
import { NewVisitorsThisMonth } from '@app/_components/widgets/NewVisitorsThisMonth';
import { OnlineSignupsFilled } from '@app/_components/widgets/OnlineSignupsFilled';
import { Orders } from '@app/_components/widgets/Orders';
import { OurOffice1 } from '@app/_components/widgets/OurOffice1';
import { PopularProducts } from '@app/_components/widgets/PopularProducts';
import { ProductImage } from '@app/_components/widgets/ProductImage';
import { ProjectsListCard } from '@app/_components/widgets/ProjectsListCard';
import { RecentActivities } from '@app/_components/widgets/RecentActivities';
import { SalesOverview } from '@app/_components/widgets/SalesOverview';
import { SalesReport1 } from '@app/_components/widgets/SalesReport1';
import { ScheduleCard } from '@app/_components/widgets/ScheduleCard';
import { TotalRevenueThisYear } from '@app/_components/widgets/TotalRevenueThisYear';
import { UpgradePlan } from '@app/_components/widgets/UpgradePlan';
import { UserProfileAction } from '@app/_components/widgets/UserProfileAction';
import { UserProfileCard } from '@app/_components/widgets/UserProfileCard';
import { UserSummary } from '@app/_components/widgets/UserSummary';
import { WordOfTheDay } from '@app/_components/widgets/WordOfTheDay';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { EmojiObjectsOutlined, FolderOpen } from '@mui/icons-material';

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

type Params = { lang: string };

export default async function Misc({ params }: { params: Params }) {
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
        <Grid size={{ xs: 12, lg: 7 }}>
          <SalesOverview title={widgets.title.salesOverview} />
        </Grid>
        <Grid size={{ xs: 12, lg: 2 }}>
          <Grid container spacing={3.75}>
            <Grid size={{ xs: 12, sm: 6, lg: 12 }}>
              <FeaturedCard1
                title={'250'}
                subheader='Docs'
                icon={<FolderOpen sx={{ fontSize: 36 }} />}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 12 }}>
              <FeaturedCard1
                title={'23'}
                subheader='Ideas'
                icon={<EmojiObjectsOutlined sx={{ fontSize: 42 }} />}
                bgcolor={['135deg', '#FBC79A', '#D73E68']}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Grid container spacing={3.75}>
            <Grid size={{ xs: 12, sm: 6, lg: 12 }}>
              <Orders title={widgets.title.orders} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 12 }}>
              <UserSummary
                title={widgets.title.userSummary}
                subheader={widgets.subheader.userSummary}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, lg: 8 }}>
          <PopularProducts
            title={widgets.title.popularProducts}
            subheader={widgets.subheader.popularProducts}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <ProjectsListCard title={widgets.title.projectsList} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <ProductImage height={370} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <CafeStore1 />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <ExplorePlaceCard height={450} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <LatestNotifications title={widgets.title.latestAlerts} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
          <DailyFeed title={widgets.title.dailyFeed} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <ScheduleCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <UserProfileCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <NewConnections title={widgets.title.newConnections} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
          <RecentActivities title={widgets.title.recentActivities} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <LastMonthSales subheader={widgets.subheader.latestMonthSales} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <OnlineSignupsFilled subheader={widgets.subheader.onlineSignups} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <NewVisitorsThisMonth subheader={widgets.subheader.newVisitors} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <TotalRevenueThisYear
            subheader={widgets.subheader.totalRevenueYear}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <UpgradePlan />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <SalesReport1 title={widgets.title.salesReport1} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <AppUsers
            title={widgets.title.appUsers}
            subheader={widgets.subheader.appUsers}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <WordOfTheDay title={widgets.title.wordOfTheDay} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <OurOffice1 title={widgets.title.ourOffice1} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
          <UserProfileAction height={282} />
        </Grid>
        {/* TODO: taking a lot of time  */}
        <Grid size={{ xs: 12 }}>
          <MapProvider>
            <MarkerClustererMap />
          </MapProvider>
        </Grid>
      </Grid>
    </Container>
  );
}
