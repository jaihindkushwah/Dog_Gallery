// import { useState } from 'react';
import {createContext, useEffect, useState } from 'react';
import './App.css';
import CustomSearch from './components/Custom_Search/CustomSearch';
import ImageList from './components/ImageList/ImageList';
import SelectedDogBreedName from './components/SelectedDogBreedName/SelectedDogBreedName';
import GetAllBreedData, { getAllBreedLists } from './Api/getAllBreedData';

export const SelectedDog=createContext(null);


function App() {

  const [isVisible,setIsVisible]=useState(false);
  const [data,setData]=useState([]);
  const [images,setImageData]=useState([]);
  const[input,setInput]=useState('');
  const [selectedDog,setSelectedDog]= useState({name:""});
  // const [filterData,setFilterData]=useState([]);


  useEffect(()=>{
    (async function(){
      try {
        const result= await getAllBreedLists();
        setData(Object.keys(result));
        // console.log(result);
      } catch (error) {
          alert("Unable to fetch data.")
      }
    })();
  },[]);


  useEffect(()=>{
    const timeId=setTimeout(()=>{
      const filter=data.filter((el)=> el.includes(input.toLowerCase()));
      ( async function(){
        if(filter.length>0){
          const imageData= await GetAllBreedData(filter);
          const obj=imageData.map((el,i)=>({name:filter[i],img:el}));
          setImageData(obj);
        }
      }())
    },700);
    return ()=>clearTimeout(timeId);
  },[data,input])



  return (
    <SelectedDog.Provider value={{selectedDog,setSelectedDog}}>
    <div className="App">
          <CustomSearch isVisible={isVisible} setIsVisible={setIsVisible} data={data}/>
          {selectedDog.name.length>0 && <SelectedDogBreedName/>}
        <div className="main">
          <header className='main_header'>
              <h3>Dog Gallery</h3>
              <button onClick={()=>{setIsVisible(true)}} className='custom_search_btn'>Custom Search</button>
          </header>
          <div className="search_field">
              <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" name="" id="" placeholder='Type here to filter by breed' />
          </div>
          <div className='app_main'>
                    <ImageList data={images}/>
          </div>
        </div>
    </div>
    </SelectedDog.Provider>
  );
}

export default App;
