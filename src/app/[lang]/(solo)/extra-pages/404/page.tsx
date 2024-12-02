import { NotFound404 } from '@app/_components/extraPages/Error404/NotFound';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container } from '@mui/material';

const Error404 = () => {
  return (
    // <Container
    //   maxWidth={false}
    //   sx={{
    //     maxWidth: CONTAINER_MAX_WIDTH,
    //     display: 'flex',
    //     minWidth: 0,
    //     flex: 1,
    //     flexDirection: 'column',
    //   }}
    //   disableGutters
    // >
      <NotFound404 />
    // </Container>
  );
};

export default Error404;
