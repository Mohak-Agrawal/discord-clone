import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

const Message = () => {
    return (
        <div className="message">
            <Avatar/>
            <div className="message-info">
                <h4>elmaximo
                    <span className="message-timestamp">this is a timestamp</span>
                </h4>
                <p>This is a message</p>
            </div>
        </div>
    )
}

export default Message
