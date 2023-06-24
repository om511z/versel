import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Festival = () => {
 
  return (
    <div className='festival'>
           <Carousel>
      <Carousel.Item className='card'>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=2000"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/thumbnails/008/174/590/small/fashion-advertising-web-banner-illustration-vector.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://previews.123rf.com/images/elenabsl/elenabsl1509/elenabsl150900091/46200067-fashion-clothing-store-banner-with-shop-interior-clothing-on-hangers-and-shelves-fitting-rooms-and-c.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel> 
    </div>
  )
}

export default Festival