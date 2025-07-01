import Course from "./course";

import { useEffect, useState } from "react";

function CList() {
 
  const [courses, setCourses] = useState(null);
  const[dummy,setdummy]=useState(true);
   


  useEffect(()=>{
    
    fetch ('http://localhost:3000/courses')
    .then(Response => {console.log(Response);
      return Response.json()
    }).then(data => setCourses(data))

  },[]);
  if(!courses){
    return<></>
  }


  function handleDelete(id) {
    const newCourse = courses.filter((course) => course.id !== id);
    setCourses(newCourse);
    console.log("deleted", id);
  }

  //courses.sort((x, y) => y.rating - x.rating);

  const fcourse = courses.filter((course) => course.price < 800);
  console.log(fcourse); // this is likely line 34
   
  if(!courses){
    return<></>
  }


  const coursesList = fcourse.map((coursess) => (
    <Course
      key={coursess.id}
      id={coursess.id}
      name={coursess.name}
      price={coursess.price}
      rating={coursess.rating}
      image={coursess.image}
      delete={handleDelete}
    />
  ));

  return (
    <>
      {coursesList}
    </>
  );
}

export default CList;
'//npx json-server --watch data/dummydata.json --port 3000 --static ./data'

