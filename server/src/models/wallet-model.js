const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    walletAddress: { type: String, required: true }
});

module.exports = mongoose.model('wallet', WalletSchema);
