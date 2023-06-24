import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import '../detail.css'
import Navbar2 from "../components/Navbar2";
import { Link } from "react-router-dom";
import { getShirt, getshirtDetails } from "../Actions/shirtAction";
import Footer from "../components/Footer";


const ShirtDetail = () => {


  const dispatch = useDispatch();
  const { loading, error, product } = useSelector(state => state.shirtdetail)
  const { products } = useSelector(state => state.shirt)
  const { id } = useParams();
  const [slider, setSlider] = useState([0])


  const handleClick = (index) => {
    console.log(index);
    const Slider = product.images[index]
    setSlider(Slider);
  }


  useEffect(() => {
    dispatch(getShirt())
    dispatch(getshirtDetails(id))

  }, [dispatch,id])

  return (
    <>
      <Navbar2 />
      <div class="container">
        <div class="single-product">
          <div class="Row">
            <div class="col-6">
              <div class="product-image">
                <div class="product-image-main">
                  <img src={slider.url} alt="" id="product-main-image" />
                </div>
                <div class="product-image-slider">
                  {product.images && product.images.map((data, i) =>
                    <img src={data.url} onClick={() => handleClick(i)} alt="" class="image-list" />
                  )}
                </div>
              </div>
            </div>
            <div class="col-6">
              <span class="divider"></span>

              <div class="product">
                <div class="product-title">
                  <h2>{product.name}</h2>
                </div>

                <div class="product-price">
                  <span class="offer-price">$99.00</span>
                </div>

                <div class="product-details">
                  <h3>Description</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est magnam quibusdam maiores sit perferendis minima cupiditate iusto earum repudiandae maxime vitae nostrum, ea cumque iste ipsa hic commodi tempore.</p>
                </div>
                <div class="product-size">
                  <h4>Size</h4>
                  <div class="size-layout">
                    <input type="radio" name="size" value="S" id="1" class="size-input" />
                    <label for="1" class="size">S</label>

                    <input type="radio" name="size" value="M" id="2" class="size-input" />
                    <label for="2" class="size">M</label>

                    <input type="radio" name="size" value="L" id="3" class="size-input" />
                    <label for="3" class="size">L</label>

                    <input type="radio" name="size" value="XL" id="4" class="size-input" />
                    <label for="4" class="size">XL</label>

                    <input type="radio" name="size" value="XXL" id="5" class="size-input" />
                    <label for="5" class="size">XXL</label>
                  </div>
                </div>
                <span class="divider"></span>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="Rooms">
        <h1>Related Products</h1>
        <div className='line'></div>

        <div class="contaniercard">

          {products && products.slice(0,4).map(product => (

            <div class="product-card" key={product._id}>
              <div class="product-tumb">
                <img src={product.images[0].url} alt="" />
              </div>
              <Link to={`/shirt/${product._id}`} style={{ textDecoration: 'none' }} >
                <div class="product-details">
                  <span class="product-catagory">Shirt</span>
                  <h4><a href="">{product.name}</a></h4>

                  <div class="product-bottom-details">
                    <div class="product-price">${product.price}</div>
                  </div>
                </div>
              </Link>

            </div>

          ))}



        </div>
      </div>
      <Footer/>
    </>

  )
}

export default ShirtDetail