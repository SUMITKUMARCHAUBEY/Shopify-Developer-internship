import React from 'react'
import icon from '../images/Group 28.png'
import icon1 from '../images/Frame 85.png'
import icon2 from '../images/Frame 86.png'
import icon3 from '../images/Frame 87.png'
import Heading from './heading'
export default function Rent() {
  return (
    <div className='rent'>
      <div style={{width:"100%"}}>
      <Heading title={"Why Rent?"} width={25}></Heading>
      </div>
    <div style={{margin:"0px 0px 40px 0px",width:"100%",gap:"20px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <button className='buttn'>Cost Saving</button>
        <button className='buttn'>Enviornment Saving</button>
        <button className='buttn'>Space Saving</button>
    </div>
    <div style={{width:"100%",border: "1px solid #0000001A",borderRadius:"16px",display:"flex",alignItems:"center",textAlign:"center",flexDirection:"column"}}>
        <p style={{fontSize:"24px",color:"#27B09E",fontWeight:"700"}}>DID YOU KNOW?</p>
        <p style={{padding:"0% 5%"}}>Babies typically outgrow 6 or more sizes in their first year! Add in 3 different seasons, special occasions, and several outfit changes daily, now that's a LOT of clothes!</p>
        <div style={{margin:"30px 0px",width:"70%",height:"0px",display:"flex",alignItems:"center",justifyContent:"space-between",border:"2px solid #27B09E40"}}>
            <div >
                <img style={{backgroundColor:"white",marginTop:"58px"}} src={icon} alt="" srcset="" />
                <p>0-3 months</p>
            </div>
            <div className='dots'>
            <p style={{whiteSpace:"nowrap",margin:"60px -40px"}}>3-6 months</p>
            </div>
            <div className='dots'>
            <p style={{whiteSpace:"nowrap",margin:"60px -40px"}}>6-9 months</p>
            </div>
            <div className='dots'>
            <p style={{whiteSpace:"nowrap",margin:"60px -40px"}}>9-12 months</p>
            </div>
            <div className='dots'>
            <p style={{whiteSpace:"nowrap",margin:"60px -40px"}}>12-15 months</p>
            </div>
            <div className='dots'>
            <p style={{whiteSpace:"nowrap",margin:"60px -40px"}}>15-18 months</p>
            </div>
        </div>
      <div style={{width:"50%",display:"flex",gap:"5%",margin:"10% 0% 5% 5%"}}> 
        <button style={{
            padding:"2% 7%"
            ,color:"#ffff",backgroundColor:"#27B09ECC",border:"1px solid white",borderRadius:"4px"
        }}>AVERAGE SPENT: $250</button>
        <button  style={{
            padding:"2% 8%"
            ,color:"#ffff",backgroundColor:"#E5635FCC",border:"1px solid white",borderRadius:"4px"
        }}>TINYCLO: $32</button>
      </div>
    </div>
      
      <div style={{width:"84%",display:"flex",gap:"3%",marginTop:"60px"}}>
        <div className='crd'>
          <img src={icon1} width={"100%"}  alt="" />
          <p>When you're ready to swap, we'll send new looks right away. When they arrive, pack and return your previous looks using our pre-paid, reusable shipping kit. It’s that easy!</p>
        </div>
        <div className='crd'>
          <img src={icon2}  width={"100%"} alt="" />
          <p>Pick a plan and share your style preferences. We’ll customize and ship your little’s capsule within 7 business days.</p>
        </div>
        <div className='crd'>
          <img src={icon3}  width={"100%"} alt="" />
          <p>Dress your little in their mix-and-match wardrobe as long as you'd like. When you're ready to swap, switch one item or everything. It's up to you!</p>
        </div>
      </div>


    </div>
  )
}
