import React from 'react'
import ChatHeader from '../ChatHeader/ChatHeader'
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons';
import './Chat.css'
import Message from '../Message/Message';

const Chat = () => {
    return (
        <div className="chat">
            <ChatHeader/>
            <div className="chat-messages">
                <Message/>
                <Message/>
                <Message/>
            </div>
            <div className="chat-input">
                <AddCircle fontSize="large"/>
                <form>
                    <input placeholder={`Message #TESTCHANNEL`}/>
                    <button className="chat-inputButton" type='submit'>Send Message</button>
                </form>

                <div className="chat-inputIcons">
                     <CardGiftcard fontSize="large"/>
                     <Gif fontSize="large"/>
                     <EmojiEmotions fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
