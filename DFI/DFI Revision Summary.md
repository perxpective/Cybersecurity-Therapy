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
- Each question has sub-questions

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
	- The law established by the **outcomes of former cases**
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
- **Public-Sector Investigations**
	- **Party Involved:** government agencies
	- Follows the legal process
- **Private-Sector Investigations**
	- **Parties Involved:** Private companies and lawyers
	- Addresses company policy violations and litigation disputes

#### Legal Process
- **Steps:**
	- Criminal investigation begins when someone **finds evidence** or **witness of crime**
	- Police **interviews complainant** and **writes report about the crime**
	- Report is processed and management decides to start investigation or log information in **police blotter**
- **Parties Involved:**
	- **Digital Evidence First Responder**
		- **Description:**
			- Arrives at incident scene and **assesses situation**
			- Takes **precautions** to **acquire and preserve evidence**
	- **Digital Evidence Specialist**
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
- **How can investigators maintain a high level of professional conduct?**
	- **Maintain the following:**
		- objectivity
		- credibility by maintaining confidentiality
	- Attend training to stay current with latest technical changes

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
- **Why must law enforcement officers follow proper procedure?**
	- Evidence can be easily altered by overeager investigators
- **What is one potential challenge?**
	- Information on hard disks can be **password-protected** so forensics tools needed for investigation

#### Company Violation
- **What are some examples of misusing company resources?**
	- Surfing the internet
	- Sending personal emails
	- Using company computers for personal uses

#### System Approach to Digital Forensics Investigations
- **Steps Taken (MDCDOITACC):**
	- Make **initial assessment** about *type* of case being investigated
	- Determine **preliminary design** or **approach case**
	- Create **detailed checklist**
	- Determine **resources** needed
	- **Obtain** and **copy** evidence drive
	- Identify **risks**
	- **Test** the *design*
	- **Analyse** and **recover** digital evidence
	- **Complete** the case report
	- **Critique** the case (self-evaluation for improvement)

### Chapter 2 - Understanding Investigation
#### Case Assessment
- **Case details to outline: (SNS TKL)**
	- Situation
	- Nature of case
	- Specifics of case
	- Type of evidence
	- Known disk format
	- Location of evidence

#### Planning the Investigation
- **Steps Involved in a Basic Investigation Plan: (ACTS PRMRP)**
	- **Acquire** evidence
	- **Complete evidence form** and **establish chain of custody**
	- **Transfer** evidence to **computer forensics lab**
	- **Secure** evidence in **approved secure container**
	- **Prepare** forensics workstation
	- **Retrieve** evidence from secure container
	- Make **forensic copy** of evidence
	- **Return** evidence to secure container
	- **Process** copied evidence with **forensics tools**
- **Purpose of Evidence Custody Form:**
	- Help document what has been done with original evidence and forensics copies
- **Two types of evidence forms:**
	- Single-evidence form (lists each piece of evidence on separate page)
	- Multi-evidence form
- **What should an evidence form contain?**
	- *Model number* or *serial number*
	- *Name of investigator* who recovered the evidence
	- *Date and time* evidence was taken into custody

#### Securing Evidence
- **How to secure evidence?**
	- Use evidence bag to secure and catalogue evidence
	- Use computer safe products when collecting computer evidence (antistatic bags and pads)
	- Use well-padded containers
	- Use evidence tape to seal all openings
		- CD drive bays and insertion slots for power supply cord
		- USB cables
	- Write initials on tape to prove evidence is not tampered with
	- Consider computer specific temperature and humidity ranges

#### Private-Sector Investigations
- **Employee Termination Cases**
	- Involves employee **abuse of corporate assets**
	- **What the cases investigated?**
		- Incidents that create a **hostile work environment**
		- **Examples:**
			- Viewing pornography in the workplace
			- Sending inappropriate emails
- **Internet Abuse Investigations**
	- **Requirements for Investigations:**
		- Organization **Internet Proxy Logs**
		- Suspect computer's **IP address**
		- Suspect computer's **disk drive**
		- Preferred **forensics analysis tool**
	- **Recommended Steps:**
		- Use standard forensics analysis **techniques** and **procedures**
		- Use suitable tools to extract all **web page URL information**
		- Contact **network firewall administrators** to request for **proxy server log**
		- Compare data recovered from forensics analysis to proxy log
		- Analyse computer disk drive data
- **Email Abuse Investigations**
	- **Requirements for Investigations:**
		- **Electronic copy** of offending email
			- Containing **message header data**
		- Email **server logs**
		- Access to **email central server** where user message stored
		- Access to computer to perform forensic analysis on
		- Preferred **computer forensics analysis tool** 
	- **Recommended Steps**
		- Use standard forensic analysis techniques and procedures
		- **Obtain** electronic copy of *suspect* and *victim* email **folder** or **data**
		- **For Web-Based Email Investigations:**
			- Use tools such as **FTK Internet Keyboard Search** to extract all **related email address information**
		- Examine **header data** of all *messages of interest* to investigation
