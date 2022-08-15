# DFI Revision Summary

###### tags: #DFI 

## Table of Contents
```toc
```

## Exam Format
<u>Section A (20%)</u> - **10 questions**
- Direct questions
- Logical questions
- General knowledge

<u>Section B (80%)</u> - **4 questions**
- Structured questions (20 marks each)
- Each question has sub-questiond

## Areas of Focus
**Chapter 1 - Introduction to Forensics**
- Definition of Digital Forensics
- What is Chain of Custody?
- Difference between Public and Private Investigator
- Case Law
	- What is Case Law?
	- Why is Case Law required?
- Potential Challenges of digital investigators

**Chapter 2 - Understanding Investigation**
- Rule of Computer Forensics (Preserve original evidence)
- Chain of evidence form
- Common investigation cases
- Private sector vs public sector investigations

**Chapter 3 - Data Acquisition**
- Evidence Storage Formats (raw, proprietary, advanced)
- Why is acquisition important?
- Acquisition methods
- Purpose of write-blocking device
- Validation techniques
	- Why is validation important?
- Remote acquisition
	- Issues with remote acquisition

**Chapter 4 - Forensics Tools**
- Consult business plan
- Forensics tools functions
	- Validation and verification
	- Extraction
	- Reconstruction
	- Reporting
- Maintain software library in lab
- Computer forensics tools types 
	- Forensics software (command line, GUI)
	- Forensics hardware (equipment, commercial options)
- Always run validation test

**Chapter 5 - Evidence Processing (OS & Files Systems)**
- Disk partition
- MBR
- RAM and File slack
	- What is RAM and file slack?
	- Drive size, data/file size, cluster size, calculate RAM and file slack
- Cluster and space required for file made up of number of sectors
- Number of cluster to store file = (File Size)/(Cluster Size) 
	- round up clusters required
- Cluster size determined by number of sectors
- RAM slack
	- Per sector size = 512 bytes in general
	- Sectors required = (File Size)/(Sector Size)
		- round up sectors required
		- Sectors required * Sector size = Total sector size required
		- Total sector size - File size = RAM slack
- File slack
		- File slack = (Size of clusters required) - (File size) - (RAM slack) 
- File Allocation Table (FAT)
	- Explain what is FAT, cluster size
	- Concept of FAT
	- Cluster made up of sectors
	- 1 sector = 512 bytes
	- Interpret specifications for FAT
- NTFS
	- Master File Table (MFT) - understand how NTFS files stored in NTFS system (Resident/Non-resident)
	- First data set of NTFS disk - resident and non-resident 
		- Partition boot sector
		- Master file table
	- MFT contains all information about all files in system
	- Understand file attributes and structures in MFT

**Chapter 6 - Analysis and Validation**
- Explain scope creep
- Purpose and features of hexadecimal editors
- Data-hiding techniques
	- hiding entire partitions
	- changing file extensions
	- setting attribute to hidden
	- bit-shifting
	- encryption
	- password protection
- Explain steganography and when to use it
- Explain watermarking and when to use it

**Chapter 7 - Digital Forensics Lab**
- Explain what is a digital forensics lab
- Physical security
- Requirements of forensic workstation
- Business case

**Chapter 8 - Crime and Incidence Scene Processing**
- Define digital evidence
- Tasks of investigators (acquisition, identification, evaluation and admission)
- Rule of evidence
- Collecting evidence in private-sector incident scenes
- Identifying type of OS or digital evidence at start of investigation
- Modes of storing digital evidence
- Tools required for initial-response kits

**Chapter 9 - Historic Cellular**
- How mobile phone contacts stations
- Purpose of MTSO
- What is Handoff?
- Mobile Telecommunication Technologies (iDEN, CDMA and GSM)
- Cellular Phone Identification Number (understand **format**)
	- MIN - mobile identity number
	- MEID - mobile equipment ID and format
	- IMEI - international mobile equipment identity

**Chapter 10 - Android Forensics**
- Define Android OS
- Android Architecture
- Acquisition on Android phone

