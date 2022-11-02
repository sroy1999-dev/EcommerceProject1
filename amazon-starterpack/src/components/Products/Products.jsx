import React from 'react';
import './Products.css';
import Plane from '../../assets/plane.png';
import { ProductsData } from '../../data/products';
import { useState } from 'react';

const Products = () => {
  const [MenuProducts, setMenuProducts] = useState(ProductsData);  
  return (
    <div className='products-container'>
      <img src={Plane} alt=""></img>
      <h1>Our Featured Products</h1>
      <div className='products'>
        <ul className='new-menu'>
            <li>All</li>
            <li>Skin Care</li>
            <li>Conditioners</li>
            <li>Foundations</li>
        </ul>
        <div className='list'>
            {
                MenuProducts.map((pro, index) => (
                    <div className='product'>
                        <div className='left-s'>
                            <div className='name'>
                                <span>{pro.name}</span>
                                <span>{pro.detail}</span>
                            </div>
                            <span>${pro.price}</span>
                            <div>Shop Now</div>
                        </div>
                        <img src={pro.img} alt='' className='img-p' />
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Products;
