import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  { label: 'Upcoming Events', path: '/' },
  { label: 'Gallery', path: '/' },
  { label: 'Reservation', path: '/' },
  { label: 'About Us', path: '/' },
];

const AppBarOutline = withStyles(
  (theme) => ({
    root: {
      borderTop: `2px solid ${theme.palette.secondary.main}`,
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  }),
)(AppBar);

// When the nav gets too big for mobile, move buttons into hamburger/drawer menu
export default function Nav() {
  const router = useRouter();
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
                          color="textPrimary"
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
