import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='f-lists'>
            <ul className='f-list'> 
                <li className='f-list-item'>Countries</li>
                <li className='f-list-item'>Regions</li>
                <li className='f-list-item'>Cities</li>
                <li className='f-list-item'>Districts</li>
                <li className='f-list-item'>Airports</li>
                <li className='f-list-item'>Hotels</li>
            </ul>
            <ul className='f-list'> 
                <li className='f-list-item'>Homes</li>
                <li className='f-list-item'>Apartments</li>
                <li className='f-list-item'>Resorts</li>
                <li className='f-list-item'>Villas</li>
                <li className='f-list-item'>Hotels</li>
                <li className='f-list-item'>Guest house</li>
            </ul>
            <ul className='f-list'> 
                <li className='f-list-item'>Unique place to stay</li>
                <li className='f-list-item'>All destinations</li>
                <li className='f-list-item'>Discover</li>
                <li className='f-list-item'>Reviews</li>
                <li className='f-list-item'>Travel communities</li>
                <li className='f-list-item'>Holiday deals</li>
            </ul>
            <ul className='f-list'> 
                <li className='f-list-item'>Car rental</li>
                <li className='f-list-item'>Flight finder</li>
                <li className='f-list-item'>Restaurant</li>
                <li className='f-list-item'>Travel agents</li>
                <li className='f-list-item'>How we works</li>
                <li className='f-list-item'>Contact</li>
            </ul>
        </div>
        <div className='f-text'>Copyright &copy; 2022 HotelsBooking.com</div>
    </div>
  )
}

export default Footer