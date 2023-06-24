import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect,Fragment } from 'react';
import { getShirt } from '../Actions/shirtAction';
import Loader from './Loader';
const NewArrival = () => {

	const dispatch = useDispatch();

    const { loading, products, error } = useSelector(state => state.shirt)

    useEffect(() => {
        if (error) {
            console.log(error)
        }
        dispatch(getShirt());
    }, [dispatch, error])
  return (
    <div class="Rooms">
    <h1>Our New Arrival</h1>
    <div className='line'></div>
	
                    <Fragment>
                        <div class="contaniercard">

                            {products && products.reverse().map(product => (

                                <div class="product-card" key={product._id}>
                                    <div class="product-tumb">
                                        <img src={product.images[0].url} alt="" />
                                    </div>
                                    <Link to={`/shirt/${product._id}`} style={{ textDecoration: 'none' }}>
                                        <div class="product-details">
                                            <span class="product-catagory">Shirt</span>
                                            <h4><a href="">{product.name}</a></h4>

                                            <div class="product-bottom-details">
                                                <div class="product-price">₹{product.price}</div>
                                            </div>
                                        </div>
                                    </Link>

                                </div>

                            ))}

                        </div>
                    </Fragment>

   
</div>
  )
}

export default NewArrival