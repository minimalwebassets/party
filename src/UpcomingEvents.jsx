import React from 'react';
import {
  Typography,
  Container,
  Box,
  Paper,
  Divider,
} from '@material-ui/core';
import useIsMobile from './useIsMobile';
import upcomingEvents from '../upcomingEvents.json';

export default function UpcomingEvents() {
  const isMobile = useIsMobile();

  return (
    <Container
      maxWidth={isMobile ? 'xs' : 'md'}
      id="UpcomingEvents"
    >
      <Box
        display="flex"
        flexDirection="column"
        pt={isMobile ? 8 : 16}
        pb={isMobile ? 4 : 8}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h4'}
          component="h2"
          gutterBottom
        >
          Upcoming Events
        </Typography>
        <Paper>
          {
            upcomingEvents.map(({
              day,
              month,
              title,
              description,
            }, i) => (
              <Box key={title}>
                <Box
                  display="flex"
                  flexDirection={isMobile ? 'column' : 'row'}
                  alignItems="center"
                  p={isMobile ? 2 : 6}
                >
                  <Box
                    pr={isMobile ? 0 : 6}
                    pb={isMobile ? 2 : 0}
                    display="flex"
                    flexDirection={isMobile ? 'row' : 'column'}
                    alignItems="center"
                    minWidth={isMobile ? 60 : 160}
                  >
                    <Typography variant={isMobile ? 'h2' : 'h1'}>
                      {day}
                    </Typography>
                    <Box
                      pl={isMobile ? 1 : 0}
                      pt={isMobile ? 1 : 0}
                    >
                      <Typography variant={isMobile ? 'h5' : 'h4'}>
                        {month}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      color="secondary"
                      variant={isMobile ? 'h5' : 'h5'}
                      gutterBottom
                    >
                      {title}
                    </Typography>
                    <Typography>
                      {description}
                    </Typography>
                  </Box>
                </Box>
                {
                  (i !== upcomingEvents.length - 1) && (
                    <Box
                      px={isMobile ? 8 : 40}
                      pt={isMobile ? 2 : 0}
                    >
                      <Divider variant="middle" />
                    </Box>
                  )
                }
              </Box>
            ))
          }
        </Paper>
      </Box>
    </Container>
  );
}
