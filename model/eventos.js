const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventosSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    start:{
        type: Date,
        default: Date.now,
        required: true,
    },
    end:{
        type: Date,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Eventos", EventosSchema);

