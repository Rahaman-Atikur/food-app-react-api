import React, { useEffect, useState } from 'react';
const Category = ({ setSelectedCategory }) => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res) => res.json())
            .then((data) => setCategory(data.categories));
    }, []);
    console.log(category);
    return (
        <div >
            <div className='flex content-center justify-center gap-5 mt-5'>
                {
                    category.map((cat) => <button className='btn btn-primary bg-sky-400 ' onClick={() => setSelectedCategory(cat.strCategory)} key={cat.idCategory}>{cat.strCategory}</button>)

                }
            </div>
            <div>
                {
                    category.map((categoryImage) => <img className='h-[50px] w-[50px]' src={categoryImage.strCategoryThumb} alt="" />)

                }

            </div>

        </div>
    );
};

export default Category;