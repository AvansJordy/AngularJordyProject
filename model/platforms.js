const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlatformSchema = new Schema({
    name:{
        type: String,
        required: true
    }
});

const Platform = mongoose.model('platforms', PlatformSchema);


module.exports={
    Platforms: Platform
    , PlatformSchema : PlatformSchema
};