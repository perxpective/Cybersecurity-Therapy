# SC Exam Cheat Sheet

###### tags: #SC 

## Table of Contents
```toc
```

## Logging

```js
var morgan = require('morgan')

// using pre-defined format
app.use(morgan("combined"))

// using pre-defined tokens
app.use(morgan(":method :"))

```