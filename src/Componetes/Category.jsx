import React, { useEffect, useState } from 'react';
const Category = ({setSelectedCategory}) => {
    const [category, setCategory] = useState([]);
   
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res) => res.json())
            .then((data) => setCategory(data.categories));
    }, []);
    // console.log(category);
    return (
        <div className= 'flex content-center justify-center gap-5 mt-5'>
            {
                category.map((cat)=> <button className='btn btn-primary bg-sky-400 ' onClick={()=>setSelectedCategory(cat.strCategory)}  key={cat.idCategory}>{cat.strCategory}</button>)
            }
        </div>
    );
};

export default Category;