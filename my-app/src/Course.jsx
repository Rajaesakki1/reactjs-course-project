import PropTypes from 'prop-types';
import { useState } from 'react';

function Course(props) {

  const [purchased, setPurchased] = useState(false);

  function BUYNOW(e) {
    console.log("purchased");
    console.log(e);
    setPurchased(true);
  }

  return (
    props.name && <div className="Card">
      <img src={props.image} alt="" />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <p>{props.rating}</p>
      <button onClick={BUYNOW}>BUY Now</button>
      <p>{purchased ? "already purchased" : "get it now"}</p>
      <button onClick={() => props.delete(props.id)}>delete</button>
    </div>
  );
}

Course.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  delete: PropTypes.func.isRequired
};

export default Course;
