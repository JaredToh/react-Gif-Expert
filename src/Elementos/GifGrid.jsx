import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useState } from "react";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {
 
 const [images, setImages] = useState([]);
 const [loadgin, setloadgin] = useState(true);
 
 useEffect(() => {
  getGifs(category)
  .then(newImage=>setImages(newImage));
  setloadgin(false);
 }, [ ])
 
  return (
    <>
        <h2>{category}</h2>
        {
          loadgin && (<h2>cargando...</h2>)
        }
        <div className='card-grid'>
          {
            images.map(({id,title,url}) =>
              <GifItem key={id}
                       title={title}
                       url={url}
                        />
            
            )
          }
        </div>
        
    </>
    
  )
}
