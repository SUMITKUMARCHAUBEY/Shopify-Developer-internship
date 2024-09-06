import React from 'react'
import Heading from './heading'
import tv1 from '../images/pngwing.com - 2024-07-02T235537.536.png'
import tv2 from '../images/pngwing.com - 2024-07-02T235419.541.png'
import tv3 from '../images/pngwing.com - 2024-07-02T235520.504.png'
import tv4 from '../images/pngwing.com - 2024-07-02T235458.447.png'
import tv5 from '../images/pngwing.com - 2024-07-02T235216.317.png'
export default function Freatures() {
  return (
    <div style={{width:"84%"}}>
        <Heading title={"As featrured in"} width={30}></Heading>
        <div style={{width:"100%", display:"flex",alignItems:"center",justifyContent:"center",gap:"9%"}}>
        <div><img src={tv1} width={"80%"} alt="" srcset="" /></div>
        <div><img src={tv2} width={"80%"} alt="" srcset="" /></div>
        <div><img src={tv3} width={"80%"} alt="" srcset="" /></div>
        <div><img src={tv4} width={"80%"} alt="" srcset="" /></div>
        <div><img src={tv5} width={"80%"} alt="" srcset="" /></div>
        
        
        </div>
        <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-around",margin:"40px 0px"}}>
            <div style={{display:"flex",gap:"10px"}}>

            <div style={{width:"15px",height:"15px",borderRadius:"100%",backgroundColor:"#323233"}}></div>
            <div style={{width:"15px",height:"15px",borderRadius:"100%",backgroundColor:"#D9D9D9"}}></div>
            <div style={{width:"15px",height:"15px",borderRadius:"100%",backgroundColor:"#D9D9D9"}}></div>
            
            </div>
        </div>
    </div>
  )
}
