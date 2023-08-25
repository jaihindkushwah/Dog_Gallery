import React, { useState } from 'react'
import './style.css'
import ImageList from '../ImageList/ImageList'

function CustomSearch({isVisible,setIsVisible,data}) {
  const [customData,setCustomData]=useState([]);
  const[userInput,setUserInput]=useState({option:"",number:""});

  const getImagesHandler= async()=>{
    if(userInput.option.length===0 || userInput.number.length===0){
        alert("Please enter valid input");
        return ;
    }
    if(isNaN(parseInt(userInput.number))){
      alert("Please enter valid input");
      return ;
    }
    try {
      const response=await fetch(`https://dog.ceo/api/breed/${userInput.option}/images/random/${userInput.number}`);
      const result=await response.json();
      const modifiedData=result.message.map((el)=>({name:userInput.option,img:el}))
      setCustomData(modifiedData);
    } catch (error) {
      console.log("unable to fetched the data");
      alert("unable to fetched the data")
    }
  }



  if(!isVisible){
    return<></>
  }
  return (
        <div className='custom_search_container'>
          <div className='custom_search'>
              <header>
                  <div>Custom Search</div>
                  <button onClick={()=>{setIsVisible(false)}} className='close_btn'>X</button>
              </header>
              <div className='custom_search_main'>
                  <div className='inputs'>
                        <select onChange={(e)=>{setUserInput({...userInput,option:e.target.value})}}>
                            <option value=''>Select a Breed</option>
                            {
                              data.map((el,i)=>{
                                return (<option value={el} key={`${el+i}`}>{el}</option>)
                              })
                            }
                        </select>
                        <input value={userInput.number} onChange={(e)=>{setUserInput({...userInput,number:e.target.value})}} placeholder='Number of Images'/>
                  </div>
                  <div className="button">
                        <button onClick={getImagesHandler}>Get Images</button>
                  </div>
                  <div className='sampleImages'>
                      <p>Showing {customData.length} images of {userInput.option}</p>
                      <div>
                      <ImageList data={customData}/> 
                      </div> 
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CustomSearch