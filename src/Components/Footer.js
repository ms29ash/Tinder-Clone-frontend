import React from 'react'
import '../Styles/Footer.css'
import IconButton from '@mui/material/IconButton';

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function Footer() {
    return (
        <div className="footer">
            <IconButton className="icon-btn" >

                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="icon-btn" >
                <CloseIcon fontSize="large" />

            </IconButton>
            <IconButton className="icon-btn" >

                <StarIcon fontSize="large" />
            </IconButton>
            <IconButton className="icon-btn" >

                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="icon-btn">
                <FlashOnIcon fontSize="large" />

            </IconButton>


        </div>
    )
}

export default Footer
