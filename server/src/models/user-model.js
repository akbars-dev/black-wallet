const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    telegramId: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true },
    profileImage: { type: String, required: true },
    referallId: { type: Number },
    balance: { type: Number, required: true, default: 0 },
    tasks: [
        {
            taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'task', required: true },
            status: { type: String, enum: ['passed', 'not passed'], default: 'not passed' },
            completedAt: { type: Date }
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);
