import React from 'react';
import {
  Typography,
  Box,
  Container,
} from '@material-ui/core';
import Hero from '../../src/Hero';
import Footer from '../../src/Footer';
import useIsMobile from '../../src/useIsMobile';

export default function Privacy() {
  const isMobile = useIsMobile();

  return (
    <>
      <Hero
        title="Your Privacy"
        subtitle="You have the right to remain anonymous"
      />
      <Box py={10}>
        <Container maxWidth={isMobile ? 'sm' : 'lg'}>
          <Typography variant={isMobile ? 'h5' : 'h4'} gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et dui in ipsum venenatis ultrices. Nunc et ex tellus. Mauris nec neque vel massa ornare ultricies. Aliquam erat volutpat. Donec venenatis accumsan odio, a ultrices elit ultricies at. Donec in ante sapien. Etiam sit amet mauris mi. Suspendisse maximus maximus accumsan. Integer lobortis neque quis felis pellentesque, quis maximus sem sollicitudin. Maecenas elit neque, commodo at dui eget, suscipit commodo orci. Sed imperdiet eros eget urna tincidunt semper.
            <br />
            Donec a diam ac tortor efficitur blandit vitae vel massa. Mauris iaculis id ligula ut dignissim. In id facilisis sem, sed congue orci. Vivamus congue nisl ut ipsum vulputate elementum. Ut eget lectus ut ante ullamcorper porta quis ut ex. Morbi consectetur orci non neque finibus sagittis. Phasellus lacinia lorem in sem ultrices, quis feugiat ante suscipit. Nulla rhoncus ligula vitae ipsum semper, in fringilla ex interdum. Pellentesque bibendum sollicitudin ante sed convallis. Nam in vulputate augue. Suspendisse mollis massa ac orci auctor, a tempor urna aliquam. Nullam id dolor eu quam tincidunt malesuada ut luctus ante. Pellentesque congue, nunc ac dapibus placerat, lorem lacus iaculis lectus, in maximus arcu sapien ac urna. Aliquam ac lacus tincidunt, ultricies ex nec, vulputate risus. In sed nibh vitae nisl tempus convallis sed ut velit.
            <br />
            Aenean eget convallis enim, tempor rutrum dolor. Nullam massa purus, porttitor quis posuere eget, rutrum nec nulla. Aliquam ut aliquam sapien, ac aliquet erat. Duis a tellus et neque laoreet dapibus. Nullam purus libero, faucibus eget tellus eget, lobortis vulputate nunc. Nulla eleifend justo a euismod consequat. Pellentesque consequat vitae sem sed eleifend. Integer vitae sem ipsum. Pellentesque dapibus nisl lacus, vitae condimentum odio cursus sit amet.
            <br />
            Fusce ut ipsum eros. Sed et velit convallis, interdum purus a, pellentesque sem. Etiam efficitur, augue et ullamcorper rutrum, velit felis vestibulum turpis, ac feugiat ipsum libero eu nibh. Aenean at sem id metus dignissim sollicitudin. Donec accumsan aliquet nulla bibendum ornare. Phasellus egestas tempus elit, ut molestie ipsum suscipit in. Vivamus lobortis id justo et dictum. Nam elementum finibus leo, ut pulvinar diam feugiat ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue nisl elit, eu maximus dui rutrum ut. Nunc a elit est. Aenean laoreet ligula eu ex vehicula pulvinar.
            <br />
            Donec mollis molestie risus sed egestas. Duis sed libero libero. Vestibulum fermentum eu neque non maximus. Nulla vitae lectus et nisl eleifend volutpat id ut elit. Suspendisse vehicula, metus id varius vulputate, neque elit faucibus erat, eget maximus neque risus gravida lacus. Nullam varius porta venenatis. Nulla ut dictum neque, blandit ornare mi. Morbi tristique, eros eget egestas convallis, neque mauris pharetra magna, eu aliquam dui mauris nec ante. Donec mollis in velit non auctor. Pellentesque nec tempus elit. Suspendisse tempus mollis diam a faucibus. Nunc ligula enim, consequat eu diam a, suscipit elementum felis. Vestibulum cursus dictum tincidunt.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
