import React, {Component} from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
   root: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(2),
      justifyContent: 'space-around',
   },
   hovered: {
      '&:hover, &:active': {
         color: theme.palette.secondary.main
      },
   },
}));

export default function ChatsHead() {
  const classes = useStyles();

  return (
    <div className="chats-head">
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Fab className={classes.hovered} color="primary" aria-label="menu">
            <Icon>menu</Icon>
          </Fab>
          <Typography className={classes.title}>
            GeekMessenger&trade;
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
