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