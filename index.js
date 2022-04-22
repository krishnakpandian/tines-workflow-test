const express = require("express")
const axios = require("axios")
const app = express()


// define the first route
app.get("/initiate", (req, res) => {
    res.status(200).send({message: "success"})
})

app.post("/manual/hasToken", (req, res) => {
    console.log(req.body.repo_url)
    res.status(200).send({hasToken: true})
})

app.post("/manual/noToken", (req, res) => {
    console.log(req.body.repo_url)
    res.status(200).send({hasToken: false})
})

app.post("/manual/error", (req, res) => {
    console.log(req.body.repo_url)
    res.status(400).send({message: "oof"})
})

app.put("/automatic/hasToken", (req, res) =>  {
    console.log(req.body.repo_url)
    res.status(200).send({hasToken: true})
})

app.put("/automatic/noToken", (req, res) =>  {
    console.log(req.body.repo_url)
    res.status(200).send({hasToken: false})
})

app.put("/automatic/error", (req, res) =>  {
    console.log(req.body.repo_url)
    res.status(400).send({message: "oof"})
})
// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));