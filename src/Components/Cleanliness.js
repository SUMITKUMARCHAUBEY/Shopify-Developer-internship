import React from 'react'
import Heading from './heading'
import img1 from '../images/pngwing.com - 2024-07-02T233242.639 1.png'
export default function Cleanliness() {
  return (
    <div className='clean'>
        <Heading title={"Cleanliness Guarantee"} width={40}></Heading>
        <div style={{display:"flex"}}>
            <div className='cleandesc'>
            <div style={{padding:"10%",textAlign:"center"}}>

            <p>
            After each rental, we professionally clean and safely sanitise clothes, sealing them with our cleanliness guarantee, ready for the next renting family to love.
            <br />
            <br />
            Clothes that are no longer in rentable condition are either donated or recycled. So you can take comfort knowing that we’ll do all we can to give clothes a new lease of life, with no clothes ever going to landfill.
                </p>    
            </div>
           
            <button style={{width:"90%",padding:"2%",color:"#ffff",fontSize:"150%",backgroundColor:"#147AA9",border:"1px solid white",borderRadius:"12px"}}>Start Membership</button>
            
            </div>
            <div className='imagecont'>
                <img src={img1} width={"85%"} alt="" srcset="" />
            </div>
        </div>
    </div>
  )
}
