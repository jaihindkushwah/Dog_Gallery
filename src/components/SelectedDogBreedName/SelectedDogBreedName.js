import React, { useContext } from 'react'
import './index.css'
import ImageList from '../ImageList/ImageList'
import { SelectedDog } from '../../App'

function SelectedDogBreedName() {
  const {selectedDog,setSelectedDog} =useContext(SelectedDog);
  // console.log(selectedDog);
  if(selectedDog.name.length===0){
    return<></>
  }

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
                      <ImageList/>
                    </div>  

                    <div className='more_images'>
                      <p>More Images</p>
                      <ImageList/>
                    </div>           

              </div>
          </div>
      </div>
  )
}

export default SelectedDogBreedName