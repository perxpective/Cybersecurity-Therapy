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

// log file rotation
var rfs = require("rotating-file-stream")
var appLogStream = rfs.createStream('access.log', {
	interval: "1d", // rotate by days
	path: path.join(__dirname, 'log') // path to stream
})

app.use(morgan("combined", { stream: appLogStream }))
```

## Regular Expressions
```js
// check regex
var input = input.question("enter input: ")
pattern = new RegExp('^.+@.+\.[a-z]+$')
if (pattern.test(userinput)) {
	console.log("Input is correct")
} else {
	console.log("Input is incorrect")
}
```

```
# REGULAR EXPRESSIONS

# check if string is digit type
\d+
[0-9]+

# check if string contains only alphabets
[a-zA-Z]+

# check if string is alphanumeric
[a-zA-Z0-9]+

# email validation (allows underscores and periods)
^[a-zA-Z0-9._]+@.\.[a-z]+$

# password check
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
```

Here's a breakdown of the regular expression:
-   `^` : start of string anchor
-   `(?=.*[a-z])` : positive lookahead for at least one lowercase letter
-   `(?=.*[A-Z])` : positive lookahead for at least one uppercase letter
-   `(?=.*\d)` : positive lookahead for at least one digit
-   `(?=.*[@$!%*?&])` : positive lookahead for at least one special character
-   `[A-Za-z\d@$!%*?&]{8,}` : character class matching any character of the required types, with a length of at least 8
-   `$` : end of string anchor

```js
// using validator
var validator = require("validator")
function validateRegistration(req, res ,next) {
	var username = req.body.username
	var email = req.body.email
	var role = req.body.role
	var password = req.body.password

	if (validator.isAlphanumeric(username) && validator.isEmail(email) && (role == 'user' || role == 'admin') && validator.isAlphanumeric(password) && password.length > 7) {
		next()
	} else {
		res.send(`{"Message":"Validation Failed"}`)
	}
}

module.exports.validateRegistration = validateRegistration

// applying the middleware
app.post('/api/user', validate.validateRegistration)
```