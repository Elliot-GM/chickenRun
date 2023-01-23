const mongoose = require('mongoose');

const Chicken = mongoose.model("Chicken", {
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: false
    },
    weight: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0)
                throw new Error('Weight must be positive');
        }
    },
    steps: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0)
                throw new Error('Steps must be positive');
        }
    },
    isRunning: {
        type: Boolean,
        default: false,
    }
});

module.exports = Chicken;