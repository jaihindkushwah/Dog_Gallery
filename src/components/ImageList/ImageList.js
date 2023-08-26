import React from 'react'
import ImageCard from '../Image_Card/ImageCard'
import './style.css'



function ImageList({data}) {
  let d=data || [];
  return (
    <div className='image_list'>
        { 
        // d.length>0?
          d.map((el,i)=>{
            return <ImageCard img={el.img} name={el.name} key={el.name+i}/>
        }) 
        // : <p style={{color:"red"}}>No Data Found !</p>
        }
    </div>
  )
}


export default ImageList