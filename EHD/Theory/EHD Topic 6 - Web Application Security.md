###### tags: #EHD #Theory

## Table of Contents
```toc
```


## Website Vulnerabilities
- Cross site scripting
- Forceful browsing
- Parameter tampering
- Cookie poisoning
- Hidden field manipulation
- SQL injection

## Character Encoding
- ASCII Table
- UTF-8
	- Each character represented by 8 bits
	- Values in the range 0 to 127 represent each of ASCII characters

## Cross-Site Scripting (XSS)
### XSS
> - Occurs when website takes information entered by user and displays it in a webpage without validating the input first
> - Hackers can enter specially crafted information that will cause webpage to generate unexpected output

- Relies on the ability to inject content into the webpage
- Besides creating a popup window, XSS can be used for the following:
	- Deface a website
	- Redirect user to another page
	- Manipulate Document Object Model (DOM)
	- Execute any functions (like `windows.alert`, read files, write files etc.)
	- "Poison" cookies

### Stored XSS
> - Happens when attacker enters specially crafted input an it is stored on the web application
> - Attacker's crafted input loaded when other users visit the website

- **Example:** attacker enters malicious input into a Review or Comments `textarea`.
	- Other web visitors who visit the Reviews/Comments page will load the malicious code

#### How to fix the XSS vulnerability?
- Look for codes that takes inputs directly from user and posts it back into the webpage
- Perform data sanitization
	- Encode `<` and `>` with `&gt;` and `&lt;`
	- Advanced XSS can escape simple encoding checks
	- Use more strict controls: explicitly check for allowable characters instead

#### How to mitigate the XSS vulnerability?
- Most languages e.g. ASP, JSP, PHP have functions that encode the output for safe display on HTML

> - & becomes `&amp;`
> - < becomes `&lt;`
> - \> becomes `&gt;`
> - " becomes `&quot;`

### Cross-Site Request Forgery (CSRF)
- User logs into a website successfully and browses the site
- Normally, user would have several tabs open in his web browser and they are surfing other sites at the same time
- If they encounter a malicious website with CSRF, web browser might send unwanted requests to authenticated website
- Since user is already authenticated or identified to the website, attacker can cause transactions to be carried out in the user's account
- Website thinks request is a valid one from valid user

#### How to mitigate the CSRF vulnerability?
- Website should authenticate the request
	- Send challenge token/data associated with the current user session with the request
	- Re-authenticate the user (e.g. OTPs)
- Users should log off properly
- When performing important transactions, do not open multiple windows or tabs to surf other websites

## Forced Browsing
- Generally, web servers access files that are accessible from it document root
- CGI may allow access to files not in the document root
- Attackers can craft an input via the browser to retrieve files not intended for him

> **Example**
> - User John views his web documents and notes the URL
> 	- `http://www.abc.com/john/doucments`
> - Changes his name to Mary and views Mary's documents
> 	- `http://www.abc.com/mary/documents`
> - Tries to access the admin pages
> 	- `http://www.abc.com/admin`
> - John may even be able to access files in other directories of Web Server

### Using Scanning Tools
- Tooks like Paros or other scanning apps can find other directories and web pages

![500](https://i.imgur.com/XtiWQwX.png)

### Mitigating The Vulnerability
- Parse parameters if they are being used to access files
- Remove any '\\' and '/'
- Avoid common names for admin pages like "admin"
- Restricted web pages need to check if user is authenticated
- Expire session variables as quickly as possible

## Command Execution
- Poorly designed websites may allow attacker to enter commands that will be executed on the web server

## SQL Injection
- Most web application interacts with database to store data
- Connection to database requires login credentials to be presented during execution
- Interface to database usually through construction of queries using SQL
- Programmers may assume user will always key in username and password

> **Definition of SQL injection**
> - Technique where attackers manipulate input data to execute queries other than the intended ones


### Simple Injections
```mysql
SELECT * from user='' or  1=1 -- ''
```
- Always true
- If used for login processing, first record being returned will be the login user
- Effects of SQL injection can also cause errors
- These error messages can reveal important data
- Data can in turn be used to perform more exploitations

### SQL Error Message
- Inject quotes such as `'` can reveal details of a query

![](https://i.imgur.com/SZgRgwD.png)

### Meta Information
- Most databases have tables storing information about the database
- Called `Information_Schema.tables`

### Stored Procedures
- Most databases have stored procedures similar to functions
- Typically use:
	- Data validation
	- Access control
	- Batch processing

### Other SQL Operations
- SQL Injection can also be deployed to:
	- Update records like passwords or modify data
	- Insert fake records like login credentials
	- Delete records

### Ways to Mitigate SQL Injection Vulnerability
- Validate or sanitize input from users
- Use prepared statements or stored procedures
- Limit database access permissions
	- Do not let web application access database with database admin account

### Database Login
- Hard coding of login credentials in web pages is not a good practice
- Difficult to maintain
	- Change of username or password requires change of code
	- Different sites or environment (testing, staging, etc.) requires different credentials
	- Leaking of credentials through viewing of source codes

#### Fixing the Database Login Vulnerability
- Store encrypted login credential in text file
- Use hardware security module (HSM) for decryption
	- Also known as Crypto Box
	- Keys kept within Crypto Box
- Limit account privilege
	- Only accessible to that database
	- Restrict access to metadata
- Restrict clients who can access database server

## Data Tampering
- There is a lot of information carried by HTTP messages
	- Cookie values
	- Form data
	- Query strings
	- HTTP headers
- Undesirable effects will occur if any of these information is tampered

### Form Data
- Passed to web server via POST or GET methods
- Most developers use client-side validation like JavaScript
- Validation can be easily bypassed via direct manipulation of form data
- Hidden fields used in certain applications to maintain state or preserve information about transaction

### Cookie Values
- Common way to store user information
- Mainly a text file stored locally
- Can be tricked into writing cookies of another domain (e.g. using XSS)

## Session Hijacking
- Exploits XSS vulnerability in application
- Victim logs into system
- XSS page sends session ID to the attacker
- Attacker logs into the system and replaces session with that of victim

### Fixing the Web Vulnerability
- Don't trust user input
- Cookies should not be used entirely for authentication
- Use HTTP_REFERRER to check the page origin
- Use USER_AGENT to check user's web browser (Do not trust request from same user from different browser, instead ask the user for password)
- HTTPS or other forms of encryption can be used to protect session cookie transmission

### Error Messages
- Application needs to respond to error
- Some errors made by users and can be corrected by users
	- Applications need to inform users about the error
	- Error messages need to be informative
- Some errors are system related
	- Error messages not meant for users

> **Problems**
> - Applications reveal too much information
> - Default configuration of web server

#### Fixing This Vulnerability
- Application codes
	- Functional codes
	- Error handling codes
- Start looking at error strings
- Make sure they do not reveal too much information
- Extensive testing of error handling

> **Guidelines for Error Messages:**
> - Does user have minimal information they need for corrective information?
> - Does message provide more information about system than what is available than other legitimate sources?
> - Is each piece of information disclosed necessary/helpful to the user?
> - Does corrective advice in error message indirectly disclose sensitive information?

### Full Path Disclosure
- Web pages normally located in a directory on web server
- Full path disclosure - allow attacker to see full path to the webpage
- Attackers can use this information to steal other data

### Intercepting HTTP Data
- Software can be used to intercept and manipulate HTTP requests and responses
	- Paros Proxy
	- Burp Suite
	- OWASP WebScarab

