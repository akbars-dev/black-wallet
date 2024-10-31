require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io'); // Use Socket.IO
const cors = require('cors');

const mongodb = require('./utils/mongodb-util');
const router = require('./routes');
const countdown = require('./utils/countdown-time');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } }); // Initialize Socket.IO

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use(router);

io.on('connection', async (socket) => { 
    const countdownDate = await countdown();    

    socket.emit('countdownDate', new Date(countdownDate).getTime());

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
});

server.listen(process.env.PORT, async () => {
    try {
        await mongodb();
        console.log(`> Server started on port ${process.env.PORT}`);
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
});
