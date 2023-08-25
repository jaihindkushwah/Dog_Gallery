
async function GetAllBreedData(data){
    const d=data.map( async(el)=>{
        const res=await fetch(`https://dog.ceo/api/breed/${el}/images/random`)
        const result=await res.json();
        return result.message;
    })
    return await Promise.all(d);
}
export default GetAllBreedData;