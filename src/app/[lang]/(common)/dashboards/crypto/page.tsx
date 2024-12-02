import { getDictionary } from '@app/[lang]/dictionaries';
import {
  BitcoinPrice,
  EthereumPrice,
  LitcoinPrice,
  RipplePrice,
} from '@app/_components/metrics';
import { CryptoNews } from '@app/_components/widgets/CryptoNews';
import { CurrencyCalculator } from '@app/_components/widgets/CurrencyCalculator';
import { EarnRewardCard } from '@app/_components/widgets/EarnRewardCard';
import { EarningExpenses } from '@app/_components/widgets/EarningExpenses';
import { LatestPosts } from '@app/_components/widgets/LatestPosts';
import { MarketingCampaign } from '@app/_components/widgets/MarketingCampaign';
import { PortfolioBalance } from '@app/_components/widgets/PortfolioBalance';
import { WordOfTheDay1 } from '@app/_components/widgets/WordOfTheDay1';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

type Params = { lang: string };

export default async function Crypto({ params }: { params: Params }) {
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
          <BitcoinPrice subheader={widgets.subheader.bitcoinPrice} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <RipplePrice subheader={widgets.subheader.ripplePrice} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <EthereumPrice subheader={widgets.subheader.ethereumPrice} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <LitcoinPrice subheader={widgets.subheader.litecoinPrice} />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <PortfolioBalance title={widgets.title.cryptoPortfolio} />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <EarningExpenses />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <WordOfTheDay1 />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <EarnRewardCard />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <CurrencyCalculator title={widgets.title.currencyCal} />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <LatestPosts
            title={widgets.title.latestPosts}
            subheader={widgets.subheader.latestPosts}
            scrollHeight={356}
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <MarketingCampaign
            title={widgets.title.marketingCampaign}
            subheader={widgets.subheader.marketingCampaign}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <CryptoNews title={widgets.title.cryptoNews} />
        </Grid>
      </Grid>
    </Container>
  );
}