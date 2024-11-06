require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const mongodb = require('./utils/mongodb-util');
const router = require('./routes');
const countdownModel = require('./models/countdown-model');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(router);

const connectToDbAndEmitCountdown = async (socket) => {
    const countdownDate = await countdownModel.findOne({});
    if (countdownDate) {
        socket.emit('countdownDate', new Date(countdownDate.date).getTime());
    }
};

io.on('connection', (socket) => {
    console.log('New client connected');
    
    // Emit initial countdown date on connection
    connectToDbAndEmitCountdown(socket);

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Listen to changes in the countdown document (MongoDB Change Stream)
const watchCountdown = async () => {
    const countdownCollection = await countdownModel.collection;
    const changeStream = countdownCollection.watch();

    changeStream.on('change', async (change) => {
        if (change.operationType === 'update' || change.operationType === 'replace') {
            const updatedCountdown = await countdownModel.findOne({});
            io.emit('countdownDate', new Date(updatedCountdown.date).getTime());
        }
    });
};

server.listen(process.env.PORT, async () => {
    try {
        await mongodb();
        await watchCountdown();
        console.log(`> Server started on port ${process.env.PORT}`);
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
});
