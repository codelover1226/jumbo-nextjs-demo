import { getDictionary } from '@app/[lang]/dictionaries';
import { CalendarWrapper, PopupCalendar } from '@app/_components/calendars';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { JumboCard } from '@jumbo/components';
import { Container, Typography } from '@mui/material';
interface PopupCalendarProps {
  params: { lang: string };
}
export default async function PopupCalendarPage({
  params: { lang },
}: PopupCalendarProps) {
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
      <Typography variant={'h1'}>{modules.title.popupCalendar}</Typography>
      <Typography variant={'h5'} color={'text.secondary'} mb={3}>
        {`Click the "+x more" link on any calendar day that cannot fit all the
        days events to see an inline popup of all the events.`}
      </Typography>
      <JumboCard contentWrapper>
        <CalendarWrapper>
          <PopupCalendar />
        </CalendarWrapper>
      </JumboCard>
    </Container>
  );
}
