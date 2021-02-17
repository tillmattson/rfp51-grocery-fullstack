import $ from 'jquery';
let addGroceries = (item, quantity, callback) => {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:8080',
    headers: {item: item, quantity: quantity}
  })
  .done((data) => {
    callback(data);
  })
  .fail((data) => {
    console.log(data);
    responseJSON.errors.forEach((err) => console.error(err));
  })
}

export default addGroceries;