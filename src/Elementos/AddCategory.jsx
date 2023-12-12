import {useState} from 'react'



export const AddCategory = ({ onNewCat }) => {
 const [getInput, setInput] = useState('');

 const onInputChange=(event)=>{
    setInput(event.target.value);
 };
 const onSubnit=(event)=>{
    event.preventDefault();
   if(getInput.trim().length<=1) return;
    // setCategorias(categorias=>[getInput,...categorias]);

    onNewCat(getInput.trim());
    setInput('');
 }
    return (
    <form onSubmit={onSubnit}>
        <input
        type='text'
        placeholder='buscar Gif'
        value={getInput}
        onChange={onInputChange}
        />
    </form>
   
    
  )
}
