import { getDictionary } from '@app/[lang]/dictionaries';
import {
  AdvancedAlert,
  AlertsType,
  AnimationAlert,
  AutoCloseAlert,
  BasicAlert,
  CustomHtmlMessage,
  CustomPosition,
  DialogThreeButton,
  ErrorAlert,
  ImageWithMessage,
  SuccessAlert,
  TitleWithText,
  ToastAlerts,
} from '@app/_components/extensions/sweet-alerts';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

type Params = { lang: string };

export default async function SweetAlerts({ params }: { params: Params }) {
  const { lang } = params;
  const { extensions } = await getDictionary(lang);
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
        {extensions.title.sweetAlerts}
      </Typography>
      <Grid container spacing={3.75}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <BasicAlert />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <AnimationAlert />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <TitleWithText />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <DialogThreeButton />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <SuccessAlert />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <ErrorAlert />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <ImageWithMessage />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <CustomHtmlMessage />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <CustomPosition />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <AutoCloseAlert />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <AdvancedAlert />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <ToastAlerts />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <AlertsType />
        </Grid>
      </Grid>
    </Container>
  );
}
