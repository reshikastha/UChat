import React, { useEffect, useState } from 'react';
import '../css/SidebarChat.css';
import {Avatar, IconButton} from "@material-ui/core";
import db from '../firebase'
import { Link } from 'react-router-dom';


function SidebarChat({id, name, addNewChat}) {

    const[messages,setMessages]= useState("");
    useEffect(()=>{
        if(id){
            db.collection('rooms')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot) =>(
                setMessages(snapshot.docs.map((doc) =>
                doc.data())
                )
            ))
        }
    }, [id])

    const createChat = () => {
        const roomName= prompt("please enter name for chat");
        if(roomName){
            //do some clever database stuff..
            db.collection("rooms").add({
                name:roomName,
            })
        }
    }
    return !addNewChat ?(
        <Link to ={`/rooms/${id}`}>
        <div className="sidebarChat">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7ECizMinUV4oPQG6BUFIZZmeXehbj7pytQ&usqp=CAU" />
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
        </Link>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>

        </div>
    )
}

export default SidebarChat
