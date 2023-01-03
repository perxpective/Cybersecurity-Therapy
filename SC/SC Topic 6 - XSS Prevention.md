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
- 