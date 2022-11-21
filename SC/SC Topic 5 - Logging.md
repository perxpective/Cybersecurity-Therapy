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
- Impoert