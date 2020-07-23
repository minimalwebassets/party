import React, { useState } from 'react';
import {
  Typography,
  Container,
  Box,
  Paper,
  makeStyles,
  useTheme,
  Fab,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useRouter } from 'next/router';
import Axios from 'axios';
import useIsMobile from './useIsMobile';

const useStyles = makeStyles((theme) => ({
  sendIcon: {
    marginLeft: theme.spacing(1),
  },
}));

export default function Reservation() {
  const styles = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const isMobile = useIsMobile();

  const reservationForm = (
    <Formik
      enableReinitialize
      initialValues={{
        name: '',
        email: '',
        date: '',
        time: '',
        groupSize: '',
        message: '',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const { data } = await Axios.post('/.netlify/functions/reservation', values);
          setSubmitting(false);
          setIsError(false);
          if (data.accepted.length > 0) {
            router.push('/danke');
          }
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
          setIsError(true);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {
            [
              {
                name: 'name',
                type: 'text',
                required: true,
                label: 'Name',
              },
              {
                name: 'email',
                type: 'email',
                required: true,
                label: 'E-Mail',
              },
              {
                name: 'date',
                type: 'date',
                label: 'Date',
              },
              {
                name: 'time',
                type: 'time',
                label: 'Time',
              },
              {
                name: 'groupSize',
                type: 'text',
                label: 'Group Size',
              },
              {
                name: 'message',
                type: 'text',
                label: 'Message',
                multiline: true,
                rows: 10,
              },
            ].map(({
              type,
              name,
              required,
              label,
              multiline,
              rows,
            }) => (
              <Field
                key={name}
                type={type}
                name={name}
                label={label}
                required={required}
                multiline={multiline}
                rows={rows}
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
                InputLabelProps={{ shrink: true }}
                component={TextField}
              />
            ))
          }
          <Box
            align="right"
            pt={1}
            pb={isMobile ? 2 : 2}
          >
            <Fab
              color="secondary"
              variant="extended"
              type="submit"
              disabled={isSubmitting}
            >
              Send
              <Send className={styles.sendIcon} />
            </Fab>
          </Box>
          { isError && (
            <Box
              height={theme.spacing(1)}
              align="right"
              color="error.main"
            >
              Something went wrong. Please try again.
            </Box>
          )}
        </Form>
      )}
    </Formik>
  );

  return (
    <Container
      maxWidth={isMobile ? 'xs' : 'md'}
      id="Reservation"
    >
      <Box
        display="flex"
        flexDirection="column"
        pt={isMobile ? 8 : 16}
        pb={isMobile ? 4 : 8}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h4'}
          component="h2"
          gutterBottom
        >
          Reservation
        </Typography>
        <Paper>
          <Box pt={2} px={4}>
            {reservationForm}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
