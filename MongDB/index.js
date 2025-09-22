const mongoose = require('mongoose');

main() 
    .then(() => {
    console.log("connection successful");
    })
    .catch((err) => console.log(err));


async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema= new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User= mongoose.model("User", userSchema);

User.findOneAndDelete("68d0207be3095ab5357fd3d9",{age: 42},{new: true}).then((res)=>{
    console.log(res);
});

// User.updateMany({age:{ $gt:48}}, {age: 49})
// .then((res)=>{
//     console.log(res);}) 
//     .catch(err => {
//     console.log(err);
// });

// User.insertMany([
//     {name:"Tony", email: "tony@gmail.com", age: 50},
//     {name:"Peter", email: "peter@gmail.com", age:30},
//     {name:"Bruce", email: "bruce@gmail.com", age:50},
// ]).then(res => {console.log(res);});

// const user1= new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 48,
// });

// user1.save();
