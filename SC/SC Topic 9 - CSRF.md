# SC Topic 9 - CSRF

###### tags: #SC 

## Table of Contents
```toc
```

## What is Cross-Site Request Forgery (CSRF)
- Type of attack that occurs when a malicious website, email, blog, instant message or program causes a user's web browser to perform an unwanted action on a trusted site when the user is authenticated
- Works because browser requests automatically include all cookies including session cookies
- Therefore, if user is authenticated to the site, site cannot distinguish between legitimate requests and forged requests

## Authentication Protocol
- Besides using JWT, session with cookies is also a common authentication protocol on the Internet
- Session uses cookies to store the session ID which uniquely identifies the user

![](https://i.imgur.com/lwNEaE0.png)

## Session Management
- A session:
	- usually corresponds to one client
	- identifies a user throughout his usage of the web application
	- stores user information and binds data to sessions
	- should be cleared when user logs out to prevent session fixation attacks

### Express Session
- HTTP is stateless, hence in order to associate request to a user, you need to find a way to store user data between HTTP requests
- Sessions can solve this problem by assigning the client a session ID 
- This makes all further requests using that ID
- Information associated with the client is stored on the server lined to this ID

**Installing Express Session**
```
npm install express-session
```

```js
var session = require("express-session")
app.use(session({
	secret: "secret_key", // secret key
	store: "sessionStore", // mysql store
	saveUninitailized: false,
	resave: false
}))
```

### Express MySQL Session
- Module which uses MySQL to store users' session variables

```
npm install express-mysql-session
```
```js
var mySQLStore = require("express-mysql-session")(session)
var sessionStore = new MySQLStore({
	/* session store options */,
	dbconnect.getConnection() // use mysql db connection
})
```
### Get/Set Session Values
- Set or modify session values by calling `req.session.varname = value`
- **Example:**
```js
// after logging in successfully, store user data
req.session.role = role
req.session.username = username
```

### Logging Out
- Destroy the saved session values and clear the session once the use logouts to prevent session attacks
- `req.session.destory()` clears the session for the relevant user and also initiate the removal of the session ID cookie at the client side

### Checking User Roles
- Middleware for checking if user has logged in with admin role:
```js
verifySession: (req, res, next) => {
	var session = req.session
	if (session.role) {
		next()
	} else {
		res.status(403)
		res.send(`{"message":"not authorized"}`)
	}
}
```
## CSRF Attacks
- Modifying product information in the back-end
- Changing password function
- Deletion of data in the back-end

> For a CSRF attack to be possible, three key conditions must be in place:
> - **Relevant Action**
> 	- Action within the application that the attacker has a reason to induce
> 	- e.g. privileged action or any action on user-specific data
> - **Cookie-based Session Handling**
> 	- Performing the action involves issuing one or more HTTP requests and the application relies on session cookies to identify user who has made the requests
> - **No Unpredictable Request Parameters**
> 	- Requests that perform the action do not contain any parameters whose values the attacker cannot determine or guess
> 	- Example: when causing a user to change their password, function is not vulnerable if an attacker needs to know the value of the existing password

### Preventions
- Embed CSRF token in the form field
	- a piece of data that is random, unique and attached to a form
- Token should be unpredictable
- Tied to the user's session
- Strictly validated in every case before the relevant action is executed
- Depending on the form, extra checks can be added to ensure it is the actual user authorized the request

### Generating CSRF Tokens
- CSRF token generated for GET requests and checking can be done for POST, PUT and DELETE
- Before data change operations can be executed, operations can be executed and GET request can be done to generate a random CSRF token
- This random CSRF token is returned by the GET method and added as a hidden field to the webpage
- When the POST/PUT/DELETE operation is called on the web server, token must be passed as a request value and is checked by the `csurf` middleware before it can be executed

```js
var csrf = require("csurf")
var csrfProtection = csrf()
app.get("/CSRFGetToken", csrfProtection.function(req, res) {
	console.log(req.csrfToken())
	res.status(200).send(`{"csrfToken":"${req.csrfToken()}"}`)
})
```