import React from 'react'

export const GifItem = ({ title, url, id, removeItem}) => {

    const removeImage = () => {
        removeItem(id);
    }

    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
            <button onClick={removeImage}>Eliminar</button>
        </div>
    )
}
