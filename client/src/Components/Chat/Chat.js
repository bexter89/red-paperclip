import * as React from "react";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import { spacing } from '@mui/system';


import Jason from './img/Jason.jpg';

export default function BasicList() {
  return (
    <Box m={2} pt={2}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper elevation={3}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="/{username}">
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar alt="Jesson W" src={Jason} />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Jesson W"
                          secondary="Jan 7, 2014"
                        />
                      </ListItem>
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider />
              </nav>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItemButton component="a" href="/{username}">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>MS</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Matt S" secondary="July 20, 2014" />
                    </ListItem>
                  </ListItemButton>
                  <ListItemButton component="a" href="/{username}">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>BH</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Blake H" secondary="July 20, 2014" />
                    </ListItem>
                  </ListItemButton>
                  <ListItemButton component="a" href="/{username}">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>BC</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Bekah C" secondary="July 20, 2014" />
                    </ListItem>
                  </ListItemButton>
                  <ListItemButton component="a" href="/{username}">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>CE</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Cory E" secondary="July 20, 2014" />
                    </ListItem>
                  </ListItemButton>
                  <ListItemButton component="a" href="/{username}">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>TM</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Travis M"
                        secondary="July 20, 2014"
                      />
                    </ListItem>
                  </ListItemButton>

                  <ListItemButton component="a" href="/{username}">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>WF</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Will F" secondary="July 20, 2014" />
                    </ListItem>
                  </ListItemButton>

                  <ListItemButton component="a" href="/{username}">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>PX</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Pingping X"
                        secondary="Jan 9, 2014"
                      />
                    </ListItem>
                  </ListItemButton>
                </List>
              </nav>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper elevation={6} style={{ height: 550 }}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem>
                    <ListItemButton component="a" href="/{username}">
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar alt="Jesson W" src={Jason} />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Jesson W"
                          secondary="Trusted User"
                        />
                        <Chip icon={<MdPhone />} label="Call me" />
                      </ListItem>
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider />
              </nav>
              <div style={{ width: '100%' }}>
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      p: 1,
                      m: 1,
                      bgcolor: 'background.paper',
                    }}
                  >
                  <DeleteIcon />
                  </Box>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>JW</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Hi, I am interested to make a trade with you!" />
                  </ListItem>
                </Box>
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>JW</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="How you like that?" />
                  </ListItem>
                </Box>
              </div>
            </Paper>
            <Paper elevation={6} style={{ height: 170 }}>
              <Box m={2} pt={2}>
                <TextField
                  fullWidth
                  id="fullWidth"
                  label="Private Chat Room With Jesson"
                  multiline
                  rows={4}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
