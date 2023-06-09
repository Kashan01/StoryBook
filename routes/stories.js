const express = require('express');
const router  = express.Router();
const {ensureAuth}  = require('../middleware/auth');
const Story = require('../models/story'); 


//show add page 
//get stories/add
router.get('/add',ensureAuth,(req,res)=>{
    res.render('stories/add')
})

//process add form
//Post /stories
router.post('/',ensureAuth, async(req,res)=>{
    try{
        req.body.user=req.user.id
        await Story.create(req.body)
        res.redirect('/dashboard')
    }catch(err){
        console.log(err);
        res.render('error/500')
    }
})

//show all stories
//  /stories

router.get('/',ensureAuth,async(req,res)=>{
    try {
        const stories = await Story.find({status:'public'})
        .populate('user')
        .sort({createAt:'desc'})
        .lean()

        res.render('stories/index',{
            stories,
        })
    } catch (error) {
        console.log(error)
        res.render('error/500')
    }
})

//show edit page 
//get /stories/edit/:id 
router.get('/edit/:id',ensureAuth,async(req,res)=>{
    const story = await Story.findOne({
        id:req.params.id
    }).lean()
    if(!story){
        return res.render('error/404')
    }
    if(story.user!=req.user.id){
        res.redirect('/stories')
    }else{
        res.render('stories/edit',{
            story,
        })
    }
    
})



module.exports=router;