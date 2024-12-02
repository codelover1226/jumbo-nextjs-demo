import { getDictionary } from '@app/[lang]/dictionaries';
import { CalendarWrapper, TimeslotCalendar } from '@app/_components/calendars';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { JumboCard } from '@jumbo/components';
import { Container, Typography } from '@mui/material';
interface TimeslotCalendarProps {
  params: { lang: string };
}
export default async function TimeslotCalendarPage({
  params: { lang },
}: TimeslotCalendarProps) {
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
        {modules.title.timeslotCalendar}
      </Typography>
      <JumboCard contentWrapper>
        <CalendarWrapper>
          <TimeslotCalendar />
        </CalendarWrapper>
      </JumboCard>
    </Container>
  );
}