- **Industrial Espionage Investigations**
	- All suspected industrial espionage cases should be treated as criminal cases
	- **What are the staff needed for industrial espionage cases? (CTNT)**
		- **Computing Investigator** -> disk forensics investigations
		- **Technology Specialist** -> Knowledgeable about suspected compromised data
		- **Network Specialist** -> Perform log analysis and set up network sniffers
		- **Threat Assessment Specialist** -> Typically an attorney
	- **What are some guidelines to follow when initiating an investigation? (DCDG)** 
		- **Determine** if investigation involves **possible espionage incident**
		- **Consult** with **corporate attorneys** and **upper management**
		- **Determine** what information needed to **substantiate allegation**
		- **Generate** *list of keywords* for **disk forensics** and **sniffer monitoring**
		- **List** and **collect** *resources* for investigation
		- **Determine goal** and **scope** of investigation
		- **Initiate** investigation after **approval** from management
	- **What are some planning considerations to take note of?**
		- **Examine** all emails of suspected employees
		- **Search** Internet **newsgroups** or **message boards**
		- **Initiate** physical surveillance
		- **Examine** facility physical **access logs** for **sensitive information**
		- **Determine** suspect **location** in relation to **vulnerable asset**
		- **Study** suspect's work **habits**
		- **Collect** all *incoming* and *outgoing* **phone logs**
	- **What are the steps to conducting an industrial espionage case?**
		- **Gather** all personnel assigned to investigation and **brief** them on the plan
		- **Place** surveillance systems at **key locations**
		- **Discreetly gather** any additional evidence
		- **Collect** all **log data** from *networks* and *email* servers
		- **Report** regularly to **management** and **corporate attorneys**
		- **Review** *investigation scope* with management and corporate attorneys
		- **Gather resources** to conduct the investigation

#### Interviews and Interrogations
- **Definition of Interviews:**
	- Conducted to **collect information** from *witness* or *suspect* about specific facts related to investigation
- **Definition of Interrogation:**
	- Process of getting a suspect to **confess**
- **What is the role of a computing investigator?**
	- **Instruct** the investigator who is conducting the interview on **what questions to ask**, and **what the answers should be**
- **What are the ingredients for a successful interview?**
	- Being **patient** throughout the interview
	- **Repeating** or **rephrasing** questions to zero in on specific facts from **reluctant** interviewees (*suspect* or *witness*)
	- Being tenacious

#### Understanding Data Recovery Workstations and Software
- **What are the basic requirements for a digital forensics investigation?**
	- Workstation running on Windows XP or later
	- Write-blockers
	- Acquisition tool
	- Analysis tool
	- Target device to receive source or suspect disk data
	- Spare PATA or SATA ports
	- USB ports

#### Conducting an Investigation
- **What are the items needed to conduct an investigation?**
	- Original storage media
	- Evidence custody form
	- Evidence container for storage media
	- Bit-stream imaging tool
	- Forensic workstation to copy and examine evidence
	- Securable evidence locker, cabinet or safe
- **What are the steps to gathering evidence?**
	- Meet the IT manager to interview
	- Fill up the evidence form and have IT manager sign
	- Place evidence in secure container
	- Complete evidence custody form
	- Secure evidence by locking container

#### Bit-stream Copies
- **Definition:**
	- **Bit-by-bit copy** of original storage medium
	- **Exact copy** of original disk
- **Why are they different from simple backup copies?**
	- Backup software only copies known files
	- Backup software cannot copy deleted files, email messages or recover file fragments

#### Acquiring Image of Evidence Media
- **Guidelines:**
	- **Preserve** the *original evidence*
	- Only conduct analysis on the **copy of the data**
	- Windows tools require **write-blocking device** when acquiring data from **FAT** or **NTFS** file systems

#### Completing the Evidence
- **Steps:**
	- Produce **final report**
		- state what was **done** and what was **found**
	- **Repeat** steps to **produce** the *same results*
	- Use **report template** if required
		- report should show **conclusive evidence**
	- Keep **journal** of everything that was done during the investigation
	- **Answer** the 5W1H
	- Explain the **computer** and **network processes**

#### Critiquing the Case
- **Questions to ask: (HDDWWDD)**
	- How can you **improve your performance** in the case?
	- Did you **expect the results** found? 
	- Did case **developed** into ways you did not expect?
	- Was **documentation as thorough** as it could have been?
	- What **feedback** has been received from **requesting source**?
	- Did you discover any **new problems**?
	- Did you **use any new techniques** during the case or research?

### Chapter 3 - Data Acquisition
#### Overview
- **Why is acquisition necessary?**
	- To create a forensics copy of the piece of media to be suitable to be used as evidence in a court of law

#### Image Formats
- **Image Formats: (RPA)**
	- Raw Format 
	- Proprietary Format
	- Advanced Forensics Format (AFF)
- **What are the advantages and disadvantages of Raw Format?**
	- **Advantages:**
		- Fast data transfers
		- Ignore minor data read errors on source drive
		- Most computer forensics tools can read raw format
	- **Disadvantages:**
		- Requires too much storage as original disk or data
		- Tools might not collect marginal sectors 
			- due to low threshold of retry reads on weak media spots on drive
- **What are the advantages and disadvantages of Proprietary Format?**
	- **Advantages:**
		- Option to compress or not compress image files to save space
		- Can split image into smaller segmented files 
			- provide integrity check for split data
		- Able to integrate metadata into file
	- **Disadvantages:**
		- Unable to share image between different tool or vendors
		- File size limitation for each segmented volume
