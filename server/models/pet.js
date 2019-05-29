var mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {type:String},
    type: {type:String},
    description: {type:String},
    skill: {type:String},
});

mongoose.model('Pet', PetSchema);
module.exports = {
    Pet: mongoose.model('Pet')
};