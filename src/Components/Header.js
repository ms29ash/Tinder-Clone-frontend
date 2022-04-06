import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import '../Styles/Header.css'
import IconButton from '@mui/material/IconButton';


function Header() {
    return (
        <header className="header">
            <IconButton>
                <PersonIcon fontSize="large" />

            </IconButton>
            <img src="/Tinder-Logo-PNG4.png" alt="" />
            <IconButton>

                <ChatBubbleIcon fontSize="large" />
            </IconButton>


        </header>
    )
}

export default Header
