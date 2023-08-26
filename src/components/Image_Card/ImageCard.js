import React, { useContext } from 'react'
import './style.css'
import { SelectedDog } from '../../App'

export const capitalString=(str)=>{
    return str.charAt(0).toUpperCase()+str.substring(1,str.length);
}

function ImageCard({img,name}) {
  const {setSelectedDog}=useContext(SelectedDog);
  return (
    <div className='image_card' onClick={()=>{setSelectedDog({name:name})}}>
        <img src={img}  loading='lazy'  alt={name || 'img_card'} />
        <p>{capitalString(name) || "Breed Name"}</p>
    </div>
  )
}

export default ImageCard