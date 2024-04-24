async function GetAllBreedData(data) {
  const d = data.map(async (el) => {
    const res = await fetch(`https://dog.ceo/api/breed/${el}/images/random`);
    const result = await res.json();
    return result.message;
  });
  return await Promise.all(d);
}
export default GetAllBreedData;

export async function getSubBreedData(breedName) {
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breedName}/list`);
  const result = await response.json();
  const getImageData = result.message.map(async (el) => {
    const resp = await fetch(
      `https://dog.ceo/api/breed/${breedName}/${el}/images/random `
    );
    const res = await resp.json();
    return res.message;
  });

  const data = Promise.all(getImageData);

  const imageList = (await data).map((el, i) => ({
    img: el,
    name: result.message[i],
  }));
  return imageList;
  } catch (error) {
    return [];
  }
}

export async function getRandomFourData(breedName) {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breedName}/images/random/4`
    );
    const result = await response.json();
    const imageList = (await result.message).map((el, i) => ({
      img: el,
      name: breedName,
    }));
    return imageList;
  } catch (error) {
    return [];
  }
}

export async function getAllBreedLists() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const result = await response.json();
  return result.message;
}
