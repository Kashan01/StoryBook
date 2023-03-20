const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    googleId:{
        type:String,
        require:true,
    },
    displayName:{
        type:String,
        require:true,
    },
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    image:{
        type:String
    },
    createAt:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model('User',userschema)