# SMW Tutorial 1

###### tags: #SMW #Tutorial 

## Table of Contents
```toc
```

## Self-Evaluation Check List
- **Would you list a few common sources of computer security issues?**
	- Bad software design, bad implementation of software, viruses, worms, programs that steal confidential information and hacking via system vulnerabilities
- **Would you list three common practices to reduce computer security threats?**
	- Changing behaviours of management, programmers and users
	- Prioritize secure computing
	- Train users to always keep security in mind
	- Write secure operating systems and applications
- **What are the four main areas Microsoft invested to improve the Windows Security?**
	- Isolation and Resiliency (firewalls, object level access control)
	- Software Updates
	- Quality (processes and standards, best practices)
	- Access Control and Authentication (passwords, cards, PKI, ADRMS)
- **What are the goals of Trusty Worthy Computing?**
	- Security, Privacy, Reliability
- **What are the means of achieving Trusty Worthy Computing?**
	- Security (by design, default and deployment)
	- Privacy (fair information principles)
	- Availability, manageability, accuracy
	- Usability, responsiveness and transparency
- **What are the foundational principles of Trusty Cloud Initiatives?**
	- Security, Privacy and Compliance
- **Name two differences between the Windows Server 2016 Standard Edition and Data Centre Edition.**
	- Virtualisation, cloud computing and database handling
	- Essential:
		- Designed for a maximum of 25 users and limits remote desktop connections to only 50
		- Cannot join a domain but and does not provide role for hosting virtual machines
	- Datacentre:
		- Designed for mission-critical applications or organisations with large databases
		- Large virtualisation requirements compared to Essential
		- Offers clustering of up to 64 computers
- **Name two differences between Windows Server Core and Windows Nano Server.**
	- Windows Nano Server cannot be used as a domain controller while Windows Core Server can
	- Nano Server unlike Server Core does not support Group Policy
- **What is the main advantage of implementing Active Directory in a Windows System?**
	- Centralised enterprise system administration via Group Policy
- **What is the primary prerequisite to implement Active Directory in a Windows System?**
	- The system needs to have a domain controller
- **What is the relationship between the Windows Registry Database and the Active Directory Database?**
	- Active Directory Database keeps centralized system configuration in terms of Group Policy Objects (GPOs). These GPOs will be sent to targeting systems. Once the GPOs are delivered to the systems, the GPO settings will be converted to Windows Registry entries and store at the local Windows Registry Database.

## Challenging Questions
- **Identify the relationship and/or difference between the requirement and the goals of Trustworthy computing.**
	- If the requirements are not met, the goals of T