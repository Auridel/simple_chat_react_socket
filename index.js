const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io");

app.use(express.json({extended: true}));

const PORT  = process.env.PORT || 4000;

server.listen(PORT, (err) => {
    if(err) throw Error(err);
    else {
        console.log(`Server is running on port: ${PORT}`);
    }
})