# BED Chapter 4 - Restful Web Services with Express

###### tags:  `BED`

## Table of Contents
```toc
```

## Express
- Supports various middleware modules
- When server requests for data, Express provides request object with information about user and data they sent in request
- Middleware functions can modify `req` and `res` objects with relevant information
  - For example, when a user logs in, you can fetch user details from database and store these details in `res.user`

<img title="" src="https://i.imgur.com/00Mka7W.png" alt="" width="649" data-align="center">

Creating a new file called `server.js`:

```javascript
var express = require('express');    // load the express module
var serveStatic = require('serve-static');
var app = express();
var port = 3000;
var hostname="localhost";

app.use(serveStatic(__dirname + '/public'));    //apply middleware with app.use
app.listen(port, hostname, () => {
    console.log(`Server started and accessible via http://${hostname}:${port}/`);
  });
```

### Express Request Object

- From request object, data from client can be retrieved for processing
- Examples:
  - url
  - method
  - cookie data
  - query parameters

Adding new middleware on `server.js`

```javascript
// create our custom middleware
app.use(function(req, res, next) {
    console.log(req.url);
    console.log(req.method)
    console.log(req.path);    
    console.log(req.query.id);
    next();
  });
```

### Express Response Object

```javascript
app.use(function(req, res, next) {
    console.log(req.url);
    console.log(req.method)
    console.log(req.path);    
    console.log(req.query.id);
    res.status(200);
    res.type(".html");
    res.end("<html><body>Using response object!!</body></html>");
    res.redirect("https://www.sp.edu.sg");    // comment out if we just want to redirect

    next();    // since we are setting the whole response data, do not pass to the next middleware
  });
```

## RESTFUL Web Services

### HTTP Methods

| Method | Operation Performed                                                     | Quality    |
| ------ | ----------------------------------------------------------------------- | ---------- |
| GET    | Read a resource                                                         | Safe       |
| PUT    | Insert new resource or update if resource already exists                | Idempotent |
| POST   | Insert new resource and also can be used to update an existing resource |            |
| DELETE | Delete a resource                                                       | Idempotent |

- **Safe Operation**: Operation that does not have any effect on original value of resource
- **Read Operation**: Operation that only fetches data so it is safe and does not modify data in any way
- **Idempotent Operation**: Operation that gives same result no matter how many times it is performed