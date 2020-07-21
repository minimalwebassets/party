import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Box,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import Link from 'next/link';
import useIsMobile from './useIsMobile';

const useStyles = makeStyles((theme) => ({
  illustration: {
    height: 220,
    padding: theme.spacing(1, 4),
    [theme.breakpoints.down('sm')]: {
      height: 160,
    },
  },
}));

export default function IndexCard({
  title,
  color,
  description,
  callToAction,
  Illustration,
}) {
  const classes = useStyles();
  const path = `/${title.toLowerCase()}`;
  const isMobile = useIsMobile();

  return (
    <Box m={1}>
      <Paper>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={isMobile ? 300 : 480}
          minWidth="100%"
          px={isMobile ? 4 : 8}
          py={isMobile ? 3 : 6}
        >
          <Box pb={2} px={2}>
            <Typography variant="h5">
              {title}
            </Typography>
          </Box>
          <Typography variant="body1">
            {description}
          </Typography>
          <Box py={isMobile ? 2 : 4}>
            <Link href={path} passHref>
              <Button
                variant="contained"
                component="a"
                color={color}
              >
                {callToAction}
              </Button>
            </Link>
          </Box>
          <Illustration className={classes.illustration} />
        </Box>
      </Paper>
    </Box>
  );
}
IndexCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  description: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired,
  Illustration: PropTypes.func.isRequired,
};
IndexCard.defaultProps = {
  color: 'primary',
};
