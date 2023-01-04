# SC Topic 6 - XSS Prevention

###### tags: #SC 

## Table of Contents
```toc
```

## Standard Controls Against XSS
- Validate all user controlled input including form fields, GET and POST parameters, headers and cookies
- Only whitelisted characters should be allowed and special HTML characters should certainly not be allowed
- Escape all string output to the page
	- Any HTML special character will be HTML encoded and interpreted by the browser literally rather than as HTML

## Regular Expression Validation
- Applications often require text processing for features like word searches, email validation or XML document integrity
- Regex is built-in and supported within JS

### Wildcard Characters
- `*` - match 0 or more occurrences
- `?` - match 0 or 1 occurrence
- `+` - match 1 or more occurrence 
- `{x}` - match exactly `x` times
- `{x,y}` - match between x(inclusive) to y(inclusive) occurrences
- `[123x]` - match a single instance of any character in the brackets
- `[0,9]` - shorthand for `[0123456789]` often used with `[A-Z]`
- `[^0-9]` - match a single character except those specified in brackets

### Useful Predefined Classes
| Expression | Character                        |
| ---------- | -------------------------------- |
| `.`        | Digit \[0-9\]                    |
| `\d`       | Non-digit \[^0-9\]               |
| `\s`       | Whitespace character             |
| `\S`       | Non-whitespace character \[^/s\] |
| `\w`       | Word character \[a-zA-Z_0-9\]    |
| `\W`       | Non-word character \[^\\w\]                                 |

### Logical Operators
| Expression | Meaning                |
| ---------- | ---------------------- |
| XY         | X followed by Y        |
| X \| Y     | Either X or Y          |
| (X)        | X as a capturing group |

> Example:
> - (\[13\]x)|(\[ab\]3) pattern will match 1x, 3x, a3, b3

## Simple Email Validation
```js
var userinput = 'abc@gmail.com';
pattern = new RegExp('^.+@.+\.[a-z]+$')
if (pattern.test(userinput)) {
	console.logg("Input is correct!")
} else {
	console.log("Input does not match pattern!")
}
```
```
.+@.+\.[a-z]+

# at least one character and at least one lowercase alphabet
```
## Other Regular Expression Examples
- To check if a target string is a digit type:
```
\d + OR [0-9]+
```
- To check if target string is just composed of alphabets:
```
[a-zA-Z]+
```
- To check if target string is alphanumeric type:
```
[a-zA-Z0-9]+
```

## External Library for Validation
- [Node Validator library](https://www.npmjs.com/package/validator)
```
npm install validator --save
```
- Common functions to help validate emails, credit cards, URLs that are already defined in the library
- Can be used like an API

```js
var validator = require("validator")
function validateRegistration(req, res ,next) {
	var username = req.body.username
	var email = req.body.email
	var role = req.body.role
	var password = req.body.password

	if (validator.isAlphanumeric(username) && validator.isEmail(email) && (role == 'user' || role == 'admin') && validator.isAlphanumeric(password) && password.length > 7) {
		next()
	} else {
		res.send(`{"Message":"Validation Failed"}`)
	}
}

module.exports.validateRegistration = validateRegistration
```

- Apply the middleware function 
```js
app.post('/api/user', validate.validateRegistration, (req, res) => {
	...
})
```
## Escaping Data
- Characters such as <, >, &, ', ", / should be converted to the corresponding HTML entities so that they will not be interpreted as code like JavaScript in XSS attacks
```js
var validator = require('validator')
var input = "<script>alert('JS XSS!')</script>"
var sanitizedOutput = validator.escape(input)
```
## Removing Line Breaks, Tabs and Extra White Space
- Validator has `stripLow()` function that removes ASCII control characters which are normally invisible in HTML

```js
var validator = require('validator')
var input = "Hi there! \r\n Welcome to Secure Coding"
var sanitizedOutput = validator.stripLow(input)
```