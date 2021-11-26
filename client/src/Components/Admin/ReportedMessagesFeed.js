import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

import ReportedMessage from './ReportedMessage';

const reportedMessages = [
  {
    id: 1,
    user: 'Jerry Smith',
    message: `I’m Mr. Crowbar, and this is my friend, who is also a crowbar.`,
  },
  {
    id: 2,
    user: 'Rick Sanchez',
    message: `It's like the N word and the C word had a baby and it was raised by all the bad words for Jews`,
  },
  {
    id: 3,
    user: 'Beth Smith',
    message:
      'Okay, let’s go see this latest piece of Marvel s*** you kids are jizzing over.',
  },
];

const ReportedMessagesFeed = () => {
  const nothing = {};

  return (
    <Grid container justifyContent="space-between" spacing={6}>
      {reportedMessages.map((reportedMessage) => (
        <Grid item xs={12} key={reportedMessage.id}>
          <ReportedMessage
            message={reportedMessage.message}
            user={reportedMessage.user}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ReportedMessagesFeed;