**Chapter 11 - iOS Forensics**
- iOS architecture
- What is a `plist` file?
- What is an EXIF file?
- What is a `.db` file?
- Types of iOS devices

**Chapter 12  - Rooting and Jailbreaking**
- Explain rooting in Android
- Explain jailbreaking in iOS
- Explain motivations behind rooting and jailbreaking
- Tools used in rooting and jailbreaking (e.g. JailBreakMe)

---

## Chapter Summaries
### Chapter 1 - Introduction to Digital Forensics
#### Digital Forensics
- **Definition:**
	- Applications of computer science and investigative procedures for legal purposes
- **Steps Involved:**
	- Proper search authority
	- Chain of custody
	- Validation with mathematics
	- Used of validated tools
	- Repeatability
	- Possible expert presentation

#### Case Law
- **Definition:**
	- The law established by the <u>outcomes of former cases</u>
	- Used by allowing **legal counsel** to apply previous similar cases to current one to **handle ambiguity in laws**
- **Why is it required?**
	- Existing laws cannot keep up with the **rate of technological advancement**

#### Digital Forensics Resources
- **How to develop resources?**
	- **Supplement knowledge** by <u>developing</u> and <u>maintaining</u> contact with **computing, network and investigative professionals**
	- Join computer groups in both public and private sectors
		- **Example:** Computer Technology and Investigators Network (CITN)
	- Consult **outside experts**

#### Public and Private Investigations
- **Differences:**

|                  | Public-Sector Investigations | Private-Sector Investigations |
| ---------------- | ---------------------------- | ----------------------------- |
| Parties Involved | Government agencies          | Private companies and lawyers |
| Objectives       | Follow the legal process     | Address company policy violations and litigation disputes                              |

#### Legal Process
- **Steps:**
	- Criminal investigation begins when someone **finds evidence** or **witness of crime**
	- Police **interviews complainant** and **writes report about the crime**
	- Report is processed and management decides to start investigation or log information in **police blotter**
- **Parties Involved:**
	- Digital Evidence First Responder
		- **Description:**
			- Arrives at incident scene and **assesses situation**
			- Takes **precautions** to **acquire and preserve evidence**
	- Digital Evidence Specialist
		- **Description:**
			- Has the skill to analyse data and determine when another analyst should be called for assistance
- **What is Affidavit?**
	- Sworn statement that supports facts or evidence about a crime
	- Include exhibits that support the allegation

#### Private-Sector Investigations
- **Objectives:**
	- **Minimize** or **eliminate** litigation
	- **How to reduce risk of litigation?**
		- **Publishing** and maintaining **policies** that are easy for employees to **read** and **follow**
- **What is Acceptance Use Policy?**
	- Defines rules for using company computers and networks
- **What is Line of Authority?**
	- States who have the **legal right** to **initiate** an investigation
	- Who can **take possession** of evidence and **have access** to evidence
- **How can businesses avoid litigation?**
	- Display **warning banner** on **computer screens**
	- Inform user that organization reserves the **right to inspect computer systems** and **network traffic** at will
- **What are the most common types of situations?**
	- Abuse or misuse of computer assets
	- Email abuse
	- Internet abuse

#### Maintaining Professional Conduct
**How can investigators maintain a high level of professional conduct?**
- **Maintain the following:**
	- objectivity
	- credibility by maintaining confidentiality

#### Preparing for a Digital Forensics Investigation
- **Objective**
	- Gather evidence to prove a suspect **committed a crime** or **violated company policy**
- **How to conduct a digital forensics investigation?**
	- Collect evidence that can be **offered in court** or at **corporate inquiry**
	- Investigate suspect's computer
	- Preserve evidence on different computer (forensics workstation)
- **What is a Chain of Custody?**
	- Route that evidence takes from the time it is found until case is closed or goes to court

#### Computer Crime
- **What can information in computers help law enforcement determine?**
	- Chain of events leading up to the crime
	- Evidence that can lead to a conviction

- **Why must law enforcement officers **