- **What are the design goals of AFF?**
	- Provide compress or uncompressed image files
	- No size reduction for disk-to-image files
	- Provide space in image file or segmented files for metadata
	- Open source
	- Extensibility
	- OSS vendor have no implementation restrictions on this format
	- Internal consistency checks for self-authentication
	- **File formats for AFF**
		- `.afd` (segmented image files)
		- `.afm` (AFF metadata)

#### Acquisition Methods
- **Types of data acquisition:**
	- Static acquisition
	- Live acquisition

> - **Live Acquisition** is used when suspect computer cannot be shut down for static acquisition
> - Not repeatable as data is continually being altered by suspect computer's OS

- **Types of data collection methods:**
	- Creating disk-to-image file
	- Creating disk-to-disk
	- Creating logical disk-to-disk
	- Creating a sparse copy of the file or folder

| Collection Method          | Description                                                                                                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Disk-to-image              | Most common and flexible method<br> More than one copy can be made<br> Copies are for bit-for-bit replications of original drive<br> Tools that use disk-to-image: ProDiscover, Encase, FTK, SMART, Sleuth Kit, X-Ways, iLookIX |
| Disk-to-disk               | Used when disk-to-image not possible<br> Tools can adjust disk's geometry like trackers and sectors<br> Tools that use disk-to-disk: Encase, SnapCopy and Safeback                                                              |
| Logical/Sparse Acquisition | Used when time is limited<br> Logical acquisition captures only specific files of interest to case<br> Sparse acquisition captures deleted data<br> For large disks, PST or OST mail files and RAID servers                                                                                                                                                                                                                                |

- **What are some considerations when making a copy?**
	- **Size of source disk**
		- Lossless compression is useful
			- does not remove data permanently and target does not need to be too big
			- Verification can be done with digital signatures
		- When working with large devices, alternative is using tape backup system
	- **Whether the disk can be retained**
		- Original disk may need to be returned to the original owners after copying

#### Contingency Planning for Image Acquisition
- **How to do contingency planning for image acquisition?**
	- Create duplicate copy of evidence image file in case of failure
	- Make at least two images of digital evidence
		- using different tools and techniques
	- Copy **Host Protected Area (HPA)**
		- area not visible for OS on drive
- **What are some challenges in image acquisition?**
	- Windows has whole disk encryption called BitLocker which makes static acquisition difficult
	- Decryption keys provided by suspect is require to decrypt data
		- suspect may not want to cooperate

#### Acquisition Tools
- **What are the advantages and disadvantages of acquisition tools for Windows?**
	- **Advantages:**
		- Makes acquiring evidence from evidence drive more convenient
	- **Disadvantages:**
		- Acquired data must be protected by well-tested write-blocker hardware device
		- Tools cannot acquire data from disk's host protected data
		- Several countries have not accepted use of write-blocking devices for data acquisitions

#### Validation of Data Acquisitions
> Validation requires a **hashing algorithm utility**

- **Why is validation necessary?**
	- To ensure that the data is not tampered so that it is admissible in court
- **Validation Techniques**
	- CRC-32
	- MD-5
	- SHA-1
	- SHA-512
- **Windows Validation Methods:**
	- Use third-party utilities such as WinHex (hexadecimal editor)
	- Commercial computer forensics programs have built-in validation features
		- Each program having their own validation techniques
		- **Examples:**
			- ProDiscover `.eve` files contain metadata in acquisition file or segmented files
				- including hash value of suspect drive or partition
			- Raw image formats do not contain metadata
				- separate manual validation is recommended for all raw acquisitions
- **Remote Network Acquisition Tools**
	- **Tools that support remote acquisition:**
		- Encase
		- ProDiscover
	- **What are some issues with remote acquisition?**
		- Antiviruses, antispyware and firewalls tools can be configured to ignore remote access programs and access can be blocked
		- Suspects can easily install their own security tools that trigger alarms to inform them of remote access intrusions
	- **Capabilities of Remote Acquisition Tools:**
		- Preview suspect drive remotely while in use or powered on
		- Perform live acquisition (aka smear) as disk data is altered while suspect computer is turned on
		- Encrypts connection between suspect and examiner computer
		- Copy suspect computer's RAM while computer is on
		- Use optional stealth mode to hide remote connection from suspect while data is being acquired or previewed
		- **Additional Functions:**
			- Create volatile system state information
			- Analyse current running processes on remote system
			- Locate unseen files and processes on remote system that might be running malware or spyware
			- Remotely view and listen to IP ports on compromised system
			- Run hash comparisons on remote systems to search for Trojans and rootkits
			- Create has inventory of all files on system remotely to establish baseline if attacked

### Chapter 4 - Forensics Tools
#### Overview of Forensics Tools
- **Types of Forensics Tools:**
	- **Hardware forensics tools**
		- Ranges from:
			- single-purpose components to;
			- complete computer systems and servers
	- **Software forensics tools**
		- Ranges from $300 and above
		- Can be either of the following:
			- command-line applications
			- GUI applications
		- Commonly used to copy data from suspect disk drive to image file

