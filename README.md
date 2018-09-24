# trimbody.js - Request Body trimmer for Express Server
Trim extra spaces on request body for your express / sails app using this middlware.


## Getting Started

### Installation
Install the package via npm `npm install @hashtaagco/trimbody --save`

### Using
Using this middleware is quite simple like other out there.

```js
var express = require('express')
var trimbody = require('@hashtaagco/trimbody')
var bodyParser = require('body-parser')

var app = express()

// parse various different custom JSON types as JSON
app.use(bodyParser.json())
 
app.use(trimbody)

app.get('/', function (req, res) {
	res.send('hello world')
})


app.post('/test', (req, res) => {
	console.log(req.body)
	res.send(req.body)
})
app.listen(9092)
```
Now make post request via curl / postman to verify.

`curl -X POST -H "Content-Type: application/json"  --data '{  "name" : "Anand Siddharth    " }' http://localhost:9092/test`

Response : `{"name":"Anand"}`.

Observe that the extra space is gone.


That's all folks
