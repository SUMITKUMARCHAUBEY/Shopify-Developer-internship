import React from 'react'
import postimg from '../images/Frame 1.png'
export default function Poster() {
  return (
    <div className='poster'>
        <div className='postext'>
            <h1><span style={{color:" #FC6565"}}>
                 BABIES  
                </span> <t></t>
                  GROW FAST</h1>
            <p style={{marginTop:"-5%"}}>Simplify Your Life with Our </p>
            <button style={{marginTop:"-2%",backgroundColor:"#FC6565",border:"1px solid white", borderRadius:"6px",color:"#FBFBFD", padding:"1.25% 2.15%",fontSize:"90%"}}>TinyClo Subscription</button>
            
            
            
            <div className='buttons' style={{display:"flex",width:"100%",gap:"4%", alignItems:"center",justifyContent:"center",marginTop:"12%"}}>
                <button style={{backgroundColor:"#FCEBA3",border:"1px solid white", borderRadius:"3px",color:"black", padding:"2% 3%",fontSize:"90%"}}> How it works?</button>
                <button style={{backgroundColor:"#147AA9",border:"1px solid white", borderRadius:"3px",color:"#FBFBFD", padding:"2% 3%",fontSize:"90%"}}>Start Membership</button>
            </div>
        </div>
        <div className='postimg'>
            <img src={postimg} alt="" />
        </div>
    </div>
  )
}
