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

**Pre-Defined Tokens Table**

| Token          | Value                                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------- |
| :date          | Current date and time in UTC                                                                                          |
| :http-version  | HTTP version of request                                                                                               |
| :method        | HTTP method of request                                                                                                |
| :referrer      | Referrer header of request                                                                                            |
| :remote-addr   | Remote IP address of request                                                                                          |
| :remote-user   | User authenticated as part of basic authentication for request                                                        |
| :req\[header\] | Given header of the request                                                                                           |
| :res\[header\] | Given header of the response                                                                                          |
| :response-time | Time between request coming into Morgan and when response headers are written in milliseconds                         |
| :status        | Status code of response                                                                                               |
| :total-time    | Time between request coming into Morgan and when response is finished being written out to connection in milliseconds |
| :url           | URL of request                                                                                                        |
| :user-agent    | Contents of User-Agent header of request                                                                              |

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
^[a-zA-Z0-9._]+@[a-z]+\.[a-z]+$

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
function validateRegistration(req, res, next) {
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
app.post('/api/user', validate.validateRegistration, (req, res) => {
    ...
})

// escape data
var input = "<script>alert('JS XSS!')</script>"
var sanitizedOutput = validator.escape(input)

// remove line breaks, tabs and white space
var input = "Hi there! \r\n Welcome to Secure Coding"
var sanitizedOutput = validator.stripLow(input)
```

## Preventing SQL Injections
```js
// use placeholders
var sql = `select userid, email, username from user where userid = ? and role = ?`

conn.query(sql, [userid, role], (err, result) => {
    ...
})

// use stored procedures
var sql = `call finduser(?, ?)`
conn.query(sql, [userid, role], (err, result) => {
    ...
})
```

## Authentication and Authorisation
```js
// login controller
app.post("/login", (req, res) => {
    let { username, password } = req.body
    user.verifyLogin(username, password, (err, result) => {
        if (err) return res.status(500).send({"message":"an error occurred"})
        if (!result) return res.status(401).send({"message":"user not authenticated"})
        jwt.sign(result, config.jwt.secret, {algorithm: "H256"}, (err, token) => {
            if (err) return res.status(500).send({"message": "an error occurred"})
            res.status(200).send({ token })
        })
    })
})

// authentication middleware
function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).send({ message: 'not authenticated' });
    const token = authHeader.replace('Bearer ', '')
    jwt.verify(token, config.jwt.secret, { algorithms: ['H256'] }, (err, decoded) => {
        if (err) return res.status(401).send({ message: 'not authenticated' })
        req.decodedToken = decoded
        next()
    })
}

// restricted api controller
app.get('/endpoint', verifyToken, (req, res) => {
if (!req.decodedToken.role !== 'admin') return res.status(403).send({ message: 'not authorized' })
    function((err, result) => {
        if (!err) {
            res.status(200).send({ result })
        } else {
            res.status(500).send({ error })
        }
    })
})

// password hashing (bcrypt)
var bcrypt = require("bcrypt")
var password = "password"
var saltRounds = 10

bcrypt.hash(password, saltRounds, (err, hash) => {
    ...
})

bcrypt.compare(password, passwordHash, (err, sucess) => {
    ...
})

// password encryption (crypto)
var crypto = require("crypto")
var key = crypto.createCipher('aes-128-cbc', 'password')
var string = key.update(stringToEncrypt, 'utf8', 'hex')
string += key.final('hex')

// password decryption
var key = crypto.createDecipher('aes-128-cbc', 'password'); 
var string = key.update(stringtoDecrypt, 'hex', 'utf8') string += key.final('utf8');
```

## CSRF
```js
// creating a new express session
var session = require("express-session")
app.use(session({
    secret: "secret_key",
    store: "sessionStore",
    saveUninitialized: false,
    resave: false
}))

// Express MySQL Session
var MySQLStore = require("express-mysql-session")(session)
var sessionStore = new MySQLStore({
    dbconnect.getConnection()
    ...
})

// get or set session values
req.session.role = role
req.session.username = username

// destroying a session
req.session.destroy

// check user roles
verifySession: (req, res, next) => {
    if (req.session.role) {
        next()
    } else {
        res.status(403)
        res.send(`{"message":"unauthorized"}`)
    }
}

// generating csrf tokens csurf
var csrf = require("csurf")
var csrfProtection = csrf()
app.get("/csrfgettoken", csrfProtection.function(req, res) => {
    var csrfToken = req.csrfToken()
    res.status(200).send(`{"csrfToken":"${csrfToken}$"}`)
    ...
    res.send("success!")
})
```