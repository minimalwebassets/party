import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Container,
  Box,
  makeStyles,
  Divider,
} from '@material-ui/core';
import Hero from '../../src/Hero';
import Footer from '../../src/Footer';
import useIsMobile from '../../src/useIsMobile';

const useStyles = makeStyles((theme) => ({
  portrait: {
    margin: theme.spacing(1),
    width: '160px',
    clipPath: 'circle(80px at center)',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      clipPath: 'circle(50px at center)',
    },
  },
}));

export default function About() {
  const isMobile = useIsMobile();
  const classes = useStyles();

  const Person = ({ name, description, isReverse }) => (
    <>
      <Box p={isMobile ? 2 : 4}>
        <Divider />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection={
          isMobile
            ? 'column'
            : `row${isReverse && '-reverse'}`
        }
      >
        <img
          src={`/${name.toLowerCase()}.jpg`}
          className={classes.portrait}
          alt={name}
        />
        <Box flexGrow={1} px={isMobile ? 0 : 5}>
          {description}
        </Box>
      </Box>
    </>
  );
  Person.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    isReverse: PropTypes.bool,
  };
  Person.defaultProps = {
    isReverse: false,
  };

  return (
    <>
      <Hero
        title="The Humans"
        subtitle="In case you thought there weren't any"
      />
      <Container maxWidth={isMobile ? 'sm' : 'md'}>
        <Box py={isMobile ? 6 : 10}>
          <Typography variant={isMobile ? 'h5' : 'h4'} gutterBottom>
            About us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Minimal Web Assets is the pet project of a young couple of hippies who happen to work in Web-related fields. We&apos;re both super nerds but we have social skills too—we promise.
          </Typography>
          <Person
            name="Sarah"
            description={(
              <>
                <Typography variant="body1">
                  <strong>Sarah </strong>
                  has an M.Sc. in Mathematics and works in Cybersecurity. She&apos;s not very good with numbers, though.
                </Typography>
                <Typography variant="body1" component="ul">
                  <li>
                    <strong>Her mother&apos;s first name: </strong>
                    Angelika (Please call her Geli)
                  </li>
                  <li>
                    <strong>Her favourite food: </strong>
                    Sushi
                  </li>
                  <li>
                    <strong>Her favourite band: </strong>
                    Rammstein
                  </li>
                </Typography>
              </>
            )}
          />
          <Person
            name="Bjarki"
            isReverse
            description={(
              <>
                <Typography variant="body1">
                  <strong>Bjarki </strong>
                  has an M.Sc. in Robot Systems Engineering and works as a web developer. He thinks computers are stupid.
                </Typography>
                <Typography variant="body1" component="ul">
                  <li>
                    <strong>His mother&apos;s first name: </strong>
                    Björg (Not to be confused with Björk)
                  </li>
                  <li>
                    <strong>His favourite food: </strong>
                    Pizza Napoletana
                  </li>
                  <li>
                    <strong>His favourite band: </strong>
                    Queen
                  </li>
                </Typography>
              </>
            )}
          />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
