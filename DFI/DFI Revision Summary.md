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

## Important Definitions
### Chapter 1 - Introduction to Forensics
**Question:** What is the definition of **digital forensics**?
> 1. The application of <u>computer science</u> and <u>investigative procedures</u> for <u>legal purposes</u>
> 2. Involves the following steps:
> 	1.  **proper search authority**
> 	2. **chain of custody**
> 	3. **validation with mathematics**
> 	4. **use of validated tools**
> 	5. **repeatability**
> 	6. **possible expert presentation**

**Question:** What is **case law**?
> 1. The law established by the <u>outcome of former cases</u>
> 2. By allowing legal counsel to <u>apply previous similar cases</u> to current one to <u>address ambiguity in laws</u>

**Question:** Why is **case law** required?
> 1. Existing laws <u>cannot keep up</u> with <u>rate of technological change</u>

**Question:** Explain what is a chain of custody
> 1. The <u>route taken by evidence</u> from the <u>time it is found</u> until <u>case is closed</u> or<u> goes to court</u>

**Question:** What are the differences between **public** investigations and **private** investigations?
> **Public Investigations**
> 1. Involves government agencies responsible for criminal investigations and prosecution
> 2. Follows the legal process
**Private Investigations**
