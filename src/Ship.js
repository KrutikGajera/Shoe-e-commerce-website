import React from 'react'
import './styles/ship.css'

function Ship() {
  return (
    <div>
        <section>
            <div class="container-fluid ship">
                <div class="row">
                    <div class="col-lg-4 col text-center pt-3">
                        <div class="row-lg-3 shipicon">
                            <i class="fas fa-shipping-fast"></i>
                        </div>
                        <div>
                            <p class="row-lg-9">Fast Delivery</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col text-center pt-3">
                        <div class="row-lg-3 shipicon">
                            <i class="fa-solid fa-retweet"></i>
                        </div>
                        <div>
                            <p class="row-lg-9">15 Days Easy Return</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col text-center pt-3">
                        <div class="row-lg-3 shipicon">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div>
                            <p class="row-lg-9">Accepting Orders 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Ship