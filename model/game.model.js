const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CharacterSchema = require('./characters');
const PlatformSchema = require('./platforms').PlatformSchema;

const GameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    characters: [{
        type: Schema.Types.ObjectId,
        ref: 'characters'
    }],
    imagePath: String,
    platforms: [PlatformSchema],
    developer: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    }

});

GameSchema.pre('findByIdAndRemove', function(callback){
    console.log('werkt')
    this.model('characters').remove({_id: this._id}, callback);
});



const Game = mongoose.model('game', GameSchema);

// Game.count({}, function (err, count) {
//     if(count < 5){
//         console.log('add a game');
//         const game = new Game({
//             title: "Overwatch",
//             genre: "First-person shooter",
//             description: "In a time of global crisis, an international task force of heroes banded together to restore peace to a war-torn world: OVERWATCH. It ended the crisis and helped to maintain peace in the decades that followed, inspiring an era of exploration, innovation, and discovery. But after many years, Overwatch's influence waned, and it was eventually disbanded.",
//             characters: [
//                 // {
//                 //     name: 'Junkrat',
//                 //     imagePath: 'https://www.geforce.com/sites/default/files-world/featured_image/overwatch-keyart.jpg'
//                 // },
//                 // {
//                 //     name: 'Roadhog',
//                 //     imagePath: 'https://www.geforce.com/sites/default/files-world/featured_image/overwatch-keyart.jpg'
//                 // },
//                 // {
//                 //     name: 'Solder 76',
//                 //     imagePath: 'https://www.geforce.com/sites/default/files-world/featured_image/overwatch-keyart.jpg'
//                 // }
//             ],
//             imagePath: 'https://www.geforce.com/sites/default/files-world/featured_image/overwatch-keyart.jpg',
//             platforms: [
//                 {
//                     name: 'Microsoft Windows'
//                 },
//                 {
//                     name: 'Playstation 4'
//                 },
//                 {
//                     name: 'Xbox One'
//                 }
//             ],
//             developer: "Blizzard Entertainment",
//             publisher: "Blizzard Entertainment",
//             releaseYear: "2017"
//         });
//
//         const characters = new CharacterSchema({
//
//             name: 'D.VA',
//             imagePath: 'https://www.geforce.com/sites/default/files-world/featured_image/overwatch-keyart.jpg'
//         });
//
//         game.characters.push(characters);
//         characters.save();
//         game.save();
//     }
//
//     else {
//         console.log('zit al een game in de db')
//     }
// });




module.exports = Game;