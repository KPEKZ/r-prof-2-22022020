import React from 'react';
import ReactDom from 'react-dom';
import { Grid } from '@material-ui/core';
import './style.css';


let msg = (props)=>{
    let { sender, text,chatId} = props;
    sender ? sender = sender : sender = 'Luke';
    if (sender !== 'Me')
    {return (
        

        <Grid item  className = 'msg'>
            <strong className= 'sender'>{sender} </strong>
            <p className = 'messageText'>{props.sender || (!props.sender && text) ? text: 'go away...'}</p>
        </Grid>
    )}
    else {
        return (
        

        <Grid item  className = 'msgRight'>
            <strong className= 'sender'>{sender} </strong>
            <p className = 'messageText'>{props.sender || (!props.sender && text) ? text: 'go away...'}</p>
        </Grid>
    )
    }



}

export default msg;