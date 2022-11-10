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

**Normal Code**
```js
app.get('/example1', (req, res, next) => {
     res.render('example1', { name: req.query.name });
});

/* html content
     <h1>Example 1</h1>
     <p>Hello my name is <%- name %></p>
*/
```

**Infected Code**
```
http://localhost:3000/example1?name=WeiLiang%3Cscript%3Ealert(%27test%27);%3C/script%3E
```
```js
app.get('/example1', (req, res, next) => {
     res.render('example1', { name: req.query.name });
});

/* 
     <h1>Example 1</h1>
     <p>Hello my name is WeiLiang<script>alert(‘test’);</script></p>
*/
```