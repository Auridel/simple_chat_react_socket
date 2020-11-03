const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.json({extended: true}));

const db = new Map();


io.on("connection", (socket) => {
    console.log("connected");
    socket.on("ROOM_JOIN", ({room, userName}) => {
        console.log(userName)
        if(!db.has(room)){
            db.set(room,
                    new Map([
                        ['users', new Map()],
                        ['messages', []]
                    ])
            );
        }
        db.get(room).get("users").set(socket.id, userName);
        socket.join(room);
        const users = Array.from(db.get(room).get("users").values());
        io.to(room).emit("ROOM_JOINED", {room, users})
    })

    socket.on("disconnect", () => {
        db.forEach((item, key) => {
            if(item.get("users").delete(socket.id)){
                const users = Array.from(item.get('users').values());
                socket.to(key).broadcast.emit("USER_LEFT", users);
            }
        })
    })
})



const PORT  = process.env.PORT || 4000;

server.listen(PORT, (err) => {
    if(err) throw Error(err);
    else {
        console.log(`Server is running on port: ${PORT}`);
    }
})