import React from 'react'
import "./hero.css"
import Heading from '../../common/Heading'

const Hero = () => {
    console.log("Hero component rendered")
  return (
    <>
     <section className="hero">
        <div className='container'>
            <Heading title='Search Your Next Home' subtitle='Find new & featured property located in your local city' />
            <form action="" className='flex'>
                <div className='box'>
                    <span>City/Street</span>
                    <input type="text" placeholder="Location" />
                </div>
                <div className='box'>
                    <span>Property Type</span>
                    <input type="text" placeholder="Location" />
                </div>
                <div className='box'>
                    <span>Price Range</span>
                    <input type="text" placeholder="Location" />
                </div>
                <div className='box'>
                    <h4>Advance Filter</h4>
                </div>
                <button className="btn">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
     </section>
    </>
  )
}

export default Hero;
