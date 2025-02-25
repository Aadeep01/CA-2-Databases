const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const MovieSchema= new Schema({
    title:{
        type: String,
        required: true

    },

    director:{
        type: String,
        required: true
    },

    genre:{
        type: String,
        required:true
    },

    releaseYear:{
        type: Number,
        required: true
    },

    availableCopies:{
        type:Number,
        required:true
    }

})

module.exports = MovieSchema;