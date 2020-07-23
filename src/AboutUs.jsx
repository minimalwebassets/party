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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