#### Tasks Performed by Digital Forensics Tools
- **Tasks in Digital Forensics:**
	- Acquisition
	- Validation and Verification
	- Extraction
	- Reconstruction
	- Reporting

#### Acquisition
- **What are the subfunctions of acquisitions?**
	- Physical data copy 
	- Logical data copy (logical partition)
	- Data acquisition formats
	- GUI acquisition
	- Remote, live and memory acquisitions
- **What is a typical feature in vendor acquisition tools?**
	- Creating smaller segmented files

> Remote acquisition is common in larger organizations

- **What are the types of data-copying methods used in acquisitions?**
	- Physical copying of the entire drive
	- Logical copying of disk partition

> Formats for disk acquisitions vary from raw data to vendor-specific proprietary

##### Validation and Verification
- **Validation**
	- **Explanation:**
		- A way to confirm a tool is function as intended
		- Ensuring that integrity of data is being copied
- **Verification**
	- **Explanation:**
		- Proving that the two sets of data are identical by calculating hash values or using similar methods
- **Subfunctions of validation and verification:**
	- **Hashing:**
		- Ensuring that data is not changed
		- Use hashing algorithms e.g. CRC-32, SHA-1, MD5
	- **Filtering:**
		- Separate good files and files that need to be investigated
			- based on hash value sets
	- **Analysing file headers**
		- Check on change of file type
			- discriminate files based on file type
		- **Where can the compiled list of known file hashes be found?**
			- National Software Reference Library (NSRL)
			- Includes:
				- OS
				- Applications
				- Images
		- Most computer forensics programs have list of common header values 
			- check if file extension is incorrect for the file type

##### Extraction
- **Explanation:**
	- Recovery task in digital investigation
	- Most challenging task to master
	- Recovering data is first step in analysing investigation data
- **Subfunctions of extraction**
	- **Data viewing:**
		- Different tools can provide different ways of viewing data
	- **Keyword Searching:**
	- Speeds up analysis for investigators
		- Drawback: Produces noise if wrong keyword is used
	- **Carving:**
		- Reconstruct file fragments
	- **Decrypting:**
		- Potential problem for the investigation
	- **Bookmarking (or tagging)**
- **Password Recovery:**
	- Use password recovery tools 
		- have feature to generate potential password lists for password dictionary attack
	- If password dictionary attack fails, run brute-force attack

##### Reconstruction
- **Objective:**
	- To recreate the suspect drive to show what happened during the crime or incident
	- Create copy of suspect drive for other investigators
- **Methods:**
	- Disk-to-disk
	- Partition-to-partition
	- Image-to-disk
	- Rebuilding files from data runs and carving
- **How to recreate image of suspect drive?**
	- Copy the image to another location
		- Sources:
			- partition
			- physical disk
			- virtual machine
		- Use a tool that makes direct disk-to-image copy
			- **Examples:**
				- Linux `dd` command
				- ProDiscover
				- Voom Technologies Shadow Drive

##### Reporting
- **Subfunctions of reporting:**
	- Bookmarking and tagging
	- Log reports (documentation of investigative steps)
	- Report generator

#### Consideration for Tools
- **Considerations:**
	- Flexibility
	- Reliability
	- Future expandability

#### GUI Forensics Tools
- **Why are GUI Forensics Tools widely used?**
	- Simplifies digital forensics investigations
	- Provides simplified training for beginning examiners
- **What are the advantages and disadvantages of GUI forensics tools?**
	- **Advantages:**
		- Easy to use
		- Allows multitasking
		- No need to learn older OS's
	- **Disadvantages:**
		- Excessive resources required
		- Produces inconsistent results due to type of OS used (Example: 64x vs 32x OS)
		- Creates tool dependencies:
			- Investigators might only want to use one tool
			- Investigators need to be familiar with more than one tool

#### Forensics Workstations
- **Categories of forensics workstations:**
	- **Stationary** workstations
	- **Portable** workstations
	- **Lightweight** workstations
- **What are the advantages and disadvantages of building your own forensics workstation?**
	- **Advantages:**
		- Customized to your needs
		- Saves money
	- **Disadvantages:**
		- Hard to find support for problems
		- Can become expensive if not careful
- **What are some recommendations for forensics workstations?**
	- Have vendor support to save time and frustration when problems arise
	- Mix and match components to get capabilities required of forensics workstation
	- Determine where data acquisitions will take place
- **What are some recommendations for stationary and lightweight workstations?**
	- Full tower to allow for expansion devices
	- Get as much memory and processor power as budget allows
	- Different sizes of hard drives
	- 400W or better power supply (+ battery backup)
	- External FireWire and USB 2.0 ports
	- Assortment of drive adapter bridges
	- Ergonomic keyboard and mouse
	- Good video card
	- at least 17 inch monitor
	- High-end video card and dual monitors

#### Write-Blockers
- **Purposes of Write-Blocker:**
	- Prevents data writes to the hard disk
- **Two types of write-blockers:**
	- **Software write-blockers**
		- Typically runs in shell mode (Windows CLI)
		- **Example:** PDBlock from Digital Intelligence
	- **Hardware write-blockers**
		- Ideal for GUI forensics tools
		- Prevents Windows or Linux from writing data to blocked drive
		- Act as bridge between suspect drive and forensics workstation
		- Can navigate to blocked drive with any application
		- Discards written data
		- **Connecting technologies:**
			- FireWire
			- USB 2.0/3.0
			- SATA, PATA, SCSI controllers

