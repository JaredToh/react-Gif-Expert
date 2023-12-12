export const getGifs= async( categoria)=>{
 
    const url=`https://api.giphy.com/v1/gifs/search?api_key=2zZzlH10ndOY0ZAPlWNAJGvr0n3TGC7k&q=${categoria}&limit=5`;
    const rsp=await fetch(url);
    const {data}=await rsp.json();
    const gifs=data.map(img=>({
      id:img.id,
      title:img.title,
      url:img.images.original.url
    }));
   
    return gifs;
  
  };