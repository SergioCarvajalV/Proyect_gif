import { useState } from "react";
import { AddCategory,GifGrid} from "./components";
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory) => {
        //validacion
        if ( categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories]);

    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory 
                //setCategories = { setCategories }
                onNewCategory = { onAddCategory }
            />
            {/* boton click 
            <button onClick={ onAddCategory }>Agregar</button>
            */}

            { 
                categories.map( (category) => (
                        <GifGrid 
                        key ={category} 
                        category = {category}
                        />
                    )) 
            }

        </>
    )
}