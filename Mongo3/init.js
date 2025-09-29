const mongoose= require("mongoose");
const Chat= require("./modules/chat.js");

main()
.then( ()=> {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats= [
    {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date() // UTC format date
    }, 
    {
    from: "rohit",
    to: "mohit",
    msg: "all the best",
    created_at: new Date() 
    }, 
    {
    from: "anita",
    to: "vinita",
    msg: "bring me fruits",
    created_at: new Date() 
    }, 
    {
    from: "tony",
    to: "peter",
    msg: "see you at Chillis",
    created_at: new Date() 
    }, 

];
Chat.insertMany(allChats);
