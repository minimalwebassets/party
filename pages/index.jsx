import React from 'react';
import {
  Typography,
  Container,
  Box,
} from '@material-ui/core';
import Hero from '../src/Hero';
import Footer from '../src/Footer';
import IndexCard from '../src/IndexCard';
import useIsMobile from '../src/useIsMobile';

export default function Index() {
  const isMobile = useIsMobile();

  return (
    <Box>
      <Hero />
      <Box color="primary.contrastText">
        <Container maxWidth={isMobile ? 'xs' : 'lg'}>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            pt={isMobile ? 8 : 16}
            pb={isMobile ? 4 : 8}
          >
            <Typography
              variant={isMobile ? 'h4' : 'h2'}
              component="h2"
              color="inherit"
            >
              Take your websites to
              <Typography variant="inherit" color="secondary">
                &nbsp;the next level
              </Typography>
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-evenly"
            flexDirection={isMobile ? 'column-reverse' : 'row'}
            pb={isMobile ? 8 : 16}
          >
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
