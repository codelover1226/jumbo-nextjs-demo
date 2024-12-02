import { getDictionary } from '@app/[lang]/dictionaries';
import { FeaturedCard1 } from '@app/_components/cards';
import { AyurvedaCard } from '@app/_components/widgets/AyurvedaCard';
import { CityBgCard } from '@app/_components/widgets/CityBgCard';
import { CryptoNews } from '@app/_components/widgets/CryptoNews';
import { CurrencyCalculator } from '@app/_components/widgets/CurrencyCalculator';
import { CurrentProjectsList } from '@app/_components/widgets/CurrentProjectsList';
import { DailyFeed } from '@app/_components/widgets/DailyFeed';
import { EarningExpenses } from '@app/_components/widgets/EarningExpenses';
import { EventInviteConfirmCard } from '@app/_components/widgets/EventInviteConfirmCard';
import { ExplorePlaceCard } from '@app/_components/widgets/ExplorePlaceCard';
import { FlyingBird } from '@app/_components/widgets/FlyingBird';
import { GoogleNest } from '@app/_components/widgets/GoogleNest/GoogleNest';
import { LatestPosts } from '@app/_components/widgets/LatestPosts';
import { MarketingCampaign } from '@app/_components/widgets/MarketingCampaign';
import { NewConnections } from '@app/_components/widgets/NewConnections';
import { NewsPhotos } from '@app/_components/widgets/NewPhotos';
import { NewRequests } from '@app/_components/widgets/NewRequests';
import { NewsLetterSubscription } from '@app/_components/widgets/NewsLetterSubscription';
import { OurOffice } from '@app/_components/widgets/OurOffice';
import { PortfolioBalance } from '@app/_components/widgets/PortfolioBalance';
import { ProductImage } from '@app/_components/widgets/ProductImage';
import { ProjectCard } from '@app/_components/widgets/ProjectCard';
import { RecentActivities } from '@app/_components/widgets/RecentActivities';
import { SiteVisitors } from '@app/_components/widgets/SiteVisitors';
import { Summary } from '@app/_components/widgets/Summary';
import { TaskListExpandable } from '@app/_components/widgets/TaskListExpandable';
import { UpgradePlan } from '@app/_components/widgets/UpgradePlan';
import { UserProfileAction } from '@app/_components/widgets/UserProfileAction';
import { UserProfileCard1 } from '@app/_components/widgets/UserProfileCard1';
import { WeeklySales } from '@app/_components/widgets/WeeklySales';
import { WordOfTheDay } from '@app/_components/widgets/WordOfTheDay';
import { WordOfTheDay1 } from '@app/_components/widgets/WordOfTheDay1';
import { YourCurrentPlan } from '@app/_components/widgets/YourCurrentPlan';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { EmojiObjectsOutlined, FolderOpen } from '@mui/icons-material';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

interface WidgetsProps {
  params: {
    lang: string;
  };
}
export default async function Widgets({ params }: WidgetsProps) {
  const { lang } = await params;
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
        <Grid size={{ xs: 12, lg: 6 }}>
          <PortfolioBalance title={widgets.title.cryptoPortfolio} />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <EarningExpenses />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AyurvedaCard height={175} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <NewConnections
            title={widgets.title.newConnections}
            scrollHeight={296}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <ProjectCard title={widgets.title.projectSummary} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <NewsLetterSubscription
            title={widgets.title.newsLetter}
            subheader={widgets.subheader.newsLetter}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <NewsPhotos />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <FlyingBird
            title={widgets.title.flyingBird}
            subheader={widgets.subheader.flyingBird}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <OurOffice title={widgets.title.ourOffice} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <CurrencyCalculator title={widgets.title.currencyCal} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <WordOfTheDay1 />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Summary />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <ProductImage height={320} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <ExplorePlaceCard height={400} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <EventInviteConfirmCard
            title={widgets.title.eventInvite}
            subheader={widgets.title.eventInvite}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <UserProfileCard1 />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <GoogleNest />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <YourCurrentPlan title={widgets.title.yourCurrentPlan} />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Grid container spacing={3.75}>
            <Grid size={{ xs: 12, md: 6 }}>
              <FeaturedCard1
                title={'23'}
                subheader='Ideas'
                icon={<EmojiObjectsOutlined sx={{ fontSize: 42 }} />}
                bgcolor={['135deg', '#FBC79A', '#D73E68']}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FeaturedCard1
                title={'250'}
                subheader='Docs'
                icon={<FolderOpen sx={{ fontSize: 36 }} />}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CityBgCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <WeeklySales
            title={widgets.title.weeklySales}
            subheader={widgets.subheader.weeklySales}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <LatestPosts
            title={widgets.title.latestPosts}
            subheader={widgets.subheader.latestPosts}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <MarketingCampaign
            title={widgets.title.marketingCampaign}
            subheader={widgets.subheader.marketingCampaign}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CurrentProjectsList
            title={widgets.title.currentProjects}
            subheader={widgets.subheader.currentProjects}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <NewRequests
            title={widgets.title.newRequests}
            subheader={widgets.subheader.newRequests}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <RecentActivities
            title={widgets.title.recentActivities}
            scrollHeight={304}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TaskListExpandable
            title={widgets.title.taskList}
            subheader={widgets.subheader.taskList}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <DailyFeed title={widgets.title.dailyFeed} scrollHeight={398} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <UpgradePlan />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <WordOfTheDay title={widgets.title.wordOfTheDay} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
          <UserProfileAction />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <SiteVisitors
            title={widgets.title.siteVisitors}
            subheader={widgets.subheader.siteVisitors}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <CryptoNews title={widgets.title.cryptoNews} />
        </Grid>
      </Grid>
    </Container>
  );
}
