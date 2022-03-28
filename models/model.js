const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number,
        validate(value){
            if (value < 0)
            throw new Error('Age must be greater than 0');
        }
    }
});

module.exports = mongoose.model("Data", dataSchema);