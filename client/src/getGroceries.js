import $ from 'jquery';
let getGroceries = (callback) => {
  $.get('http://localhost:8080')
  .done((data) => {
    callback(data);
  })
  .fail(({responseJSON}) => {
    console.log(responseJSON)
    responseJSON.errors.forEach((err) => console.error(err));
  })
}

export default getGroceries;