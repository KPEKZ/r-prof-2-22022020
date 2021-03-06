import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Row, ListGroup, Button, } from 'react-bootstrap';

import Messages from '../MessagesField/MessagesField.jsx';


export default class Layout extends React.Component {
   static propTypes = { 
      chatId: PropTypes.number, 
   };
   static defaultProps = {
      chatId: 1
   }

   render() {
      let user = 'Darth Vader';
      const chatId = Number(this.props.match.params.chatId) || 1;

      return (
         <Row className="align-items-end h-75 flex-grow-1">
            <div className="bg-light h-100 col-2 d-flex flex-column justify-content-between p-0">
               <div>
                  <p>Hello {user}!</p>
                  <Button variant="outline-primary w-100 mb-5">New chat</Button>
                  <ListGroup>
                     <Link to="/chat/1">
                        <ListGroup.Item action>Chat 1</ListGroup.Item>
                     </Link>
                     <Link to="/chat/2">
                        <ListGroup.Item action>Chat 2</ListGroup.Item>
                     </Link>
                  </ListGroup>
               </div>
               <footer className="text-white bg-dark w-100 text-center">
                  ReactGram &copy;
               </footer>
            </div>
            <Messages usr={user} chatId={chatId}/>
         </Row>
      );
   }
}