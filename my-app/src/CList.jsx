import Course from "./course";
import HTML2 from './assets/HTML2.avif';
import CSS1 from './assets/CSS1.jpg';
import { useState } from "react";

function CList() {

  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "HTML",
      price: 774,
      rating: 5,
      image: HTML2
    },
    {
      id: 2,
      name: "CSS",
      price: 775,
      rating: 5,
      image: CSS1
    },
    {
      id: 3,
      name: "CSS",
      price: 765,
      rating: 4,
      image: CSS1
    }
  ]);

  function handleDelete(id) {
    const newCourse = courses.filter((course) => course.id !== id);
    setCourses(newCourse);
    console.log("deleted", id);
  }

  courses.sort((x, y) => y.rating - x.rating);

  const fcourse = courses.filter((course) => course.price < 800);
  console.log(fcourse); // this is likely line 34

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
