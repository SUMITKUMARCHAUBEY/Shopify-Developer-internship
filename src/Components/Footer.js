import React from 'react'
import foot from '../images/Footer.png'
export default function Footer() {
  return (
    <div className='footer'>
      <div style={{width:"30%"}}><img width={"100%"} src={foot} alt="" /></div>
      <div style={{width:"70%",display:'flex',flexDirection:"column"}}>
        <div style={{height:"80%",display:"flex",padding:"6%",justifyContent:"flex-end"}}>
          <div style={{width:"35%",display:"flex",flexDirection:"column",gap:"5%"}}>
            <span style={{fontSize:"18px",fontWeight:"600"}}>

            Our Company
            </span>
          <span className='lin'>Blog</span>
            <span className='lin'>About Us</span>
            <span className='lin'>Careers</span>
          </div>
          <div style={{width:"35%",display:"flex",flexDirection:"column",gap:"5%"}}>
            <span style={{fontSize:"18px",fontWeight:"600"}}>
              Our Products
              </span>
            <span className='lin'>Subscription Plans</span>
            <span className='lin'>Clothing</span>
            <span className='lin'>Equipments</span>
            <span className='lin'>Toys</span>
            <span className='lin'>Clean Out Closet</span>
          </div>
        </div>
        <div style={{height:"30%",display:"flex",alignItems:"center",justifyContent:"center"}}>©2024 TinyClo. All rights reserved</div>
      </div>
    </div>
  )
}
