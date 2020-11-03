const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const { v4: uuidv4 } = require('uuid');

app.use(express.json({extended: true}));

const db = new Map();


io.on("connection", (socket) => {
    console.log("connected");
    socket.on("ROOM_JOIN", ({room, userName}) => {
        if(!db.has(room)){
            db.set(room,
                    new Map([
                        ['users', new Map()],
                        ['messages', []]
                    ])
            );
        }
        const userList = Array.from(db.get(room).get("users").values());
        if(userList.find(item => item === userName)) io.to(socket.id).emit("USER_EXISTS");
        else {
            db.get(room).get("users").set(socket.id, userName);
            socket.join(room);
            io.to(socket.id).emit("SET_USERNAME", userName);
            const users = Array.from(db.get(room).get("users").values());
            io.to(room).emit("ROOM_JOINED", {room, users})
        }
    })

    socket.on("ADD_MESSAGE", ({msg, room}) => {
        const user = Object.fromEntries(db.get(room).get("users"))[socket.id];
        const newMsg = {
            user,
            msg,
            id: uuidv4()
        };
        db.get(room).get("messages").push(newMsg)
        io.to(room).emit("NEW_MESSAGE", newMsg);
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