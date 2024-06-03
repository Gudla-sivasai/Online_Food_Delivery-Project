import React from 'react';
import {image1, image2, image3} from '../Images/image';
import RestaurantCards from './Cards';

const Carousel = () => {
    return(
    <div className="body my-3">
        <div className="container shadow bg-light py-2 my-5">
             <div className="Carousel">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                 </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={image1} className="d-block w-100" alt="..." height="500" width="400"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                     </div>
                     <div className="carousel-item" data-bs-interval="2000">
                        <img src={image2} className="d-block w-100" alt="..." height="500" width="400"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="..." height="500" width="400"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
          </div>
        </div>
    </div>
    )
}

const CategorySlide = () =>{
    return(
        <>
        <hr className="border border-primary border-1 opacity-75 mx-5 mt-3"/>

        <div className="contain d-flex mx-3 overflow-x-auto">
            <div className="card text-center border border-0 px-2">
                <img src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=1024x1024&w=is&k=20&c=bvTAMlq5A8Z5EhVjBn6D8eYOQS-rsuKmT9ToLkCc2Y4="
                    className="card-img-top rounded-circle" alt="..." height="200" width="180px"/>
                <div className="card-body">
                    <h5 className="card-title">Biryani</h5>
                </div>
            </div>
            <div className="card border border-0 text-center">
                <img src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_1280.jpg"
                    className="card-img-top rounded-pill" alt="..." height="200" width="20px"/>
                <div className="card-body">
                    <h5 className="card-title">Pot Biryani</h5>
                </div>
            </div>
            <div className="card text-center border border-0 px-2">
                <img src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=1024x1024&w=is&k=20&c=bvTAMlq5A8Z5EhVjBn6D8eYOQS-rsuKmT9ToLkCc2Y4="
                    className="card-img-top rounded-circle" alt="..." height="200" width="180px"/>
                <div className="card-body">
                    <h5 className="card-title">Biryani</h5>
                </div>
            </div>
            <div className="card border border-0 text-center">
                <img src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_1280.jpg"
                    className="card-img-top rounded-pill" alt="..." height="200" width="20px"/>
                <div className="card-body">
                    <h5 className="card-title">Pot Biryani</h5>
                </div>
            </div>
            <div className="card text-center border border-0 px-2">
                <img src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=1024x1024&w=is&k=20&c=bvTAMlq5A8Z5EhVjBn6D8eYOQS-rsuKmT9ToLkCc2Y4="
                    className="card-img-top rounded-circle" alt="..." height="200" width="180px"/>
                <div className="card-body">
                   <h5 className="card-title">Biryani</h5>
                </div>
            </div>
            <div className="card border border-0 text-center">
                <img src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_1280.jpg" className="card-img-top rounded-pill" alt="..." height="200" width="20px"/>
                <div className="card-body">
                    <h5 className="card-title">Pot Biryani</h5>
                </div>
            </div>
        </div>

        <hr className="border border-primary border-1 opacity-75 mx-5 mt-3"/>
        </>
    )
}

const SearchBox = () => {
    return(
        <>
        <div class="container search-bar mt-5">
            <form class="d-flex">
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
            {/* <RestaurantCards/> */}
        </>
    )
}

export default Body;