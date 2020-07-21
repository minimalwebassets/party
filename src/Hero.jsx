import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Container,
  Box,
  Paper,
  withStyles,
} from '@material-ui/core';
import { Grain } from '@material-ui/icons';
import Nav from './Nav';
import useIsMobile from './useIsMobile';

const HeroPaper = withStyles(
  (theme) => ({
    root: {
      zIndex: theme.zIndex.appBar + 1,
      position: 'relative',
    },
  }),
)(Paper);

export default function Hero({ title, subtitle }) {
  const isMobile = useIsMobile();
  return (
    <>
      <HeroPaper elevation={0} square>
        <Container maxWidth={isMobile ? 'sm' : 'md'}>
          <Box
            height="30vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Grain
              color="secondary"
              fontSize="large"
            />
            <Box pt={isMobile ? 3 : 5} pb={1}>
              <Typography
                variant={isMobile ? 'h5' : 'h2'}
                component="h1"
              >
                {title}
              </Typography>
            </Box>
            <Typography variant={isMobile ? 'body2' : 'h5'}>
              {subtitle}
            </Typography>
          </Box>
        </Container>
      </HeroPaper>
      <Nav />
    </>
  );
}
Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
