import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import "./hotel.css"
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {

    const photos = [
        {
            src:"https://hotelmemories.hu/application/files/5815/4998/0282/old-town-hotel-rooms-superior-double-twin-room-1080-810.jpg"
        },
        {
            src:"https://hotelmemories.hu/application/files/5815/4998/0282/old-town-hotel-rooms-superior-double-twin-room-1080-810.jpg"
        },
        {
            src:"https://hotelmemories.hu/application/files/5815/4998/0282/old-town-hotel-rooms-superior-double-twin-room-1080-810.jpg"
        },
        {
            src:"https://hotelmemories.hu/application/files/5815/4998/0282/old-town-hotel-rooms-superior-double-twin-room-1080-810.jpg"
        },
        {
            src:"https://hotelmemories.hu/application/files/5815/4998/0282/old-town-hotel-rooms-superior-double-twin-room-1080-810.jpg"
        },
        {
            src:"https://hotelmemories.hu/application/files/5815/4998/0282/old-town-hotel-rooms-superior-double-twin-room-1080-810.jpg"
        },
    ]

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className='hotel-container'>
                <div className='hotel-wrapper'>
                    <h1 className='hotel-title'>Grand Hotel</h1>
                    <div className='hotel-address'>
                        <FontAwesomeIcon icon={faMapLocationDot}/>
                        <span>Gulshan St 120 Dhaka</span>
                    </div>
                    <span className='hotel-distance'>Excellent location - 600m from center</span>
                    <span className='hotel-price-highlight'>Book a stay over $120 at this property and get a free airport taxi</span>
                    <div className='hotel-img'>
                        {photos.map(photo => (
                            <div className='hotel-img-wrapper'>
                                <img src={photo.src} alt="" className='hotel-img'/>
                            </div>
                        ))}
                    </div>
                    <div className='hotel-details'>
                        <div className='hotel-details-text'>
                            <h1 className='hotel-title'>Stay in the heart of dhaka</h1>
                            <p className='hotel-desc'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque facere dolore placeat vero itaque asperiores porro, quam delectus eius non reprehenderit, quidem, earum alias sed beatae. Ducimus assumenda fugiat dolorum doloribus repellat voluptatibus et minus ullam perspiciatis aut nesciunt maiores veniam fuga minima ut aliquam, cumque veritatis unde qui.
                            </p>
                        </div>
                        <div className='hotel-details-price'>
                            <h1>Perfect for a 7-night stay!</h1>
                            <span>Located in the real heart of Dhaka, this property has an excellent location score of 8.88</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;