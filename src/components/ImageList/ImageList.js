import React from 'react'
import ImageCard from '../Image_Card/ImageCard'
import './style.css'



function ImageList({data}) {
  let d=data||[];
  return (
    <div className='image_list'>
        {
          d.map((el,i)=>{
            return <ImageCard img={el.img} name={el.name} key={el.name+i}/>
          })
        }
    </div>
  )
}

export default ImageList