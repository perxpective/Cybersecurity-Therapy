
###### tags: `BED`

## Table of Contents
```toc
```

## JSON Web Tokens (JWT)
- JSON-based open standard for creating access tokens that assert some number of claims
- Composed of the following:
	- Header
	- Payload
	- Signature (to prove integrity of the message to receiving server)

### JWT Structure
#### Header
- Identifies which algorithm used to generate the signature
- `HS256` indicates that token is signed using HMAC-SHA256

```js
{
	"alg" : "HS256"
	"typ" : "JWT"
}
```

#### Payload
- Contains a set of claims
- Defines seven Registered Claim Names which are standard fields used in tokens

```js
{
	"loggedInAs" : "admin",
	"iat" : 1234567890
}
```

#### Signature
- Securely validates the token
- Signature calculated by encoding the header and payload using `Base64urlEncoding`

```js
HMAC-SHA256(
	base64urlEncoding(header) + '.' +
	base64urlEncoding(payload),
	secret
)
```

The three parts are encoded separately using `Base64urlEncoding` and concatenated using periods to produce a JWT

```js
const token = base64urlEncoding(header) + '.' + base64urlEncoding(payload) + '.' + base64urlEncoding(signature)
```

Above data and secret of `secretKey` creates the token

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI
```

## Installation of `jsonwebtoken`

```
npm install jsonwebtoken --save
```

## Code
### Define a new login checking function
- Define a new function to handle login checking based on email and password of user
	- User sends request with required credentials to server
	- Server checks if credentials are valid
	- If valid, server creates JWT token using desired payload and secret key
	- Server sends token back to client
	- Client saves the token to use it in every other request user sends
	- Practice of adding a token to request header is way of authorizing users to access resources
- Function will return 1 representing success and 0 representing failure upon successful query in database
```js
loginUser: (email, password, callback) => {
	var connection = db.getConnection()
	connection.connect((err) => {
		if (err) {
			console.log(err)
			return callback(err, null)
		} else {
			console.log("Connected")
			var sql = 'select * from user where email = ? and password = ?'
			connection.query(sql, [email, password], (err, result) => {
				connection.end()
				if (err) {
					console.log(err)
					return callback(err, null)
				} else {
					var msg = {"result" : result}
					return callback(null, msg)
				}
			})
		} 
	})
}
```

### Define a new app route
- Define new route in `app.js` to handle login
```js
app.post('/api/login', (req, res) => {
	var email = req.body.email
	var password = req.body.password
	user.loginUser(email, password, (err, result) => {
		if (!err) {
			res.send({"result": result})
		} else {
			res.status(500)
			res.send(err.statusCode)
		}
	})
})
```

### Create a new secret key
- Configure and create JSON web token which will be returned upon successful login
- Create new `config.js` file to define new secret key for JWT generation (Create in the main project folder)

```js
var secret='s12xyz00'; //your own secret key
module.exports.key = secret;
``` 

- Import `config.js` into `user.js`
	- `jsonwebtoken` library contains sign function to generate json web token to return to caller of web server upon successful verification of credentials
	- Encode user role and user id in JWT
	- If validation fails, return null value

```js
var config = require("../config.js")
var jwt = require("jsonwebtoken")

loginUser: (email, password, callback) => {
	var connection = db.getConnection()
	connection.connect((err) => {
		if (err) {
			console.log(err)
			return callback(err, null)
		} else {
			console.log("Connected")
			var sql = 'select * from user where email = ? and password = ?'
			connection.query(sql, [email, password], (err, result) => {
				connection.end()
				if (err) {
					console.log(err)
					return callback(err, null)
				} else {
					var token = ""
					if (result.length == 1) {
						token = jwt.sign({id:result[0].userid, role:result[0].role}, config.key,{expiresIn:86400})
					}
				}
			})
		}	
	})
}
```
- Generate `jsonwebtoken` library containing sign function which can be used to generate json web token upon successful verification of login credentials
- Encode user's role and id in the jwt
- If validation fails, return null value for token

#### Verifying the token
- Authorize verified user through token when protected webservice route is being called
- When user wants to access protected route or resource, user should send JWT in the Authorization header using Bearer schema
- Content of the header
```
Authorization: Bearer <token>
```
- Assuming that insert user API route can only be called by authenticated users with valid token
- Create a new **auth** folder in main project folder
- Inside auth folder, create `verifyToken.js` file with middleware function `verifyToken` to check presence of token and verify validity

```js
var jwt = require("jsonwebtoken")
var config = require("../config")

function verifyToken(req, res, next) {
	console.log(req.headers)
	var token = req.headers['authorization']
	console.log(token)
	if (!token || !token.includes("Bearer")) {
		res.status(403)
		return res.send({auth: false, message: "Not authorized!"})
	} else {
		// Obtain token value
		token = token.split("Bearer")[1] 
		console.log(token)
		jwt.verify(token, config.key, (err, decoded) => {
			if (err) {
				res.status(403)
				return res.end({auth: false, message: "Not authorized"})
			} else {
				// Decode userid and store in req for use
				req.userid = decoded.userid
				req.role = decoded.role
				next()
			}
		})
	}
}

module.exports = verifyToken

```

- Apply middleware to `app.js`

```js
var verifyToken = require("../auth/verifyToken.js")
app.post("api/user", verifyToken, (req, res) => {
	...
})
```