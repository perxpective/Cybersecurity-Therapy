# Topic 7 - Preventing SQL Injections

###### tags: #SC 

## Table of Contents 
```toc
```

## Using Placeholders
- With MySQL `query()` function, it's possible to auto-escape user inputs with placeholders represented by ? when running the query
- All ?'s must be replaced in sequential order with values represented in an array in the same order
- **Example:**
```js
var sql = `select userid, email, username from user where userid = ? and role = ?`

conn.query(sql, [userid, role], (err, result) => {
	...
})
```
