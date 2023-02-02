# SP Chapter 4 - Business Continuity Plan

###### tags: #SPIM 

## Table of Contents
```toc
```

## Types of Threats
- **Logical**
	- Hacking
	- Unauthorized use of applications
	- Malware
- **Communications**
	- Communication infiltration
	- Misrouting
	- DoS attacks
- **Technical Failures**
	- Network host
	- Storage
	- Gateways
	- Communication lines
	- Firewall
	- Power environment
	- System software
- **Human Error**
	- Operators
	- Application programmers
	- Maintenance staff
	- Users
	- Security administrators
- **Physical**
	- Theft
	- Wilful damage
	- Terrorism
	- Arson
	- Water damage
	- Natural disaster
	- Staff shortage
- **Man-Made**
	- War
	- Criminal intent
	- Accidental
	- Cyber Attack
- System Failure

## Cyber Resiliency
> Organisation's capability to withstand negative impacts due to known, predictable, unknown, unpredictable, uncertain and unexpected threats from activities in cyberspace

### Beyond Risk Management
- **Risk management** focuses on achieving security through management and control of known risks
- Rapid evolution of opportunities and risks in cyberspace is outpacing this approach and it no longer provides the protection needed for an organisation to succeed
- Organisations must extend risk management to include risk resiliency
	- Enables organisations to manage, response and withstand the impact of activity in cyberspace

### Multi-Pronged Response Needed
- Cyber resilience requires recognition that organisations must prepare now to deal with severe impacts from cyber threats that cannot be predicted or prevented
- Requires high levels of partnering and collaboration, including external and internal collaborations
- Requires that organisations have the agility to prevent, detect and respond quickly and effectively not just to incidents but also to the consequences of the incidents
	- Good governance
	- Nimble to IT and Information Security responses
	- Up-to-date and well-tested public relations policies with key issues decided in advance
	- Crisis preparedness
	- Human relations responses
	- Investigative and forensic capability
	- Ability to share information
	- Legal responses

## Three Components of Cyber Resiliency
### Resilience
- Capability of an organisation to continue its minimum BC objective (MBCO) if not immediately then very quickly when it has suffer from a disaster or crisis
- The ability of an organisation to absorb the impact due to risk occurrence and to continue to operate in such a way as to achieve its MBCO
- The ability of an organisation to resist being affected by an incident

### MBCO
- Minimum level of service and/or products that is acceptable to the organisation to achieve its business objectives during an incident, emergency or disaster
- Set by the Executive Management of the organisation and can be influenced by current regulatory requirements or industry practices
- The management specification of what this level should be from a policy perspective

### BC
- Capability of the organisation to continue delivery of products or services at acceptable predefined levels following a disruptive incident

## Event/Crisis Level/Severity
> Crisis is a situation where organisations shift from routine to non-routine operations
- Management is required to divert a proportion of their attention, time, energy and resources away from normal operations to managing this event.
- Events or incidents may turn out to be non-issues and life goes on
- An incident or issue may be resolved easily without escalation or leading to a problem or disaster
- A problem can be declared a disaster if it failed to be resolved or meet certain requirements within a stated time limit
- As an event escalates, additional resources and authorization will be deployed

### Crisis/Event Levels
| Level    | Description                                                                                                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Event    | Occurrence or change of a particular set of circumstances                                                                                                                                                                        |
| Incident | Occurrence by change or due to combination of unforeseen circumstances which if not handled in an appropriate manner can escalate into a disaster                                                                                |
| Disaster | Sudden, unplanned calamitous event that causes great damage or serious loss to an organisation resulting in an organisation failing to provide Critical Business Functions (CBFs) for some pre-determined minimum period of time |

- **Balancing the number of crisis/events levels**
	- Too many: cognitive overload in determining crisis/event level versus managing the incident
	- Too little: inappropriate level of response to perceived incident

