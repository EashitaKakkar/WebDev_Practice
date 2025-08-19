const express= require ("express");
const app = express();

const port= 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=> {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res)=> {
    const instaData= require("./data.json");
    res.render ("instagram.ejs", {data: instaData});
});

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
});
