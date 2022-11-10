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
- Information varies widely and may include information about:
	- Business context (e.g. business-criticality of IT assets)
	- Compliance (e.g. laws and regulations)
	- Risk (e.g. acceptable risk levels)
	- Resources (e.g. budget, head count, skill portfolio)
- Often pulled from data repository to enrich
- Security data coming from various sources
- Critical for decision making

#### Data Correlation
- Events can come from multiple applications or hosts
- Data can be internal logs or external threat information
- Useful when single event may not provide enough information

![](https://i.imgur.com/Nd78N9k.png)

### Pivot Table
- Data summarization tool to automatically sort, count, total or calculate average of data stored and display the summarised data
	- Summarize the data into compact format
	- Find relationships within data that are otherwise hard to see due to amount of detail
	- Organise data into format that is easy to read

### Data Visualisation
- Data analysis is closely related to data visualisation
- Data visualisation is the presentation of data in a pictorial or graphical format
- <u>To generate the best visuals:</u>
	- Understand the data size and cardinality
	- Determine the information to convey
	- Understand how the targeted audience will consume the information
	- Present the information in the best and simplest form

<u>Data visualisation considerations:</u>

| Factor           | Description                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| Data Selection   | Relevance to the objectives of the visualisation (e.g. time range and data sets) |
| Presentation     | Colour, shape, layout                                                            |
| Scale            | When dealing with high volume of data                                            |
| User Interaction | Component re-arrangement, query, drilldown                                       |
| User Experience  | Human Factor                                                                     |

#### Basic Charting
##### Line Chart
- Shows the relationship of one variable to another
- Often used to track changes or trends over time
- Stacking lines to compare the trend or individual values for several variables

![](https://i.imgur.com/c0v68b0.png)

##### Bar or Column Chart
- Compare the quantities of different categories or groups
- Works best when values are distinct enough that difference in bars/columns can be detected by the human eye

![](https://i.imgur.com/FBBfO7P.png)

##### Scatter Plot
- Indicates data spread and relationship between data points
- Useful for identifying patterns present in the data distribution

![](https://i.imgur.com/06btZip.png)

##### Pie Chart
- Compare parts of a whole
- More effective when there are limited components and when text and percentages are included to describe the content

![](https://i.imgur.com/8CAXIpy.png)

##### Advanced Charting
- Map for geographical data
- Cloud visual on data frequency
- Network analysis on data relationship

![](https://i.imgur.com/LZkX3xg.png)

#### SIEM
> **Security Information and Event Management (SIEM)** is one of the foundational technologies that collect, correlate and analyse security information from a broad and heterogeneous set of system, network and security event sources

![](https://i.imgur.com/2CgyLte.png)
![](https://i.imgur.com/I5HosHY.png)

### Data Analytics
#### Descriptive/Diagnostic Analytics
- Mine historical data for insightful findings and reasons behind the past success or failure
- **Examples:**
	- Examine historical server usage to plan maintenance schedule
	- Categorize network resource usage: personal, business, unknown etc.

#### Prescriptive Analytics
- Smart decision based on simulation and optimization
- Goes beyond future outcome prediction by suggesting action and showing implication of each decision option
- **Example:**
	- Risk assessment and mitigation based on variety of parameters
	- Past incidents, threat impact, asset characteristics, effectiveness of existing controls etc.

![](https://i.imgur.com/z1akMJr.png)

## Security Analytics
- More security products are built or improved with advanced analytics and user and entity behaviour profiling since 2010
	- Lower false-positive rates and higher staff productivity
- By 2016, 25% of security products used for threat detection will have some form of machine learning built into them

## Review of Traditional Security Approach
- Primarily on prevention technologies, rule and signature-based detection mechanisms
	- Requires prior knowledge of attacker methods
- Security controls, like application security, network security, endpoint protection and data security are implemented in the enterprise
	- Security incidents are detected and addressed in isolation
- Log reviews and scanning reports may provide actionable information but lack the knowledge management, analytics and planning capabilities to derive intelligence

## Security Intelligence as a Solution
<u>Traditional Security vs Enterprise Security Intelligence</u> 
![](https://i.imgur.com/tUFg7x5.png)

**Intelligence** implies the ability to:
- <u>Collect information</u>
	- From endpoints, networks, monitors, scanners and users
	- Internal: Logs, reports, organisation information
	- External: Vulnerability and threat bulletins, regulations and social media
- <u>Acquire and apply knowledge and skills</u>
	- Security information should be integrated and correlated not only between security data sources but also with non-security sources e.g. compliance with privacy laws, application business criticality
	- Watch out for known threats reported by signature and rule-based systems and unknown threats using extensive analytics on behaviours of the systems and users

### Enterprise Security Intelligence (ESI)
- Concept that recognizes security intelligence as an explicit deliverable and designates it as a strategic security objective for enterprise IT security and risk management
- ESI aims at increased accuracy and breadth of security detection and protection and optimal security and risk management

![](https://i.imgur.com/uapHpiA.png)

### Technology Integration and Correlation
- Static data masking technique allows discovery of sensitive data and provides techniques to change them
- Identity and Access Management system defines user identities and entitlements
- Database Activity Monitoring offers real-time monitoring and prevention of data access
- **Information Integration and Correlation**
	- Data repository on security information and contextual information largely supported by SIEM products
- Security profiles on the assets
	- Application, database, network, server
- Policy engine to examine asset profiles and enforce policies

## Splunk Enterprise Security
- Premium application built on top of Splunk Enterprise that takes full advantage of its big data analytics and visualisation capability
	- Capture, monitor, report on data from enterprise security devices, systems and applications
	- Perform monitoring, alerting and analytics to identify and address both known and unknown threats
	- Identify issues and allow quick investigation and resolution of security threats

### Solution Architecture
![](https://i.imgur.com/6zDC9fm.png)

### Notable Events
- Correlation searches run at regular intervals
- Continuously in real-time and search events for a particular pattern or type of activity
	- e.g. high number of authentication failures on a single host followed by successful authentication
- Event information and asset list are combined to further identify important patterns

![](https://i.imgur.com/u0UWXTo.png)

### Deployment
![](https://i.imgur.com/6xfUq81.png)

### Data Feeds
| Data source