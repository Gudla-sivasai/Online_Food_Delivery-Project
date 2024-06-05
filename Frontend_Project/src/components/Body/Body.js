import React from 'react';
import RestaurantCards from './RestaurantCards';
import Carousel from './Carousel';
import CategorySlide from './CategoriesSlide';

const SearchBox = () => {
    return(
        <>
        <div className="container search-bar mt-5">
            <form className="d-flex">
                <input className="form-control me-2 px-5 shadow" list="datalistOptions" type="search" placeholder="Search"
                    aria-label="Search"/>
                <button className="btn btn-outline-primary shadow" type="submit">Search</button>
                {/* <datalist id="datalistOptions">
                    <option value="Biryani">
                    <option value="Veg Biryani">
                    <option value="Pot Biryani">
                    <option value="Desert">
                    <option value="Ice cream">
                </datalist> */}
            </form>
        </div>
        <hr className="border border-dark border-1 opacity-75 mx-5 mt-4"/>
        </>
    )
}

const Body = () => {
    return(
        <>
            <Carousel/>
            <CategorySlide/>
            <SearchBox/>
            <RestaurantCards/>
        </>
    )
}

export default Body;
