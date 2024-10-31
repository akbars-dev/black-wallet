const mongoose = require('mongoose');



const CoundownSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    status: { type: Boolean, required: true, default: false  },
})


module.exports = mongoose.model('countdown', CoundownSchema)