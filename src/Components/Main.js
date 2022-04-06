import React, { useEffect, useState } from 'react'
import '../Styles/Main.css'
import Card from './Card'
import axios from '../axios'


function Main() {
    const [person, setPerson] = useState([]);
    useEffect(() => {
        async function getPerson() {
            const response = await axios.get('/get/person');
            // console.log(response.data);
            setPerson(response.data);
        }
        getPerson();

    }, [])

    return (
        <div className="main">
            {
                person.map((profile) => {

                    return <Card key={profile._id} img={profile.img} name={profile.name} age={profile.age} address={profile.address} />
                })
            }



        </div>
    )
}

export default Main
