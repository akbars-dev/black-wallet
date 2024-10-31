const mongoose = require('mongoose');



const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    cost: { type: Number, required: true,  },
    link: { type: String, required: true, default: 0 },
})


module.exports = mongoose.model('task', TaskSchema)