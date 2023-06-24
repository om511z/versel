import React from 'react'
import Navbar2 from '../components/Navbar2'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Shorts = () => {
  return (
    <div>
    <Navbar2 />
    <div class="Rooms">
        <h1>Our Sports Collection</h1>
        <div className='line'></div>

        <div class="contaniercard">

            <div class="box">
                <Link to={'/detail'}>
                    <div class='box-img'>
                        <img src="https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnMlMjBzaGlydHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                    </div>
                </Link>
                <h2>White Shirt</h2>
                <h3> ₹.499</h3>


            </div>
            <div class="box">
                <div class='box-img'>
                    <img src="https://images.meesho.com/images/products/125279439/outf2_512.webp" alt="" />
                </div>
                <h2>White Shirt</h2>
                <h3> ₹.499</h3>
            </div>
            <div class="box">
                <div class='box-img'>
                    <img src="https://images.meesho.com/images/products/163811080/mpe2w_512.webp" alt="" />
                </div>
                <h2>White Shirt</h2>
                <h3> $.499</h3>
            </div>
            <div class="box">
                <div class='box-img'>
                    <img src="https://images.meesho.com/images/products/43917155/fyom4_512.webp" alt="" />
                </div>
                <h2>White Shirt</h2>
                <h3> $.499</h3>
            </div>
            <div class="box">
                <div class='box-img'>
                    <img src="https://images.meesho.com/images/products/43917154/1byik_512.webp" alt="" />
                </div>
                <h2>White Shirt</h2>
                <h3> $.499</h3>
            </div>
            <div class="box">
                <div class='box-img'>
                    <img src="https://images.meesho.com/images/products/170302024/gksax_512.webp" alt="" />
                </div>
                <h2>White Shirt</h2>
                <h3> $.499</h3>
            </div>
            <div class="box">
                <div class='box-img'>
                    <img src="https://images.meesho.com/images/products/68666627/uiom0_512.webp" alt="" />
                </div>
                <h2>White Shirt</h2>
                <h3> $.499</h3>
            </div>
            <div class="box">
                <div class='box-img'>
                    <img src="https://images.meesho.com/images/products/68666627/uiom0_512.webp" alt="" />
                </div>
                <h2>White Shirt</h2>
                <h3> $.499</h3>
            </div>
            <div class="box">
                <div class='box-img'>
                    <img src="https://images.meesho.com/images/products/68666627/uiom0_512.webp" alt="" />
                </div>
                <h2>White Shirt</h2>
                <h3> $.499</h3>
            </div>
            <div class="box">
                <div class='box-img'>
                    <img src="https://images.meesho.com/images/products/68666627/uiom0_512.webp" alt="" />
                </div>
                <h2>White Shirt</h2>
                <h3> $.499</h3>
            </div>



        </div>
    </div>
    <Footer/>

</div>
  )
}

export default Shorts