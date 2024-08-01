import React from 'react'
import "./ads.css"
import phones from "../../assets/images/phones.png"
import appleStore from "../../assets/images/appleStore.svg"
import playMarket from "../../assets/images/playMarket.svg"

const Ads = () => {
  return (
    <>
      <section className='ads' >
        <div className="container">
          <div className="ads__wrapper">
            <div className='ads__content' >
              <h4 className='ads__content-title' >
                Download our Mobile App
              </h4>
              <p className='ads__content-text' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Luctus cum purus bibendum risus nibh cursus integer dolor,
                commodo. Amet, aliquam condimentum.
              </p>
              <div className='ads__links' >
                <img src={appleStore} alt="" />
                <img src={playMarket} alt="" />
              </div>
            </div>
            <img src={phones} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Ads