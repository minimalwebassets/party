import React from 'react';
import {
  Typography,
  Container,
  Box,
  withStyles,
  makeStyles,
} from '@material-ui/core';
import Nav from './Nav';
import useIsMobile from './useIsMobile';

const rgbaAsImage = (r, g, b, a) => {
  const color = `rgba(${r}, ${g}, ${b}, ${a})`;
  return `linear-gradient(${color}, ${color})`;
};

const useStyles = makeStyles(
  (theme) => ({
    titlePicture: {
      background: `${rgbaAsImage(255, 255, 255, 0.2)}, url("titlepicture.jpg") 50% 50%`,
      backgroundSize: 'cover',
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  }),
);

const HeroTypography = withStyles({
  root: {
    fontFamily: 'Bangers',
    color: 'rgba(0, 0, 0, 0.9)',
    textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white',
  },
})(Typography);


export default function Hero() {
  const isMobile = useIsMobile();
  const classes = useStyles();

  return (
    <>
      <Box className={classes.titlePicture}>
        <Container maxWidth={isMobile ? 'sm' : 'md'}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="90vh"
          >
            <HeroTypography
              component="h1"
            >
              <Box
                display="flex"
                justifyContent="center"
              >
                <HeroTypography variant={isMobile ? 'h5' : 'h2'}>
                  The
                </HeroTypography>
                <Box fontSize={isMobile ? '64pt' : '128pt'}>
                  Party
                </Box>
                <Box alignSelf="flex-end">
                  <HeroTypography variant={isMobile ? 'h4' : 'h1'}>
                    Location
                  </HeroTypography>
                </Box>
              </Box>
            </HeroTypography>
          </Box>
        </Container>
      </Box>
      { !isMobile && <Nav /> }
    </>
  );
}