#### Validation and Testing of Forensics Software
- **Why is it important to test and validate forensics software?**
	- Ensure that evidence recovered and analysed can be admitted in court
	- Ensure that forensics software does not damage the evidence

> Test and validate forensics software to prevent damaging the evidence

#### Using NIST Tools
- **What is NIST?**
	> **NIST** - National Institute of Standards and Technology 
	
	- Publishes articles, provides tools and creates procedures for testing and validating forensics software
	- Created criteria for Computer Forensics Tool Testing (CFTT) to manage research on computer forensics tools
	- Based on the following:
		- Standard testing methods
		- ISO 17025 criteria for testing items with no current standards
- **What is the criteria for tool testing?**
	- Establish categories for digital forensics tools
	- Identify forensics category requirements
	- Develop test assertions
		- Based on requirements
		- Create tests to test the tool capability
	- Identify test cases
	- Report test results
- **What is the NSRL created by NIST?**
	- Stands for the **National Software Reference Library** 
	- Collects all known hash values for commercial software applications and OS files
	- Uses SHA-1 to generate known set of digital signatures - **Reference Data Set (RDS)**
	- **Explain the use of Reference Data Set (RDS)**
		- Helps filtering known information -> speeds up investigation time
		- Identifies bad files

#### Using Validation Protocols
- **How to verify results from the investigation?**
	- Verify the results by performing the same tasks with other forensics tools
	- Use at least two tools for the following purposes:
		- Retrieving and examination
		- Verification
	- Compare results and identify new tools by using **hexadecimal disk editor**
	- **What are disk editors used for?**
		- Viewing data on disk in raw format
		- Accessing raw data

- **Computer Forensics Examination Protocol**
	- **Guidelines:**
		- Perform investigation with GUI tool
		- Verify results with disk editor
		- Compare hash values obtained from both tools
- **Digital Forensics Tool Upgrade Protocol**
	- **Why?**
		- Ensures that evidence data is not corrupted
	- **Steps:**
		- Test for:
			- New releases
			- OS patches and upgrades
		- Report forensics tool to vendors if there are problems
			- Do not use forensics tool until the problem is fixed
		- Use a test hard disk for validation purposes
		- Check the Internet for new editions, updates, patches and validation tests for tools

### Chapter 5 - Evidence Processing
#### Boot Sequence
- **CMOS**
	> **CMOS** - Complementary Metal Oxide Semiconductor
	
	- Stores sys configuration, date and time information and BIOS information
- **BIOS/EFI**
	> **BIOS** - Basic Input Output System
	> **EFI** - Extensible Firmware Interface
	
	- Contains programs that perform input/output at the hardware level
- **Bootstrap Process**
	- Contained in **ROM (Read-Only Memory)**
	- Tells computer how to proceed
	- Displays the keys pressed to open the CMOS setup
	- CMOS should be modified to boot from forensic floppy disk or CD
		- Prevent evidence from hard disk from being overwritten
- **What information can BIOS configure?**
	- System Time/Date
	- Boot Sequence
	- Plug and Play
	- Mouse and Keyboard
	- Drive Configuration
	- Security
	- Power Management

#### Disk Drives
- **Description:**
	- Disk drives made up of one or more platters coaters with magnetic material
- **Disk Drive Components:**
	- Geometry (Structure of data)
	- Head
	- Tracks
	- Cylinders
	- Sectors (typically 512 bytes each)
- **Properties of drive handled at drive's hardware or firmware level:**
	- **Zone Bit Recording (ZBR)**
		- Method of grouping tracks by zones to ensure all tracks hold the same amount of data
	- **Track Density**
		- Space between each track
		- Smaller the space, the more track on the platter
	- **Areal Density**
		- Number of bits in one square inch of a disk platter
	- **Head and Cylinder Skew**
		- Improves disk performance by minimizing movement of read and write head

#### Solid-State Storage Devices
- **What is wear-levelling?**
	- Internal firmware feature used in solid-state drives to ensure even wear of read and writes for all memory cells

	> Generally, memory cells can perform 10k-100k reads and writes

- **Why must a full forensic copy be made when dealing with solid-state drives?**
	- In case there is a need to recover data from unallocated space, wear-levelling feature automatically overwrites unallocated space

#### Microsoft File Structures (MFS)
- **Clusters**
	- Storage allocation of one or more sectors
	- **Combining Sectors**
		- Reduces overhead of writing and reading files to disk
	- **Numbering in NTFS and FAT**
		- 0 (NTFS)
		- 2 (FAT)
	- **First sector contains the following:**
		- system area
		- boot record
		- file structure database
	- **What are logical addresses?**
		- Cluster number assigned by the OS
		- Address point to relative position
	- **What are physical addresses?**
		- Sector numbers
		- From address 0 to last sector of disk

#### Disk Partitions
- **What is a partition?**
	-  A logical drive
- Windows OS have three primary partitions followed by an extended partition that can contain more more than one partition
- **Partition Gap**
	- Unused space between partitions 
	- Can be used to hide data
