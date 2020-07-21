import React from 'react';
import {
  Typography,
  Container,
  Box,
} from '@material-ui/core';
import Hero from '../src/Hero';
import Footer from '../src/Footer';
import { getRandomBackground, rgbaAsImage } from '../src/backgrounds';
import Background from '../src/Background';
import WalkingOutside from '../svg/undraw_walking_outside.svg';
import Wireframing from '../svg/undraw_wireframing.svg';
import IndexCard from '../src/IndexCard';
import useIsMobile from '../src/useIsMobile';

const getRandomCelebrity = () => {
  const celebrities = [
    'Albert Einstein',
    'Amelia Earhart',
    'Anonymous',
    'Arnold Schwartzenegger',
    'Bill Gates',
    'Bob Marley',
    'Chinese Proverb',
    'Sir David Attenborough',
    'Dr. Seuss',
    'Elon Musk',
    'Friedrich Nietzsche',
    'Gandalf',
    'Greta Thunberg',
    'Isaac Newton',
    'J. K. Rowling',
    'Ja Rule',
    'Jane Goodall',
    'John F. Kennedy',
    'Julius Caesar',
    'M',
    'Malala Yousafzai',
    'Marie Curie',
    'Marilyn Monroe',
    'Mark Twain',
    'Mother Theresa',
    'Napoleon Bonaparte',
    'Nikola Tesla',
    'Oscar Wilde',
    'Plato',
    'Queen Elizabeth II',
    'Snoop Dogg',
    'Socrates',
    'Steve Jobs',
    'Thomas A. Edison',
    'William Shakespeare',
  ];
  return celebrities[
    // Random index
    Math.floor(Math.random() * celebrities.length)
  ];
};

export default function Index() {
  const isMobile = useIsMobile();

  return (
    <Background background={getRandomBackground()}>
      <Hero
        title="Minimal Web Assets"
        subtitle={`"Minimalist is the new black" — ${getRandomCelebrity()}`}
      />
      <Background
        background={{
          styles: {
            backgroundImage: rgbaAsImage(0, 0, 0, 0.8),
          },
        }}
      >
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
              <IndexCard
                title="Backgrounds"
                description="Simple background patterns designed to delight your users without cluttering your design."
                callToAction="View Backgrounds"
                Illustration={WalkingOutside}
              />
              <IndexCard
                title="Templates"
                color="secondary"
                description="Intuitive layouts for you to start creating a modern website, quick and easy."
                callToAction="View Templates"
                Illustration={Wireframing}
              />
            </Box>
          </Container>
        </Box>
      </Background>
      <Footer />
    </Background>
  );
}
