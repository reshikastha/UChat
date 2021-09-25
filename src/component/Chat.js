import React, {useState} from 'react';
import '../css/Chat.css'
import {Avatar, IconButton} from "@material-ui/core"
import AttachFile from "@material-ui/icons/AttachFile"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import InsertEmoticon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'


function Chat() {
    const [input, setInput] = useState("");

    const sendMessage = (e) =>{
        e.preventDefault();
        console.log("You typed", input)

        setInput("")
    }
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
                <p className={`chat_message ${true && 'chat_receiver'}`}>
                <span className="chat_name">
                        Reshika Shrestha
                    </span>
                    Hello Guys
                <span className="chat_timestamp">
                    3:52px
                </span>
                </p>
             
            </div>
            <div className="chat_footer">
                <InsertEmoticon/>
                <form>
                    <input value={input} onChange={(e) =>setInput(e.target.value)}
                    type="text" 
                    placeholder="Type new meassge"/>


                    <button onClick={sendMessage} type="submit"> Send </button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
