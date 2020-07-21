import React, { useState } from 'react';
import {
  Container,
  Box,
} from '@material-ui/core';
import Footer from '../src/Footer';
import Hero from '../src/Hero';
import backgrounds, { getRandomBackground } from '../src/backgrounds';
import Background from '../src/Background';
import BackgroundReelCard from '../src/BackgroundCard';
import useIsMobile from '../src/useIsMobile';

export default function Backgrounds() {
  const [currentBackground, setCurrentBackground] = useState(getRandomBackground());
  const isMobile = useIsMobile();

  return (
    <Background background={currentBackground}>
      <Hero
        title="Backgrounds"
        subtitle="Delight your users with a simple background pattern"
      />
      <Container maxWidth={isMobile ? 'sm' : 'lg'}>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
        >
          {
            backgrounds.map(
              (background) => (
                <BackgroundReelCard
                  key={background.name}
                  onClick={() => setCurrentBackground(background)}
                  background={background}
                />
              ),
            )
          }
        </Box>
      </Container>
      <Footer />
    </Background>
  );
}
