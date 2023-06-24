import React, { useEffect,Fragment } from 'react'
import Navbar2 from '../components/Navbar2'
import { Link } from 'react-router-dom'
import { getTshirt } from '../Actions/shirtAction'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
const Tshirt = () => {
    const dispatch = useDispatch();

    const { loading, products, error } = useSelector(state => state.tshirt)

    useEffect(() => {
        if (error) {
            console.log(error)
        }
        dispatch(getTshirt());
    }, [dispatch, error])
    return (
        <div>
            <Navbar2 />
            <div class="Rooms">
                <h1>Our Tshirt Collection</h1>
                <div className='line'></div>
                
                {loading ? <Loader /> : (
                    <Fragment>

                <div class="contaniercard">

                    {products && products.reverse().map(product => (

                        <div class="product-card" key={product._id}>
                            <div class="product-tumb">
                                <img src={product.images[0].url} alt="" />
                            </div>
                            <Link to={`/tshirt/${product._id}`}>
                            <div class="product-details">
                                <span class="product-catagory">{product.fabric}</span>
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

        </div>
    )
}

export default Tshirt