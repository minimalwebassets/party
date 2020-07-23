import React, { useState } from 'react';
import {
  Typography,
  Container,
  Box,
  Paper,
  GridList,
  GridListTile,
  makeStyles,
  ButtonBase,
  Dialog,
} from '@material-ui/core';
import useIsMobile from './useIsMobile';

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: 800,
    height: 800,
    [theme.breakpoints.down('md')]: {
      width: 312,
      height: 312,
    },
  },
}));

export default function Gallery() {
  const isMobile = useIsMobile();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currImg, setCurrImg] = useState('');

  const handleOpen = (event, src) => {
    setOpen(true);
    setCurrImg(src);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <img
      src={currImg}
      width="100%"
      alt=""
    />
  );

  return (
    <>
      <Container
        maxWidth={isMobile ? 'xs' : 'md'}
        id="Gallery"
        disableGutters={isMobile}
      >
        <Box
          display="flex"
          flexDirection="column"
          pt={isMobile ? 8 : 16}
          pb={isMobile ? 4 : 8}
        >
          <Box px={isMobile ? 2 : 0}>
            <Typography
              variant={isMobile ? 'h4' : 'h4'}
              component="h2"
              gutterBottom
            >
              Gallery
            </Typography>
          </Box>
          <Paper square={isMobile}>
            <Box
              display="flex"
              justifyContent="center"
              py={isMobile ? 2 : 7}
            >
              <GridList
                cellHeight={isMobile ? 100 : 250}
                className={classes.gridList}
                cols={3}
                spacing={isMobile ? 4 : 16}
              >
                {
                  [
                    '/gallery/glasses.jpg',
                    '/gallery/concert2.jpg',
                    '/gallery/birthday-cake.jpg',
                    '/gallery/ticket.jpg',
                    '/gallery/fireworks.jpg',
                    '/gallery/oktoberfest.jpg',
                    '/gallery/leaves.jpg',
                    '/gallery/roses.jpg',
                    '/gallery/bar.jpg',
                  ].map((src) => (
                    <ButtonBase
                      component={GridListTile}
                      onClick={(event) => handleOpen(event, src)}
                    >
                      <img src={src} alt="" />
                    </ButtonBase>
                  ))
                }
              </GridList>
            </Box>
          </Paper>
        </Box>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
      >
        {body}
      </Dialog>
    </>
  );
}
