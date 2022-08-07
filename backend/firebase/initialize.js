const admin = require("firebase-admin")
var serviceAccount = require("d:/todo-app-4d005-firebase-adminsdk-tf1r5-d93aff6599.json")

const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

module.exports = {
    firebase,
    auth: admin.auth(),
}
