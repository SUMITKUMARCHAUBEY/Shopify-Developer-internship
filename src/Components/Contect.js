import React from 'react'
import imgtop from '../images/VectorScatch.png'
import img from '../images/Rectangle 46.png'
export default function Contect() {
  return (
    <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
         <h1 style={{fontSize:"35px",marginBottom:"20px"}}>Contect US <img src={imgtop} width={"20%"} alt="" srcset="" /></h1>
       
    <div className='contact'>    
        <div style={{width:"84%",display:"flex",alignItems:"center",justifyContent:"center",gap:"5%"}}>
            <div style={{width:"60%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"20px"}}>
            <div style={{width:"100%",display:'flex',gap:"5%"}}>
                <div style={{ display:"flex",flexDirection:"column", width:"50%",gap:"10px"}}>

                <label htmlFor="name"> First name</label>
                <input name='name' type="text"  style={{border:"1px solid #0000005C",height:"28px",borderRadius:"4px"}}/>
                </div>
                <div style={{ display:"flex",flexDirection:"column",width:"50%",gap:"10px"}}>

                <label htmlFor="name"> Last name</label>
                <input name='name' type="text"  style={{border:"1px solid #0000005C",height:"28px",borderRadius:"4px"}}/>
                </div>
                
            </div>
            <div style={{width:"100%",display:'flex',gap:"5%"}}>
                <div style={{ display:"flex",flexDirection:"column", width:"50%",gap:"10px"}}>

                <label htmlFor="name"> Email address</label>
                <input name='name' type="text"  style={{border:"1px solid #0000005C",height:"28px",borderRadius:"4px"}}/>
                </div>
                <div style={{ display:"flex",flexDirection:"column",width:"50%",gap:"10px"}}>

                <label htmlFor="name"> Phone number</label>
                <input name='name' type="text"  style={{border:"1px solid #0000005C",height:"28px",borderRadius:"4px"}}/>
                </div>
                
            </div>
            <div style={{width:"100%",display:"flex",flexDirection:"column",gap:"10px"}} >

            <label>Message</label>
            <textarea name="" id="" style={{border:"1px solid #0000005C",borderRadius:"4px",height:"90px"}}></textarea>

            </div>
            <button style={{width:"95%",padding:"2% 10%",border:"1px solid white" ,borderRadius:"12px",backgroundColor:"#FCEBA3"}}>Send Message</button>
            </div>
            <div style={{width:"40%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src={img} width={"100%"} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}
