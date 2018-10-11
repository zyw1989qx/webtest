import React from 'react';
const ColorSelector = ({colors,colorhandler,name}) => (
   <div className="colorselector">
       {
           colors&&colors.map(color=>{
               return <button key={color} name="color" value={color} onClick={colorhandler} style={{background:`${color}`}}></button>
           })
       }
   </div>

)

export default ColorSelector