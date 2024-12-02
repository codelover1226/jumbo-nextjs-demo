import { ASSET_IMAGES } from '@app/_utilities/constants/paths';
import { Div } from '@jumbo/shared';
import { Typography } from '@mui/material';
import Image from 'next/image';

const ContentPlaceholder = () => {
  return (
    <Div
      sx={{
        textAlign: 'center',
        margin: 'auto',
        p: 3,
      }}
    >
      <Image
        src={`${ASSET_IMAGES}/apps/undraw_development.svg`}
        alt='Welcome to Jumbo Chat App'
        width={350}
        height={100}
      />
      <Typography variant={'h2'} mt={2} color={'text.primary'}>
        Welcome to Jumbo chat app
      </Typography>
    </Div>
  );
};

export { ContentPlaceholder };
