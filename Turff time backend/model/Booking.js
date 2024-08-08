const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    coupon: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        required: true
    },
    slot: {
        type: String,
        enum: ['morning', 'afternoon', 'evening'],
        required: true
    },
    sport: {
        type: String,
        enum: ['football', 'basketball', 'tennis'],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Booking', BookingSchema);
