import React from 'react'
import AliceCarousel, { AutoplayDirection, AutoPlayStrategy } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect,Fragment } from 'react';
import { getShirt } from '../Actions/shirtAction';
import Loader from './Loader';

const ProductSlider = () => {
    const responsive = {
        0: { 
            items: 1.2
        },
		350: { 
            items: 1.3
        },
        568: { 
            items: 1.4
        },
        700: { 
          items: 2.7
      },
        1024: {
            items: 3.5, 
            itemsFit: 'contain'
            
        },
		1124: {
            items: 5.5, 
            itemsFit: 'contain'
            
        },
    };
    
	const dispatch = useDispatch();

    const { loading, products, error } = useSelector(state => state.shirt)

    useEffect(() => {
        if (error) {
            console.log(error)
        }
        dispatch(getShirt());
    }, [dispatch, error])
    
   
  return (
    <>
    <div class="slider">
    <h1>Our Product Gallery</h1>
    <div className='line'></div>

	
     <div className='slidercard'>
        
        <AliceCarousel 
         responsive={responsive}
        
        >
           <div class="product-card">
		<div class="product-tumb">
			<img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Shirt</span>
			<h4><a href="">Mens Shirt</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>

	<div class="product-card">
		<div class="product-tumb">
			<img src="https://images.meesho.com/images/products/262335631/ukwsh_512.webp" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Tshirt</span>
			<h4><a href="">Mens Shirt</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>

	<div class="product-card">
		<div class="product-tumb">
			<img src="http://cdn.shopify.com/s/files/1/0420/7073/7058/collections/2.jpg?v=1666953388" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Jacket</span>
			<h4><a href="">Mens Jacket</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>

	<div class="product-card">
		<div class="product-tumb">
			<img src="https://res.cloudinary.com/df9fjwvbk/image/upload/v1679574232/shirt/zpexvdxuqxo1wgsadxcf.jpg" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Shirt</span>
			<h4><a href="">Mens Shirt</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>

	<div class="product-card">
		<div class="product-tumb">
			<img src="https://res.cloudinary.com/df9fjwvbk/image/upload/v1683369147/shirt/h72rbcqapq0k7b3dtvkz.jpg" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Jeans</span>
			<h4><a href="">Mens jeans</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>
         
        </AliceCarousel>
     </div>
     </div>

    
    </>
   
 
  )
}

export default ProductSlider