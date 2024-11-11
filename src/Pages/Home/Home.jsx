import React from "react";
import PHOTOS from "../../assets/images";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center pb-5 mt-3 large:h-90vh w-100vw small:h-auto">
      
      <div className="flex items-center justify-center h-auto py-3 large:gap-5 large:w-80 bg-vogueWhite small:w-90vw large:flex-row small:flex-col small:gap-3">
        
        <div className="flex items-center justify-center large:w-40 large:h-400px small:w-90 small:h-200px">
          <img
            src={PHOTOS.hero_image}
            alt="hero image"
            className="w-100 h-100 large:rounded-10 small:rounded-5"
          />
        </div>

        <div className="flex flex-col justify-center h-auto gap-2 large:items-start large:w-40 large:text-17px small:w-100 small:text-15px small:items-center">
          <h1 className="font-bold text-center text-blue-500 large:text-30px small:text-20px">
            LEARNING CAN BE FUN
          </h1>

          <p className="px-1 small:text-center large:text-start">
            With hands-on experience from real-life projects, learning becomes
            an exciting experience.
          </p>

          <Link
            to="/pages"
            className="flex items-center justify-center p-1 bg-blue-500 text-vogueWhite rounded-4"
          >
            Explore Our Courses
          </Link>
        </div>
        
      </div>
      
    </div>
  );
}

export default Home;
