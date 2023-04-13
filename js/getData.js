function getData(){
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data').then((response)=> response.json()).then((data)=>
  {
    const photos = data;
    return photos;
  }).catch((error) => {throw new Error(error);});
}
export {getData};
