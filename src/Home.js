import React from 'react'
import './styles/Style.css'

import carousel_img1 from './image/Home/carosal_img1.jpg'
import carousel_img2 from './image/Home/carosal_img2.jpg'

import india from './image/Home/india.png'
import Categories from './Categories'
import Ship from './Ship'
import Blog from './Blog'

function Home({handleClick}) {
  return (
    <div>
        
        {/* <!-- carosal effect --> */}
        <section>
            <div class="container-fluid">
                <div class="carousel slide" data-bs-ride="carousel" id="shoes">
                    <div class="carousel-indicators">
                        <button class="btn1 active" data-bs-target="#shoes" data-bs-slide-to="0"></button>
                        <button class="btn1 active" data-bs-target="#shoes" data-bs-slide-to="1"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active text-center">
                            <img src={carousel_img1} alt="sorry" class="carousel"/>
                            <div class="carousel-caption center">
                                <p class="p1">WHAT'S YOUR MOVE?</p>
                                <p>GET UP GROW WITH OUR BRAND</p>
                            </div>                              
                        </div>
                        <div class="carousel-item text-center">
                            <img src={carousel_img2} alt="sorry" class="carousel"/> 
                            <div class="carousel-caption center">
                                <p class="p1">WHAT'S YOUR MOVE?</p>
                                <p>GET UP GROW WITH OUR BRAND</p>
                            </div>                               
                        </div>
                    </div>
                    <a class="carousel-control-prev carouselcenter" type="a" data-bs-target="#shoes" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next carouselcenter" type="a" data-bs-target="#shoes" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>    
                    </a>
                </div>
            </div>
        </section>

        {/* <!-- Men's footware --> */}
        <section>
            <div class="container">
                <p class="text1 text-center">Men's Footwear</p>
                <div className='container'>
                <div className='row'>
                    {Categories.map((values)=>
                    {
                        if(values.category === "Men")
                        {
                            return(
                                <>
                                    <div className='col-md-4 g-3' key={values.id}>
                                        <div class="card productcard">
                                            <div className='test'>
                                                <img class="card-img-top img img-fluid" src={values.image} alt="Card image cap"/>
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">{values.title}</h5>
                                                    <p class="card-text">Price:{values.price}</p>
                                                    <a href="#" class="btn btn-dark" onClick={()=>handleClick(values)}>Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    }
                    )}
                </div>
            </div>
            </div>
        </section>

        {/* shipping details */}
        <Ship/>

        {/* blog */}
        <Blog/>
    </div>
  )
}

export default Home