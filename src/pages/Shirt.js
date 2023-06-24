import React, { useState, useEffect, Fragment } from 'react'
import Navbar2 from '../components/Navbar2'
import { Link } from 'react-router-dom'
import { getShirt } from '../Actions/shirtAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Footer from '../components/Footer'

const Shirt = () => {
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

            <Navbar2 />
            <div class="Rooms">
                <h1>Our Shirt Collection</h1>
                <div className='line'></div>

                {loading ? <Loader /> : (
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

                )}



            </div>
           <Footer/>


        </>
    )
}

export default Shirt