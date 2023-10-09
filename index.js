const express = require ('express')
const path = require('path')
const app = express()
const PORT = 3080

const staticPath = path.join(__dirname,"./public")
app.use(express.static(staticPath));

app.get('/', (req, res)=>{
    res.status(200).send(body)
})

app.get('*', (req, res) => {
    res.send('404',{
        errorcomment:"Page doesn't exists"
    });
})

app.listen(PORT, (err) => {
    if (err)
        console.log("An unexpected error has occurred\n" + err);
    else
        console.log(`Server is listening to http://localhost:${PORT}`)
})