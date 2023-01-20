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
		jwt.sign(user, config.jwt.secret, {algorithm: "H256"}, (err, token) => {
			if (err) return res.status(500).send({message: "an error occurred"})
			res.status(200).send({token})
		})
	})
})
```

### Authentication Middleware
```js
function verifyToken(req, res, next) {
	let auth = req.headers.authorization;
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).send({ message: 'not authenticated' });

    const token = authHeader.replace('Bearer ', '');
    jwt.verify(token, config.jwt.secret, { algorithms: ['HS256'] }, (err, decoded) => {
	    if (err) return res.status(401).send({ message: 'not authenticated' });
        req.decodedToken = decoded;
        next();
    });
}
```

### Restricted API Controller
```js
app.get('/users', verifyToken, (req, res) => {
    if (!req.decodedToken.role !== 'admin')
        return res.status(403)
            .send({ message: 'you dont have sufficient permissions' });

    // handle processing

    res.status(200).send({ users });
});
```

### Using Front-End JavaScript
**Login HTML**
```js
var xhr = new XMLHttpRequest();
xhr.open('POST', '/login', true);
xhr.setRequestHeader('Content-Type’, ‘application/x-www-form-urlencoded’);

xhr.onload = function () {
    if (this.readyState === XMLHttpRequest.DONE) {
        let response = JSON.parse(this.response);
        let msg = document.getElementById('msg');

        if (this.status === 200) {
            localStorage.setItem('jwt_token', response.token);
            msg.innerHTML = `You have logged in!`;
        } else {
            msg.innerHTML = `Error: ${response.message}`;
        }
    }
};

xhr.send(`username=${username}&password=${password}`);
```

**Viewing Restricted Content**
```js
let token = localStorage.getItem('jwt_token');var xhr = new XMLHttpRequest();
xhr.open(‘GET', '/api/users', true);
xhr.setRequestHeader(‘Authorization’, `Bearer ${jwt_token}`);

xhr.onload = function () {
    if (this.readyState === XMLHttpRequest.DONE) {
        let response = JSON.parse(this.response);
        // handle response
    }
};

xhr.send();
```