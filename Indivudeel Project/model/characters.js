const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    imagePath: String
});

const Character = mongoose.model('characters', CharacterSchema);


module.exports=Character;