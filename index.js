const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
}))

const objectdate = new Date();

const day = objectdate.getDate();
const month = objectdate.getMonth();
const year = objectdate.getFullYear();

const date = `${day}-${month}-${year}`;

const hours = objectdate.getHours();
const minutes = objectdate.getMinutes();
const seconds = objectdate.getSeconds();

const time = `${hours}-${minutes}-${seconds}`;

let Files = [];

app.post("/createfolder", (req, res) => {
    fs.writeFile(`./txt/${date}_${time}.txt`, `timestramp:${time}`, function (err) {
        if (err) throw err;
        res.json({message:"file created"})
    })
})

app.get("/files", (req, res) => {
    fs.readdir('txt', function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
            Files.push(file);
        });
    })
    res.json(Files);
})


app.listen(3002);

