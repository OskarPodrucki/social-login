const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const port = 3000

console.log("nosiema")

app.listen(port, () => {
    console.log("Server is running. Port: " + port)
})
