import React from 'react';
import {
  Typography,
  Container,
  Box,
  Paper,
  makeStyles,
} from '@material-ui/core';
import useIsMobile from './useIsMobile';

const useStyles = makeStyles((theme) => ({
  image: {
    width: 350,
    float: 'left',
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      width: 300,
      float: 'none',
      marginRight: theme.spacing(0),
      paddingBottom: theme.spacing(2),
    },
  },
}));

export default function AboutUs() {
  const isMobile = useIsMobile();
  const classes = useStyles();

  return (
    <Container
      maxWidth={isMobile ? 'xs' : 'md'}
      id="AboutUs"
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
          About Us
        </Typography>
        <Paper>
          <Box
            p={isMobile ? 2 : 6}
            display={isMobile ? 'flex' : 'block'}
            flexDirection="column"
            alignItems="center"
          >
            <img
              src="/about-us.jpg"
              className={classes.image}
              alt=""
            />
            <Typography>
              It&apos;s our priority to let our guests experience an unforgettable evening. Our skilled staff will lead you through any of our events and fulfill every customer request. You will not only be catered with our excellent food and drink selection but you will be provided with great music and a beautiful ambience.
            </Typography>
            <Typography>
              Next to public events organized by the &ldquo;party-location&rdquo; team we are happy to host your private events in our halls. If you still need a location for a 50th-birthday party, a graduation party or you want to celebrate a milestone in your company then we are here for you.
            </Typography>
            <Typography>
              Since 1988, the party location has hosted events of all kinds. Superstars like Queen, Madonna, Kurt Cobain, Amy Winehouse, Donald Duck, and many more have already spent some unforgettable nights here and enjoyed the flexibility and excellence of our service. This year, we decided to upgrade our location and redesign our interior to bring your party to the next level.
            </Typography>
            <Typography>
              Of course, we would like to receive your feedback to make this a great place to be for everyone.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
