import React from 'react'

const button = ({value,name,handler,classname})=>{
    return <button value={value} className={classname} onClick={handler}>{name}</button>
}


export default button