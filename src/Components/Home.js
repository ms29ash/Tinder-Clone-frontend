import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import '../Styles/Home.css'

function Home() {
    return (
        <div className="home">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Home
