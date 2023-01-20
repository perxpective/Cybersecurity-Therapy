# SC Topic 8 - Authentication and Authorization

###### tags: #SC 

## Table of Contents
```toc
```

## Introduction
- **What is authentication?**
	- The process or action of proving or showing something to be true, genuine or valid
- **What is authorization?**
	- To grant official permission/privileges to resources
	- Verifies whether access is allowed through policies and rules

## JSON Web Tokens
- JSON Web Token contains three segments
- Each of those segments are separate by a single period
- All three segments are Base 64 encoded

**Installation**
```
npm install --save jsonwebtoken
```

### JWT Header
- Comprises of the algorithm used and the token type
```json
{"alg": "HS256", "typ":"JWT"}
```

### JWT Payload (JWT)
- Contains the user defined information
```json
{"name":"lachelle"}
```

### JWT Signature
- Cryptographically produced hash of the earlier segments

## Writing Express Middleware
### Login Controller
```js
app.post("/", (req, res) => {
	let { username, password } = req.body
	user.verifyLogin(username, password, (err, user) => {
		if (err) return res.status(500).send({"message":"an error occurred"})
		if (!user) return res.status(401).send({"message":"user not authenticated"})
		jwt.sign(user, config.jwt.secret)
	})
})
```