### Crisis/Event Level Escalation
- <u>Three Determining Factors of Crisis/Event Level</u>
	- Business Functions (BFs) and/or assets affected
	- Time
	- Resources Needed
- <u>Criteria for Crisis/Event Level Escalation</u>
	- Criticality of and impact to the business function and asset
	- Pre-defined time to fix
	- Resources and/or authorization required to fix

## BC Policy Strategy
- Identifies potential impacts to BFs and/or assets
- Create a framework for resilience and response capabilities
- Safeguard interests of key stakeholders

### BC Planning (BCP)
- Process of developing prior arrangements and procedures that enable an organisation to response to an event in such a manner that CBFs can continue within planned levels of disruption
- **Domains addressed:**
	- Continuation of CBFs and critical processes when a high severity event destroys business services and/or data processing capabilities
	- Preparation, Testing and Maintenance of specific actions to recover to normal processing
- **Objectives**
	- End result of BCP is the BC Plan
	- Create a document, test and update the plan that will:
		- Allow timely recovery of CBFs
		- Minimise loss
		- Meet legal, regulatory and contractual requirements

### BC Plan
- Comprises clearly of defined and documented procedures and information for use when a disaster occurs
- Guide organisations to reduce, respond, recover, resume, restore and return to full recovery
- Covers key personnel, resources, services and actions required to ensure CBFs can continue within planned levels of disruption
- An ongoing process supported by senior management and funded to ensure that the necessary steps are taken to identify the impact of potential losses, maintain viable recovery strategies and plans and ensure the continuity of operations through personnel training, plan testing and maintenance
- **Scope**
	- All aspects of the organisation
	- Networks, power, personnel
	- Distributed operations

