import React from 'react';
import {
  Box,
  makeStyles,
} from '@material-ui/core';
import Hero from '../src/Hero';
import UpcomingEvents from '../src/UpcomingEvents';
import Gallery from '../src/Gallery';
import Reservation from '../src/Reservation';
import AboutUs from '../src/AboutUs';
import Footer from '../src/Footer';
import useIsMobile from '../src/useIsMobile';

const rgbaAsImage = (r, g, b, a) => {
  const color = `rgba(${r}, ${g}, ${b}, ${a})`;
  return `linear-gradient(${color}, ${color})`;
};

const useStyles = makeStyles({
  confetti: {
    background: `${rgbaAsImage(255, 255, 255, 0.2)}, url("confetti.jpg") 50% 50%`,
    backgroundSize: 'cover',
  },
  concert: {
    background: `${rgbaAsImage(255, 255, 255, 0.2)}, url("concert.jpg") 50% 90%`,
    backgroundSize: 'cover',
  },
  dj: {
    background: `${rgbaAsImage(255, 255, 255, 0.2)}, url("dj.jpg") 50% 90%`,
    backgroundSize: 'cover',
  },
});

export default function Index() {
  const isMobile = useIsMobile();
  const classes = useStyles();

  return (
    <Box>
      <Hero />
      <UpcomingEvents />
      <Box
        height={isMobile ? 200 : 400}
        className={classes.confetti}
      />
      <Gallery />
      <Box
        height={isMobile ? 200 : 400}
        className={classes.concert}
      />
      <Reservation />
      <Box
        height={isMobile ? 200 : 400}
        className={classes.dj}
      />
      <AboutUs />
      <Footer />
    </Box>
  );
}
