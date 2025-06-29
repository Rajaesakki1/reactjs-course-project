import PropTypes from 'prop-types'
import { useState } from 'react';
function Course(props){

   // let purchased = false;
    const [purchased, setPurchased]= useState (false);
    function BUYNOW(props,e){
        console.log("purchased")
        console.log(e);
       setPurchased ( true);
    }
    
    return(
       props.name&& <div className = "Card">
            <img src={props.image}alt=""></img>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <p>{props.rating}</p>
            <button onClick={()=> BUYNOW(props,event)}>BUY Now</button>
            <p>{purchased ?"already purchased":"get it now"} </p>
        </div>

    );

}
  
Course.propType={
    name :PropTypes.string
    
}
export default Course;