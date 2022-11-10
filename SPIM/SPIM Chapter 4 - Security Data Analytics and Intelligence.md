# **SPIM Chapter 4 - Security Data Analytics and Intelligence**

###### tags: #SPIM 

## Table of Contents
```toc
```

## Data
### Structured Data
- Data assigned to dedicated fields and can be directly processed by computing equipment
- Described by data model for storage in data management system e.g. relational databases
- <u>Repeatable and predictable</u>
	- Records' data types are the same but only differ in values

### Semi-Structured Data
- Data may have certain structure, but not all the data use the same structure
- Schema information is mixed with data values
	- Also known as 'self-describing data' like XML, JSON

### Unstructured Data
- Majority of data available to an organisation are unstructured data e.g. emails, documents, social media posting, photos and videos
- There is no rule governing how data is created, stored or retrieved

> - Data model can be used to provide:
> 	- more useful representation of underlying data
> 	- deeper understanding of relationships in the data, making data more useful to broader base of users
> - **Examples:**
> 	- Traditional ER diagram for database design
> 	- Web intelligence data model
> 	- HTTP Request
> 	- HTTP Failure
> 	- HTTP Success
> 		- Page view
> 		- Asset access
> 			- Document access
> 			- Media access
> 			- Podcast download

### Security Data
- Vast amount of raw security data come from system, network and application logs
| Log                                                                                | Log Entry                               |
| ---------------------------------------------------------------------------------- | --------------------------------------- |
| Record of events occurring at an organisation's systems, networks and applications | Information related to a specific event |

- **Two main categories:**
	- Security software logs on computer security-related information
	- Operating system logs and application logs on a variety of information

![](https://i.imgur.com/SaIRW4T.png)

- **Operating Systems**
	- System Events
	- Audit Records
- **Applications**
	- Client requests and server response
	- Account information
	- Usage information
	- Significant operational actions
- **Syslog**
	- Simple framework for log entry generation, storage and transfer
	- Many log sources use syslog as their native logging format or offer features that allow log format to be converted to syslog format
	- Most syslog implementation uses UDP to transfer logs and does not perform access control
	- **Message structure:**
		- Facility and severity as numerical values
		- Timestamp and hostname/IP of data source
		- <u>Actual message content:</u>
			- Flexible structure but not easily parsed by machines