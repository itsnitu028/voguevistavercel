import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png' 
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const {product}=props;
  const {addToCart}=useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
      <div className='productdisplay-img-list'>
        <img src={product.image} alt='' />
        <img src={product.image} alt='' />
        <img src={product.image} alt='' />
        <img src={product.image} alt='' />
      </div>
      <div className='productdisplay-img'>
            <img className='productdispay-main-img' src={product.image} alt='' />  
      </div>
      </div>
      <div className='productdisplay-right'>
      <h1>{product.name}</h1>
      <div className='productdisplay-right-star'>
       <img src={star_icon} alt='' />
       <img src={star_icon} alt='' />
       <img src={star_icon} alt='' />
       <img src={star_icon} alt='' />
       <img src={star_dull_icon} alt='' />
       <p>(122)</p>
      </div>
      <div className='productdisplay-right-prices'>
       <div className='productdisplay-right-price-old'>${product.old_price}</div>
       <div className='productdisplay-right-price-new'>${product.new_price}</div>
      </div>
      <div className='productdisplay-right-description'>
      Suitable for all season,whatever spring,summer,autumn,winter.you can wear it all years to pair with shorts, jeans, or skinny pants in office,work,club,dating,travel or casual daily wear etc.
      </div>
      <div className='productdisplay-right-size'>
      <h1>Select Size</h1>
      <div className='productdisplay-right-sizes'>
         <div>XS</div>
         <div>S</div>
         <div>M</div>
         <div>L</div>
         <div>XL</div>
       </div>
      </div>
      <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      <p className='productdisplay-right-category'><span>Category :</span>T-shirt,Crop Top</p>
      <p className='productdisplay-right-category'><span>Tags :</span>Mordern,Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay