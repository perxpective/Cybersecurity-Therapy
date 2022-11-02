# SPIM Chapter 1 - Introduction to Incident Management

###### tags: #SPIM

## Table of Contents
```toc
```

## Key Definitions
### Incident
- Unplanned interruption to an IT service
- Reduction in the quality of an IT service
- Failure of a C that has not yet impacted an IT service

### Service Request 
- Formal request for user for something to be provided
- **Examples:**
	- Request for information or advice, to reset a password or to install a workstation for a new user

### Workaround
- Method of bypassing an incident or problem
- **Temporary fix**
- Not a permanent solution but something that is used to get the service up and running until the real solution is found

## Life Cycles of Incidents
- Open
- In progress
- Resolved
- Closed
- Pending

## Purpose and Objectives
- **Purpose**
	- To restore normal service operation as quickly as possible
	- Minimize the adverse impacts on business
	- Ensuring the best levels of service quality and availability are maintained according to SLA's
- **Objectives**
	- Standardized methods and procedures
	- Increased visibility and better communication
	- Priorities aligned with business
	- User satisfaction with the quality of IT services

## Value to Business
- Reducing service downtime
- Reducing incident impact to business
- Aligning IT to business priority
- Identify possible improvements to service
- Identification of additional requirements as a result of handling multiple incidents

## Incident Priority
- Ensures that support groups will pay required attention to the incident **based on the urgency and impact**

>**Impact + Urgency = Priority**

### Timescales
- Must be agreed for all incident-handling stages
- Based on the overall incident response and resolution targets within SLAs
- Captured as targets within OLAs and Underpinning Contracts (UCs)
- Support Groups should be made aware of these timescales
- Service Management tools automate and escalate as required
- Use **priority coding system** 

