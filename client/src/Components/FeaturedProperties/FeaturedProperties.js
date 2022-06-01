import React from 'react'
import "./featuredproperties.css"

const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className='fp-item'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/231124722.jpg?k=6e7848393a910b9fa71b037971acc16e9d10e35852ef8a9b7f8e314f0ade7dc2&o=&hp=1" alt="" className='fp-img'/>
        <span className='fp-name'>Aparthotel Stare Miasto</span>
        <span className='fp-city'>Madrid</span>
        <span className='fp-price'>Starting from $150</span>
        <div className='fp-rating'>
            <button>8.9</button>
            <span>Excellent.</span>
            <span className='fp-review'> 220 reviews</span>
        </div>   
        </div>
        <div className='fp-item'>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/4f/b7/56/hotel-memories-budapest.jpg" alt="" className='fp-img'/>
        <span className='fp-name'>Villa Wellness</span>
        <span className='fp-city'>Budapest</span>
        <span className='fp-price'>Starting from $140</span>
        <div className='fp-rating'>
            <button>7.9</button>
            <span>Wonderful.</span>
            <span className='fp-review'> 200 reviews</span>
        </div>   
        </div>
        <div className='fp-item'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/34497867.jpg?k=2482451ba9bb5f45bcbc6cfa183d2eec9329de4f5e3e0fb9a2e64e99254bd06e&o=&hp=1" alt="" className='fp-img'/>
        <span className='fp-name'>The Sloane Club</span>
        <span className='fp-city'>London</span>
        <span className='fp-price'>Starting from $200</span>
        <div className='fp-rating'>
            <button>9.2</button>
            <span>Excellent.</span>
            <span className='fp-review'> 150 reviews</span>
        </div>   
        </div>
        <div className='fp-item'>
        <img src="https://i.proway.com.hk/property/6fde007b58002125aee532c979fc71e2-1024-2.jpg" alt="" className='fp-img'/>
        <span className='fp-name'>Great Design Apartments</span>
        <span className='fp-city'>Dhaka</span>
        <span className='fp-price'>Starting from $130</span>
        <div className='fp-rating'>
            <button>8.5</button>
            <span>Awesome.</span>
            <span className='fp-review'> 300 reviews</span>
        </div>   
        </div>
    </div>
  )
}

export default FeaturedProperties