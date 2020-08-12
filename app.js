const express = require('express')
const app = express()
const path = require('path')
const forecast = require('./forecast')

const mainDirectory = path.join(__dirname,'')
app.set('view engine','hbs')

app.get('', (req, res) => {

    forecast(19.0760, 72.8777,(error,response) => {
        if(error)
        {
            res.send({error})
        }
        res.send({response})
    })
})



app.listen(3000, () => {
    console.log('Server up on port 3000')
})