- **Partition Table**
	- Table maintained on disk by operating system describing partitions on the disk
	- Located in the **Master Boot Record (MBR)**
- **How is the file system identified and maintained?**
	- Key hexadecimal codes
- **Master Boot Record (MBR)**
	- Located in **Sector 0** of the disk drive
	- Precedes the first partition
	- Stores information about partitions in a disk and their locations, size and other important items
- **Partition Table in Hexadecimal Editor**
	- **File system hexadecimal code (first partition):**
		- **3 bytes** from `0x1BE`
	- **Sector address of where partition starts:**
		- **8 bytes** from `0x1BE`
	- **Number of sectors assigned to partition:**
		- **12 bytes** from `0x1BE`

#### File Allocation Tables (FAT)
- **Definition:**
	- File structure database Microsoft originally designed for **floppy disks**
- **Contains the following information:**
	- Filenames
	- Directory names
	- Date
	- Timestamps
	- Starting cluster
	- File attributes
- **Current versions of FAT**
	- FAT12
	- FAT16
	- FAT32
	- exFAT
- **What is drive slack?**
	- Unused space in a cluster between end of an active file and end of the cluster
	- **Consists of the following:**
		- **RAM slack**
			- Portion of last sector used in assigned ccluster
		- **File slack**
			- Unused space allocated for a file
- **What is an unintentional side effect of FAT16 having large clusters?**
	- Reduces fragmentation as cluster size increased
- **What if there is no more space for allocated cluster?**
	- OS allocates another cluster for file creating more slack space on disk
- As files grow and require more disk space, assigned clusters are chained together
	- This chain can be broken or fragmented due to deleted files or expansion files
- **When OS stores data in FAT file system:**
	- Assigned a starting cluster position to file
	- Data for file written to the first sector of first assigned cluster
	- When first assigned cluster filled and runs out of room, FAT assigns next available cluster to file
- **Deleting FAT files**
	- Directory entry marked as deleted file
	- Hex **E5** character replacing first letter of filename
	- FAT chain for that file set to 0
	- Data in file remains on disk drive
	- Area of disk where deleted file resides becomes **unallocated disk space**
		- Available to receive new data from newly created files or other files needing more space

#### NTFS Disks
- **What is NTFS?**
	- Introduced with Windows NT
	- Main file system for Windows 8 or later
	- What are some improvements NTFS has over FAT?
		- Provides more information about a file
		- Gives more control over files and folders
	- **What does it mean when NTFS is known as a journaling file system?**
		- Records transaction before system deletes file
- **What is inside a NTFS disk?**
	- First data set - **Partition Boot Sector**
	- **Master File Table (MFT)**

> - NTFS results in less file slack space
> - NTFS clusters are smaller for smaller disk drives
> - Uses Unicode (international date format)

- **What is the Master File Table (MFT)?**
	- Contains the following information:
		- All files in the disk
		- Includes system files OS uses
		- 15 records reserved for system files
		- Metadata (records in MFT)
- **MFT File Attributes**
	- Files and folders stored in separate records of **1024 bytes each**
	- Each record contains file or folder information
		- Divided into record fields containing metadata
		- Record field referred as attribute ID
		- File or folder information stored in two ways:
			- Resident
			- Non-resident
	- **Basic information of file in MFT** 
		- Starts at `0x10`
		- Each record starts with header specifying if it is resident or non-resident
	- **Files larger than 512 bytes** 
		- Stored **outside MFT**
		- MFT record provides **cluster where file is stored** on drive partition
		- Also known as **data runs**
	- **Files smaller than 512 bytes**
		- All metadata and data stored in MFT record
	- **Resident file attributes**
		- All MFT records start at `FILE0`
		- Swap two bytes for start of attribute
		- Length of header indicates where next attributes starts
	- **Non-resident file attributes**
		- OS assigns logical clusters to entire disk partition - **logical cluster numbers (LCN)**
			- Addresses that allows MFT to link non-resident files on disk partition
		- When data is first written to non-resident files, LCN address assigned to file
			- LCNs become the file's **virtual cluster number (VCN)**
- **MFT Structures for File Data**
	- **Headers of record fields of interest:**
		- Offset `0x00` - MFT record identifier file
		- Offset `0x14` - length of header (indicates where next attributes starts)
			- Convert hexadecimal to decimal for number of bytes
		- Offset `0x1C` -`0x1F` - size of entire MFT record
		- Offset `0x32` - `0x33` - update sequence array that stores last 2 bytes of first sector of MFT record
			- Update sequence array used as checksum for record integrity validation
	- **Standard Information Attribute**
		- Date and time of creation
		- Last modified date and time 
		- Last access date and time
		- Record update date and time
- 
#### NTFS Alternate Data Streams
- **Description:**
	- Ways data can be appended to existing files
	- Can obscure valuable evidentiary data intentionally or by coincidence
- **Alternate data stream** becomes **additional file attribute**
	- Allows file to be associated with different applications
- Can only tell whether file has data stream attached by examining that file's MFT entry

#### NTFS Compressed Files
- **Description:**
	- Compression is similar to FAT
	- Files, folders or entire volumes can be compressed
	- Most computer forensics tools can unzip and analyse compressed Windows data

