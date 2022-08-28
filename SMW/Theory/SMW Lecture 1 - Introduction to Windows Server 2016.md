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
> - Software Updates
> - Quality
> - Access Control and Authentication

### Isolation and Resiliency
#### Features
- Split a computer system into smaller pieces and ensure that each piece is separated from the other ones
	- This is so that if it gets compromised or malfunctions, it cannot affect other entities in the system
- **Implementations:**
	- Firewalls
	- Object Level Access Control
	- etc.
- Automatically blocks unsolicited downloads and unwanted pop-ups from websites by Internet Explorer
- Inclusion of better file attachment handling in Outlook Express and Windows Messenger
- Compilation of core Windows components with the most recent version of compiler technology
- **Introduction of Exchange Edge Services:**
	- <u>Designed for:</u>
		- Email protection
		- Enhanced security
		- Management of junk emails for Exchange customers
- Integrated set of protection technologies  **(Microsoft Defender Antivirus)**
- **Smart screening technologies**
	- Intelligent spam-filtering solution
	- Microsoft Defender SmartScreen
		- check for downloaded files, blocking blacklisted URLs
- **Client inspection technologies**
	- **MBSA** - for older versions of Windows
	- **Microsoft Application Inspector**
		- source code inspection on C, C++, C#, Java, JavaScript, HTML, Python etc.
	- **Windows Update Agent**

### Software Updates
> **Software updates** are a primary way of protecting against security vulnerabilities
- Microsoft releases software updates monthly

#### Products
- System Center Configuration Manager (SCCM)
- Windows Update Troubleshooter
- Windows Software Update Services (WSUS)

### Quality
- Use of quality standards and processes
- Use of best practices in all phases of software developments
- Development of new internal tools that automatically checks code for common errors
- Thorough testing of software before release

### Access Control and Authentication
- Areas Microsoft made changes to improve access control and authentication:
	- Passwords
	- Smart cards
	- Public Key Infrastructure (PKI)
	- Internet Protocol Security (IPSec)
	- Active Directory Rights Management Services (ADRMS)

## Trustworthy Computing
- **Microsoft Trustworthy Computing Memo**
	- Development emphasis: **Security** over **Features**
	- Strategy to compete against other companies
- Way to ensure safe and reliable computing
- **Requirements of Trustworthy Computing**
	- Computers need to be reliable
	- Software that operates these machines must be equally reliable
	- Service components need to be dependable
- **Dimensions of which Microsoft's objective of trustworthy computing relies on:**
	- Security (by design, default and deployment)
	- Privacy (fair information principles)
	- Business Integrity
		- Availability, manageability and accuracy
		- Usability, responsiveness and transparency

### Trusted Client


