import React from 'react'
import "./cards.css"
import rating__star from "../../assets/images/rating__star.svg"
import deliver from "../../assets/images/deliver.svg"
import clock from "../../assets/images/clock.svg"
import line_up from "../../assets/images/line_up.svg"
import favorite from "../../assets/images/favorite.svg"

const Cards = ({product}) => {
  return (
    <div className='menu__card' >
      <img src={product.image} alt="" />
      <img className='favorite__btn' src={favorite} alt="" />
      <div className='menu__card-content' >
        <div className='menu__content-header' >
          <p className='menu__content-title' >{product.title}</p>
          <p className='menu__content-rating' ><img src={rating__star} alt="" />{product.rating}</p>
        </div>
        <div className='menu__content-footer' >
          <p className='delivery' ><img src={deliver} alt="" />{product.delivery}</p>
          <img width={"1px"} height={"18px"} src={line_up} alt="" />
          <p className='delivery' ><img src={clock} alt="" />{product.deliveryTime}</p>
        </div>
        <button className='order__btn' >Order Now</button>
      </div>
    </div>
  )
}

export default Cards