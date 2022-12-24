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

   game1:{
    type: String, 
    
   },

   game2:{
    type:  String, 
   },

   game3:{
    type:  String, 
   },

  
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);