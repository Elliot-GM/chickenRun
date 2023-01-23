const mongoose = require('mongoose');

const Chicken = mongoose.model("Chicken", {
    name: {
        type: String,
        required: true
    }
});

module.exports = Chicken;