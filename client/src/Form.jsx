import React from 'react';

let Form = (props) => {
  return (
    <form onSubmit={(e) => {e.preventDefault(); props.addGroceries(e.target.item.value, e.target.quantity.value, props.renderItems); }}>
      <label> Item
        <input name="item"/>
      </label>
      <label> Quantity
        <input name="quantity" type="num"/>
      </label>
      <button>Add Groceries</button>
    </form>
  )
}

export default Form;