import { InternalServerError } from '@app/_components/extraPages/InternalServerError';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container } from '@mui/material';

const Error500 = () => {
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
      <InternalServerError />
    // </Container>
  );
};

export default Error500;
