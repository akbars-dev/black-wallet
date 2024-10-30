const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({
    telegramId: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true,  },
    profileImage: { type: String, required: true,  },
    referallId: { type: Number },
    balance: { type: Number, required: true, default: 0 },
})


module.exports = mongoose.model('user', UserSchema)