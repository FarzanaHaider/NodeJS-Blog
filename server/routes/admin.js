const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

const adminLayout = '../views/layouts/admin';

// Get 
// Admin - Login Page

router.get('/admin', async (req,res) => {         //Get route , this is a homepage route
    
    
    try {
        const locals = {
            title: "Admin",
            description: "Simple Blog created with NodeJs, Express & MongoDB."
        }

        res.render('admin/index', {locals, layout: adminLayout});
    } catch(error) {
        console.log(error);
    }
    
});

// Post
// Admin - Login Page

router.post('/admin', async (req,res) => {         //Get route , this is a homepage route
    
    try {

        const {username,password} = req.body;
        // console.log(req.body);
        res.redirect('/admin');

    } catch(error) {
        console.log(error);
    }
    
});


module.exports = router;