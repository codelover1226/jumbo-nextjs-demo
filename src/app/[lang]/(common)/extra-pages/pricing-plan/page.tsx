import { getDictionary } from '@app/[lang]/dictionaries';
import { PricingPlanItem } from '@app/_components/extraPages/PricingPlan/PricingPlanItem';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container, Typography } from '@mui/material';

type Params = { lang: string };

export default async function PricingPlan({ params }: { params: Params }) {
  const { lang } = params;
  const { extraPages } = await getDictionary(lang);
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
      <Typography variant={'h2'} mb={4}>
        {extraPages.title.pricePlan}
      </Typography>
      <PricingPlanItem />
    </Container>
  );
}
