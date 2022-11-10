# SC Topic 3 - XSS

###### tags: #SC

## Table of Contents
```toc
```

## Introduction
**Normal Code**
```js
var name = "username"
var age = "22"

$(“#myDiv”).html(‘Welcome, ’ + name + ‘! You are ’ + age + 
‘ years old!’);

/* html computes to
	 <div id=“myDiv”>
		  Welcome, username! You are 22 years old!
	 <div>
*/
```

**Infected Code**
```js
var name = "username";
var age = "22 <script>alert(“xss”);</script>";

$(“#myDiv”).html("Welcome, " + name + "! You are " + age + 
" years old!");

/* html computes to
     <div id=“myDiv”>
          Welcome, username! You are 22
               <script>alert(“xss”);</script>
          years old!
     <div>
*/

```

## Non Persistent XSS
> - Also known as **reflected XSS**
> - Malicious code is executed by victim's browser and payload is not stored anywhere
> - Returned as part of the response from HTML that server sends

```js
router.get('/example1', function(req, res, next) {
     res.render('example1', { name: req.query.name });
});

```