#### NTFS Encrypting File Systems (EFS)
- **Description:**
	- Introduced with Windows 2000
	- Implements public and private key method of encrypting files, folders and disk volumes
- **When EFS is used in Windows 2000 or later:**
	- Recovery certificate generated
	- Sent to local Windows administrator account
	- Recovery certificate required if there is a problem
	- Users can apply EFS to files stored on local workstations or remote server
- **EFS Recovery Key Agent**
	- Implements recovery certificate in Windows administrator account
	- **How to recover keys?**
		- In two ways:
			- via Windows
			- MS-COS command prompt
				- Cipher (NTFS only)
				- Copy
				- `efsrecvr` (decrypting EFS files only)

#### Deleting NTFS Files
- **What happens when file deleted in Windows NT or later?**
	- OS renames it and moves it to Recycle Bin
- **What happens when Del (delete) MS-DOS command is used to delete file?**
	- Eliminates file from MFT listing in the same way FAT does

#### Whole Disk Encryption
- **Features offered by whole disk encryption tools:**
	- **Preboot authentication**
		- Single sign-on password and fingerprint scan
	- **Full or partial disk encryption with secure hibernation**
		- Password protected screen saver
	- **Advanced encryption algorithms**
		- AES or IDEA
	- **Key management function**
		- Passphrase to reset password

> - WDE tools encrypt each sector of drive separately
> - WDE tools encrypt the drive's boot sector
> 	- **Why?**
> 		- Prevents efforts to bypass secured drive's partition

- **How to examine an encrypted drive?**
	- Run vendor-specific program to decrypt the drive
	- Many vendors use boot table CD or USB drive that prompts for OTP
	- Without necessary credentials to unlock encrypted drives, not possible to view any logical information

#### Microsoft Bitlocker
- **What are the hardware and software requirements of Microsoft Bitlocker?**
	- Computer capable of running Windows Vista or later
	- **Trusted Platform Module microchip version 1.2 or later**
		- **Function:**
			- stores RSA encryption keys specific to host system for hardware authentication
		- Computer BIOS compliant with **Trusted Computing Group (TCG)**
		- 2 NTFS partitions
		- BIOS configured so that hard drive boots first before checking other peripherals

#### Microsoft Registry
- **Functions:**
	- Stores the following data:
		- Hardware and software software configuration information
		- Network connections
		- User preferences
		- Setup information
- **How to view the Windows Registry?**
	- **Regedit**
		- Registry editor
		- Program for Windows 9x systems
	- **Regeft32 for Windows 2000, XP, Vista**
	- Both can be used for Windows 7 or later
- **Registry Terminology:**
	- Registry
	- Registry Editor
	- HKEY
	- Key 
	- Subkey
	- Branch
	- Value
	- Default Value
	- Hives
- **List of HKEYs**
	- `HKEY_CLASS_ROOT`
		- Provides the following:
			- file type and file extension information
			- URL protocol prefixes
	- `HKEY_CURRENT_USER`
		- Stores settings for currently logged-on users
	- `HKEY_LOCAL_MACHINE`
		- Contains information about installed hardware and software
	- `HKEY_USERS`
		- Stores information for currently logged-on
		- Only one HKEY linked to`HKEY_CURRENT_USER`
	- `HKEY_CURRENT_CONFIG`
		- Link to current hardware profile
	- `HKEY_DYN_DATA`
		- Used only in Windows 9x/Me systems, stores hardware configuration systems

#### Microsoft Start-up Tasks
- **How to start-up in Windows 7 and 8?**
	- Boot process uses a **boot configuration data (BCD) store**
	- **What is contained in BCD?**
		- Boot loader that initiates the system bootstrap process
		- Press <kbd>F8</kbd> or <kbd>F12</kbd> when system starts to access Advanced Boot Options
- **How to start-up in Windows NT or later?**
	- **Steps:**
		- Power-on Self Test (POST)
		- Initial start-up
		- Hardware detection and configuration
		- Kernel loading
		- User login
	- **What are the start-up files for Windows Vista?**
		- `Bootmgr.exe`
		- `Winload.exe`
		- `Winresume.exe`
	- **Includes BCD editor**
		- Modifies boot options
		- Updates BCD registry file
	- **BCD store (Namespace container for BCD objects)**
		- Replaces Windows XP `boot.ini` file for boot sequences
	- **What are the start-up files for Windows XP?**
		-  `NTLDR`
		-   `boot.ini`
		-   `ntoskrnl.exe`
		-   `bootvid.dll`
		-   `hal.dll`
		-   `bootsect.dos`
		-   `NTDetect.com`
		-   `NTBootdd.sys`
		-   `pagefile.sys`
	- **Why is it important to know the start-up process?**
		- Contamination concerns with Windows XP
		- When Windows XP NTFS workstation is started, several files are accessed immediately
			- Last access date and time stamp for files change to current date and time
			- This destroys potential evidence that shows when Windows XP workstation was last used

#### Virtual Machines
- **Definition:**
	- Representation of another computer on an existing physical computer
	- Several files on hard drive that must be allocated space to
- **Why use VMs?**
	- Make it possible to restore suspect drives
	- Tests can be performed and run nonstandard software that suspect might have loaded
