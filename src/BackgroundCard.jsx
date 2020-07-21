/* global navigator */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
  IconButton,
  Snackbar,
  Button,
  makeStyles,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useHover from './useHover';
import useIsMobile from './useIsMobile';

const useStyles = makeStyles(() => ({
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function BackgroundCard({
  background,
  onClick,
}) {
  const [isCopying, setIsCopying] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [hoverRef, isHovering] = useHover();
  const classes = useStyles();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isCopying) {
      // Use an instantly invoked arrow function to allow for async/await inside useEffect
      (async () => {
        const camelToKebab = (string) => {
          return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
        };
        const cssString = Object.entries(background.styles)
          .map(([key, value]) => `${camelToKebab(key)}: ${value};`)
          .join('\n');
        await navigator.clipboard.writeText(cssString);
        setIsCopying(false);
        setIsCopied(true);
      })();
    }
  }, [isCopying]);

  return (
    <Box
      m={isMobile ? 2 : 5}
    >
      <Card ref={hoverRef}>
        <CardMedia>
          <Box position="relative">
            <Box
              style={{
                ...background.styles,
                ...background.preview,
              }}
              width={isMobile ? 300 : 500}
              height={isMobile ? 150 : 200}
            />
            {
              (isHovering || isMobile) && (
                <Box className={classes.overlay}>
                  <Box mb={1} width={125}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={onClick}
                      fullWidth
                    >
                      Preview
                    </Button>
                  </Box>
                  <Box width={125}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => setIsCopying(true)}
                      aria-label="Copy CSS to clipboard"
                    >
                      CSS
                    </Button>
                  </Box>
                </Box>
              )
            }
          </Box>
        </CardMedia>
        <CardContent>
          <Box
            mt={isMobile ? -0.5 : 0}
            mb={isMobile ? -1.5 : -1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant={isMobile ? 'h6' : 'h5'}>
              {background.name}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Snackbar
        open={isCopied}
        message={`CSS for "${background.name}" copied to clipboard!`}
        autoHideDuration={3000}
        onClose={() => setIsCopied(false)}
        action={(
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => setIsCopied(false)}
          >
            <Close fontSize="small" />
          </IconButton>
        )}
      />
    </Box>
  );
}
BackgroundCard.propTypes = {
  background: PropTypes.shape({
    name: PropTypes.string,
    styles: PropTypes.objectOf(PropTypes.string),
    preview: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
