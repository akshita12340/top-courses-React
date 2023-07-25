import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) =>{

let course=props.course;
let likedCourses=props.likedCourses;
let setLikedCourses=props.setLikedCourses;
function clickHandler(){
    //pehle se liked h
    if(likedCourses.includes(course.id)){
        setLikedCourses((prev)=> prev.filter((cid) => (cid !== course.id)));
        toast.warning("Like removed!");
    }
    //liked nhi h ,toh liked courses me add krna h
    else{
        if(likedCourses.length===0){
            setLikedCourses([course.id]);
        }
        else{
            setLikedCourses((prev)=>[...prev,course.id]);
        }
        toast.success("Course Liked!");
    }
}

    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
           <div className="relative">
            <img src={course.image.url}/>
            <div>
                <button onClick={clickHandler} className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
                 {
                    likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                 }
                 
                </button>
            </div>
           </div>
            
           
           <div className="p-3">
              <p className="text-white font-semibold text-lg leading-6">{course.title} </p>
              <p className="text-white mt-2">
                {
                    course.description.length>100 ? (course.description.substr(0,100)+"...") : (course.descriptionS)
                }
              </p>
           </div>
        </div>
    );
}

export default Card;