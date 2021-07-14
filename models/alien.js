const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    tech:{
        type:String,
        require:true
    },
    sub:{
        type:Boolean,
        require:true,
        default:false
    }
})

module.exports = mongoose.model('Alien',alienSchema);