# SPIM Chapter 2 - Incident Response Framework

###### tags: #SPIM 

## Table of Contents
```toc
```

## Cyber Incident Response Life Cycle
- Preparation
- Detection and Analysis
- Containment Eradication and Recovery
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

## Signs of Incidents
- **Precursor**
	- Sign that an incident may occur in the future
- **Indication**
	- Sign that an incident occurred or may be occurring now

### Incident Detection Techniques
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