# SPIM Chapter 2 - Incident Response Framework

###### tags: #SPIM 

## Table of Contents
```toc
```

## Cyber Incident Response Life Cycle
- Preparation
- Detection and Analysis
- Containment/Eradication
- Recovery
- Post-Incident Activity

### Preparation
- Main goal is to prevent incidents by ensuring that systems, networks and applications are sufficiently secure in advance
- Designing the systems securely
- Implementing defence mechanisms
- Proactively looking for threats

### Detection
- Collection and processing data from the system sources
- Classification of cyber incidents by types
- Prioritizing cyber incidents
- Managing incidents investigation
- Incident documentation

#### Signs of Incidents
- **Precursor**
	- Sign that an incident may occur in the future
- **Indication**
	- Sign that an incident occurred or may be occurring now

#### Incident Detection Techniques
- Feedback from customers
- Feedback from staff
- System logs and application logs
- Security events log
- Antivirus, antispyware alerts
- File integrity checking software
- Network-Based Intrusion Detection Systems
- Host-Based Intrusion Detection Systems
- Third-party monitoring service

### Analysis
- Inspecting alerts, raw events, application and system logs
- Working quickly to analyse and validate each incident following a pre-defined process and documenting each step taken
- Identifying the attacker and targets
- Assessing the risk to business processes
- Escalating to relevant personnel for further analysis
- Analyse if it is a targeted attack or in-the-wild threat

**Steps**
1. Correlation
	- Identify if detected activity is a characteristic of an intrusion attempt
2. Structural Analysis
	- Identify if intended target is vulnerable to the detected activity
3. Intrusion Path Analysis
	- Identify if intended target is vulnerable to detected activity
4. Behaviour Analysis
	- Identify if the detected ability is permitted by security policy

### Containment/Eradication
- Containing the threat
- If it is of spreading nature, prevent it from spreading further
- Prevent data leakage to the attacker (e.g. block communications, disabling accounts)
- Elimination of incident components
- Clean infected machines
- Disable breached accounts
- Evidence should be collected according to procedures that meet all applicable laws and regulations
- If alert if of a known issue act of predefined knowledge base and decision support

### Recovery
- Restore systems to normal operations
- Revert any limitations that were used for isolation
- Confirm that the systems are functioning normally
- If needed, restoring systems and/or files from clean backups

### Post-Incident Activity
- AR meetings with all involved parties after a major incident
	- Chain of events and times
	- Findings
	- Conclusions
	- Recommendations
		- What needs to be done
		- Proactive updates
- Updating the knowledge base with specific incident details for next time's handling
- Recognize security weaknesses and threats
- Identifying and mitigating all vulnerabilities that were exploited

## OODA Loop
- Decision-making occurs in a recurring cycle of **observe-orient-decide-act**
- An entity that can process this cycle quickly, observing and reacting to unfolding events more rapidly than an opponents can thereby get inside the opponent's decision cycle to gain an advantage

![](https://i.imgur.com/JL792pU.png)

## Conflict in Incident Handling
![](https://i.imgur.com/sez9jB0.png)

## Example of Detection, Analysis and Response  (Silicon SOC)
- **Detection:**
	- Silicon SOC received an corelated alert on `Exploit.url.MVX`
	- Host IP: `192.67.25.197`
	- Date: `26 Feb 2016 10.22:06 SGT`
	- <u>Behaviours observed:</u>
		- Suspicious JS Activity
		- Exploit Code Generic Detection
		- Evasion Behaviour
		- Exploit Code Activity
- **Analysis:**
	- The incident was analysed and compromised site that was surfed by the user is summarised
	- GET Request: `hxxp://super.koumas.net/boards/viewforum.php?f=a87&sid=59_huz5pl0p9v1d4a07t7zyzgp7g7tklnwawie7lofiwwz9xsb3-5txyiettf5k23nn2sqs3_36eujtvflqgx4z3nfl5lgj2q`
	- Referrer: `hxxp://news.geltuihameleon.info/hellomylittlepiggy/search/?keyword=84190`
	- Malicious Host: `hxxp://super.koumas.net`
- **Response Phase**
	- **Containment:**
		- Blacklist the malicious URLs
		- Disconnect and isolate the host from the network
		- Backup data
	- **Eradication and Recovery:**
		- Format and do a clean reinstallation of the operating system
		- Update to the latest version of flash player for all end hosts