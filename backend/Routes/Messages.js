const router = require('express').Router();

let Message = require('../Models/message.model');

router.route('/create').post((req, res) => {
    const title = req.body.title;
    const text = req.body.text;
    const author = req.body.author;
    const timestamp = req.body.date;

    const new_msg = new Message({title, text, author, timestamp});

    new_msg.save()
    .then(() => res.json("Added message: "+ title))
    .catch(err => res.status(400).json("Error: "+err));
});

router.route('/delete/:id').delete((req, res) => {
    Message.findByIdAndDelete(req.params.id)
    .then(() => res.json("Message deleted"))
    .catch(err => res.status(400).json("Error: " +err));
});