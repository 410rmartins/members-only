const router = require('express').Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
let User = require('../Models/user.model');
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function (email, password, done) {
        User.findOne({
            email: email
        }, function (err, user) {

            console.log("jaksdhkjash");
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            if (bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                    // passwords match! log user in
                    return done(null, user)
                } else {
                    // passwords do not match!
                    return done(null, false, { msg: "Incorrect password" })
                }
            })
            
        );
    })}));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

//router.post('/login', passport.authenticate('local'), (req, res) => { console.log("chegou");})
router.route('/login').post((req, res) => {
    const username = req.body.email;
    passport.authenticate('local', function (err, user, info) {
        console.log(user);
        if(user === false) res.json(err);
        else res.json(user);
        
    })(req, res, (res)=> {
        res.json("NICE");
    });
});


router.get('/logout', function (req, res) {
    req.logout();

    res.redirect('/users/login');
});

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


module.exports = router;