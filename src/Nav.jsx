import React from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Divider,
  Box,
  withStyles,
} from '@material-ui/core';
import useIsMobile from './useIsMobile';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Upcoming Events', path: '#UpcomingEvents' },
  { label: 'Gallery', path: '#Gallery' },
  { label: 'Reservation', path: '#Reservation' },
  { label: 'About Us', path: '#AboutUs' },
];

const AppBarOutline = withStyles(
  (theme) => ({
    root: {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  }),
)(AppBar);

export default function Nav() {
  const isMobile = useIsMobile();
  return (
    <>
      <AppBarOutline
        color="primary"
        position="sticky"
      >
        <Container maxWidth="md">
          <Toolbar>
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
            >
              {
                navItems.map(
                  ({ label, path }) => (
                    <Box mx={1} key={path}>
                      <Link href={path} passHref>
                        <Button
                          size={isMobile ? 'small' : 'medium'}
                          component="a"
                        >
                          {label}
                        </Button>
                      </Link>
                    </Box>
                  ),
                )
              }
            </Box>
          </Toolbar>
        </Container>
        <Divider />
      </AppBarOutline>
    </>
  );
}

export { navItems };
