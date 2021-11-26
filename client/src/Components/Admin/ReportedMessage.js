import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 600,
  },
  hover1: {
    color: '#666',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  hover2: {
    color: '#FFFFFF',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  button: {
    // color: '#000000',
    '&:hover': {
      color: '#ffffff',
    },
  },
}));

const ReportedMessage = ({ user, message }) => {
  const classes = useStyles();
  const handleDeleteMessageClick = () => {
    console.log('Clicked Delete Message');
  };
  const handleDismissReportClick = () => {
    console.log('Clicked Dismiss Report');
  };
  const handleBanUserClick = () => {
    console.log('Clicked Ban User');
  };

  const timesArr = [
    '3 hours ago',
    '2 days ago',
    '16 hours ago',
    '1 day ago',
    '35 minutes ago',
  ];

  return (
    <div>
      <Card
        sx={{
          backgroundColor: '#494D53',
          border: '1px solid',
          borderColor: '#FFF',
          borderRadius: '15px',
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={3}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: red[500], marginLeft: '8px' }}
                  aria-label="user_name"
                />
              }
              title={user}
              subheader={timesArr[Math.floor(Math.random() * timesArr.length)]}
              style={{
                color: '#FFF',
              }}
            />
          </Grid>
          <Grid item xs={9}>
            <Typography
              variant="body2"
              color="white"
              style={{ marginLeft: '10px' }}
              display="inline"
            >
              Reported Message:
            </Typography>
            <Typography
              variant="body2"
              color="white"
              style={{ marginLeft: '10px' }}
              display="inline"
            >
              &quot;{message}&quot;
            </Typography>
          </Grid>
        </Grid>
      </Card>
      <Grid
        container
        style={{ marginTop: '5px', marginBottom: '15px' }}
        spacing={2}
        item
        xs={12}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item container xs={3} style={{ justifyContent: 'flex-end' }}>
          <Button
            // color="inherit"
            fullWidth
            variant="outlined"
            className={classes.button}
            sx={{
              height: 60,
              backgroundColor: '#161513',
              color: '#066F04',
              border: '1px solid white',
            }}
            onClick={handleDismissReportClick}
          >
            Dismiss Report
          </Button>
        </Grid>
        <Grid item container xs={3} style={{ justifyContent: 'center' }}>
          <Button
            // color="inherit"
            fullWidth
            variant="outlined"
            className={classes.button}
            sx={{
              height: 60,
              backgroundColor: '#161513',
              color: '#A10000',
              border: '1px solid white',
            }}
            onClick={handleDeleteMessageClick}
          >
            Delete Message
          </Button>
        </Grid>
        <Grid item container xs={3} style={{ justifyContent: 'flex-start' }}>
          <Button
            // color="inherit"
            fullWidth
            variant="outlined"
            className={classes.button}
            sx={{
              height: 60,
              backgroundColor: '#161513',
              color: '#F0CC71',
              border: '1px solid white',
            }}
            onClick={handleBanUserClick}
          >
            Ban User
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReportedMessage;
