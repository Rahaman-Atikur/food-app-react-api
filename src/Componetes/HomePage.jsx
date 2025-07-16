import React, { useState } from 'react';
import Category from './Category';
import ShowCategoryFood from './ShowCategoryFood';

const HomePage = () => {
   
     const [selectedCategory,setSelectedCategory]  = useState("");
    return (
        <div>
            <div className="navbar bg-green-500 shadow-sm gap-6 content-center justify-center m-auto">
                <a className="btn btn-primary text-xl">Order Food</a>
                <a className="btn btn-primary text-xl">Our Menu</a>
                <a className="btn btn-primary text-xl">Available Today</a>
            </div>
            <Category setSelectedCategory={setSelectedCategory}></Category>
            <ShowCategoryFood selectedCategory={selectedCategory}></ShowCategoryFood>
        </div>

    );
};

export default HomePage;