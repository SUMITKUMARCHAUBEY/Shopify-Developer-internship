import React from 'react'
import img3 from '../images/image 3.png'
import img2 from '../images/unsplash_crlpptb1kdc.png'
import img1 from '../images/unsplash_NHIP7M3EB9w.png'
export default function Catagory() {
  return (
    <div className='catagory'>
         <div style={{width:"30%"}}>

        <p style={{textAlign:'right',paddingRight:"15%"}}>Starting from 100 INR</p>
        <div className='card'> 
            <div className='imgCont'>
                <img src={img3} style={{objectFit:"contain",maxWidth:"100%", padding:"10px"}} alt="" srcset="" />
            </div>
            <div className='catdesc'>
                <span style={{fontSize: "150%"}}>
                    Kids Clothing</span>
                <span>Age(0-6)</span>
                <button style={{padding:"8px 0px",backgroundColor:"#FCEBA3",color:"#323233",width:"50%",borderRadius:"6px",border:"0px",fontSize:"90%"}}>Explore > </button>
            </div>
        </div>
         </div>
         <div style={{width:"30%"}}>

        <p style={{textAlign:'left',paddingLeft:"15%"}}>Starting from 500 INR</p>
        <div className='card'> 
            
            <div className='catdesc'>
                <span style={{fontSize: "150%"}}>
                    Kids Clothing</span>
                <span>Age(0-6)</span>
                <button style={{padding:"8px 0px",backgroundColor:"#FCEBA3",color:"#323233",width:"50%",borderRadius:"6px",border:"0px",fontSize:"90%"}}>Explore > </button>
            </div>
            <div className='imgCont'>
                <img src={img2} style={{objectFit:"contain",maxWidth:"170%",}}   alt="" srcset="" />
            </div>
        </div>
         </div>
         <div style={{width:"30%"}}>

        <p style={{textAlign:'left',paddingLeft:"15%"}}>Starting from 100 INR</p>
        <div className='card'> 
            
            <div className='catdesc'>
                <span style={{fontSize: "150%"}}>
                    Kids Clothing</span>
                <span>Age(0-6)</span>
                <button style={{padding:"8px 0px",backgroundColor:"#FCEBA3",color:"#323233",width:"50%",borderRadius:"6px",border:"0px",fontSize:"90%"}}>Explore > </button>
            </div>
            <div className='imgCont'>
                <img src={img1} style={{objectFit:"contain",maxWidth:"170%",}}   alt="" srcset="" />
            </div>
        </div>
         </div>
         
         
       
        
  
       
  


     
    </div>
  )
}
