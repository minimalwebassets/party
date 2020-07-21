import React from 'react';
import {
  Paper,
  Typography,
  Container,
  Box,
  Link as MuiLink,
} from '@material-ui/core';
import { navItems } from './Nav';
import Link from './Link';
import useIsMobile from './useIsMobile';

export default function Footer() {
  const isMobile = useIsMobile();
  return (
    <Paper square component="footer">
      <Container maxWidth={isMobile ? 'xs' : 'md'}>
        <Box
          display="flex"
          justifyContent={isMobile ? 'space-between' : 'space-around'}
          alignItems="flex-start"
          pt={5}
          pb={8}
        >
          {
            [
              {
                title: 'Navigate',
                items: navItems,
              },
              {
                title: 'About',
                items: [
                  { label: 'Us', path: '/about' },
                  { label: 'Privacy', path: '/about/privacy' },
                ],
              },
              {
                title: 'Social',
                items: [
                  { label: 'Reddit', path: 'https://www.reddit.com/r/MinimalWebAssets', isExternal: true },
                  { label: 'Instagram', path: 'https://www.instagram.com/skyrandsauerkraut/', isExternal: true },
                ],
              },
            ].map(({ title, items }) => (
              <Box
                display="flex"
                flexDirection="column"
                key={title}
              >
                <Typography variant="caption" color="textSecondary" gutterBottom>
                  {title}
                </Typography>
                {
                  items.map(({ label, path, isExternal }) => (
                    <MuiLink
                      key={label}
                      href={path}
                      variant="body1"
                      component={isExternal ? 'a' : Link}
                      rel={isExternal ? 'external' : ''}
                      target={isExternal ? '_blank' : '_self'}
                    >
                      {label}
                    </MuiLink>
                  ))
                }
              </Box>
            ))
          }
        </Box>
      </Container>
    </Paper>
  );
}
