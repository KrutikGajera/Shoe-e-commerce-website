import React, { useState } from 'react'
import './styles/Filter.css'
import Categories from './Categories'

function Category({handleClick}) {
    const [data,setdata]=useState(Categories);
    const result_price = (price_min,price_max)=>
    {
        const result = Categories.filter((curdata)=>
        {
            return curdata.price >= price_min  && curdata.price <= price_max ;
        })
        setdata(result)
    }

    return (
    <div>
        <section>
            <div className='container-fluid'>
                    <div className='input sidenav'>
                        <p className='text4 m-2'>Price</p>
                        <a className='btn btn-outline-secondary' onClick={()=>{result_price(800,1500)}}>800-1500</a><br/>
                        <a className='btn btn-outline-secondary' onClick={()=>{result_price(1501,3000)}}>1501-3000</a><br/>
                        <a className='btn btn-outline-secondary' onClick={()=>{result_price(3001,5000)}}>3001-5000</a><br/>
                        <a className='btn btn-outline-secondary' onClick={()=>{result_price(5001,7000)}}>5001-7000</a><br/>
                        <a className='btn btn-outline-secondary' onClick={()=>{result_price(7000,10000)}}>7000 above</a><br/>
                    </div>
                    
                        <div className='row main'>
                            {data.map((values)=>
                            {
                                 return(
                                    <>
                                        <div className='col-lg-4 g-3' key={values.id}>
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
                            })}
                            
                        </div>
            </div>
        </section>
    </div>
  )
}

export default Category