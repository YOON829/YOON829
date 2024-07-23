const url = require("url");
const express = require("express");
const app = express();
const port = 3000;



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log("Express 로 라우터 리팩토링하기");
})

// app.get("/", (req, res) => {
//     res.set({ "Content-Type": "text/html; charset=utf-8" })
//     res.end("Hello Express");


const feed = (req, res) => {
    res.json(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>`)
}


// })
//router
app.get("/", (req, res) => res.end("Hello World!"))
app.get("/user", user)
app.get("/feed", feed)

// callback function

function user(req, res) {
    const user = url.parse(req.url, true).query;
    res.json(`[user] name: ${ user.username }, age: ${ user.age }`);
}
