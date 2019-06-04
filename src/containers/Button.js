import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions';

let styles = {
  backgroundColor: 'HotPink ',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

let Button = ( props ) => {
  let [hover, setHover] = useState(0);
  return (
    <button
      style={!hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
      onMouseOut={() => { setHover(false) }}
      onMouseOver={() => { setHover(true) }}
      onClick={ props.getNews }>Press to see news</button>
  )
};

const mapDispatchToProps = {
  getNews: getNews,
};

Button = connect(null, mapDispatchToProps)(Button);

export default Button;