import React from 'react';
import '../css/SidebarChat.css';
import {Avatar, IconButton} from "@material-ui/core"


function SidebarChat({addNewChat}) {

    const createChat = () => {
        const roomName= prompt("please enter name for chat");
        if(roomName){
            //do some clever database stuff..
        }
    }
    return !addNewChat ?(
        <div className="sidebarChat">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7ECizMinUV4oPQG6BUFIZZmeXehbj7pytQ&usqp=CAU" />
            <div className="sidebarChat_info">
                <h2>Room name</h2>
                <p>Last Message......</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>

        </div>
    )
}

export default SidebarChat
