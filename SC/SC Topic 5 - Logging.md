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
| Token          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| :date          | Current date and time in UTC                                   |
| :http-version  | HTTP version of request                                        |
| :method        | HTTP method of request                                         |
| :referrer      | Referrer header of request                                     |
| :remote-addr   | Remote IP address of request                                   |
| :remote-user   | User authenticated as part of basic authentication for request |
| :req\[header\] | Given header of the request                                    |
| :req               |                                                                |
