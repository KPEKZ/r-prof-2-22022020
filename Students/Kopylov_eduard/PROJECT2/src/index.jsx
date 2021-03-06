import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';
import Messages from './components/MessagesField/MessagesField.jsx';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header.jsx';
import ChatColumn from './components/ChatColumn/ChatColumn.jsx'
let user = 'Me';

ReactDom.render(
    <Container>
     <Header />

     <Grid container direction = 'row'>
     <Grid item xs={3}>
     <ChatColumn />
     </Grid>
     
     <Grid item xs={9}>
     <Messages usr = {user}/>


     </Grid>
           
           
            
     </Grid>
       
    </Container>
    ,
    document.getElementById('app')
    
);