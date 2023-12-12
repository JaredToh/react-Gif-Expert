import { useState } from "react"
import { AddCategory,GifGrid } from "./Elementos/";



export const GifExpertApp = () => {

  const [categorias,setCategorias]=useState(['Dragon ball','One pice']);

  const onAddCategory=(value)=>{

   const valorInputMin=value.toLowerCase();

    if (categorias.some((categoria) => categoria.toLowerCase() === valorInputMin)) {
      
      return;
    }
     
      setCategorias([value,...categorias]);
  };
  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory onNewCat={onAddCategory} />
        {
          categorias.map(category=>
            <GifGrid key={category}
                     category={category} />
          )
        }
    </>
    
  )
}
