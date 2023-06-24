import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div class="Category-section">
    <h1>Explore Our Collection</h1>
    <div className='line'></div>
    
    <div class="category">
       
        <div class="categorycard">
            <Link to={'/shirt'} style={{ textDecoration: 'none' }}>
            <div class='category-img'>
            <img src="https://cdn-icons-png.flaticon.com/512/343/343296.png" alt="" />
            </div>
            <h2>Shirt</h2>
            </Link>
        </div>
        <div class="categorycard">
        <Link to={'/tshirt'} style={{ textDecoration: 'none' }}>
            <div class='category-img'>
            <img src="https://cdn-icons-png.flaticon.com/512/5258/5258010.png" alt="" />
            </div>
            <h2>Tshirt</h2>
            </Link>
        </div>
        <div class="categorycard">
        <Link to={'/jeans'} style={{ textDecoration: 'none' }}>
            <div class='category-img'>
            <img src="https://cdn-icons-png.flaticon.com/512/5258/5258257.png" alt="" />
            </div>
            <h2>Jeans</h2>
            </Link>
        </div>
        <div class="categorycard">
        <Link to={'/kurta'} style={{ textDecoration: 'none' }}>
            <div class='category-img'>
            <img src="https://cdn-icons-png.flaticon.com/512/4813/4813785.png" alt="" />
            </div>
            <h2>Kurtas</h2>
            </Link>
        </div>
        <div class="categorycard">
        <Link to={'/shorts'} style={{ textDecoration: 'none' }}>
            <div class='category-img'>
            <img src="https://cdn-icons-png.flaticon.com/512/1461/1461313.png" alt="" />
            </div>
            <h2>Shorts</h2>
            </Link>
        </div>
        <div class="categorycard">
        <Link to={'/jacket'} style={{ textDecoration: 'none' }}>
            <div class='category-img'>
            <img src="https://cdn-icons-png.flaticon.com/512/4982/4982309.png" alt="" />
            </div>
            <h2>Jackets</h2>
            </Link>
        </div>
       </div>
</div>
  )
}

export default Category