import React, { useState } from "react";
import { apiUrl, filterData} from "./data";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Spinner } from "./components/Spinner";
// import { use } from "bcrypt/promises";


const App = () => {

 // variable to store data of the cards
  const[courses,setCourses] = useState([]);
  const[loading,setLoading] = useState(true);
  const[category,setCategory]=useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
         let res= await fetch(apiUrl);
         const output = await res.json();

        //  console.log(output);
        setCourses(output.data);  // data is a key in output
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }


// kyoki api call kr rhe hein
  useEffect(() => {
      fetchData();
    },[])



  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 ">
    <div>
       <Navbar/>
    </div>
    <div className="bg-bgDark2">
     <div>
      <Filters filterData={filterData} category={category} setCategory={setCategory}/>
     </div>
     <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
       {
     loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
       }
      </div>
     </div>
   
  </div>
  );
  
};

export default App;
