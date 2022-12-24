const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { type: String,
        required: [true, "name is required"],
    minlength:[2, "name must be at least 2 characters"],
    unique: [true, "player name must be unique!"],

},
    

    position : {
        type: String,
    },

    status: { 
        game1: {type: Number, default: 0 }, 
        game2: {type: Number, default: 0 },
        game3:{type: Number, default: 0 },
    }

  
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);