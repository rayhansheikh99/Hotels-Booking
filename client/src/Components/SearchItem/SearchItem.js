import React from 'react'
import "./searchitem.css"

const SearchItem = () => {
  return (
    <div className='search-item'>
        <img src="https://hotelmemories.hu/application/files/7415/5143/0882/old-town-hotel-memories-home-rooms-third.jpg" alt="" className='search-img'/>
        <div className='search-desc'>
            <h1 className='search-title'>Tower Street Apartments</h1>
            <span className='search-distance'>500m from center</span>
            <span className='search-taxi'>Free airport taxi</span>
            <span className='search-subtitle'>Studio Apartment with air conditioning</span>
            <span className='search-features'>Entire studio * 1 bathroom * Hotel Vista Bay in Cox's Bazar provides adults only accommodations with a shared lounge and a terrace.</span>
            <span className='search-cancel'>Free Cancellation</span>
            <span className='search-cancel-subtitle'>You can cancel later, so look in this great price today!</span>
        </div>
        <div className='search-details'>
            <div className='search-rating'>
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className='search-details-text'>
                <span className='search-price'>$150</span>
                <span className='search-tax'>Includes taxes and fees</span>
                <button className='search-check-btn'>See Availablity</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem