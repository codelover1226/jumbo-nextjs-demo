import { getDictionary } from '@app/[lang]/dictionaries';
import {
  CalendarWrapper,
  SelectableCalendar,
} from '@app/_components/calendars';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { JumboCard } from '@jumbo/components';
import { Container, Typography } from '@mui/material';
interface SelectableCalendarProps {
  params: { lang: string };
}
export default async function SelectableCalendarPage({
  params: { lang },
}: SelectableCalendarProps) {
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
        {modules.title.selectableCalendar}
      </Typography>
      <JumboCard contentWrapper>
        <CalendarWrapper>
          <SelectableCalendar />
        </CalendarWrapper>
      </JumboCard>
    </Container>
  );
}
