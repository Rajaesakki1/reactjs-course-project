import Course from "./course"
import HTML from './assets/HTML.jpeg'
import CSS from './assets/CSS.jpg'





function CList(){
    const courses=[
        {
             name:"HTML",
            price:774,
            rating:5,
            image:HTML
           
        },
         {
            name:"CSS",
            price:775,
            rating:5,
            image:CSS
        },
         {
            name:"CSS",
            price:765,
            rating:4,
            image:CSS
        }

    ]
  courses.sort((x,y)=>y.price -x.price)
  const fcourse = courses.filter((course)=> course.price<770)
const coursesList=fcourse.map((coursess,index)=> (
<Course 
key={index}
name={coursess.name} 
price={coursess.price}
 rating={coursess.rating} 
 image={coursess.image}
 />
))
return(
    <>
    {coursesList}
    </>
);


    
}
export default CList;