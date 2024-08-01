import React from 'react'
import "./hero.css"
import hero from "../../assets/images/hero.png"
import delivery from "../../assets/images/delivery.png"
import play from "../../assets/images/play.svg"

const Hero = () => {
  return (
    <>
      <section className='hero' >
        <div className="container-hero">
          <div className="hero__wrapper">
              <div className='hero__content' >
                <img width={"191px"} height={"50px"} src={delivery} alt="" />
                <h2 className='hero__title' >
                  Fastest
                   <span className='hero__titlev2' > Delivery</span> & 
                  Esay <span className='hero__titlev2' >Pickup.</span>
                </h2>
                <p className='hero__text' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Imperdiet tempus felis vitae sit est quisque.
                </p>
                <div className='hero__actions' >
                  <button className='hero__button' >Order Now</button>
                  <div className='play__wrapper' >
                    <img src={play} alt="" />
                    <p className='play__text' >
                      Watch Video
                    </p>
                  </div>
                </div>
              </div>
              <div className='hero__media' >
                <img width={"649px"} height={"606px"} src={hero} alt="" />
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero