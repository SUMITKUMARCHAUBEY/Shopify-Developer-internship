import React from 'react'
import Heading from './heading.js'
import img1 from '../images/Group 37.png'
import img2 from '../images/Rectangle 2292.png'
export default function Membership() {
  return (
    <div className='membership'>
       <Heading  title="Membership Plans" width={30}></Heading>
       <div style={{width:"100%",display:"flex",gap:"10%"}}>
        <div style={{width:"50%",display:"flex",flexDirection:"column",height:"300px"}}>
        <div style={{height:"60%",display:"flex"}}>
          <img src={img1} style={{objectFit:"cover",height:"150%",}}  alt="" />
          <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"flex-end"}}>
          <p style={{backgroundColor:"#323233",color:"#ffff",padding:"5px",fontSize:"100%",borderRadius:"6px 0px 6px 6px",width:"fit-content",whiteSpace:"nowrap"}}>TinyClo PREMIUM PLAN</p>
          <p style={{textAlign:"right"}}>Apparels from top-tier sustainable brands, chosen by our experts</p>
          <span style={{color:"#0C8877",fontSize:"150%",fontWeight:"500"}}>from $49.00</span>
          </div>
        </div>
        <div style={{height:"40%",backgroundColor:"#52C0B21A",zIndex:"-1",display:"flex",alignItems:"center",justifyContent:"end",padding:"5%"}}>
          <button style={{padding:"3% 4%",borderRadius:"20px",backgroundColor:"#1A95CF",color:"#ffff",border:"1px solid white"}}>Choose Membership</button>
        </div>
        </div>
        
        <div style={{width:"50%",display:"flex",flexDirection:"column",height:"300px"}}>
        <div style={{height:"60%",display:"flex"}}>
          <img src={img2} style={{objectFit:"cover",height:"150%",}}  alt="" />
          <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"flex-end"}}>
          <p style={{backgroundColor:"#FC6565",color:"#ffff",padding:"5px",fontSize:"100%",borderRadius:"6px 0px 6px 6px",width:"fit-content",whiteSpace:"nowrap"}}>TinyClo ESSENTIAL PLAN</p>
          <p style={{textAlign:"right"}}>Curated essentials, chosen by our experts</p>
          <span style={{color:"#0C8877",fontSize:"150%",fontWeight:"500"}}>from $49.00</span>
          </div>
        </div>
        <div style={{height:"40%",backgroundColor:"#EA827F1A",zIndex:"-1",display:"flex",alignItems:"center",justifyContent:"end",padding:"5%"}}>
          <button style={{padding:"3% 4%",borderRadius:"20px",backgroundColor:"#1A95CF",color:"#ffff",border:"1px solid white"}}>Choose Membership</button>
        </div>
        </div>
        
       </div>
    </div>
  )
}
