import React from 'react'
import logoimg from '../images/default-monochrome-black 1.png'
export default function Navbar() {
  return (
    <div className='nav'>
        <div className='logo'>
            <img width={"100%"} src={logoimg} alt="" />
        </div>
        <div className='links'>
            <a className='btn' href="">Home</a>
            <a className='btn' href="">Why Rent?</a>
            <a className='btn' href="">Clean Out Closet</a>
            <a className='btn' href="">About Us</a>
            <a className='btn' href="">Store</a>
            <a className='btn' href="">Contect Us</a>
        </div>
        <div className='loginbutt'>
            <button className='logbtn'>Login/Sign Up</button>
        </div>
    </div>
  )
}
