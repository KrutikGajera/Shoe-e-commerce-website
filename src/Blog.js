import React from 'react'
import './styles/Blog.css'
import india from './image/Home/india.png'

function Blog() {
  return (
    <div>
        <section>
            <div class="container-fluid text-center blog1">
                <div class="row">
                    <div class="col-lg-4">
                        <p class="text3">SUPPORT</p>
                        <p>Contact us</p>
                        <p>Track Order</p>
                        <p>Privacy Policy</p>
                        <p>Return Policy</p>
                        <p>Initiate Return</p>
                    </div>
                    <div class="col-lg-4">
                        <p class="text3">ABOUT</p>
                        <p>Company</p>
                        <p>Corporate News</p>
                        <p>Press Center</p>
                        <p>Careers</p>
                        <p>Shoes Shop</p>
                        <div>
                            <a href="#" class="text2 text3">
                                <img src={india} class="ilogo"/>Bharat
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <p class="text3">STAY UP TO DATE</p>
                        <div>
                            <ul class="list-inline mt-3">
                                <li class="list-inline-item"><a href="#top" class="blog"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a href="#top" class="blog"><i class="fa-brands fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#top" class="blog"><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Blog