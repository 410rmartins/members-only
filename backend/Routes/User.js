const router = require('express').Router();
const bcrypt = require('bcryptjs');

let User = require('../Models/user.model');

router.route('/register').post((req, resp) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    var password = req.body.password; 
    const isMember = req.body.isMember;

    console.log(password);
    //encrypt password with bcryptjs
    bcrypt.hash(password , 10, (err, hashedPassword) => {
        // if err, do something
        if(err){
            console.log("Error hashing password");
            resp.status(400).json("Error creat");
        }
        password = hashedPassword;
        console.log(email);
        console.log(password);
        const new_user = new User({ firstName, lastName, email, password, isMember });
        new_user.save()
            .then(() => resp.json("new user registered"))
            .catch(err => {
                console.log(err)
                resp.status(400).json("Error: " + err)});
    });

    
    
});

router.route('/make-member').post((req, res) => {

});

router.route('login').get((req,res)=>{

});

router.route('logout').get((req, res) => {

});

module.exports = router;