![400](https://i.imgur.com/bupGWy3.png)

## Major Incidents
> **Major Incident = High Impact + High Urgency

- Highest category of impact for an incident
- Results in significant distribution to a business
- Should have a <u>separate procedure</u>
	- Shorter timescales and greater urgency
	- Separate major incident team under the direct leadership of the incident manager
	- Informing management and Customer
	- Service Desk ensures all activities are recorded and users are kept fully informed of progress

## Functional and Hierarchical Escalation
> **Escalation** is the mechanism that assists timely resolution of an incident

### Functional Escalation
- Involving more specialist personnel or access privileges to solve the incident
- Departmental boundaries may be exceeded

### Hierarchical Escalation
- Can take place at any moment during resolution
- **Reasons:**
	- SLA threat
	- Extra resources required
	- Need to information higher management

## Standard Incident Models
- Designed and implemented for handling standard incident more efficiently
- Incident Model should include the following:
	- Steps required to handle the incident and their order
	- Responsibilities
	- Timescales and thresholds for completion
	- Any escalation procedure
	- Any evidence prevention activities

> Support tools can be used to automate the handling of standard incidents

## Process Workflow
![](https://i.imgur.com/B0u1SsQ.png)
### Incident Identification
**Triggers:**
- Incidents from:
	- Event management
	- Web interface
	- Users
	- Suppliers
	- Technical staff

### Incident Logging
- All incidents must be:
	- Fully logged
		- Date
		- Time
		- Owner
		- Contact
	- Date and timestamped
	- Full historical record of all incidents must be maintained
	- Opportunity fixes must also be logged
	- When incident is logged, resolution time count starts

### Incident Categorization
- Indicates the type of incident being logged
- Category is related to a team that will handle the incident from the Service Desk
- Categories are multi-level
	- **Hardware**
		- Server
		- Memory Board
		- Card Failure
	- **Software**
		- Application
		- Finance
		- Purchase Order System

### Incident Prioritization
- Determines how the incident will be handled by support staff and by support tools

### Incident Diagnosis
- Server Desk Analyst will determine with the user the following:
	- Full symptoms
	- How to correct them:
		- Diagnostic scripts
		- Known error information

### Functional Escalation
- If the incident is not resolved, it will be escalated (with users informed)
- Occurs when:
	- Current level of support cannot resolve the incident
	- Current level of support has reached timescales for resolving the incident

### Hierarchical Escalation
- Occurs when:
	- SLA breaches are threatened
	- Extra resources are needed to resolve the incident
	- Senior management needs to be aware and approve the steps required

### Investigation and Diagnosis
- More detailed information might be collected on the following:
	- What has exactly gone wrong
	- Understanding the chronological order of events
	- Confirming the full impact
	- Identifying events that may have triggered the incident
	- Knowledge searches
	- Previous incidents
	- Changes made

### Resolution and Recovery
- When resolution has been identified, it should be applied and tested
- If satisfactory, a time and date stamp is recorded
- Incident record must be updated with details of action taken
- Incident should be returned to the Service Desk for closure action

### Incident Closure
- Before closing the incident, the Service Desk must:
	- Ensure that the user is informed and happy with the solution
	- The assigned incident category is the correct one 
	- The incident documentation is complete
	- Ensure that if there is indication that the incident might reoccur, a problem record should be raised

## Process Interfaces
| Interface                          | Description                                                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Event Management                   | Event can automatically raise incident                                                                                   |
| Request Fulfilment                 | Request handling can also be handled by IM process                                                                       |
| Problem Management                 | Incidents often point to problems                                                                                        |
| Asset and Configuration Management | Provides data used to identify and progress incidents<br> IM assists in verification of CMS                              |
| Change Management                  | Changes are often why reasons incidents occur<br> Incidents can lead to changes required for resolutions and workarounds |
| Service Level Management           | IM must restore service as agreed in SLAs; thus targets for IM are determined considering SLM and vice-versa             |
| Service Catalogue Management       | Service Desk will consult Service Catalogue in handling incidents                                                        |
| Capacity Management                | IM may trigger monitoring system of system or service performed by Capacity Management<br> Workarounds used by IM can come from Capacity Management<br> Incident data is important in determining availability|

## Challenges
- Ability to detect changes as early as possible
- Convincing all staff that all incidents must be logged
- Making information available about known errors to ensure staff learn from previous incidents
- **Configuration Management System Integration**
	- Integration into the Service Level Management processes in order to correctly assess the impact and priority of incidents
	- Defining escalation procedures

## Risks
- Incidents not handled in appropriate timescales
- Insufficient incident backlog
- Poor information availability
- Mismatch in objectives/expectations for Incident Management


## Critical Success Factors (CSF) and Key Performance Indicators (KPI)
- **CSF resolve incidents as quickly as possible to achieve incident resolution or circumvention, broken down by impact code**
	- Elapsed time to achieve incident resolution or circumvention broken down by impact code
	- Breakdown of incidents at each stage
	- Percentage of incidents closed by the service desk without reference to other levels of support
	- Number of percentage of incidents resolved remotely without the need for a visit
- **CSF maintain quality of IT services**
	- Total number of incidents (as a control measure)
	- Size of current incident backlog of for each IT service
	- Number and percentage of major incidents for each IT service
- **CSF maintain user satisfaction with IT services**
	- Average user survey score 
	- Percentage of satisfaction surveys answered versus total number of satisfaction surveys sent


## Roles
### Incident Management Process Owner
- Accountable for the process

### Incident Manager
- Manages the work of Incident Support Staff
- Develops and maintains the IM process and procedures
	- Driving efficiency and effectiveness
- Managing work of incident support staff (first and second line)
- Manages major incidents
- Monitors the effectiveness of IM and recommend the improvments
- Developing and maintaining the IM systems
- Producing management information

### First, Second and Third Line Support
| Line Support | Description                                                                 | Party                            |
| ------------ | --------------------------------------------------------------------------- | -------------------------------- |
| First        | Identify, log, categorize, diagnose, resolve/escalate and close an incident | Service Desk                     |
| Second       | Investigate, diagnose, resolve an incident                                  | Technical/Application Management |
| Third        | Investigate, diagnose, resolve an incident                                  | External or internal experts                                 |

