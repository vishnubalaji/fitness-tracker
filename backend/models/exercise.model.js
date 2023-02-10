const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = Schema({
    username:{type:String, required:true},
    description:{type:String, required:true},
    duration:{type:Number, required:true}
});

const Exercise = mongoose.model('exercises');
model.exports = Exercise;