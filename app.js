const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/Home', (req, res) => {
    // res.send('Hello home!')
    res.sendFile(__dirname + '/home.html')
})
app.get('/About', (req, res) => {
    // res.send('Hello about us!')
    res.sendFile(__dirname + '/about.html')
})
app.get('/Contact', (req, res) => {
    // res.send('Hello contact!')
    res.sendFile(__dirname + '/contact.html')
})
app.get('*', (req, res) => {
    // res.send('Hello contact!')
    res.sendFile("404")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://127.0.0.1:${port}`)
})