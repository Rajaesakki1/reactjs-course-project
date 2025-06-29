import PropTypes from 'prop-types'
function Course(props){
    
    return(
       props.name&& <div className = "Card">
            <img src={props.image}alt=""></img>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <p>{props.rating}</p>
        </div>

    );

}
  
Course.propType={
    name :PropTypes.string
    
}
export default Course;