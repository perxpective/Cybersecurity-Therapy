# SMW Lecture 1 - Introduction to Windows Server 2016

###### tags: #SMW

## Table of Contents
```toc
```

## The Need for Secure Computing
- **Types of threats:**
	- Viruses
	- Worms
	- Programs that steal confidential information
	- Hacking via system vulnerabilities
- **Laws that uphold management possible for data breaches:**
	- **American Laws:**
		- California SB-1386
		- Health Insurance Portability and Accountability Act (HIPAA)
			- protection for <u>personal health information</u>
		- Gramm-Leach-Bliley Act (GLB) 
			- *Financial Services Modernization Act 1999*
	- **Singapore Laws:**
		- <u>Electronic Transactions Act 2010</u>
			- provides legal foundation for electronic signatures
		- <u>Personal Data Protection Act 2012 </u>
			- comprises various rules governing the collection, use, disclosure and care of personal data
- **Source of computer security problems:**
	- Bad software design
	- Bad implementation
- **Requirements of safer computing:**
	- Change in the behaviour of management programmers and users
	- Prioritize secure computing
	- Write secure operating systems and applications
	- Train users to always keep security in mind

## Microsoft's Commitment to Security
> **Areas of security that Microsoft decided to make significant investment in:**
> - Isolation and Resiliency
> - Updating
> - Quality
> - Access Control and Authentication

### Isolation and Resiliency
- **Features included in Microsoft's isolation and resiliency area:**
	- Split a computer system into smaller pieces and ensure that each piece is separated from the other ones
		- This is so that if it gets compromised or malfunctions, it cannot affect other entities in the system
	- **Implementations:**
		- Firewalls
		- Object Level Access Control
		- etc.
	- Automatically blocks unsolicited downloads and unwanted