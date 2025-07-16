import React, { useEffect, useState } from 'react';
const ShowCategoryFood = ({ selectedCategory }) => {
    const [foodCategory, setFoodCategory] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
            .then((res) => res.json())
            .then((data) => setFoodCategory(data.meals));
    }, [selectedCategory])
    // console.log(foodCategory);
    return (
        <div>
            {
                foodCategory.map((food =><div>
                    <p>food.strMeal</p>
                    <img src={food.strMealThumb} alt="" />
                </div>))
            }
        </div>
    );
};
export default ShowCategoryFood;