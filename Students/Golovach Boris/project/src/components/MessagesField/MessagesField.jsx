import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Message from '../Message/Message.jsx'

//
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//

//actions
import { sendMessage } from '../../store/actions/messages_actions.js'

//redux
import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'

class Messages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '',
        }
    }
    //methods
    sendMessage = (text, sender) => {
        const { messages } = this.props
        const messageId = Object.keys(messages).length + 1;

        this.props.sendMessage(messageId, sender, text)
    }

    handleSendMessage = (message, sender) => {
        this.setState({ msg: '' })
        if (message) {
            this.sendMessage(message, sender)
        }
    }

    handleChange = (evt) => {
        if (evt.keyCode !== 13) {
            this.setState ({msg: evt.target.value})
        }else if(evt.keyCode == 13){
            this.handleSendMessage(this.state.msg, this.props.usr)
        }
    }

    componentDidUpdate () {
        if(Object.keys(this.props.messages).length % 2 === 1){
            setTimeout(() => {
                this.sendMessage('NOOOOOOOOOOOOOO...', 'Luke')
            }, 500);
        }
    }

    render() {
        let { usr } = this.props
        let { messages } = this.props

        let MessagesArr = []
        
        Object.keys(messages).forEach(key => {
            MessagesArr.push(<Message 
                sender={ messages[key].user } 
                text={ messages[key].text }
                key={ key }
            />)
        })

        return (
            <div className="container-fluid align-items-center">
                    <div className="col-md-3">
                    <div className="header">
                        <h2>ReactGram</h2>
                        <p>Hello { usr }!</p>
                    </div>
                    <div className="messagesBlock">
                        { MessagesArr }
                    </div>
                    <TextField
                        label="Введите сообщение"
                        fullWidth
                        margin="normal"
                        onChange = { this.handleChange } 
                        onKeyUp = { this.handleChange }
                        value = { this.state.msg }
                    />
                    <Button fullWidth variant="contained" color="primary" onClick = { () => this.handleSendMessage (this.state.msg, 'Darth Vader') }>Send</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
})

const mapDispatchToProps = dispatch => bindActionCreators( { sendMessage }, dispatch )

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
