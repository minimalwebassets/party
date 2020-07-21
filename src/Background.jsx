import React from 'react';
import PropTypes from 'prop-types';
import { Box, NoSsr } from '@material-ui/core';

export default function Background({ background, children }) {
  return (
    <Box position="relative">
      <NoSsr>
        <Box
          style={{
            position: 'absolute',
            zIndex: -1,
            height: '100%',
            width: '100%',
            backgroundAttachment: 'fixed',
            ...background.styles,
          }}
        />
      </NoSsr>
      {children}
    </Box>
  );
}
Background.propTypes = {
  background: PropTypes.shape({
    name: PropTypes.string,
    styles: PropTypes.objectOf(PropTypes.string),
    preview: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  children: PropTypes.node.isRequired,
};
