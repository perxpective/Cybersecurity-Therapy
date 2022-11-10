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

#### W3C Extended Log File Format
- Used in web server logs
- Permit control over data recorded
- Support needs for proxies, clients and servers in a common format
- Provide robust handling of character escaping issues
- Allows exchanged of demographic data
- Allow summary data to be expressed

![](https://i.imgur.com/hnJF0Om.png)

#### Application Logs
- More than enabling the server logging
- Application has the most information about a user (identify, roles, permissions) and context of the event (target, action, outcomes)
- Process monitoring, audit and transaction logs are usually different from security event logs
- Data can be logged to file system or database
- Recommend to use standard format (common log file system, common event format)

#### Challenges 
| Challenge               | Explanation                                                                                                                                           |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Many sources            | SIEM systems, OS and user activity logs, user-level transactions, network traffic data and even data from social media networks, emails and documents |
| Inconsistent Content    | Status "OK" can be written as "good", "functional", "operational" and "working" at different data sources                                             |
| Inconsistent Timestamps | UTC, local time can be inaccurate                                                                                                                     |
| Inconsistent Log Format | csv, tsv, syslog, SNMP, XML and binary files                                                                                                          |

### Turning Data into Insightful Information
- Correlation
- Normalisation
- Context
- Analytics

#### Data Normalisation
- Make a given data set consistent with and comparable to other data used
- Common Information Model (CIM) by Distributed Management Task Force (DMTF)
	- Conceptual information model for interchange of management information between management systems and applications
	- Common and consistent method of describing all management information

- Common Information Model in Splunk

![](https://i.imgur.com/T5yd5Ar.png)

#### Contextual Data
