const router = require('express').Router();
const req = require('express/lib/request');
const res = require('express/lib/response');
const { EmptyResultError } = require('sequelize/types');
const { Comment } = require('../../models');

router.get('/', (req, res) => {

});

router.post('/', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.body.post_id
})
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });

module.exports = router;