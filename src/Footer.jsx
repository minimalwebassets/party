import React from 'react';
import {
  Typography,
  Container,
  Box,
  Link as MuiLink,
  withStyles,
} from '@material-ui/core';
import {
  Instagram,
  Facebook,
  KeyboardArrowUp,
} from '@material-ui/icons';
import useIsMobile from './useIsMobile';

const BoxOutline = withStyles(
  (theme) => ({
    root: {
      borderTop: `2px solid ${theme.palette.secondary.main}`,
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  }),
)(Box);

export default function Footer() {
  const isMobile = useIsMobile();
  return (
    <BoxOutline component="footer">
      <Container maxWidth={isMobile ? 'xs' : 'md'}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          pt={6}
          pb={4}
          pr={2}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            width={isMobile ? 'auto' : '60%'}
            flexGrow={isMobile ? 1 : 0}
          >
            {!isMobile && (
              <Typography variant="caption" color="textSecondary">
                Follow us on:
              </Typography>
            )}
            <MuiLink
              href="https://www.instagram.com/"
              variant="body1"
              rel="external"
              target="_blank"
              color="textPrimary"
            >
              <Box
                display="flex"
                alignItems="center"
              >
                <Instagram
                  color="secondary"
                  fontSize="small"
                />
                <Box pl={1}>
                  Instagram
                </Box>
              </Box>
            </MuiLink>
            <MuiLink
              href="https://www.facebook.com/"
              variant="body1"
              rel="external"
              target="_blank"
              color="textPrimary"
            >
              <Box
                display="flex"
                alignItems="center"
              >
                <Facebook
                  color="secondary"
                  fontSize="small"
                />
                <Box pl={1}>
                  Facebook
                </Box>
              </Box>
            </MuiLink>
          </Box>
          <MuiLink
            href="#"
            variant="body1"
            color="textPrimary"
          >
            <KeyboardArrowUp
              color="secondary"
              fontSize="large"
            />
          </MuiLink>
        </Box>
      </Container>
    </BoxOutline>
  );
}
