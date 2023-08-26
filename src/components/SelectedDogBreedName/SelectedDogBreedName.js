import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import ImageList from '../ImageList/ImageList'
import { SelectedDog } from '../../App'
import { getRandomFourData, getSubBreedData } from '../../Api/getAllBreedData';

function SelectedDogBreedName() {
  const {selectedDog,setSelectedDog} =useContext(SelectedDog);
  const [subBreedData,setSubBreedData]=useState({subBreed:[],randomData:[]});
  useEffect(()=>{
      (async function(){
        try {
            const allImagesOfABreed= await getSubBreedData(selectedDog.name);
            const randomData= await getRandomFourData(selectedDog.name);
            // console.log(d);
            
            setSubBreedData({subBreed:allImagesOfABreed,randomData:randomData});
        } catch (error) {
            alert("Unable to fetch the data");
        }
      })();

  },[selectedDog])


  console.log(selectedDog);
  return (
        <div className='selected_dog_breed_container'>
          <div className='selected_dog_breed'>
              <header>
                  <div>Selected Dog Breed Name</div>
                  <button onClick={()=>{setSelectedDog({name:""})}} className='close_btn'>X</button>
              </header>
              <div className='selected_dog_breed_main'>
                    <div className='sub_breeds'>
                      <p>Sub Breeds</p>
                      <div>
                        <ImageList data={subBreedData.subBreed}/>
                      </div>
                    </div>  

                    <div className='more_images'>
                      <p>More Images</p>
                      <div>
                        <ImageList data={subBreedData.randomData}/>
                      </div>
                    </div>           

              </div>
          </div>
      </div>
  )
}

export default SelectedDogBreedName