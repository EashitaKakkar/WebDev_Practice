const mongoose = require('mongoose');

main() 
    .then(() => {
    console.log("connection successful");
    })
    .catch((err) => console.log(err));


async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema= new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    author: {
        type:String,
    },
    price: {
        type:Number,
        min: [1, "Price is too low"],
    },
    discount:{
        type: Number,
        default:0,
    },
    category:{
        type: String,
        enum:["fiction", "non-fiction"],
    },
});

const Book= mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate
("68d02e8af4dfc34b7e19d9e0", {price: -100}, {runValidators: True})
.then((res)=> {
    console.log(res);
})
.catch((err) => {
    console.log(err.errors.price.properties.message);
})

// let book1= new Book ({
//     title: "Mathematics",
//     author: "RD Sharma",
//     price: 1200,
// });
// book1.save().then(res=> {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });