import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setisLoading(false);
    }

    const removeItem = (idToRemove) => {
        setImages(images.filter(image => image.id !== idToRemove));
    };

    useEffect(() => {
        getImages();
    }, [])


    return {
        images,
        isLoading,
        removeItem
    }

}
