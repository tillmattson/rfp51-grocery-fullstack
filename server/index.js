// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const db = require("../db/index.js");

app.use(cors());

app.listen(port, () => {
  console.log("listening on 8080");
});

app.get('/', (req, res) => {
  db.query(`select * from groceries;`, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  })
})

app.post('/', (req, res) => {
  let item = req.headers.item;
  let quantity = req.headers.quantity;
  insertItem(item, quantity);
  res.end();
})


let insertItem = (item, quantity) => {
  db.query(`insert into groceries (name, quantity) values ('${item}', ${quantity});`, (err, res) => {
    if (err) {
      updateQuantity(item, quantity)
      // console.error(err);
    }
  })
}

let updateQuantity = (item, quantity) => {
  db.query(`update groceries set quantity = quantity + ${quantity} where name = '${item}';`, (err, res) => {
    if (err) {
      console.error(err);
    }
  })
}
