import React,{useState} from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from './Home';
import Women from './Women'
import Kids from './Kids'
import logo from './image/Home/shoes_logo.jpg'
import Cart from './cart';
import Filter from './Filter'
import './styles/Navbar.css'
import Signup from './Signup';

function Navbar({size,handleClick,cart,setCart,handleChange}) {
  return (
    <>
        <Router>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        <img src={logo} className="logo"/>
                    </a>    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ">
                    <li className="nav-item active " style={{ padding: 10 }}>
                    <Link to="/" className="item">
                        Men
                    </Link>
                    </li>
                    <li className="nav-item" style={{ padding: 10 }}>
                    <Link to="/Women" className="item">
                        Women
                    </Link>
                    </li>
                    <li className="nav-item" style={{ padding: 10 }}>
                    <Link to="/Kids" className="item">
                        Kids
                    </Link>
                    </li>
                    <li className="nav-item" style={{ padding: 10 }}>
                    <Link to="/Filter" className="item">
                        Filter
                    </Link>
                    </li>
                    
                    <div style={{display:"block ",padding:10}} className='cart'>
                            <Link to="/Cart">
                                <span>
                                    <i className='fas fa-cart-plus'></i>
                                </span> 
                                
                            </Link>
                            <span>{size}</span>
                    </div>
                    <li className="nav-item1">
                    <Link to="/Signup" className="item1">
                        <i class="fa-solid fa-user-plus"></i>
                    </Link>
                    </li>

                </ul>
                </div>
                <div className="sign" style={{marginRight:"0"}} >
                    <a className="signup"  href="Signup" >
                        Sign-up
                    </a>
                </div>

                
            </nav>
            
            </div>
            <Routes>
                <Route path="/" element={<Home handleClick={handleClick} />} />
                <Route path="/Women" element={<Women handleClick={handleClick}/>} />
                <Route path="/Kids" element={<Kids handleClick={handleClick}/>} />
                <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
                <Route path="/Filter" element={<Filter handleClick={handleClick}/>}/>
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </Router>
    </>
    );
}

export default Navbar