import { getDictionary } from '@app/[lang]/dictionaries';
import {
  CalendarWrapper,
  SchedulingCalendar,
} from '@app/_components/calendars';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { JumboCard } from '@jumbo/components';
import { Container, Typography } from '@mui/material';
interface SchedulingCalendarProps {
  params: { lang: string };
}
export default async function SchedulingCalendarPage({
  params: { lang },
}: SchedulingCalendarProps) {
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
        {modules.title.schedulingCalendar}
      </Typography>
      <JumboCard contentWrapper>
        <CalendarWrapper>
          <SchedulingCalendar />
        </CalendarWrapper>
      </JumboCard>
    </Container>
  );
}
