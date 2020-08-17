const router = require('express').Router();

let User = require('../Models/user.model');

router.route('/register').post((req, resp) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const isMember = req.body.isMember;

    //encrypt password with bcryptjs

    const new_user = new User({firstName, lastName, email, password, isMember});


    new_item.save()
        .then(() => resp.json("new user registered"))
        .catch(err => resp.status(400).json("Error: "+err));

});

router.route('/make-member').post((req, res) => {

});

router.route('login').get((req,res)=>{

});

router.route('logout').get((req, res) => {

});
