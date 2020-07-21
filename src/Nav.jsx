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
} from '@material-ui/core';
import useIsMobile from './useIsMobile';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Backgrounds', path: '/backgrounds' },
  { label: 'Templates', path: '/templates' },
];

// When the nav gets too big for mobile, move buttons into hamburger/drawer menu
export default function Nav() {
  const router = useRouter();
  const isMobile = useIsMobile();
  return (
    <>
      <AppBar
        color="inherit"
        position="sticky"
      >
        <Container maxWidth="sm">
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
                          disabled={router.pathname === path}
                          color={path === '/templates' ? 'secondary' : 'inherit'}
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
      </AppBar>
    </>
  );
}

export { navItems };
