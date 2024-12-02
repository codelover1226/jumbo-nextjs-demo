import { getDictionary } from '@app/[lang]/dictionaries';
import { ActiveUsers } from '@app/_components/metrics/ActiveUsers';
import { CreditScore } from '@app/_components/metrics/CreditScore';
import { EmailCampaign } from '@app/_components/metrics/EmailCampaign';
import {
  ObjectCountOrders,
  ObjectCountQueries,
  ObjectCountRevenue,
  ObjectCountVisits,
} from '@app/_components/metrics/ObjectCountCards';
import { OnlineSignups } from '@app/_components/metrics/OnlineSignups';
import { Orders } from '@app/_components/metrics/Orders';
import { PageViews } from '@app/_components/metrics/PageViews';
import { RevenueThisYear } from '@app/_components/metrics/RevenueThisYear';
import { Stocks } from '@app/_components/metrics/Stocks';
import { TrafficAnalysis } from '@app/_components/metrics/TrafficAnalysis';
import { AvgDailyTraffic } from '@app/_components/widgets/AvgDailyTraffic';
import { LastMonthSales } from '@app/_components/widgets/LastMonthSales';
import { NewAuthors } from '@app/_components/widgets/NewAuthors';
import { NewSubscribers } from '@app/_components/widgets/NewSubscribers';
import { NewVisitorsThisMonth } from '@app/_components/widgets/NewVisitorsThisMonth';
import { NewArticles } from '@app/_components/widgets/NewsArticles';
import { OnlineSignupsFilled } from '@app/_components/widgets/OnlineSignupsFilled';
import { OrdersReport } from '@app/_components/widgets/OrdersReport';
import { SalesReport } from '@app/_components/widgets/SalesReport';
import { TotalRevenueThisYear } from '@app/_components/widgets/TotalRevenueThisYear';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

interface MetricsProps {
  params: {
    lang: string;
  };
}
export default async function Metrics({ params }: MetricsProps) {
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
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <LastMonthSales subheader={widgets.subheader.latestMonthSales} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <OnlineSignupsFilled subheader={widgets.subheader.onlineSignups} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <NewVisitorsThisMonth subheader={widgets.subheader.newVisitors} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <TotalRevenueThisYear
            subheader={widgets.subheader.totalRevenueYear}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <OrdersReport
            title={widgets.title.orderReports}
            subheader={widgets.subheader.orderReports}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <CreditScore
            title={widgets.title.creditScore}
            subheader={widgets.subheader.creditScore}
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <TrafficAnalysis
            title={widgets.title.trafficAnalysis}
            subheader={widgets.subheader.trafficAnalysis}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ObjectCountOrders
            vertical={true}
            subTitle={widgets.subheader.objectCountOrders}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ObjectCountRevenue
            subTitle={widgets.subheader.objectCountRevenues}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ObjectCountVisits subTitle={widgets.subheader.objectCountVisits} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ObjectCountQueries subTitle={widgets.subheader.objectCountQueries} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <OnlineSignups subheader={widgets.subheader.onlineSignups1} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <RevenueThisYear subheader={widgets.subheader.revenueThisYear} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <EmailCampaign subheader={widgets.subheader.emailCampaign} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AvgDailyTraffic subheader={widgets.subheader.avgDailyTraffic} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <NewSubscribers subheader={widgets.subheader.newSubscribers} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <NewAuthors subheader={widgets.subheader.newAuthors} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <NewArticles subheader={widgets.subheader.newArticles} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <SalesReport title={widgets.title.salesReports} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <ActiveUsers subheader={widgets.subheader.activeUsers} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <PageViews title={widgets.title.pageViews} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Orders title={widgets.title.orders1} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Stocks title={widgets.title.stock} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ObjectCountOrders
            vertical={true}
            subTitle={widgets.subheader.objectCountOrders}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ObjectCountRevenue
            subTitle={widgets.subheader.objectCountRevenues}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ObjectCountVisits subTitle={widgets.subheader.objectCountVisits} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ObjectCountQueries subTitle={widgets.subheader.objectCountQueries} />
        </Grid>
      </Grid>
    </Container>
  );
}
