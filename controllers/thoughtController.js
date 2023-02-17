const { Thought } = require('../models/Thought');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .populate({ path: 'tags', select: '-__v' })
      .then((thoughts) => res.json(thoughts))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
    },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.postId })
      .populate({ path: 'tags', select: '-__v' })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No post with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
        .then((thought) => {
            return user.findOneAndUpdate(
                {
                    username: req.body.username,
                },
                {
                    $addToSet: {
                        thoughts: thought._id
                    }
                },
                {
                    new: true
                }
            )
        })
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
};