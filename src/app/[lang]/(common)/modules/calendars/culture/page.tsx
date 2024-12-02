import { getDictionary } from '@app/[lang]/dictionaries';
import { CultureCalendar } from '@app/_components/calendars';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container, Typography } from '@mui/material';

interface CultureCalendarProps {
  params: { lang: string };
}

export default async function CultureCalendarPage({
  params: { lang },
}: CultureCalendarProps) {
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
        {modules.title.cultureCalendar}
      </Typography>
      <Typography variant={'h5'} color={'text.primary'}>
        Select a culture
      </Typography>
      <CultureCalendar />
    </Container>
  );
}
