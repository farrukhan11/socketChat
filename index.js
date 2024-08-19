import http from "http";
import express from "express";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//Socket.ioo connection
io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`./public/index.html`);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
