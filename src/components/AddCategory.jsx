import { useState } from 'react';

export const AddCategory = ( {onNewCategory}) => {

    //useState
    const [inputValue, setInputValue] = useState('');

    //Funcion para modificar el input
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };

    //Manejamos el evento al enviar el formulario
    const onSubmit = (event) => {
        event.preventDefault();
        //Si el valor ingresado es menor o igual a 1, no actualizamos lista
        if ( inputValue.trim().length <=1 ) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}> 
            <input 
                type="text"
                placeholder="Buscar Gifs" 
                value={ inputValue }
                onChange = {onInputChange}
            />
        </form>
        
    )
}
