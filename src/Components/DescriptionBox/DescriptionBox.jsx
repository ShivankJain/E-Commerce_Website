import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (555)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitate
                buying and selling of products or services over the internet
                serves as a virtual marketplace where businesses and individual
                showcase their products, interact with customers and conduct
                transactions without the need of a physical presence. E-commerce
                websites have gain immense popularity due to their convenience,
                accessibility, and the global reach they offer.</p>
             <p>
               E-commerce websites typically display products or services and
               detailed descriptions, images, prices, and any available variations
               (e.g., sizes, colors). Each products usually has its own dedicated page
               with relevant information.   
             </p>    
        </div>
    </div>
  )
}

export default DescriptionBox