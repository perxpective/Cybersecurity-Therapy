# SC Topic 5 - Logging

###### tags: #SC 

## Table of Contents
```toc
```

## Logging
- Collection and storage of data over a time period for analysis
- Can be used to gain insights, resolve bugs and detect problems of an application
- **What to log:**
	- Timestamp or log entry
	- Timing data for request
	- Request endpoint data such as paths or verbs
	- IP of requesting party
	- Exceptions

## Using Morgan
- HTTP request logger middleware for Node.js
- Simplifies the process of logging requests for application
- Installing Morgan:
```
npm install morgan --save
```
- Import the Morgan library:
```js
var morgan = require("morgan")
```
- API:
```js
morgan(format, options)
```

### Pre-Defined Tokens
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

### Pre-Defined Log Formats
| Token    | Value                                            |
| -------- | ------------------------------------------------ |
| combined | Apache standard combined format                  |
| common   | Apache standard common format                    |
| dev      | Color-coded log format by request status         |
| short    | Shorter than default format                      |
| tiny     | Even shorter, just response time and a few items |

- Pre-defined log formats with Morgan:
```js
var morgan = require('morgan')
app.use(morgan("combined"))
```
- Using pre-defined tokens:
```js
app.use(morgan(':method :url :date'))
```
- Creating custom tokens
```js
morgan.token("myToken", (req, res) => {
	return ...
})
```
- Applying the custom token:
```js
app.use(morgan(":myToken :method :url :date"))
```

## Log File Rotation
- Log file can grow to a very large size for applications hosted on the cloud
- Need to create multiple log files (e.g. one per day) depending on the needs of an application
- Use the `rotating-file-stream` module
```
npm install rotating-file-stream --save
```
```js
var rfs = require("rotating-file-stream")
var appLogStream = rfs.createStream('access.log', {
	interval: "1d"
})
```