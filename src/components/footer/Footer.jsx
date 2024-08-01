import React from 'react'
import "./footer.css"
import logo from "../../assets/images/logo.svg"
import line from "../../assets/images/line.svg"
import twitter from "../../assets/images/twitter.svg"
import facebook from "../../assets/images/facebook.svg"
import instagramm from "../../assets/images/instagramm.svg"
import github from "../../assets/images/github.svg"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer__wrapper">
            <div className='footer__first-line' >
              <img src={logo} alt="" />
              <ul className='footer__list' >
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
              <div className='footer__links' >
                <a href="#"><img src={twitter} alt="" /></a>
                <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={instagramm} alt="" /></a>
                <a href="#"><img src={github} alt="" /></a>
              </div>
            </div>
            <img src={line} alt="" />
            <div className='footer__copyright' >
              <p className='copyright' >
              © Copyright 2022, All Rights Reserved
              </p>
              <ul className='copyright__links' >
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer