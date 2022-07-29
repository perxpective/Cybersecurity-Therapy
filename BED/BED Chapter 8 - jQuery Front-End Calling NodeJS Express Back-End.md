# BED Chapter 8 - jQuery Front-End Calling NodeJS Express Back-End

###### tags: `BED`

## Table of Contents
```toc
```

## jQuery
- jQuery is a JavaScript library for simplifying JavaScript programming

### jQuery `ready()` Method
- `ready` event occurs when DOM (document object method) has been loaded
- As this event occurs after document is ready, it is a good place to have all other jQuery events and functions
- `ready()` method specifies what happens when ready event occurs
- Use `ready()` to make function available after document loaded

```js
$(document).ready(() => {
    $("button").click(() => {{
        $("p").slideToggle()
    }})
})
```

### jQuery `ajax()` Method
- `ajax()` method used to perform AJAX request (Asynchronous HTTP)
- Used for requests where other methods cannot be used

Syntax:

```js
$.ajax({name:value, name:value, ...})
```

- Parameters specifies one or more name/value pairs for the AJAX request

| Name                         | Description                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------ |
| url                          | Specifies URL to send request to (Default is current page)                                             | 
| type                         | Specifies type of request                                                                              |
| data                         | Specifies data to be sent to the server                                                                |
| contentType                  | Content type to be used when sending data to the server (Default is application/x-www-form-urlencoded) |
| dataType                     | Data type expected of server response                                                                  |
| success(result, status, xhr) | Function to run when request succeeds                                                                  |
| error (xhr, status, error)   | Function to run if request fails                                                                       |

## Libraries to Install
### Bootstrap
- JS framework to make building responsive websites easier

### Popper.js
- Dependency of Bootstrap, meaning Bootstrap relies on Popper on some functionality

### jQuery
- Library used to manipulate HTML DOM

### Axios
- Library used to make HTTP requests to backend

## Axios
### Axios Requests

```js
// GET Method by calling endpoint on backend server
axios.get("http://localhost:8081/getsomething")
	// then promise
	.then((response) => {
		// Get response data
		
	})
```