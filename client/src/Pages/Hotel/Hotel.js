import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import "./hotel.css"
import { faMapLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import MailList from './../../Components/MailList/MailList';
import Footer from './../../Components/Footer/Footer';

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false)

    const photos = [
        {
            src:"https://hotelmemories.hu/application/files/5815/4998/0282/old-town-hotel-rooms-superior-double-twin-room-1080-810.jpg"
        },
        {
            src:"https://travelinspiredliving.com/wp-content/uploads/2019/11/Hotel-Kitchenette.jpg"
        },
        {
            src:"https://www.thespruce.com/thmb/FFM_1_YQzyukFenLhm_5G2q3Xz0=/1567x1567/smart/filters:no_upscale()/modern-dining-room-ideas-4147451-hero-d6333998f8b34620adfd4d99ac732586.jpg"
        },
        {
            src:"https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/6/29/0/FOD18_Natalie-Myers_Ladera-Heights_17.jpg.rend.hgtvcom.966.644.suffix/1530284627969.jpeg"
        },
        {
            src:"https://i.pinimg.com/originals/a7/c4/99/a7c499fbd7f6474c850a7e5e84122e6c.jpg"
        },
        {
            src:"https://foyr.com/learn/wp-content/uploads/2019/03/balcony-design-ideas-scaled.jpg"
        },
    ]

    const handleOpen = (i) => {
        setSlideNumber(i)
        setOpen(true)
    }

    const handleMove = (direction) => {
        let newSlideNumber;
        if(direction === 'l'){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber -1;
        }
        else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber +1;
        }

        setSlideNumber(newSlideNumber)
    }

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className='hotel-container'>
                {open && <div className='slider'>
                    <FontAwesomeIcon className='close' icon={faCircleXmark} onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon className='arrow' onClick={()=>handleMove('l')} icon={faCircleArrowLeft}/>
                    <div className='slider-wrapper'>
                        <img src={photos[slideNumber].src} alt="" className='slider-img'/>
                    </div>
                    <FontAwesomeIcon className='arrow' onClick={()=>handleMove('r')} icon={faCircleArrowRight}/>
                </div>}
                <div className='hotel-wrapper'>
                    <button className='book-now-btn'>Reserve or Book Now!</button>
                    <h1 className='hotel-title'>Grand Hotel</h1>
                    <div className='hotel-address'>
                        <FontAwesomeIcon icon={faMapLocationDot}/>
                        <span>Gulshan St 120 Dhaka</span>
                    </div>
                    <span className='hotel-distance'>Excellent location - 600m from center</span>
                    <span className='hotel-price-highlight'>Book a stay over $120 at this property and get a free airport taxi</span>
                    <div className='hotel-images'>
                        {photos.map((photo,i) => (
                            <div className='hotel-img-wrapper'>
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className='hotel-img'/>
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
                            <h2>
                                <b>$855</b> (8 nights)
                            </h2>
                            <button className='book-btn'>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
};

export default Hotel;