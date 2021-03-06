import React from 'react';
import ReactDom from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import amber from '@material-ui/core/colors/amber';
import purple from '@material-ui/core/colors/purple';
import cyan from '@material-ui/core/colors/cyan';

import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
   root: {
      backgroundColor: purple["50"],
      color: purple["600"],
      borderColor: purple["100"],
      //padding: theme.spacing(2),
      justifyContent: 'flex-start',
   },
   robot: {
      fontSize: 12,
      backgroundColor: amber["50"],
      color: amber["800"],
      borderColor: amber["300"],
      justifyContent: 'flex-end',
   },
  me: {
      backgroundColor: cyan["50"],
      color: cyan["600"],
      borderColor: cyan["100"],
      //padding: theme.spacing(2),
      textAlign: 'right',
      alignSelf: 'flex-end',
  },
  sender: {
    color: indigo["600"],
  },
}));


export default function Message(props) {
    const classes = useStyles();
    
    let { sender, text, bot, self } = props
    
    if(bot) {
      return (
        <Box
          className={`msg-item ${classes.robot}`}
          border={ 1 }
        >
          <strong>{ sender }</strong>
          <p><em>{ text }</em></p>
        </Box>
      )
    } else {
        if(!text.trim())
          text = '... ' + String.fromCodePoint(0x1F43E)
        
        if(self) {
            return (
              <Box
                className={`msg-item ${classes.me}`}
                border={ 1 }
              >
                <strong className={classes.sender}>{ sender }</strong>
                <p><em>{ text }</em></p>
              </Box>
            )
        } else {
            return (
              <Box
                className={`msg-item ${classes.root}`}
                border={ 1 }
              >
                  <strong className={classes.sender}>{ sender }</strong>
                  <p>{ text }</p>
              </Box>
            )
        }
    }
}
