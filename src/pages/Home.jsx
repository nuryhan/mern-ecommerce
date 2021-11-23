import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import SliderComponent from '../components/SliderComponent'

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <SliderComponent/>
        </div>
    )
}

export default Home
