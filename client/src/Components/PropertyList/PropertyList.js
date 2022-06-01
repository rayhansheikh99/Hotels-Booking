import React from 'react'
import "./propertylist.css"
const PropertyList = () => {
  return (
    <div className='p-list'>
        <div className='p-list-item'>
            <img src="https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg" alt="" className='p-list-img'/>
        <div className='p-list-titles'>
            <h1>Hotels</h1>
            <h2>3000 hotels</h2>
        </div>
        </div>
        <div className='p-list-item'>
            <img src="https://pix10.agoda.net/hotelImages/66178/0/a6814d8a47dd5b7870c568bd159033d1.jpg?ca=0&ce=1&s=1024x768" alt="" className='p-list-img'/>
        <div className='p-list-titles'>
            <h1>Apartments</h1>
            <h2>2300 apartments</h2>
        </div>
        </div>
        <div className='p-list-item'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Town_and_Country_fh000023.jpg" alt="" className='p-list-img'/>
        <div className='p-list-titles'>
            <h1>Resorts</h1>
            <h2>2200 resorts</h2>
        </div>
        </div>
        <div className='p-list-item'>
            <img src="https://spaceatbali.com/images/homeslide2.jpg" alt="" className='p-list-img'/>
        <div className='p-list-titles'>
            <h1>Villas</h1>
            <h2>2010 villas</h2>
        </div>
        </div>
        <div className='p-list-item'>
            <img src="https://logcountrycove.com/wp-content/uploads/2020/05/DSC_0365-2-e1589577334104.jpg" alt="" className='p-list-img'/>
        <div className='p-list-titles'>
            <h1>Cabins</h1>
            <h2>1200 cabins</h2>
        </div>
        </div>
        
    </div>
  )
}

export default PropertyList