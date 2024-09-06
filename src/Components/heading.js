import React from 'react'

export default function Heading({title,width}) {
  return (
    <div style={{with:"100%",margin:"60px 0px 50px 0px"}}>
        <div style={{width:"100%"}}>
          <p style={{fontSize:"35px",marginBottom:"20px"}}>{title}</p>
        </div>
        <div style={{width:"100%"}}>
        <div style={{width:`${width}%`,border:"2px solid #EBB5BB"}}></div>
        <div style={{width:"70%",height:"1px"}}></div>
    </div>
    </div>
  )
}
