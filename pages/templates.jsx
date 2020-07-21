import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Hero from '../src/Hero';
import { getRandomBackground } from '../src/backgrounds';
import Background from '../src/Background';
import TemplateCard from '../src/TemplateCard';
import Footer from '../src/Footer';
import useIsMobile from '../src/useIsMobile';

const randomBackground = getRandomBackground();

export default function Templates() {
  const isMobile = useIsMobile();

  return (
    <Background background={randomBackground}>
      <Hero
        title="Templates"
        subtitle="Kickstart your next project with a modern, blazing fast template"
      />
      <Container maxWidth={isMobile ? 'sm' : 'xl'}>
        {
          [1, 2, 3, 4].map((n) => (
            <TemplateCard
              key={n}
              name="Hero Collection"
              price={0}
              features={(
                <Typography variant="body1" component="ul">
                  <li>Friendly random backgrounds</li>
                  <li>Hero navigation bar</li>
                  <li>Clean and simple base</li>
                  <li>Modern landing page</li>
                </Typography>
              )}
            />
          ))
        }
      </Container>
      <Footer />
    </Background>
  );
}
