import React from 'react'
import './styles/Style.css'
import Ship from './Ship'
import Blog from './Blog'

import background_k from './image/Kids/background_K.webp'
import Categories from './Categories'

import india from './image/Kids/india.png'
function Kids({handleClick}) {
  return (
    <div>
        {/* <!-- background --> */}
        <section>
            <div className="container-fluid">
                <div>
                    <img src={background_k} className="back1"/>
                </div>
            </div>
        </section>

        {/* <!-- kid's Footwear --> */}

        <section>
            <div className="container">
                <p className="text1 text-center">Kids Footwear</p>
                <div className='container'>
                <div className='row'>
                    {Categories.map((values)=>
                    {
                        if(values.category === "Kids")
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

        {/* <!-- shipping details --> */}
            <Ship/>

        {/* blog */}
            <Blog/>
       
    </div>
  )
}

export default Kids