import React, { useState } from "react";
import Card from "./Card";
import { set } from "mongoose";

const Cards = (props)=>{
    let courses=props.courses;
    let category=props.category;

    const[likedCourses,setLikedCourses] = useState([]);
  
    // returns a list of all courses got from the api response
    function getcourses(){
        if(category==="All"){
            const allCourses=[];

            console.log(courses);
            Object.values(courses).forEach((courseType)=>{
            courseType.forEach((course)=>{
                allCourses.push(course);
            })
        })

        return allCourses;
        }
        else{
                       // sirf specific category/array ka data pass krna h
                       return courses[category];
        }
        
    }

    return (
        <div>
            
                <div className="flex flex-wrap justify-center gap-4 mb-4">{
                    getcourses().map((course) => (
                         <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                    ))
                }
                      
                </div>
            
        </div>
    );
}

export default Cards;