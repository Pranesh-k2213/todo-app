const { auth } = require("../firebase/initialize")

module.exports = (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")
    ) {
        const tokenId = req.headers.authorization.slice(7)
        auth.verifyIdToken(tokenId)
            .then((decodedToken) => {
                req.user = decodedToken
                console.log("User id" + req.user.uid)
                next()
            })
            .catch((error) => {
                console.log(error)
                res.status(500).json({ error })
            })
    } else {
        console.log("No token Found")
        res.status(403).json({ error: "unauthorized" })
    }
}
