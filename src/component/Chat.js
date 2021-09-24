import React from 'react'
import '../css/Chat.css'
import {Avatar, IconButton} from "@material-ui/core"
import AttachFile from "@material-ui/icons/AttachFile"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlined from "@material-ui/icons/SearchOutlined"

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7ECizMinUV4oPQG6BUFIZZmeXehbj7pytQ&usqp=CAU" />
                <div className="chat_headerInfo">
                    <h2>Room name</h2>
                    <p>Last Message......</p>
                </div>
                <div className="chat_headerRight">
                <IconButton>
                    <AttachFile/>
                </IconButton>

                <IconButton>
                    <SearchOutlined/>
                </IconButton>

                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                </div>
            </div>
            <div className="chat_body">

            </div>
            <div className="chat_footer">

            </div>
        </div>
    )
}

export default Chat
