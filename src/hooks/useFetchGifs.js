import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
 
 const [image, setImages] = useState([]);
 const [loading, setloading] = useState(true)
    
 useEffect(() => {
        getGifs(category)
        .then(newImage=>setImages(newImage));
         setloading(false);
       }, [ ])
 
    return (
    image,
    loading
  )
}
