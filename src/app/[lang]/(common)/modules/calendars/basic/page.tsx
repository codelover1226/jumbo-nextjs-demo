import { getDictionary } from '@app/[lang]/dictionaries';
import { BasicCalendar, CalendarWrapper } from '@app/_components/calendars';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { JumboCard } from '@jumbo/components';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
interface BasicCalendarProps {
  params: { lang: string };
}
export default async function BasicCalendarPage({
  params: { lang },
}: BasicCalendarProps) {
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
        {modules.title.basicCalendar}
      </Typography>
      <JumboCard contentWrapper>
        <CalendarWrapper>
          <BasicCalendar />
        </CalendarWrapper>
      </JumboCard>
    </Container>
  );
}
