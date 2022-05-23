"use strict";

const express = require('express');

let app = express();

app.use(express.static("public"));

app.get("/test", function(request, response) {
    console.log("got test");
    response.type("text").send("response");
})

app.listen(8000);