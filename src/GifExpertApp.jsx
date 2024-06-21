import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Kimetsu no Yaiba']);

    const onAddCategories = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={value => onAddCategories(value)}
            />

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}
