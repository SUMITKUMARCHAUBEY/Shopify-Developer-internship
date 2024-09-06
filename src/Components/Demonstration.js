import React from 'react'
import vid from '../images/Frame 9.png'
import icon from "../images/Frame 82.png"
import icon2 from '../images/Frame 83.png'
import icon3 from '../images/Frame 84.png'
import Heading from './heading.js'
export default function Demonstration() {
  return (
    <div className='demo'>
   <Heading title={"How it Works?"} width={25}></Heading>
    <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:""}}>
        <div style={{width:"87%"}}>
            <img src={vid} width={"100%"} alt="" srcset="" />
        </div>
        <div style={{width:"84%",display:"flex",gap:"5%",marginBottom:"60px"}}>
        <div className='crd'>
            <img src={icon} width={"100%"} alt="" srcset="" />
            <p>Pick one of our plans. Choose from our curated everyday essentials, or handpick outfits from our premium brands.</p>
        </div>
        <div className='crd'>
            <img src={icon2} width={"100%"} alt="" srcset="" />
            <p>When your little one outgrows their clothes, simply pop them back to us in the reusable bag. For FREE, of course</p>
        </div>
        <div className='crd'>
            <img src={icon3} width={"100%"} alt="" srcset="" />
            <p>Easily pick your next bundle of clothes in your account. They will arrive super quickly, and always with our Cleanliness Guarantee!</p>
        </div>
        
        </div>
        <button style={{width:"40%",height:"50px",borderRadius:"16px",border:"1px solid white",backgroundColor:"#147AA9",color:"#ffff",fontSize:"20px"}}>Start Membership</button>
    </div>
    </div>
  )
}
