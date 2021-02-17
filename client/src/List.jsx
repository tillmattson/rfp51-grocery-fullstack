import getGroceries from './getGroceries.js';
import React from 'react';

let List = (props) => {
  if (props.items.length > 1) {
    return (<div>{
      props.items.map((item) => {
        return (<div>{item.name + ' ' + item.quantity}</div>)
      })
      }</div>)
  } else {
    return null;
  }
}

export default List;