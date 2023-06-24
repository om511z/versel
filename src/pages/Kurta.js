import React from 'react'
import Navbar2 from '../components/Navbar2'
import { Link } from 'react-router-dom'
import { getKurta } from '../Actions/shirtAction'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect,Fragment } from 'react'
import Footer from '../components/Footer'
const Kurta = () => {

    const dispatch = useDispatch();

    const { loading, products, error } = useSelector(state => state.kurta)

    useEffect(() => {
        if (error) {
            console.log(error)
        }
        dispatch(getKurta());
    }, [dispatch, error])

    return (
        <div>
            <Navbar2 />
            <div class="Rooms">
                <h1>Our Kurtas Collection</h1>
                <div className='line'></div>
                {loading ? <Loader /> : (
                    <Fragment>

                <div class="contaniercard">


                    {products && products.reverse().map(product => (

                        <div class="product-card" key={product._id}>
                            <div class="product-tumb">
                                <img src={product.images[0].url} alt="" />
                            </div>
                            <Link to={`/kurta/${product._id}`}>
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

export default Kurta