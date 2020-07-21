import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Paper,
  Typography,
  Container,
} from '@material-ui/core';
import useIsMobile from './useIsMobile';

export default function TemplateCard({ name, price, features }) {
  const isMobile = useIsMobile();
  const slug = name.toLowerCase().replace(' ', '_');

  const Section = ({ label, children }) => (
    <Box pb={2}>
      <Typography
        component="h3"
        variant="subtitle2"
        align="center"
        color="textSecondary"
        gutterBottom
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
  Section.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <Box py={5}>
      <Container
        maxWidth={isMobile ? 'sm' : 'xl'}
        disableGutters={isMobile}
      >
        <Paper>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection={isMobile ? 'column' : 'row'}
          >
            <Box
              flexGrow="1"
              display="flex"
              alignItems="center"
              flexDirection="column"
              p={2}
            >
              <Box pt={1} pb={2}>
                <Typography
                  component="h2"
                  variant={isMobile ? 'h4' : 'h3'}
                >
                  {name}
                </Typography>
              </Box>
              <Section label="Features">
                {features}
              </Section>
              <Section label="Price">
                <Typography variant="h4" align="center">
                  {price ? `$${price}` : 'Free!'}
                </Typography>
              </Section>
              <Box textAlign="center">
                <Button variant="contained" color="secondary">
                  Live preview
                </Button>
              </Box>
            </Box>
            <Box
              px={isMobile ? 1 : 2}
              pt={isMobile ? 1 : 2}
              pb={isMobile ? 0 : 2}
              width={isMobile ? '100%' : '55%'}
            >
              <img
                src={`/templates/${slug}.png`}
                width="100%"
                alt={name}
              />
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
TemplateCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.node.isRequired,
};
