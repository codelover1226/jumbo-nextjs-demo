'use client';
import { Link } from '@app/_components/_core';
import { LoginForm } from '@app/_components/auth/login';
import { ASSET_IMAGES } from '@app/_utilities/constants/paths';
import { getAssetPath } from '@app/_utilities/helpers';
import { Div } from '@jumbo/shared';
import { Facebook, Google, Twitter } from '@mui/icons-material';
import {
  Card,
  CardContent,
  IconButton,
  Typography,
  alpha,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import React from 'react';

const Login2 = () => {
  return (
    <Div
      sx={{
        width: 720,
        maxWidth: '100%',
        margin: 'auto',
        p: 4,
      }}
    >
      <Card
        sx={{
          display: 'flex',
          minWidth: 0,
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <CardContent
          sx={{
            flex: '0 1 300px',
            position: 'relative',
            background: `#0267a0 url(${getAssetPath(
              `${ASSET_IMAGES}/widgets/keith-luke.jpg`,
              '640x428'
            )}) no-repeat center`,
            backgroundSize: 'cover',

            '&::after': {
              display: 'inline-block',
              position: 'absolute',
              content: `''`,
              inset: 0,
              backgroundColor: alpha('#0267a0', 0.65),
            },
          }}
        >
          <Div
            sx={{
              display: 'flex',
              minWidth: 0,
              flex: 1,
              flexDirection: 'column',
              color: 'common.white',
              position: 'relative',
              zIndex: 1,
              height: '100%',
            }}
          >
            <Div sx={{ mb: 2 }}>
              <Typography
                variant={'h3'}
                color={'inherit'}
                fontWeight={500}
                mb={3}
              >
                {'Sign In'}
              </Typography>
              <Typography variant={'body1'} mb={2}>
                {'By signing in, you can avail full features of the Jumbo.'}
              </Typography>
              <Typography variant={'body1'}>
                <Link
                  underline='none'
                  href={'/forgot-password'}
                  color={'inherit'}
                >
                  {'Forgot your password? Recover Now'}
                </Link>
              </Typography>
            </Div>

            <Div sx={{ mt: 'auto' }}>
              <Link underline='none' href='#' sx={{ display: 'inline-flex' }}>
                <Image
                  height={35}
                  width={110}
                  src={`${ASSET_IMAGES}/logo-white.png`}
                  alt='Jumbo React'
                />
              </Link>
            </Div>
          </Div>
        </CardContent>
        <CardContent sx={{ flex: 1, p: 4 }}>
          <LoginForm />
          <React.Fragment>
            <Typography variant={'body1'} mb={2}>
              {`Don't have an account?`}{' '}
              <Link underline='none' href='/auth/signup-2'>
                {'Sign up now'}
              </Link>
            </Typography>
            <Stack direction='row' alignItems='center' spacing={1} mb={1}>
              <IconButton
                sx={{
                  bgcolor: '#385196',
                  color: 'common.white',
                  p: (theme) => theme.spacing(1.25),

                  '&:hover': {
                    backgroundColor: '#385196',
                  },
                }}
                aria-label='Facebook'
              >
                <Facebook fontSize='small' />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: '#00a8ff',
                  color: 'common.white',
                  p: (theme) => theme.spacing(1.25),

                  '&:hover': {
                    backgroundColor: '#00a8ff',
                  },
                }}
                aria-label='Twitter'
              >
                <Twitter fontSize='small' />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: '#23272b',
                  color: 'common.white',
                  p: (theme) => theme.spacing(1.25),

                  '&:hover': {
                    backgroundColor: '#23272b',
                  },
                }}
                aria-label='Twitter'
              >
                <Google fontSize='small' />
              </IconButton>
            </Stack>
          </React.Fragment>
        </CardContent>
      </Card>
    </Div>
  );
};

export default Login2;
