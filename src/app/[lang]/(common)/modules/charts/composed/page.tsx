import { getDictionary } from '@app/[lang]/dictionaries';
import {
  AxisLabelsComposedChart,
  LineBarAreaComposedChart,
  SameDataComposedChart,
  VerticalComposedChart,
} from '@app/_components/charts/composed';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container, Stack, Typography } from '@mui/material';

type Params = { lang: string };

const ComposedChart = async ({ params }: { params: Params }) => {
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
        {modules.title.composedChart}
      </Typography>
      <Stack spacing={3}>
        <AxisLabelsComposedChart />
        <VerticalComposedChart />
        <SameDataComposedChart />
        <LineBarAreaComposedChart />
      </Stack>
    </Container>
  );
};

export default ComposedChart;
