import Course from "./course"
import HTML2 from './assets/HTML2.avif'
import CSS1 from './assets/CSS1.jpg'





function CList(){
    const courses=[
        {
             name:"HTML",
            price:774,
            rating:5,
            image:HTML2
           
        },
         {
            name:"CSS",
            price:775,
            rating:5,
            image:CSS1
        },
         {
            name:"CSS",
            price:765,
            rating:4,
            image:CSS1
        }

    ]
  courses.sort((x,y)=>y.rating -x.rating)
  const fcourse = courses.filter((course)=> course.price<800)
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