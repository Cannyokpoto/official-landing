import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { courses } from "../../assets/Data";


function OurCourses() {
  return (
    <div className="flex flex-col items-center h-auto gap-5 py-5 large:w-100vw small:w-90vw text-15px bg-vogueWhite">
      
      <div className="flex flex-col items-center h-auto gap-2 w-100">
        <h1 className="font-bold text-blue-500 large:text-25px small:text-20px">
          EXPLORE OUR COURSES
        </h1>
        <p className="text-center small:px-1 large:px-0">Click on a course to see the course content.</p>
      </div>

      <div className="flex flex-col h-auto gap-3 text-blue-500 large:w-50 text-15px small:w-100 small:px-1">

        {
            courses.map((course, i)=>
                <Link
                    to={`/${course.path}`}
                    key={i}
                    className="flex items-center justify-between h-auto p-1 border border-blue-500 w-100 rounded-4 hover:text-vogueWhite hover:bg-blue-500"
                >
                    {course.name}
                    <MdOutlineChevronRight className="text-25px hover:text-vogueWhite" />
                </Link>
            )
        }
      </div>
    </div>
  );
}

export default OurCourses;
