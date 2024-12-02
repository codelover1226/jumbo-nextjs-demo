import { getDictionary } from '@app/[lang]/dictionaries';
import { CurrencyCalculator } from '@app/_components/widgets/CurrencyCalculator';
import { CurrentProjectsList } from '@app/_components/widgets/CurrentProjectsList';
import { FilesCounterCard } from '@app/_components/widgets/FilesCounterCard/FilesCounterCard';
import { Growth } from '@app/_components/widgets/Growth';
import { NewCustomers } from '@app/_components/widgets/NewCustomers';
import { ProjectCounterCard } from '@app/_components/widgets/ProjectCounterCard';
import { RecentActivities1 } from '@app/_components/widgets/RecentActivities1';
import { RecentTickets } from '@app/_components/widgets/RecentTickets';
import { RevenueHistory } from '@app/_components/widgets/RevenueHistory';
import { RevenueOverview } from '@app/_components/widgets/RevenueOverview';
import { TasksCounterCard } from '@app/_components/widgets/TaskCounterCard';
import { TasksList2 } from '@app/_components/widgets/TasksList2';
import { TeamsCounterCard } from '@app/_components/widgets/TeamsCounterCard';
import { TicketsStatus } from '@app/_components/widgets/TicketsStatus';
import { WelcomeSummary } from '@app/_components/widgets/WelcomSummary';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

type Params = { lang: string };

export default async function Crm({ params }: { params: Params }) {
  const { lang } = params;
  const { widgets } = await getDictionary(lang);
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
      <Grid container spacing={3.5}>
        <Grid size={{ xs: 12 }}>
          <WelcomeSummary title={widgets.title.welcomeEMA} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <RevenueHistory title={widgets.title.revenueHistory} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <NewCustomers title={widgets.title.newCustomer} />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Growth title={widgets.title.growth} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ProjectCounterCard subheader={widgets.subheader.projects} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <TasksCounterCard subheader={widgets.subheader.tasks} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <TeamsCounterCard subheader={widgets.subheader.teams} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <FilesCounterCard subheader={widgets.subheader.files} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TasksList2 scrollHeight={373} title={widgets.title.taskList} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CurrentProjectsList
            title={widgets.title.currentProjects}
            subheader={widgets.subheader.currentProjects}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 7, lg: 8 }}>
          <RecentTickets title={widgets.title.recentTicket} />
        </Grid>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <TicketsStatus title={widgets.title.ticketStatus} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <RevenueOverview title={widgets.title.revenueOverview} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <RecentActivities1
            title={widgets.title.recentActivities}
            scrollHeight={306}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CurrencyCalculator title={widgets.title.currencyCal} />
        </Grid>
      </Grid>
    </Container>
  );
}
