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

## Important Explanations
### Chapter 1 - Introduction to Forensics
**Question:** Explain the definition of **digital forensics**?

<details>
<summary>Answer</summary>

- Applications of computer science and investigative procedures for legal purposes
- Involves the following steps:
	- proper search authority
	- chain of custody
	- validation with mathematics
	- use of validated tools
	- repeatability
	- possible expert presentation

</details>
- **Answer:**
 	1. Applications of computer science and investigative procedures for legal purposes
 	2. Involves the following steps:
 		1. proper search authority
 		2. chain of custody
 		3. validation with mathematics
 		4. use of validated tools
 		5. repeatability
 		6. possible expert presentation

**Question:** Explain what is **case law**
 - **Answer:**
 	1. Case law is as established by <u>outcomes of former cases</u>
 	2. Used by allowing *legal counsel* to <u>apply previous similar cases</u> to current one to <u>handle ambiguity in laws</u>
 	3. Examiners must be familiar with *recent court rulings* on <u>search and seizure in electronic movement</u>

**Question:** Explain why is **case law** is required?
- **Answer:**
	1. *Existing laws* cannot <u>keep up</u> with the <u>rate of technological advancement</u>

**Question:** Explain the differences between public and private sector investigations
- **Answer:**

|                  | Public Sector Investigations | Private Sector Investigations |
| ---------------- | ---------------------------- | ----------------------------- |
| Parties Involved | Government agencies          | Private companies and lawyers |
| Responsibility   | Following the legal process  | Addressing violation in company policies and litigation disputes|

**Question:** Define the **chain of custody**
- **Answer:**
	1. Route that evidence takes from time it is found till case is closed or goes to court

**Question:** Explain how would you develop **digital forensics resources**?
- **Answer:**
	1. <u>Supplement knowledge</u> by developing and maintaining contact with <u>computing, network and investigative professionals</u>
	2. Join computer groups in both <u>public</u> and <u>private</u> sectors
	3. <u>Consult outside experts</u>

**Question:** How would prepare for a **digital forensics investigation**?
- **Answer:**
	1. *Objective* - <u>gather evidence</u> and **prove** suspect <u>committed a crime</u> or <u>violated company policy</u>
	2. Collect evidence that can be <u>offered in court</u> or <u>at corporate inquiry</u>
	3. **Investigate** the <u>suspect's computer</u>
	4. **Preserve** evidence on <u>different computer</u>
	5. Set up a <u>chain of custody</u>

**Question:** Explain the legal process
- **Answer:**
	1. Criminal investigation begins when someone finds <u>evidence</u> or <u>witness of crime</u>
	2. Police <u>interviews complainant</u> and <u>writes report</u> about crime
	3. <u>Report processed</u> and management decides to <u>start investigation</u>
	4. Log information in <u>police blotter</u>
	5. <u>People involved:</u>
		1. **Digital Evidence First Responder (DEFR)**
			- arrives at incident scene and assesses situation 
			- takes precautions to acquire and preserve evidence
		2. **Digital Evidence Specialist (DES)**
			- Has skill to analyse data and determine if another analyst should be called for assistance
	6. **Affidavit**
		- Sworn statement of support of facts or evidence about crime
		-  Includes exhibits supporting the allegation

**Question:** Describe the **systemic approach** to a digital forensics investigation