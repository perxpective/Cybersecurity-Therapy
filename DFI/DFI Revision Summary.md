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
- Cluster and space required
- File Allocation Table (FAT)
	- Explain what is FAT, cluster size
	- Cluster made up of sectors
	- 1 sector = 512 bytes

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
 	1. The law as established by <u>outcomes of former cases</u>
 	2. Used by allowing *legal counsel* to <u>apply previous similar cases</u> to current one to <u>handle ambiguity in laws</u>
 	3. Examiners must be familiar with *recent court rulings* on <u>search and seizure in electronic movement</u>

**Question:** Explain why is **case law** is required?
- **Answer:**
	1. *Existing laws* cannot <u>keep up</u> with the <u>rate of technological advancement</u>

**Question:** Explain the differences between public and private sector investigations
- **Answer:**
	1. **Public sector investigations**
		- Involve <u>government agencies</u>
		- Responsible for <u>criminal investigations</u> and <u>prosecution</u>
	2. **Private sector investigations**
		- Involve <u>private companies</u> and <u>lawyers</u> 
		- Addressing <u>violations in company policy</u> and <u>litigation disputes</u>

**Question:** Define the **chain of custody**
- **Answer:**
	1. Route that evidence takes from time it is found till case is closed or goes to court

**Question:** Explain how would you develop **digital forensics resources**?
- **Answer:**
	1. <u>Supplement knowledge</u> by developing and maintaining contact with <u>computing, network and investigative professionals</u>
	2. Join computer groups in both <u>public</u> and <u>private</u> sectors
	3. <u>Consult outside experts</u>

**Question:** How wold prepare for a **digital forensics investigation**?
- **Answer:** 