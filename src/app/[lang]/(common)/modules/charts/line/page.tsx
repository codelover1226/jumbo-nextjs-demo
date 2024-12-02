import { getDictionary } from '@app/[lang]/dictionaries';
import {
  ConnectNullLineChart,
  CustomizedDotLineChart,
  DashedLineChart,
  ReferenceLineChart,
  SimpleLineChart,
  SynchronizedLineChart,
  VerticalLineChart,
  XAxisPaddingLineChart,
} from '@app/_components/charts/line';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container, Stack, Typography } from '@mui/material';

type Params = { lang: string };

const LineChart = async ({ params }: { params: Params }) => {
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
        {modules.title.lineChart}
      </Typography>
      <Stack spacing={3}>
        <SimpleLineChart />
        <VerticalLineChart />
        <CustomizedDotLineChart />
        <DashedLineChart />
        <ReferenceLineChart />
        <XAxisPaddingLineChart />
        <ConnectNullLineChart />
        <SynchronizedLineChart />
      </Stack>
    </Container>
  );
};

export default LineChart;
