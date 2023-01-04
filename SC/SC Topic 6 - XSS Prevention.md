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
j