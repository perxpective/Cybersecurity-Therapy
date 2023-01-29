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

### Express 