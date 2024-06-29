const mongoose = require("mongoose");

const AdvertisementSchema = new mongoose.Schema({
    provider:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    adType:{
        type: String,
        required: true,
        enum: ["Billboard Advertising", "Bus Advertising", "Auto Rickshaw Advertising Service"]
    },
    location: {
        type: String,
        required: true,
    },
    cost:{
        type: Number,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
        default: 0
    },
    contact:{
        type: String,
        required: true
    }
});

const Advertisement = mongoose.model('Advertisement', AdvertisementSchema);

module.exports = Advertisement;