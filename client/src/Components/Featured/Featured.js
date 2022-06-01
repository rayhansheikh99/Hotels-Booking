import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featured-item'>
            <img className='featured-img' src="https://pix10.agoda.net/hotelImages/295/295107/295107_14032411510018826178.jpg?ca=2&ce=1&s=1024x768" alt=""/>
            <div className='featured-titles'>
                <h1>Dhaka</h1>
                <h2>102 Properties</h2>
            </div>
        </div>
        <div className='featured-item'>
            <img className='featured-img' src="https://d2908q01vomqb2.cloudfront.net/9e6a55b6b4563e652a23be9d623ca5055c356940/2021/11/30/singapore-marina-space-strategic-intent-cooperation-aws-1200x600-1.jpg" alt=""/>
            <div className='featured-titles'>
                <h1>Singapore</h1>
                <h2>50 Properties</h2>
            </div>
        </div>
        <div className='featured-item'>
            <img className='featured-img' src="https://www.lst.ac/images/london-campus1.jpg" alt=""/>
            <div className='featured-titles'>
                <h1>London</h1>
                <h2>150 Properties</h2>
            </div>
        </div>
        
    </div>
  )
}

export default Featured