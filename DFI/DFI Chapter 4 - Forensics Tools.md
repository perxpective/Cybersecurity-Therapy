# DFI Chapter 4 - Forensics Tools

###### tags: #DFI

## Table of Contents
```toc
```

## Types of Forensics Tools
- Hardware forensics tools
	- Range from single-purpose components to complete computer systems and servers
- Software forensics tools
	- Range from $300 and above
	- Can be either:
	    - command-line applications
	    - GUI applications
  - Commonly used to copy data from suspect disk drive to image file

## Tasks Performed By Digital Forensics Tools
1. Acquisition
2. Validation and Verification
3. Extraction
4. Reconstruction
5. Reporting

### Acquisition
- **Acquisition subfunctions:**
	- Physical data copy
	- Logical data copy (logical partition)
	- Data acquisition format
	- GUI acquisition
	- Remote, live and memory acquisitions
- Typical feature in vendor acquisition tools include **creating smaller segmented files**
- Remote acquisition of files common in larger organizations
	- Examples: Encase and AccessData
- Two types of data-copying methods used in software acquisitions:
	- Physical copying of entire drive
	- Logical copying of disk partition
	- Formats for disk acquisitions vary from raw data to vendor-specific proprietary

### Validation and Verification
#### Validation
- A way to confirm that a tool is functioning as intended
- Ensuring integrity of data being copied

#### Verification
- Proves that two sets of data are identical by calculating hash values or using similar method
- Related process is filtering
	- Involves sorting and searching through investigation findings to separate good data and suspicious data
- **Subfunctions of validation and verification**

| Subfunction            | Description                                                | Explanation                           |
| ---------------------- | ---------------------------------------------------------- | ------------------------------------- |
| Hashing                | Ensuring that data is not changed                          | CRC-32, SHA-1, MD5                    |
| Filtering              | Separate good files and files that need to be investigated | Based on has value sets               |
| Analysing file headers | Check on the change of file type                           | Discriminate files based on file type |

- National Software Reference Library (NSRL) has compiled list of known file hashes
  - for variety of OSs, applications and images
- Most computer forensics programs include list of common header values 
  - can see whether file extension is incorrect for file type

### Extraction
- Recovery task in investigation
- Most challenging to master
- Recovering data is first step in analysing investigation data
- **Subfunctions of extraction**
| Subfunction       | Description                                               |
| ----------------- | --------------------------------------------------------- |
| Data Viewing      | Different tools provide different ways of viewing data    |
| Keyword Searching | Good function but may produce noise if wrong keyword used |
| Decompressing     | Also known as uncompressing                               |
| Carving           | Reconstruct file fragments                                |
| Decrypting        | Potential problem for the investigation                   |
| Bookmarking       | Or tagging                                                          |
- Keyword searching speeds up analysis for investigators
- From investigation's perspective, encrypted files and systems are a problem
- Many password recovery tools have feature for generating potential password lists (for password dictionary attack)
- If password dictionary attack fails, run a brute-force attack

### Reconstruction
- Re-create suspect drive to show what happened during crime or incident
	- or create copy of suspect drive for other investigators
- Methods of re-construction
	- Disk-to-disk
	- Partition-to-partition
	- Image-to-disk
	- Image-to-partition
	- Rebuilding files from data runs and carving
- How to re-create image of suspect drive
	- Copy image to another location (e.g. partition, physical disk or virtual machine)
  - Simplest method is to use tool that makes direct disk-to-image copy
  - Examples:
	- Linux dd command
	- ProDiscover
	- Voom Technologies Shadow Drive

### Reporting
- To perform analysis disk analysis and examination, report must be created
- **Subfunctions of reporting:**
	- Bookmarking or tagging
	- Log reports -- documentation investigation steps
	- Report generator

## Considerations For Tools
- Flexibility
- Reliability
- Future expandability

## GUI Forensics Tools
- Simplify digital forensics investigations
- Simplified training for beginning examiners

