import React from 'react';
import Featured from '../../Components/Featured/Featured';
import FeaturedProperties from '../../Components/FeaturedProperties/FeaturedProperties';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MailList from '../../Components/MailList/MailList';
import Navbar from '../../Components/Navbar/Navbar';
import PropertyList from '../../Components/PropertyList/PropertyList';
import "./home.css"
const Home = () => {
    return (
        <div>
           <Navbar/>
           <Header/>
           <div className='home-container'>
                <Featured/>
                <h1 className='home-title'>Browse by property type</h1>
                <PropertyList/>
                <h1 className='home-title'>Homes guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>

           </div>
        </div>
    );
};

export default Home;