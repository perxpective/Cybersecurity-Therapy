# EHD Chapter 7 - Intrusion Detection Systems

###### tags: `EHD` `Theory`

## Table of Contents
```toc
```
## Intrusion Detection and Prevention Systems
> **Intrusion Detection Systems (IDS)** are placed in networks or systems to detect possible malicious activities

- Sensors used to monitor network traffic, system resources and activities
- Data collected matched to signatures and alarm is triggered if malicious activity detected

> **Intrusion Prevention Systems (IPS)** can drop malicious traffic or stop malicious activity detected

![500](https://i.imgur.com/uaZBjwA.png)

> **Can IDS/IPS inspect encrypted traffic?**
> - Yes, as long as decryption key is configured in them
> 
> **Why is IPS placed before a firewall**
> - To reduce the number of false positives
> - Reduce the chances of being attacked
> 
> **Out-of-Band deployment IDS is not inline like IPS**
> - Deployed as an additional node to a network switch

## Examining Intrusion Detection System Components
<u>Typical Components</u>
- Network/Host Sensors
- Alert Systems
- Command Console
- Response Systems
- Database of Attack Signatures or Behaviours

### Sensors
- Electronic "eyes" of IDS
- Hardware or software that monitors traffic and events in network or host and trigger alarms
- Logs monitored data

#### Network-Based Sensors
- Hardware or software that captures data in network packets

#### Host-Based Sensors
- Software running on hosts monitoring the CPU, memory, disk usage, network connections etc.

#### Collecting Network Data
- Ways to collect data on network
	- **Network tap**
		- Hardware connected inline between two nodes in network
	- **Port mirroring**
		- also known as **spanning**
		- Copies incoming and outgoing packets on port of network switch forwarded to another port for analysis

![](https://i.imgur.com/VAPrAPZ.png)

#### Network Sensors
- Should be placed at entry points of networks
	- Internet gateways
	- Connections between LANs
	- Remote access server that receives dial-up connections from remote users
	- VPN devices
- Management program controls sensors
- Sensors can be positioned at either side of firewall
	- Behind firewall is a more secure location

![](https://i.imgur.com/gQdOdyW.png)
![](https://i.imgur.com/JuHa1fJ.png)

#### Sensor Deployment Concerns
**Throughput**
- Sensor may receive more data than it can handle
- Results in sensor dropping packets or crashing
- On busy network, sensor may not be able to capture all packets

**Security**
- Sensors can be target of attackers
- Sensors may contain information of network configuration
- Compromised sensors can cause unreliable or false data to be recorded

### Alert Systems
> **Trigger** -> Circumstances that cause alert message to be sent

<u>Types of triggers:</u>
- Detection of anomaly
- Detection of misuse or attack signature
- Target monitoring

#### Anomaly Detection
- Makes use of profiles
	- For each authorized user, group or system
	- Describe how services and resources normally accessed
- IDSs must create profiles of normal behaviour
	- During training period
	- May require new technologies like machine learning and behaviour analytics
- May be able to detect potential insider threats
- Human behaviour is inconsistent
- Accuracy problems:
	- False negatives
	- False positives

> **Terminology:**
> - False Negative:
> 	- IDS does not report anything suspicious but there is actually an intrusion 
> - False Positive:
> 	- IDS reports intrusion but event is actually legitimate
> - True Negative:
> 	- IDS does not report legitimate network activity as suspicious
> - True Positive
> 	- IDS correct identifies an intrusion

#### Misuse or Attack Signature Detection (Rule-Based)
- Attack signature is sequence of bytes or network packets indicating possible attack
- Misuse Detection triggers alarms based on signatures of known attacks
- IDS comes equipped with set of attack signatures to monitor for
- Can start protecting network immediately
- Signatures need to be kept updated

| Trigger           | Advantages                                                                                                                                                     | Disadvantages                                                                                             |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Anomaly Detection | Because anomaly detection system based on profiles administrator creates, attacker cannot test IDS beforehand and cannot anticipate what will trigger an alarm | Substantial amount of time is required to configure IDS to use profiles of network users and groups       |
|                   | As new users and groups created, IDS profiles can be changed to keep up with new arrangements                                                                  | As new users and groups created, profiles available to IDS must be updated to remain effective            |
|                   | Anomaly detection system does not rely on published signatures, can detect new attacks                                                                         | Definition of normal traffic changes constantly, IDS must be reconfigured continually to keep up          |
|                   | System can effectively detect attacks from inside network by employees or attackers who have stolen employee accounts                                          | After installation, IDS must be trained for days or weeks at a time to recognize normal traffic           |
| Misuse Detection  | Approach makes use of signatures of well-known attacks                                                                                                         | Database of signatures must be updated to maintain effectiveness of IDS                                   |
|                   | IDS can begin working right after installation                                                                                                                 | New types of attacks might not be included in database                                                    |
|                   | IDS is easy to understand and is less difficult to configure than anomaly-based system                                                                         | By making minor alterations to attack, attackers can avoid matching one of the signatures in the database |
|                   | Each signature in database assigned to number and name so administrator can identify attacks that need to set off alarm                                        | Misuse-based system makes use of database, considerable amount of disk storage required                   |

#### Target Monitoring
- Reports when certain target objects are modified
- Usually implemented by calculating checksum for target files or directories to be monitored
- Any modification to file or directory will cause change in generated checksum and alert will be generated

#### IDS Agents
> - **Agents** are processes that analyse events to detect possible intrusions
> 	- Generates alerts if required

- Different agents can be used to check different aspects of network or host
- Agents often need to cooperate with each other -> sharing information with other agents (**data correlation**)

#### Data Correlation
- IDS will collect lots of data from various sources
	- Firewall logs, packet captures, system logs, etc.
- One attack attempt can cause events to be recorded in different sources
- Associates an event from one source to related events from other sources
- Recognizing intrusion attempt from data from different sources
- Trigger one alert for the same intrusion attempt instead of multiple alerts

### Command Console
- Provides graphical front-end interface to IDS
	- Enables administrator to receive and analyse alert messages and manage log files
- IDS can collection information from security devices throughout network
- Command console should run on computer dedicated to the IDS

### Response System
- IDS can be set up to take countermeasures
	- Example: Reset all network connections when intrusions detected
- Response systems do not substitute network administrators
	- Administrators can use judgement to distinguish false positive
	- Administrators can determine whether response should be escalated
		- Increased to a higher level

### Database of Attack Signatures or Behaviours
- IDSs make use of source of information to compare traffic they monitor
- <u>Signature-based detection</u>
	- References database of known attack signatures
	- If traffic matches a signature, sends an alert
	- Database of signatures need to be kept updated
- <u>Anomaly-based detection</u>
	- Store normal profile information in database
	- If actual traffic and events deviates too much, send an alert

## Steps to Examining Intrusion Detection Step-by-Step
1. Installing IDS database
2. Gathering data
3. Sending alert messages
4. IDS responds
5. Administrators assess the damage
6. Follow escalation procedures
7. Logging and reviewing event

![500](https://i.imgur.com/KSlpCVx.png)

### 1. Installing IDS Database
- IDS uses database to compare traffic detected by sensors
- **Anomaly-based IDS**
	- May require training period
	- IDS observes traffic and compile network baseline
- **Signature-based IDS**
	- Can use database immediately
	- Can include own custom rules

### 2. Gathering Data
- Sensors gather data by capturing or reading <u>log files</u>
- Sensors need to be positioned where they can capture all data
	- Sensors on individual hosts capture information that enters and leaves host
	- Sensors on network segments read packets as they pass throughout segment
- If network traffic is too heavy, chance that network sensors may not capture all packets
	- Need to check that sensors can cope with load

### 3. Sending Alert Messages
- Sensors capture data
- IDS software compares captured data with information in database
	- IDS sends alert if data match an attack signature
	- Deviates from normal network behaviour

### 4. The IDS Responds
- Command console receives alert messages and notifies the administrator
- IDS can be configured to take action if suspicious packet is received
	- Send alarm message
	- Drop packet
	- Stop and restart network traffic

### 5. Administrator Assesses Damage
- Administrator monitors alerts and determines whether countermeasures are required
- Administrators need to fine-tune the database
	- To avoid false negatives

### 6. Following Escalation Procedures
> **Escalation Procedures**
> - Set of actions to be followed if IDS detects true positive
> - Should be spelled out in company's security policy
> - Incident levels
> 	- **Level 1** -> might be managed quickly
> 	- **Level 2** -> Represents more serious threat
> 	- **Level 3** -> Represents highest degree of threat

### 7. Logging and Reviewing Event
- IDS events stored in log files or databases
- Administrators should review logs
	- Determine suspicious behaviour traffic
	- Administrator can spot gradual attacks
- IDS should also provide <u>accountability</u>
	- Capability to track attempted attack or intrusion back to responsible party
	- Some systems have tracing features built in

## Types of IDS
- Network-based IDS
- Host-based IDS
- Hybrid Implementations

### Network-Based Intrusion Detection Systems
- Monitors network traffic
- Command locations for NIDS sensors
	- Behind firewall and before LAN
	- Between firewall and DMZ
	- Any network segment
- Management and analysis software installed on dedicated computer
- NIDS usually handles high volume of traffic
- May require dedicated hardware appliance

![500](https://i.imgur.com/lB5iBPm.png)

#### NIDS Freeware (Snort)
- Ideal for monitoring traffic on small network or individual host
	- Does not consume extensive system resources
- Intended for installation on computer at network perimeter
- Comes with collection of rule files
- Separate rules exist for:
	- Port scans
	- Back door attacks
	- Web attacks

![500](https://i.imgur.com/Y3oTDpg.png)

#### Developing IDS Filter Rules
- IDS effectiveness depends on its database
	- Database should be complete and up to date
- IDS can have its own set of rules
	- Can edit in response to scans and attacks
- IDS can be used proactively
	- Block attacks
	- Move from intrusion detection to intrusion prevention

#### Rule Actions
- Can configure IDS to take action:
	- Provides another layer of network defence
- Some ODS include documentation for writing rules
- Customized rules can increase false positives during learning process
	- Test rules before using them in real system

#### Snort Rules
- Snort actions for rules
	- Alert: Generate an alert
	- Log: Log packet details
	- Pass: Ignore
	- Activate: Alert then turn on dynamic table
	- Dynamic: When activated by activate rule, log packet details

#### Snort Rule Options
- Options are enclosed in parentheses
- Snort options:
	- `msg`
	- `ttl`
	- `id`
	- `flags`
	- `ack`
	- `content`
	- `logto`
- TCP flags in Snort rules designated by single character
- Rule base for IDS different from packet-filtering rule base
	- IDS rules assume packets are already filtered
- Log any traffic that gets through packet filter
	- Matches signature in IDS

### Host-Based Intrusion Detection Systems (HIDS)
- Deployed on host in LAN
	- Host can be server, router, firewall etc.
- Evaluates traffic and events on host
- Gathers data such as:
	- System processes
	- CPU use
	- Memory use
	- File accesses
	- File contents
	- Log files
	- Network connections

#### HIDS Configuration
- Centralized configuration
	- Sensors on host sends all data to central location
	- Host level of performance unaffected by IDS
	- Alert messages generated may not occur in real time
- Distributed configuration
	- Processing of events distributed between host and console
	- Host analyses events in real time
	- Performance reduction in host

![250](https://i.imgur.com/XTs7Vs8.png)

![250](https://i.imgur.com/onhGjzh.png)

### Hybrid IDS Implementations
- Hybrid IDS
	- Combines features of HIDS and NIDS
	- Gains flexibilities and increases security
- Combining IDS sensor locations
	- Put sensors on network segments and network hosts
	- Can report attacks aimed at particular segments or entire network

## IDS Hardware Appliances
- Can handle more network traffic
	- Better scalability than software IDS
- Plug-and-play capabilities
	- Major advantage
	- Does not need to be configured to work with particular OS
- Upgrade appliance periodically

### Tripwires
- Creates baseline snapshot of current file
- Alerts on specific file changes
- Any future changes to files will be detected

![](https://i.imgur.com/yyDkjzR.png)


## Developing a Security Incident Response Team (SIRT)
- Response options:
	- Taking countermeasures to block intrusion
	- Making corrections to packet-filtering rules and proxy servers
	- Modifying security policies to cover new vulnerabilities
- Security Incident Response Team (SIRT)
	- Gives organization flexibility to carry out response options

### Goals of Security Incident Response Team (SIRT)
- Group of people tasked with responding effectively to security breaches
- Primary functions:
	1. Preparation
	2. Notification
	3. Response
	4. Countermeasures
	5. Recovery
	6. Follow-up

![500](https://i.imgur.com/QDbUqIh.png)

### Responsibilities of SIRT Team Members 
- Look within organization for SIRT members
- <u>SIRT members should stop any work they have and:</u>
	- Respond to a security incident
- Should have enough authority to make decisions
- <u>Deciding what roles team members will assume:</u>
	- SIRT should contain employees representing **cross-section** of organization
	- Ensures all parts of organization are represented
- <u>SIRT members can come from the following:</u>
	- Management
	- Legal
	- Information Technology
	- Physical Security
	- Information Security Services
	- Human Resources
	- Public Relations
	- Finance and Accounting

#### Staffing and Training
- <u>Virtual team:</u>
	- Consists of employees with different jobs
	- Team exists only during meetings or when incident becomes prevalent
	- Tends to get out of touch and requires retraining
- If budget allows, assemble a team with the main responsibility of security incident response
	- Economically feasible only to **large organizations**

#### Staging Drills
- Conduct security drill
	- Might need to convince higher management of necessity
- Drills can pay off in the long run
	- Making response more **effective** and **coordinated**
- Pick time for the dill and follow a scenario
- Drills can be **scheduled** or **spontaneous**
- Intended to identify holes in security procedures

#### Public Resource Teams
- Teams around the world publish notices about serious security incidents
	- Can notify these teams if significant security event encountered
- These groups provide training for response team members
	- CERT Coordination Centre
	- DFN-CERT

## Outsourcing Incident Response
- Hire company that monitors network and IDS sensors
	- Tells if an intrusion has occurred or not
| Advantages                    | Disadvantages                                |
| ----------------------------- | -------------------------------------------- |
| Result in lower overall costs | Hard to achieve, effective incident response |

- Get references from current and former customers before hiring incident response service

## Incident Response Process
1. Preparation
2. Notification
3. Response
4. Countermeasures
5. Recovery
6. Follow-Up

### 1. Preparation
**Using risk analysis to prepare responses**
- Analysing the risk can help identify what needs to be protected
	- Used to prepare security policy
- Use security policy as a guideline when responding to incidents
	- Many security policies include section about incident response
- Everyone involved in incident response should know where these guidelines are

**Active network monitoring**
- Essential activity
	- SIRT members might be dedicated to this task
- Considered a proactive task
	- Prevents incidents from occurring
	- Can reduce false positives
- Involves actively testing of the network
	- Security Administrator's Integrated Network Tool (SAINT)
	- WebSAINT
	- Nessus

![500](https://i.imgur.com/VjMrQ2d.png)

### 2. Notification
- Process by which SIRT members receive news about security incidents
- Comes from:
	- Firewalls or IDS
	- SIRT members
	- Network administrators
	- Employees
- After notification, SIRT members should assess level of damage
- Not all incidents need to be reported to SIRT members

### 3. Response
- SIRT members to take note of the following:
	- Do not panic
	- Follow established procedures
- Take time to analyse reported events
	- Do not simply react
- Important to have clear escalation procedures
	- Key to efficient response
	- Create flowchart for escalation procedures

![400](https://i.imgur.com/AmApyDx.png)

- Determine the need for escalation
	- What needs to be reported
	- Who needs to know it
	- How quickly one needs to do the reporting
- Report basic facts surrounding incidents
- Discuss how people will be notified
	- Out-of-band notification using other communication devices
- Serious security incidents may require reporting to the public

- **Follow standard response procedures**
	- Set up a hotline
	- Set up list of people to contact
	- Do not overreact to intrusions
	- Follow procedures in place that says exactly what to do for each situation

### 4. Countermeasures
- <u>Containment of damage:</u>
	- Preventing spreading to other resources
	- Remove infected systems from the rest of the network
- <u>Considerations:</u>
	- Is it okay to shut down infected systems and delete the malware?
	- is there a need to preserve infected systems as evidence
- Define set of containment procedures
- Eradication of data introduced by intrusion
	- Remove any files or programs resulted from the intrusion
	- Check user accounts and configurations
	- Tedious and time-consuming

## 5. Recovery
- Putting compromised items back into service
- Monitor restored devices for at least 24 hours
	- Make sure network is working properly
- SIRT members can require users to sign a document:
	- Agreement that the computer has been serviced and returned to its working order
- Adjust firewall rules if needed

### 6. Follow-Up
- Process of documenting all events related to security incident
	- What took place after an intrusion was detected and response occurred
- Prevents similar intrusions from happening again
- Helps fellow SIRT members deal with similar situations
- Documentation is necessary for prosecuting wrongdoers
- Re-evaluating policies
	- Recommend changes to security policy based on previous attacks
	- Information should be included in follow-up database
- Notify others on the Internet about an attack (information sharing)

## Dealing with False Alarms
- Minimize **false positives** and **false negatives**
	- Essential part of managing IDS
- Tuning the system
	- Record false alarms to detect patterns
- Adjust existing rules if required

## Dealing with Legitimate Security Alerts
- Determine if the attack is a false alarm
- Look out for indications such as:
	- System crashing
	- New user accounts suddenly appearing on the network
	- Sporadic user accounts suddenly have heavy activity
	- New files with strange file names appear
	- Series of unsuccessful login attempts detected
- Respond calmly and follow established procedures
- Call law enforcement personnel if needed

## Working Under Pressure
- Incident response activities need to be carried out with discretion
- It is sometimes best to allow incident to continue for awhile
	- Gives time to monitor the attack
- Gather evidence according to the goal of actions
	- Prosecution
	- Corrective measures
- Do not rush to respond to incidents