### BC Management (BCM) and Lifecycle
![](https://i.imgur.com/QUBa0ow.png)

- An organisation-wide discipline and a holistic management process that identifies potential impacts to an organisation and impacts to business operations that those threats might cause
- Provides a framework for building organisational resilience with the capability for an effective response that safeguards the interest of its key stakeholders, reputation, brand and value-creating activities

### BCP Phases
#### Project Management and Initiation
- Get management support
- Establish team (functional, technical, BC coordinator)
- Create a work plan (scope, goals, methods, timeline)
- Establish needs (risk analysis)
- Initial report to Management
- Obtain Management approval to proceed

#### Business Impact Analysis (BIA)
- **Goal**
	- Obtain formal agreement with senior management on the MBCO, Maximum Tolerable downtime for each time-critical business function
- Quantifies loss due to business outage (financial, extra cost of recovery, embarrassment)
- Does not estimate the probability of the kinds of incidents, only quantifies the consequences
- **Phases**
	- Choose information gathering methods (surveys, interviews, software tools)
	- Select interviewees
	- Customize questionnaire
	- Analyse information
	- Identify time-critical business functions
	- Assignment of MBCO and MTD
	- Rank CBFs by MBCO and MTDs
	- Report recovery options
	- Obtain management approval
- **Classifications of Systems**
	- To examine and prioritise functions and systems to be recovered or replicated
	- **CBFs**
		- Business activities and processes that must not be disrupted such that they impact the ability to protect the organisation's assets, meet organisational needs and satisfy regulations
- **Classification of BFs and Systems**
	- **Critical** - absolutely must be in place for any business process to continue at all
	- **Essential** - must be in place to support day-to-day operations
	- **Necessary** - contribute to the smooth operations and comfortable working conditions of employees
	- Improve working conditions and help to enhance the organisation's performance
- **Terminologies**
	- **MTD**
		- Maximum period of time given business process can be inoperative before the organisation's survival is at risk
	- **MAO**
		- Timeframe during which a recovery must become effective before an outage compromises ability of an organisation to achieve its business objectives or survival
		- Maximum period of time that an organisation can tolerate disruption of CBFs before achievement of objectives is adversely affected
	- **Recovery Time Objective (RTO)**
		- Maximum acceptable length of time that can elapse before the lack of business function severely impacts the organisation
		- <u>Two components:</u>
			- Time before a disaster is declared
			- Time to perform tasks to the point of business resumption
	- **Maximum Allowable Downtime (MAD)**
		- Absolute maximum time that the system can be unavailable without direct or indirect ramifications to the organisation
	- **RPO**
		- Point of time to which systems and data must be recovered after a disaster has occurred
		- Includes the amount of data needed to be reconstructed after the functions or systems have been recovered
		- Often used as the basis for development of backup strategies
		- Determinant of the amount of data that may need to be recreated after the functions or systems have been recovered
 - **Continuity Requirements Analysis**
		- MBCO
		- Maximum Tolerable Data Loss (MTDL)
		- Recovery Point Objective (RPO)

#### Recovery Strategies
- Predefined
- Recovery strategies based on MBCO and MTD
- Driven by Business Requirements
- Different Technical Strategies
- Careful Cost-Benefit Analysis
- Metrics and Decision Trees
- Management Approved
- <u>Strategies should address the recovery of:</u>
	- Business functions and operations
	- Facilities and supplies
	- Network
	- Data
	- Users

#### Plan, Design and Development
- <u>Detail Plan for Recovery</u>
	- Business and Service Recovery Plans
	- Maintenance, Awareness and Training Planning
- <u>Plan Phases</u>
	- Initial Disaster Response
	- Resume CBFs/Critical Operations
	- Resume Non-Critical BFs/Operations
	- Restoration
	- Interaction with External Groups

#### Testing, Maintenance, Awareness and Training
- **Testing**
	- Checklist
	- Structure Walkthrough
	- Simulation
	- Parallel
	- Full-Interruption
- **Maintenance**
	- Fix problems found in tests
	- Implement change management
	- Audit and address audit findings
	- Annual review of plan
	- Build plan into organisation
- **Awareness**
- **Training**
	- Ongoing training
	- Part of standard onboarding
	- Part of corporate culture
- **Importance of Testing BC Plan**
	- Ensures that the plan works
	- Personnel involved may change
	- Environment (assets, systems, services, regulations, contractual agreements may change)
		- New business department or product-line
		- New software or IT services
		- New building, equipment, production system
		- Contractors and sub-contractors
		- M&A
		- Public listing status

## ISO 22301 BCMS
1. Score and Applicability
2. Terms and Definitions
3. Overview of BCM
4. BCM Policy
5. BCM Programme Management
6. Understanding the Organisation
7. Determining BCM Strategies
8. Developing and Implementing a BCM Response
9. Exercising, Maintenance, Audit and Self-Assessment of BCM Culture
10. Embedding BCM into the Organisations Culture

## Information Security Continuity in BCM
- Should be embedded in the organisation's BCMS
- <u>Planning information security continuity</u>
	- Organisation should determine its requirements for information security and continuity oof information security management in adverse situation
- <u>Implementing information security continuity</u>
	- Organisation should establish, document, implement and maintain processes, procedures and controls to ensure the required level of continuity for information security during an adverse situation
- <u>Verify, review and evaluate information security continuity</u>
	- Organisation should verify established and implemented information security continuity controls at regular intervals in order to ensure that they are valid and effective during adverse situations

## Business Continuity vs Disaster Recovery
| Business Continuity                                                                                                                  | Disaster Recovery                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Capability of organisation to continue delivery of products or services at acceptable predefined levels following a disruptive event | Ability of ICT elements of an organisation to support its critical business functions to an acceptable level within a predetermined period of time following a disruption |

- Immediate intervention taken by an organisation to minimise further losses brought on by a disaster and to begin the process of recovery, including activities and programmes designed to restore CBFs and return the organisation to an acceptable condition
- BCP refers to plans about how a business should plan for continuing in case of a disaster
- DR refers to how the IT elements should recover in case of a disaster
- BCP allows a business to plan in advance what it needs to do to ensure that its key products and services continue to be delivered at a predefined level in case of a disaster
- DR allow