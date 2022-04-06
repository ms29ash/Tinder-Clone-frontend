import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import '../Styles/Card.css'


function Card({ img, age, name, address }) {





    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    return (
        <div className="card">

            <TinderCard onSwipe={onSwipe}
                preventSwipe={['up', 'down']}>
                <div className="img">


                    <img className="swipeImg" src={img} alt="" />
                    {/* <img className="swipeImg" src="https://thispersondoesnotexist.com/" alt="" /> */}
                </div>
                <div className="details">
                    <h1 className="detail">{name} </h1>
                    <p className="detail">{age}</p>
                    <p className="detail">{address}</p>
                </div>
            </TinderCard>




        </div>
    )
}

export default Card
