// import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker');
const mysql= require('mysql2');
const express= require('express');
const app= express();

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Eashita26'
});


let getRandomUser= () => {
  return [
    faker.datatype.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];

  };


 

  app.get("/", (req, res) => {
    res.send("welcome to home page");
  })


app.listen ("8080", () => {
  console.log("server is listening to port 8080");
})

//  try {
//     connection.query(q, [data], (err, result) => {
//       if (err) throw err;
//       console.log(result);
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   connection.end();