| Advantages                     | Disadvantages                                       |
| ------------------------------ | --------------------------------------------------- |
| easy to use                    | Excessive resource requirements                     |
| multitasking                   | Produce inconsistent results due to type of OS used |
| no need for learning older OSs | Create tool dependencies                            |

## Forensic Workstations
- Categories
	- Stationary workstation
	- Portable workstation
	- Lightweight workstation 
- Balance what you need and what your system can handle
	- RAM and storage need updating as technology advances
- Police agency labs
	- Need many options
	- Use several PC configurations due to diverse investigations
- Keep hardware library in addition to software library
- Private corporation labs
	- Handles only system types used in organization

| Advantages              | Disadvantages                     |
| ----------------------- | --------------------------------- |
| Customize to your needs | Hard to find support for problems |
| Save money              | Can become expensive if careless  |

- Identify what you analyse

#### Recommendations for Forensics Workstations
- Have vendor support to save time and frustration when problems arise
- Mix and match components to get capabilities required for forensic workstation
- Determine where data acquisitions will take place

#### Recommendations for Stationary and Lightweight Workstations
- Full tower to allow for expansion devices
- As much memory and processor power as budget allows
- Different sizes of hard drives
- 400W or better power supply with battery backup
- External FireWire and USB 2.0 ports
- Assortment of drive adapter bridges
- Ergonomic keyboard and mouse
- Good video card with at least 17 inch monitor
- High-end video card and dual monitors

## Using a Write-Blocker
- Prevents data writes to hard disk
- Software-enabled blockers
	- Typically runs in shell mode (Windows CLI)
	- Example: PDBlock from Digital Intelligence
- Hardware options
	- Ideal for GUI forensics tools
	- prevents Windows or Linux from writing data to blocked drive
	- Act as bridge between suspect drive and forensic workstation
- Can navigate to the blocked drive with any application 
- Discards written data
- Connecting technologies
	- FireWire
	- USB 2.0 & 3.0
	- SATA, PATA, SCSI controllers

## Validating and Testing Forensic Software
- Important to make sure evidence recovered and analysed can be admitted in court
- Test and validate software to prevent damaging the evidence

## Using National Institute of Standards and Technology Tools (NIST)
- NIST publishes articles, provides tools, and creates procedures for testing/validating forensics software
- Computer Forensics Tool Testing (CFTT) project manages research on computer forensics tools
- NIST has created criteria for testing computer forensics tools based on:
	- standard testing methods
	- ISO 17025 criteria for testing items that have no current standards
- **Criteria for tool testing:**
	- Establish categories for digital forensics tool testing
	- Identify forensics category requirements
	- Develop test assertions
	    - Based on requirements, create tests to test tool capability
	- Identify test cases
	- Report test results
- ISO 5725 specifies results must be repeatable and reproducible
- NIST created the National Software Reference Library (NSRL) 
	- Collects all known hash values for commercial software applications and OS files
	- Uses SHA-1 to generate known set of digital signatures called **Reference Data Set (RDS)**
	- Helps filtering known information
	    - speeds up investigation time
	- RDS can be used to identify bad files

## Using Validation Protocols
- Verify results by performing same tasks with other similar forensics tools
- Use at least two tools:
	- Retrieving and examination
	- Verification
- One way to compare results and verify new tool is by using a **disk editor** e.g. *Hex Workshop* or *WinHex*
	- Disk editor used to view data on disk in its raw format
	- Reliable
	- Can access raw data

### Computer Forensics Examination Protocol
- Perform investigation with GUI tool
- Verify results with disk editor
- Compare hash values obtained with both tools

### Digital Forensics Tool Upgrade Protocol
- Ensure that evidence data not corrupted
- Test for:
	- New releases 
	- OS patches and upgrades
- Report forensics tool to vendor if there are any problems
	- Do not use forensics tool until problem is fixed
- Use a test hard disk for validation purposes
- Check web for new editions, updates, patches, and validation tests for tools