- **What are some potential issues with using VMs?**
	- Virtual machine can be used to attack another system or network
	- File slack and unallocated space do not exist on VM so many standard items may not work on VMs

#### Calculations Required
- Calculating the cluster and space required for file made up of $x$ sectors: $$x=\frac{FileSize}{ClusterSize}$$
- **RAM Slack:**
	- **Per sector size:** 512 bytes in general
	- Number of sectors required: $$SectorsRequired=\frac{FileSize}{SectorSize}$$
	- Total sector size required: $$TotalSectorsRequired= SectorsRequired \times SectorSize$$
- **File Slack:** $$FileSlack = SizeOfClusterRequired-FileSize-RAMSlack$$

#### Chapter 6 - Analysis and Validation
- **Factors affecting examination and analysis of data:**
	- Nature of the investigation
	- Amount of data to process
	- Corporate investigations locating and recovering specific items like emails
		- simplifies and speeds up processing

#### Scope Creep
- **Explanation:**
	- Occurs when expands beyond the original description 
	- **Reason:**
		- Due to unexpected evidence found
	- Attorneys might ask investigators to examine other areas to obtain more evidence
	- Increases time and resources needed to extract, analyse and present evidence
	- Required to document additional time spent on recovering additional evidences
	- **Why is scope creep getting more common?**
		- Criminal investigations require more detail examination of evidence before trial]
		- Scope creep can help prosecutors fend off attacks from defence attorneys

#### Approaching Digital Forensics Cases
- Create an investigation plan
- **What should an investigation plan define?**
	- Goal and scope of investigation
	- Materials needed
	- Tasks to perform
- **Differences approaching different types of cases:**
	- **Corporate cases** 
		- tend to be easier due to easy access to evidence
	- **Criminal cases**
		- more difficult due to scope
		- Internet Service Providers (ISP) need to be contacted to gather evidence
- **What are the basic steps to take for digital forensics investigations?**
	- Use recently wiped media that have been reformatted and inspected for viruses
	- Inventory hardware on suspect computer 
		- Note the condition of the seized computer
	- **For static acquisitions:**
		- remove original drive
		- check data and time in system CMOS
	- Record how data was acquired from suspect drive
	- Process drive contents methodically and logically
	- List files and folders on image and drive and note where it was found
	- Examine contents of all data files in folders
		- starting from root directory
	- Recover file contents for all password-protected files
		- by using password recovery tools
	- Identify function of every executable file that does not match known hash values
	- Maintain control of all evidence and findings
- **Recommendations for Investigation Plan:**
	- Even if initial plan is sound, might need to deviate from the plan to follow the evidence
	- Knowing which types of files to look can maximise time
	- Start with a plan but remain flexible in the face of new evidence

#### OSForensics Data Analysis
- **Supported File Systems:**
	- FAT12
	- FAT16
	- FAT32
	- NTFS
	- Mac HFS+ and HFSX
	- Linux Ext2fs/Ext4fs

#### Validating Forensic Data
- **Why is it important?**
	- To ensure integrity of data collected essential for presenting evidence in court
- **Validating with hexadecimal editor**
	- **Features offered that are not available in digital forensics tools:**
		- Hashing specific files or sectors
	- **What can hash values be used for?**
		- Forensics tools can be used to check for suspicious files that might have its name changed to look like a legitimate file
		- **Discriminating data:**
			- **Example:**
				- **AccessData**
					- AccessData has hashing database called **Known File Filter (KFF)**
					- Filters known program files from view and contains hash values of known illegal files
					- Compares known file hash values with files on evidence drive to see if they contain suspicious data
				- **ProDiscover**
					- `.eve` files contain metadata and hash values
					- Includes preference that can be enabled using **Auto Verify Image Checksum** when image files loaded
					- **When Auto Verify Image Checksum and `.eve` file hash do not match:**
						- ProDiscover notifies that acquisition is corrupt and cannot be considered reliable evidence
- **Why must raw image files be validated manually?**
	- Raw image files do not contain metadata and cannot be used by other forensics tools that only support files that contain metadata
	- Ensure integrity

#### Data Hiding
- **Definition:**
	- Changing or manipulating a file to conceal information
-  **Techniques:**
	- Hiding entire partitions
		- using disk management
	- Changing file extensions
	- Setting file attributes to hidden
		- by changing file signatures
	- Bit-shifting
		- Shift 1 bit to the left
	- Encryption
	- Password protection

##### Changing file extensions
- Advanced digital forensics tools check file headers
- Compares file extension and verifies if it is correct
- If there are discrepancies, tool flags file as possible altered file
- **Another hiding technique:**
	- Selecting hidden attribute in file's properties dialog box

##### Hiding partitions
- By using the following command: `diskpart remove letter`
	- Unassigns partition's letter, hides it from File Explorer
- To unhide, use `diskpart assign letter`
- **Examples of disk management tools:**
	- Partition Magic
	- Partition Master
	- Grand Unified Bootloader (GRUB)
- **How to detect if partition is hidden?**
	- Account for all disk space when examining an evidence drive
	- Analyse any disk areas








---
## Table Summaries

---
## Abbreviations

## Illustrations