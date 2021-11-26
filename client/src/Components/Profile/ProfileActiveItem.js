/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ReportModal from '../Feed/ReportModal';
import TradeModal from '../Feed/TradeModal';
import ItemModal from '../Feed/ItemModal';
import AddItem from './AddItem';
import { ItemsContext } from '../ItemsContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '98%',
  background: '#000000e5',
  border: '4px solid white',
  boxShadow: 75,
  borderRadius: '15px',
};

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 600,
  },
  hover2: {
    color: '#ffffff',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  hover3: {
    color: '#A10000',
    '&:hover': {
      color: '#ffffff',
    },
  },
  hover1: {
    color: '#161513',
    '&:hover': {
      color: '#f0CC71',
    },
  },
}));

export default function ItemCard(props) {
  const classes = useStyles();
  const { currentUserState, activeItemState } = useContext(ItemsContext);
  const [currentUser] = currentUserState;
  const { apiUrlState } = useContext(ItemsContext);
  const [apiUrl, setApiUrl] = apiUrlState;
  const { watchedItemsState } = useContext(ItemsContext);
  const [watchedItems, setWatchedItems] = watchedItemsState;

  // item modal
  const [openCard, setCardOpen] = useState(false);
  const handleCardOpen = () => setCardOpen(true);
  const handleCardClose = () => setCardOpen(false);

  // edit item modal
  const [openEditItem, setEditItem] = useState(false);
  const handleEditItemOpen = () => setEditItem(true);
  const handleEditItemClose = () => setEditItem(false);

  // delete item
  const handleDeleteItem = () => {
    console.log('Deleting item...');
    axios
      .get(`${apiUrl}/changeActiveStatus?uid=${currentUser.availableItem}`)
      .then((postResponse) => {
        console.log('Received put response:');
        console.log(postResponse);
      })
      .catch((err) => {
        console.log('Error received from put request:');
        console.log(err);
      });
  };

  const { itemName, itemDescription, itemOwner, itemPhoto, itemPhotos } =
    props.activeItem;
  const [itemBlurb, setItemBlurb] = useState('');

  useEffect(() => {
    if (itemDescription) {
      // eslint-disable-next-line prefer-template
      setItemBlurb(itemDescription.slice(0, 60) + '...');
      if (itemDescription.length < 60) {
        setItemBlurb(itemDescription);
      }
    }
  }, [props.activeItem]);

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  const convertTimestamp = (timestamp) => {
    const MDY = timestamp.slice(0, 10);
    const dateArr = MDY.toString().split('-');

    const year = dateArr[0];
    const month = months[dateArr[1] - 1];
    const day = dateArr[2];

    const date = `${month} ${day}, ${year}`;
    return date;
  };

  return (
    <div className={classes.root}>
      <Modal open={openCard} onClose={handleCardClose}>
        <Box style={{ overflow: 'auto' }} sx={style}>
          <ItemModal
            handleCardClose={handleCardClose}
            item={props.activeItem}
          />
        </Box>
      </Modal>
      <Modal open={openEditItem} onClose={handleEditItemClose}>
        <Box sx={style} style={{ backgroundColor: '#494D53', maxWidth: '25%' }}>
          <AddItem handleEditItemClose={handleEditItemClose} type="edit" />
        </Box>
      </Modal>

      {/* <Grid container xs={12} style={{ justifyContent: 'center' }}>
        <Grid container item xs={6} justifyContent="space-evenly">
          <Button
            color="inherit"
            variant="outlined"
            className={classes.hover2}
            onClick={handleEditItemOpen}
            sx={{ marginBottom: 2 }}
          >
            Change Item
          </Button>
        </Grid>{' '}
        <Grid container item xs={6} justifyContent="space-evenly">
          <Button
            color="inherit"
            variant="outlined"
            className={classes.hover2}
            onClick={handleDeleteItem}
            sx={{ marginBottom: 2 }}
          >
            Delete Item
          </Button>
        </Grid>
      </Grid> */}
      <Grid container style={{ justifyContent: 'center' }}>
        <Card
          style={{
            backgroundColor: '#494D53',
            border: '1px solid',
            borderColor: '#FFF',
            borderRadius: '15px',
            paddingBottom: -50,
          }}
        >
          <CardMedia
            component="img"
            height={props.height}
            image={itemPhoto}
            style={{
              objectFit: 'cover',
              minHeight: '275px',
              maxHeight: '250px',
            }}
            alt="Active item image"
            onClick={handleCardOpen}
          />
          <Grid container style={{ marginTop: '6px' }}>
            <Grid
              container
              item
              xs={10}
              justifyContent="flex-start"
              alignItems="baseline"
            >
              <Typography
                variant="h5"
                style={{ marginLeft: '22px', color: '#F0CC71' }}
              >
                {itemName}
              </Typography>
            </Grid>
          </Grid>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: red[500], marginLeft: '8px' }}
                src={props.activeItem.itemOwnerPhoto}
                aria-label="user_avatar"
              />
            }
            title={itemOwner}
            subheader={convertTimestamp(props.activeItem.createdAt)}
            style={{
              marginBottom: '-20px',
              marginTop: '-12px',
              color: '#FFFFFF',
            }}
          />
          <CardContent>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              style={{ marginBottom: '20px' }}
            >
              <Typography
                variant="body2"
                color="white"
                style={{ marginLeft: '10px' }}
                display="inline"
              >
                {itemBlurb}
                <Link
                  className={classes.hover1}
                  component="button"
                  underline="none"
                  display="inline"
                  color="cardButton"
                  onClick={handleCardOpen}
                >
                  Read more
                </Link>
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid container xs={12} style={{ justifyContent: 'center' }}>
        <Grid container item xs={6} justifyContent="space-evenly">
          <Button
            color="inherit"
            variant="outlined"
            className={classes.hover2}
            onClick={handleEditItemOpen}
            sx={{ marginTop: 2 }}
          >
            Change Item
          </Button>
        </Grid>{' '}
        <Grid container item xs={6} justifyContent="space-evenly">
          <Button
            color="inherit"
            variant="outlined"
            className={classes.hover2}
            onClick={handleDeleteItem}
            sx={{ marginTop: 2 }}
          >
            Delete Item
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
