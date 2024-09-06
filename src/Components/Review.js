import React from 'react'
import Heading from './heading'
import img from '../images/Ellipse 25.png'
import down from '../images/chevron-down.png'
export default function Review() {
  return (
    <div style={{width:"100%",flexDirection:"column",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
        <div style={{width:"84%"}}>
        <Heading title={"Our Happy Parents"} width={35}></Heading>
        </div>
        <div className='bgrnd'>
        <div className='revcard'>
            <div className='revimg'>
            <img src={img} alt="" srcset="" />
            </div>
            <div style={{padding:"2% 3% 2% 0%"}}>
            <h3>
            Hannah Schmitt
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse 
            </p>
            May 8, 2020
            </div>
        </div>
        <div className='revcard'>
            <div className='revimg'>
            <img src={img} alt="" srcset="" />
            </div>
            <div style={{padding:"2% 3% 2% 0%"}}>
            <h3>
            Hannah Schmitt
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse 
            </p>
            May 8, 2020
            </div>
        </div>
        <div className='revcard'>
            <div className='revimg'>
            <img src={img} alt="" srcset="" />
            </div>
            <div style={{padding:"2% 3% 2% 0%"}}>
            <h3>
            Hannah Schmitt
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse 
            </p>
            May 8, 2020
            </div>
        </div>

        </div>
        <div style={{width:"100%",display:"flex",alignItems:'center',justifyContent:"center",padding:"40px 0px"}}>
        <button style={{backgroundColor:"white",border:"none",width:"5%"}}>
            <img style={{transform:"rotate(180deg)",width:"80%"}} src={down} alt="" srcset="" />
        </button>
        <div style={{width:"20%",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
        <div style={{width:"15px",height:"15px",borderRadius:"100%",backgroundColor:"#323233"}}></div>
            <div style={{width:"15px",height:"15px",borderRadius:"100%",backgroundColor:"#D9D9D9"}}></div>
            <div style={{width:"15px",height:"15px",borderRadius:"100%",backgroundColor:"#D9D9D9"}}></div>
            <div style={{width:"15px",height:"15px",borderRadius:"100%",backgroundColor:"#D9D9D9"}}></div>
            <div style={{width:"15px",height:"15px",borderRadius:"100%",backgroundColor:"#D9D9D9"}}></div>
            <div style={{width:"15px",height:"15px",borderRadius:"100%",backgroundColor:"#D9D9D9"}}></div>
        </div>
        <button style={{ backgroundColor:"white",border:"none",width:"5%"}}>
        <img  src={down} style={{width:"80%"}} alt="" srcset="" />
        </button>
        </div>
    </div>
  )
}
