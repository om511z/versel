import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getshirtDetails, gettshirtDetails } from "../Actions/shirtAction";
import '../detail.css'
import Navbar2 from "./Navbar2";


const ProductDetail = () => {

  const imgs =[
    {id:1,value:"http://cdn.shopify.com/s/files/1/0420/7073/7058/collections/2.jpg?v=1666953388"},
    {id:2,value:"https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=2000"},
    {id:3,value:"http://cdn.shopify.com/s/files/1/0420/7073/7058/collections/2.jpg?v=1666953388"},
    {id:4,value:"https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=2000"}
  ]
 
  const [slider, setSlider] = useState(imgs[0])


  const handleClick = (index) => {
    console.log(index);
    const Slider = imgs[index]
    setSlider(Slider);
  }


  return (
    <>
      <Navbar2 />
      <div class="container">
        <div class="single-product">
          <div class="Row">
            <div class="col-6">
              <div class="product-image">
                <div class="product-image-main">
                  <img src={slider.value} alt="" id="product-main-image" />
                </div>
                <div class="product-image-slider">
                  {imgs.map((data, i) =>
                    <img src={data.value} onClick={() => handleClick(i)} alt="" class="image-list" />
                  )}

                </div>
              </div>
            </div>
            <div class="col-6">
              <span class="divider"></span>

              <div class="product">
                <div class="product-title">
                  <h2>black shirt</h2>
                </div>

                <div class="product-price">
                  <span class="offer-price">₹99.00</span>
                </div>

                <div class="product-details">
                  <h3>Product Description</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est magnam quibusdam maiores sit perferendis minima cupiditate iusto earum repudiandae maxime vitae nostrum, ea cumque iste ipsa hic commodi tempore.</p>
                </div>
                <div class="product-size">
                  <h4>Size</h4>
                  <div class="size-layout">
                 
                    <label for="1" class="size"><a href="https://www.codeisready.com/" style={{textDecoration:'none'}}>Buy Now</a></label>
                  </div>
                </div>
                <span class="divider"></span>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ProductDetail