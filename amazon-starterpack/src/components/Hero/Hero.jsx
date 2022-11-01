import React from 'react';
import './Hero.css';
import heroImg from '../../assets/hero.png';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='h__sides'>
        <span className='text1'>Skin Protection Cream</span>
        <div className='text2'>
            <span>Trendy Collection</span>
            <span>Seedily say has suitable disposal and body. Exercise joy man children rejoiced</span>
        </div>
      </div>
      <div className='wrapper'>
        <div className='blue-circle'></div>
        <img src={heroImg} alt="" width={600} />
        <div className='cart2'>
            <RiShoppingBagFill />
            <div className='signup'>
                <span>Best Signup Offers</span>
                <div>
                    <BsArrowRight />
                </div>
            </div> 
        </div>
      </div>
      <div className='h__sides'>
        <div className='traffic'>
            <span>1.5m</span>
            <span>Monthly Traffic</span>
        </div>
        <div className='customers'>
            <span>100k</span>
            <span>Happy Customers</span>
        </div>
      </div>
    </div>
  )
}

export default Hero;
