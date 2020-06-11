const express = require('express');
const router = require('./users/userRouter')
const logger = require("./middleware/logger")

const server = express();

const port = 4000

server.use(express.json())
server.use(router)

server.use(logger("short"))

server.use((err, req, res, next) => {
	console.log(err)
		res.status(500).json({
			message: "Something went wrong"
		})
	})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
