import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading, removeItem } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {images.map((img) => (
                    <GifItem
                        key={img.id}
                        {...img}
                        removeItem = {removeItem} //mandar todas las props de img
                    />
                ))}
            </div>
        </>
    )
}


// el "[]" es la dependecia, en este ejemplo no tiene
// dependencias y se representa con "[]",
// el useeffect se ejecutara segun las dependecias que tenga
// en este caso, solo se ejecutara una vez

// Las depedencias son variables, al cambiar estas, se
// ejecuta en useeffect