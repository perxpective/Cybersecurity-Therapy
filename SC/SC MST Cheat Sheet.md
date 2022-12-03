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
- Basic XSS 