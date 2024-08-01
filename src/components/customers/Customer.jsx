import React from 'react'
import "./customer.css"
import sliders from "../../assets/images/sliders.svg"
import Customers__card from '../customers__card/Customers__card'

const Customer = ({ customers }) => {
  return (
    <>
      <section className='customer' >
        <div className="container">
          <div className="customer__header">
            <h3 className='customer__header-title' >
              What our customer
              say about this
            </h3>
            <img style={{cursor: "pointer"}} src={sliders} alt="" />
          </div>
          <div className='customers__commits' >
            {
              customers.map(customer =>
                <Customers__card customer={customer}/>
              )
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Customer