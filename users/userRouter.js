const express = require('express');
const users = require("./userDb")
const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {
})

router.get('/', (req, res) => {
  users
    .get({})
    .then(user => {
      res.status(200).json(user);
    })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      error: "The posts information could not be retrieved."
    });
  });
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  return (req, res, next) => {
		users.findById(req.params.id)
			.then((user) => {
				if (user) {
					req.user = user
					next()
				} else {
					res.status(404).json({
						message: "User not found",
					})
				}
			})
			.catch(next)
	}
}

function validateUser(req, res, next) {
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({
      message: "Missing user name or email",
    })
  }
  next()
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
