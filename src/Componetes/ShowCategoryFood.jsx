import React, { useEffect, useState } from 'react';
const ShowCategoryFood = ({ selectedCategory }) => {
    const [foodCategory, setFoodCategory] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedCategory}`)
            .then((res) => res.json())
            .then((data) => setFoodCategory(data.meals));
    }, [selectedCategory])
    // console.log(foodCategory);
    return (
        <div>
            {
                foodCategory.map((food =><div>
                    <p>{food.strCategoryDescription}</p>
                    <img src={food.strCategoryThumb} alt="" />
                </div>))
            }
        </div>
    );
};
export default ShowCategoryFood;