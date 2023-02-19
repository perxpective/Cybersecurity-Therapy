# SC Exam Cheat Sheet

###### tags: #SC 

## Table of Contents
```toc
```

## Logging

```js
// using morgan

var morgan = require('morgan')

// using pre-defined format
app.use(morgan("combined"))

// using pre-defined tokens
app.use(morgan(":method :url :date :remote-addr :url"))

// creating custom tokens
morgan.token("token", (req ,res) => {
	return ...
})

// apply the custom token
app.use(morgan(":token :method :url :date"))
```

```js
// log file rotation
var rfs = require("rotating-file-stream")
var appLogStream = rfs.createStream('access.log', {
	interval: "1d",
	
})
```