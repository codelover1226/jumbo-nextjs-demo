import { getDictionary } from '@app/[lang]/dictionaries';
import { CalendarWrapper, RenderingCalendar } from '@app/_components/calendars';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { JumboCard } from '@jumbo/components';
import { Container, Typography } from '@mui/material';
interface RenderingCalendarProps {
  params: { lang: string };
}
export default async function RenderingCalendarPage({
  params: { lang },
}: RenderingCalendarProps) {
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
        {modules.title.renderingCalendar}
      </Typography>

      <JumboCard contentWrapper>
        <CalendarWrapper>
          <RenderingCalendar />
        </CalendarWrapper>
      </JumboCard>
    </Container>
  );
}
