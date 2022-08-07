const cors = require("cors")
require("dotenv").config()

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    optionsSuccessStatus: 200,
}

module.exports = cors(corsOptions)
