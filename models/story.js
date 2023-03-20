const mongoose = require('mongoose');

const storyschema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        trim:true
    },
    body:{
        type:String,
        require:true,
    },
    status:{
        type:String,
        default:'public',
        enum:['public','private']
    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    },
    createAt:{
        type:Date,
        default:Date.now
    },

})

module.exports=mongoose.model('story',storyschema)