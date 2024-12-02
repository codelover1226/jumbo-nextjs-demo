import { getDictionary } from '@app/[lang]/dictionaries';
import { AppUsers } from '@app/_components/widgets/AppUsers';
import { LastMonthSales } from '@app/_components/widgets/LastMonthSales';
import { LatestNotifications } from '@app/_components/widgets/LatestNotifications';
import { MarketingCampaign } from '@app/_components/widgets/MarketingCampaign';
import { NewVisitorsThisMonth } from '@app/_components/widgets/NewVisitorsThisMonth';
import { OnlineSignupsFilled } from '@app/_components/widgets/OnlineSignupsFilled';
import { OnlineVisitors } from '@app/_components/widgets/OnlineVisitors';
import { OrdersReport } from '@app/_components/widgets/OrdersReport';
import { PopularProducts } from '@app/_components/widgets/PopularProducts';
import { SalesReport } from '@app/_components/widgets/SalesReport';
import { SalesStatistics } from '@app/_components/widgets/SalesStatistics';
import { SiteVisitors } from '@app/_components/widgets/SiteVisitors';
import { TotalRevenueThisYear } from '@app/_components/widgets/TotalRevenueThisYear';
import { WebsiteTraffic } from '@app/_components/widgets/WebsiteTraffic';
import { YearlyProfileReport } from '@app/_components/widgets/YearlyProfileReport';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

type Params = { lang: string };

export default async function Ecommerce({ params }: { params: Params }) {
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
        <Grid size={{ xs: 12 }}>
          <SalesStatistics title={widgets.title.salesStatistics} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SalesReport title={widgets.title.salesReports} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <YearlyProfileReport title={widgets.title.yearlyProfileReports} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <AppUsers
            title={widgets.title.appUsers}
            subheader={widgets.subheader.appUsers}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <OnlineVisitors
            title={widgets.title.onlineVisitors}
            subheader={widgets.subheader.onlineVisitors}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <WebsiteTraffic title={widgets.title.websiteTraffics} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <OrdersReport
            title={widgets.title.orderReports}
            subheader={widgets.subheader.orderReports}
            subTitle={null}
            chartHeight={183}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <PopularProducts
            title={widgets.title.popularProducts}
            subheader={widgets.subheader.popularProducts}
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
        <Grid size={{ xs: 12 }}>
          <SiteVisitors
            title={widgets.title.siteVisitors}
            subheader={widgets.subheader.siteVisitors}
          />
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
      </Grid>
    </Container>
  );
}
