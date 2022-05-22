const express = require('express');
const PostRouter = express.Router();
const Post = require('../models/PostsModel')

PostRouter.get('/', async (req, res)=>{
    // const data = new Post({
    //     uuid: 'fsdfsdfsfd',
    //     title: 'Ahmedabad City',
    //     description: 'Ahmedabad, in western India, is the largest city in the state of Gujarat. The Sabarmati River runs through its center. On the western bank is the Gandhi Ashram at Sabarmati, which displays the spiritual leader’s living quarters and artifacts. Across the river, the Calico Museum of Textiles, once a cloth merchant\'s mansion, has a significant collection of antique and modern fabrics. ',
    //     content: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/04/11/811584-ahmedabad-041119.jpg'
    // });
    // const response = await data.save();
    
    // console.log(data);
    var posts = [];


    try{
        Post.find({}, function (err, data) {
            if(data)
            res.json({
                "status":true,
                "data": data
            })
        });
    }
    catch(err){
        console.log(err.message);
    }
});

module.exports = PostRouter;