import { getDictionary } from '@app/[lang]/dictionaries';
import {
  ConnectNullAreaChart,
  PercentAreaChart,
  SimpleAreaChart,
  StackedAreaChart,
  SynchronizedAreaChart,
} from '@app/_components/charts/area';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container, Stack, Typography } from '@mui/material';

type Params = { lang: string };

const ChartArea = async ({ params }: { params: Params }) => {
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
        {modules.title.areaChart}
      </Typography>
      <Stack spacing={3}>
        <SimpleAreaChart />
        <StackedAreaChart />
        <ConnectNullAreaChart />
        <SynchronizedAreaChart />
        <PercentAreaChart />
      </Stack>
    </Container>
  );
};

export default ChartArea;
