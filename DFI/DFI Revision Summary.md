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
- Maintain **software library** in lab
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
- **When is it used?**
	- Allows **legal counsel** to apply previous similar cases to current one when there is **ambiguity in laws**
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
		- credibility by *maintaining confidentiality*
	- Attend training to stay current with latest technical changes

#### Preparing for a Digital Forensics Investigation
- **Objective of a digital forensics investigation:**
	- Gather evidence to prove a suspect **committed a crime** or **violated company policy**
- **How to conduct a digital forensics investigation?**
	- Collect evidence that can be **offered in court** or at **corporate inquiry**
	- Investigate suspect's computer
	- Preserve evidence on different computer (forensics workstation)
- **What is a Chain of Custody?**
	- The route that evidence takes from the time it is found until case is closed or goes to court
	- To be filled up every time the evidence is passed to another person

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
	- Use **evidence bag** to **secure and catalogue evidence**
	- Use **computer safe products** when collecting computer evidence (antistatic bags and pads)
	- Use **well-padded containers**
	- Use **evidence tape** to seal all openings
		- CD drive bays and insertion slots for power supply cord
		- USB cables
	- Write initials on tape to prove evidence is not tampered with
	- Consider computer specific temperature and humidity ranges

#### Private-Sector Investigations
- **Employee Termination Cases**
	- Involves employee **abuse of corporate assets**
	- **What are the cases investigated?**
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
	- **What are some guidelines to follow when initiating an investigation?** 
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
	- Workstation running on **Windows XP or later**
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
- **Rules and Guidelines:**
	- **Preserve** the *original evidence*
	- Only conduct analysis on the **copy of the data**
	- Windows tools require **write-blocking device** when acquiring data from **FAT** or **NTFS** file systems

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
		- **Fast** data transfers
		- **Ignore minor data read errors** on source drive
		- Most computer forensics tools can read raw format
	- **Disadvantages:**
		- Requires **too much storage** as original disk or data
		- Tools might not **collect marginal sectors** 
			- due to low threshold of retry reads on weak media spots on drive
- **What are the advantages and disadvantages of Proprietary Format?**
	- **Advantages:**
		- Option to **compress** or **not compress image files** to save space
		- Can **split image** into **smaller segmented files** 
			- provide integrity check for split data
		- Able to **integrate metadata** into file
	- **Disadvantages:**
		- Unable to share image between **different tool or vendors**
		- **File size limitation** for **each segmented volume**
- **What are the design goals of AFF?**
	- Provide compress or uncompressed image files
	- No size reduction for disk-to-image files
	- Provide space in image file or segmented files for metadata
	- Open source
	- Extensibility
	- OSS vendor have no implementation restrictions on this format
	- Internal consistency checks for self-authentication
	- **File formats for AFF**
		- `.afd` (**segmented** image files)
		- `.afm` (AFF **metadata**)

#### Acquisition Methods
- **Types of data acquisition:**
	- **Static** acquisition
	- **Live** acquisition

> - **Live Acquisition** is used when suspect computer cannot be shut down for static acquisition
> - Not repeatable as data is continually being altered by suspect computer's OS

- **Types of data collection methods:**
	- **Creating disk-to-image file**
		- Most common and flexible method
		- Able to make multiple copies
		- Bit-stream replication of the original disk drive
	- **Creating disk-to-disk**
		- Alternative method if disk-to-image is not possible
		- Tools can adjust disk's geometry
	- **Creating logical disk-to-disk**
		- Captures only specific files of interest to the case excluding unallocated space
	- **Creating a sparse copy of the file or folder**
		- Similar to logical acquisition, but collects fragments of unallocated files only

> Use **logical or sparse acquisitions for the following**:
> - Large disks
> - Examples: PST/OST mail files, RAID servers (up to several terabytes)

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
	- Create **duplicate copy** of evidence image file in case of **failure**
	- Make **at least two images** of digital evidence
		- Using different tools and techniques
	- Copy **Host Protected Area (HPA)** - the area not visible to an OS on drive
- **What are some challenges in image acquisition?**
	- Windows has whole disk encryption called **BitLocker** which makes static acquisition difficult
	- Decryption keys provided by suspect is required to decrypt data
		- suspect may not want to cooperate

#### Acquisition Tools
- **What are the advantages and disadvantages of acquisition tools for Windows?**
	- **Advantages:**
		- Makes acquiring evidence from evidence drive more **convenient**
	- **Disadvantages:**
		- Acquired data must be **protected by well-tested write-blocker hardware device**
		- Tools cannot acquire data from disk's **host protected area (HPA)**
		- Several countries have **not accepted use of write-blocking devices** for data acquisitions

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
	- Use **third-party utilities** such as WinHex (hexadecimal editor)
	- Commercial computer forensics programs have **built-in validation features**
		- **Examples:**
			- ProDiscover `.eve` files **contain metadata** in acquisition file or segmented files
				- including hash value of suspect drive or partition
			- Raw image formats **do not contain metadata**
				- separate **manual validation** is recommended for all raw acquisitions
- **Remote Network Acquisition Tools**
	- **Tools that support remote acquisition:**
		- Encase
		- ProDiscover
	- **What are some issues with remote acquisition?**
		- **Antiviruses, antispyware and firewall tools** can be configured to **ignore** remote access programs and **access can be blocked**
		- Suspects can easily **install their own security tools** that **trigger alarms** to inform them of **remote access intrusions**
	- **Capabilities of Remote Acquisition Tools:**
		- **Preview** suspect drive remotely while in use or powered on
		- Perform **live acquisition** (aka smear) as disk data is altered while suspect computer is turned on
		- **Encrypts connection** between suspect and examiner computer
		- **Copy suspect computer's RAM** while computer is on
		- **Use optional stealth mode** to **hide remote connection** from suspect while data is being acquired or previewed
		- **Additional Functions:**
			- Create **volatile system state information**
			- Analyse **current running processes** on remote system
			- **Locate unseen files and processes** on remote system that might be running **malware or spyware**
			- **Remotely view and listen** to IP ports on *compromised system*
			- Run hash comparisons on remote systems to search for Trojans and rootkits
			- **Create inventory** of all files on system remotely to **establish baseline if attacked**

### Chapter 4 - Forensics Tools
#### Overview of Forensics Tools
- **Types of Forensics Tools:**
	- **Hardware forensics tools**
		- Ranges from:
			- **single-purpose** components to;
			- **complete** computer systems and servers
	- **Software forensics tools**
		- Ranges from $300 and above
		- Can be either of the following:
			- **command-line** applications
			- **GUI** applications
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
	- **Physical copying** of the entire drive
	- **Logical copying** of disk partition

> Formats for disk acquisitions vary from raw data to vendor-specific proprietary

##### Validation and Verification
- **Validation**
	- **Why is validation of tools necessary?**
		- A way to **confirm** a tool is functioning as **intended**
		- Ensuring that **integrity** of data is being copied
- **Verification**
	- **Explanation:**
		- Proving that the two sets of data are identical by calculating hash values or using similar methods
- **Subfunctions of validation and verification:**
	- **Hashing:**
		- Ensuring that data is not changed
		- Use hashing algorithms e.g. CRC-32, SHA-1, MD5
	- **Filtering:**
		- Separate good files and files that need to be investigated based on hash value sets
	- **Analysing file headers**
		- Check on **change of file type**
			- **discriminate** files based on file type
		- **Where can the compiled list of known file hashes be found?**
			- National Software Reference Library (NSRL)
			- Includes:
				- OS
				- Applications
				- Images
		- Most computer forensics programs have list of common header values 
			- Check if file extension is incorrect for the file type

##### Extraction
- **Explanation:**
	- Recovery task in digital investigation
	- Most challenging task to master
	- Recovering data is first step in analysing investigation data
- **Subfunctions of extraction**
	- **Data viewing:**
		- Different tools can provide different ways of viewing data
	- **Keyword Searching:**
		- **Speeds up analysis** for investigators
		- **Drawback:** Produces **noise** if wrong keyword is used
	- **Carving:**
		- **Reconstruct** file fragments
	- **Decrypting:**
		- Potential problem for the investigation
	- **Bookmarking (or tagging)**
- **Password Recovery:**
	- Use **password recovery tools** 
		- have feature to generate potential password lists for **password dictionary attack**
	- If password dictionary attack fails, run **brute-force attack**

##### Reconstruction
- **Objective:**
	- To **recreate the suspect drive** to show *what happened during the crime or incident*
	- **Create copy of suspect drive** for other investigators
- **Methods:**
	- Disk-to-disk
	- Partition-to-partition
	- Image-to-disk
	- Rebuilding files from data runs and **carving**
- **How to recreate image of suspect drive?**
	- Copy the image to another location
		- **Sources:**
			- partition
			- physical disk
			- virtual machine
		- Use a tool that makes **direct disk-to-image copy**
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
	- Ensure that forensics software does not damage the evidence
	- Ensure that evidence recovered and analysed can be admitted in court

> Test and validate forensics software to prevent damaging the evidence

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
	- Contains programs that **perform input/output at the hardware level**
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
	- Disk drives made up of **one or more platters coaters** with **magnetic material**
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
	- In case there is a need to recover data from unallocated space, wear-levelling feature **automatically overwrites unallocated space**

#### Microsoft File Structures (MFS)
- **Clusters**
	- Storage allocation of **one or more sectors**
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
		- **Cluster number** assigned by the OS
		- Address point to relative position
	- **What are physical addresses?**
		- **Sector numbers**
		- From address 0 to last sector of disk

#### Disk Partitions
- **What is a partition?**
	-  a logical drive
- Windows OS have three primary partitions followed by an extended partition that can contain more more than one partition
- **Partition Gap**
	- **Unused space** between partitions 
	- Can be used to **hide data**
- **Partition Table**
	- Table maintained on disk by operating system **describing partitions on the disk**
	- Located in the **Master Boot Record (MBR)**
	- **What is the Master Boot Record?**
		- Located in **Sector 0** of the disk drive
		- Contains the **partition table**
		- Precedes the **first partition**
		- Stores information about **partitions in a disk** and their **locations**, **size** and other important items
- **How is the file system identified and maintained?**
	- Key hexadecimal codes
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
			- Portion of last sector used in assigned cluster
		- **File slack**
			- Unused space allocated for a file
- **What is an unintentional side effect of FAT16 having large clusters?**
	- Reduces fragmentation as cluster size increases
- **What if there is no more space for allocated cluster?**
	- OS allocates another cluster for file 
	- **Side effect:** Creates more slack space on disk

> As files grow and require more disk space, assigned clusters are chained together
> - This chain can be broken or fragmented due to deleted files or expansion files

- **When OS stores data in FAT file system:**
	- Assigned a starting cluster position to file
	- Data for file written to the first sector of first assigned cluster
	- When first assigned cluster filled and runs out of room, FAT assigns next available cluster to file
- **Deleting FAT files:**
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
	- **What are some improvements NTFS has over FAT?**
		- Provides **more information** about a file
		- Gives **more control** over files and folders
	- Known as a journaling file system
		- **What does it mean when NTFS is known as a journaling file system?**
			- Records transaction before system deletes file
- **What is inside a NTFS disk?**
	- First data set - **Partition Boot Sector**
	- **Master File Table (MFT)**

> NTFS results in less file slack space
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
		- Divided into record fields **containing metadata**
		- Record field referred as **attribute ID**
		- **File or folder information** stored in two ways:
			- **Resident**
			- **Non-resident**
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
		- **What are logical cluster numbers (LCN)?**
			- Addresses that allows MFT to **link non-resident files** on disk partition
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
		- Date and time of **creation** (Top-left)
		- **Last modified date** and time (Top-right)
		- **Last access** date and time (Bottom-left)
		- **Record** update date and time (Bottom-right)

#### NTFS Alternate Data Streams
- **Description:**
	- Ways data can be **appended** to *existing files*
	- Can **obscure** *valuable evidentiary data* intentionally or by coincidence
- **Alternate data stream** becomes **additional file attribute**
	- Allows file to be associated with different applications
- Can only tell whether file has data stream attached by examining that file's MFT entry

#### Deleting NTFS Files
- **What happens when file deleted in Windows NT or later?**
	- OS **renames** it and **moves it to Recycle Bin**
- **What happens when Del (delete) MS-DOS command is used to delete file?**
	- Eliminates file from MFT listing in the same way FAT does

#### Whole Disk Encryption
- **Features offered by whole disk encryption tools:**
	- **Preboot authentication**
		- Single sign-on password and fingerprint scan
	- **Full or partial disk encryption with secure hibernation**
		- Password protected screen saver
	- **Advanced encryption algorithms**
		- AES
		- IDEA
	- **Key management function**
		- Passphrase to reset password

> - WDE tools encrypt each sector of drive separately
> - WDE tools encrypt the drive's boot sector
> 	- Prevents efforts to bypass secured drive's partition

- **How to examine an encrypted drive?**
	- Run vendor-specific program to decrypt the drive
	- Many vendors use boot table CD or USB drive that prompts for OTP
	- Without necessary credentials to unlock encrypted drives, not possible to view any logical information

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

#### Virtual Machines
- **Definition:**
	- Representation of another computer on an existing physical computer
	- Several files on hard drive that must be allocated space to
- **Why use VMs?**
	- Make it possible to restore suspect drives
	- Tests can be performed and run nonstandard software that suspect might have loaded
- **What are some potential issues with using VMs?**
	- Virtual machines can be used to attack another system or network
	- File slack and unallocated space do not exist on VM so many standard items may not work on VMs

#### Calculations Required
- Calculating the number of clusters required to store a file: $$NumberOfClusters=\frac{FileSize}{ClusterSize}$$
- **RAM Slack:**
	- **Per sector size:** 512 bytes in general
	- Number of sectors required: $$SectorsRequired=\frac{FileSize}{SectorSize}$$
	- Total sector size required: $$TotalSectorSize= SectorsRequired \times SectorSize$$
	- RAM Slack: $$RAMSlack = TotalSectorSize-FileSize$$
- **File Slack:** $$FileSlack = ClusterSizeRequired-FileSize-RAMSlack$$

### Chapter 6 - Analysis and Validation
- **Factors affecting examination and analysis of data:**
	- **Nature** of the investigation
	- **Amount of data** to process
	- Corporate investigations locating and recovering specific items like emails
		- simplifies and speeds up processing

#### Scope Creep
- **Explanation:**
	- Occurs when the investigation **expands beyond the original description** 
	- **Reason:**
		- Due to **unexpected evidence** found
	- Attorneys might ask investigators to **examine other areas** to **obtain more evidence**
	- **Increases time and resources** needed to extract, analyse and present evidence
	- Required to document **additional time spent** on recovering additional evidences
	- **Why is scope creep getting more common?**
		- Criminal investigations require more **detailed examinations of evidence** before trial
		- Scope creep can help prosecutors **fend off attacks from defence attorneys**

#### OSForensics Data Analysis
- **Supported File Systems:**
	- FAT12
	- FAT16
	- FAT32
	- NTFS
	- Mac HFS+ and HFSX
	- Linux Ext2fs/Ext4fs

#### Validating Forensic Data
- **Why is validation important?**
	- To **ensure integrity of data** collected essential for presenting evidence in court
- **Validating with hexadecimal editor**
	- **Features offered that are not available in digital forensics tools:**
		- Hashing specific files or sectors
	- **What can hash values be used for?**
		- Forensics tools can be used to check for suspicious files that might have its name changed to look like a legitimate file
		- **Discriminating data:**
			- **Example:**
				- **AccessData**
					- AccessData has hashing database called **Known File Filter (KFF)**
					- Filters known program files from view and contains **hash values** of **known illegal files**
					- **Compares** known file hash values with files on evidence drive to see if they contain suspicious data
				- **ProDiscover**
					- `.eve` files contain metadata and hash values
					- Includes preference that can be enabled using **Auto Verify Image Checksum** when image files loaded
					- **When Auto Verify Image Checksum and `.eve` file hash do not match:**
						- ProDiscover notifies that acquisition is **corrupt** and cannot be considered **reliable evidence**
- **Why must raw image files be validated manually?**
	- Raw image files do not **contain metadata** and cannot be used by other forensics tools that only support files that contain metadata
	- Ensure integrity

#### Data Hiding
- **Definition:**
	- **Changing** or **manipulating** a file to **conceal** information
-  **Techniques:**
	- **Hiding entire partitions**
		- using disk management tools
	- **Changing file extensions**
	- **Setting file attributes to hidden**
		- by changing file signatures
	- **Marking bad clusters**
	- **Bit-shifting**
		- Shift 1 bit to the left
	- **Encryption**
	- **Password protection**

##### Hiding partitions
- By using the following command: `diskpart remove letter`
	- Unassigns partition's letter, hides it from File Explorer
- To unhide, use `diskpart assign letter`
- **Examples of disk management tools:**
	- Partition Magic
	- Partition Master
	- Grand Unified Bootloader (GRUB)
- **How to detect if partition is hidden?**
	- **Account** for all disk space when examining an evidence drive
	- **Analyse** any disk areas containing **more space that cannot be accounted for**
	- **Hidden partition** appears as **highest available drive** letter set in BIOS

##### Changing file extensions
- Advanced digital forensics tools **check file headers**
- **Compares file extension to its file signature** and **verifies** if it is correct
- If there are discrepancies, tool **flags** file as **possible altered file**
- **Another hiding technique:**
	- Selecting hidden attribute in file's properties dialog box

##### Marking Bad Clusters (Only for FAT)
- **Description:**
	- Data hiding technique used in **FAT file systems**
	- Places **sensitive** or **incriminating** data in **free or slack space** on disk partition clusters
	- Involves using old utilities such as **Norton** or **DiskEdit**
		- DiskEdit only runs on MS-DOS and can access only FAT-formatted disk media

##### Bit Shifting
- **Description:**
	- Done by **changing the order** of **binary data**
		- by using **low-level encryption programs**
	- Makes *altered data* **unreadable** 
	- To secure a file, users run **assembler program** to **scramble bits**
	- Run another program to **restore scrambled bits** to **original order**

> **Bit-Shifting** changes data from readable code to data that looks like binary executable code

##### Steganalysis
- **Steganography**
	- **Definition:**
		- Greek word for hidden writing
		- Hides messages in such a way only the intended recipient knows the message is there
		- Used by suspects to hide existence of message from a third-party (digital forensics investigators)
- **Steganalysis**
	- **Definition:**
		- Term for detecting and analysing steganography files
- **Digital Watermarking**
	- **Purpose:**
		- Developed to protect file ownership
	- Not visible when used for steganography
- **Steganography tools**
	- Freeware or shareware
	- Inserts information into variety of files
- If plaintext file encrypted with PGP and encrypted text is inserted into steganography file -> cracking encrypted message is difficult
- **Steganalysis methods: (S KC KM CS CM)**
	- **Steg-only attack:**
		- only have covered file to analyse
	- **Known cover attack:**
		- Has both covered file and converted file to analyse
	- **Known message attack:**
		- When hidden message is revealed later
	- **Chosen steganography attack**
		- Where a steganography tool is used
	- **Chosen message attack**
		- Steganalyst generates stego-object from steganography tool or algorithm of chosen message

##### Encrypted Files
- **How to decode an encrypted file?**
	- Provide password or passphrase
- **What is key escrow?**
	- Designed to **recover encrypted data** if users **forget passphrases**
		- or if user key **corrupted** after **system failure**
	- Key sizes of <u>2048</u> or <u>4096</u> bits make breaking them almost impossible with current technology

##### Recovering Passwords
- Password cracking tools available for handling password-protected data or systems
	- integrated into digital forensics tools
- **Examples of standalone tools:**
	- Last Bit
	- AccessData PRTK
	- ophcrack
	- John The Ripper
	- Passware
- **Types of password attacks:**
	- **Brute Force Attacks**
		- Method done by using every possible letter, number and character found on a keyboard
		- Requires a lot of time and processing power
	- **Dictionary Attack**
		- Use of common words in the dictionary and tries them as passwords
		- Uses variety of languages
		- **What can hackers do with many passwords?**
			- Build profiles of suspect to help determine their password from common information
		- **Where do most password-protected apps store their passwords?**
			- MD5
			- SHA
		- **What are the requirements to carry out a brute-force attack?**
			- Converting dictionary password from plaintext to hash value
			- Additional CPU cycle time
	- **Rainbow Attack**
		- File containing hash value of every possible password that can be generated from computer keyboard
		- Faster than brute-force or dictionary attack
		- **Reason:**
			- No conversion required
	- **Password Salting**
		- **Objective:**
			- Make password cracking difficult
			- Alter hash values with additional bits added to password
				- makes cracking passwords more difficult

### Chapter 7 - Investigator's Lab
#### Duties
- **Duties of Lab Manager**
	- Set up processes for managing cases
	- Review processes regularly
	- Promote group consensus in decision making
	- Maintain fiscal responsibility
	- Enforce ethical standards among lab staff
	- Plan updates for lab
	- Establish and promote quality
		- Assurance processes
		- Ensure staff know what to do when case arrives
	- Set reasonable production schedules
		- Based on existing resources
	- Estimate how many cases investigator can handle
	- Estimate when to expect preliminary and final results
	- Create and monitor lab policies for staff
	- Provide safe and secure workplace for staff and evidence
- **Duties of staff members**
	- **Have the knowledge and training in the following:**
		- Hardware and software
		- OS and file types
		- Deductive reasoning 
		- Work reviewed regularly by lab manager to ensure quality of work maintained
		- Check ASCLD site for online manual and information

#### Lab Budget
- **How to break expenses down into?**
	- daily
	- quarterly
	- annual
- **What should be the expenses for lab?**
	- hardware
	- software
	- facility space
	- training personnel
- **Important notes for lab budget planning:**
	- Use **past investigation expenses** to **predict future costs**
	- **Estimate number of computer cases** the lab **expects to examine**
	- **Use statistics** to determine type of computer crimes **more likely to occur**
		- **Why?**
			- Better estimate the resources required
- **What to check when setting up investigative lab for a private company?*
	- **Hardware** and **software** inventory
	- **Reported problems** from previous year
	- **Future development** in computing technology
	- **Time management**
		- major issue when deciding which software and hardware to choose

#### Acquiring Certification and Training
- **Reasons:**
	- It is important to stay relevant and update skills through relevant training
	- **How?**
		- Thoroughly **research requirements, cost and acceptability** in **area of employment**
		- **Address minimum skills** for conducting investigations at *various levels*
	- **Examples:**
		- **IACIS**
			- Stands for **International Association of Computer Investigative Specialists**
			- Those who pass the test are **Certified Forensic Computer Examiners (CFCE)** 
		- **ACE**
			- AccessData Certified Examiner Certification
		- **EC-Council**
		- **SANS**
			- **Limitation:**
				- Expensive
		- **DCITA**
			- Defence Cyber Investigations Training Academy

#### Physical Requirements for a Computer Forensics Lab
- Physical lab must be **secured**
	- **Reasons:**
		- So that evidence is not **lost, corrupted or destroyed**
		- Provide **safe and secure** physical environment
		- Keep **inventory control of assets**
- **Lab security needs:**
	- **Secure facility**
		- It should **preserve** the **integrity of data**
	- **Minimum requirements:**
		- **Small room** with true **floor-to-ceiling walls**
		- Door access with **locking mechanism**
		- **Secure** container
		- Visitor's log
		- **Brief staff** about *security policy*

#### Conducting High-Risk Investigations
> High-risk investigations demand more security minimum lab requirements

- Requires **TEMPEST facilities**
	- **Requirements:**
		- Electromagnetic Radiation Proofed
			- **Reasons for proofing EMR:**
				- **Leaking signals** can be used to **reconstruct information**
				- Stops information systems from **leaking** through emanations 
				- Includes unintentional radio/electrical signals, sounds and vibrations
	- **Limitations:**
		- Expensive
		- Low-emanating workstations can be used instead

#### Evidence Containers
> Also known as **evidence lockers**
- **Why must evidence lockers be secured?**
	- No unauthorized person have easy access to evidence
- **Recommendations for evidence containers:**
	- **Locate** them in a **restricted area**
	- **Limit** number of authorized persons accessing the containers
	- **Maintain records** on who is authorized to access container
	- Containers should **remain locked** when not in use
- **If combination locking system is used:**
	- Provide **same level of security** for combination as for container's contents
	- **Destroy** any **previous combinations** after setting up **new ones**
	- Allow only *authorised personnel* to **change lock combination**
	- Change combination **every six months** when required
- **If keyed padlock is used:**
	- **Appoint key custodian**
		- Responsible for **distributing keys**
	- Stamp **sequential numbers** for each **duplicate key**
	- **Maintain registry listing** of which key is assigned to which authorized person
	- Conduct **monthly audit**
	- Take **inventory** of all keys
	- Place keys in **lockable container**
	- Maintain **same level of security** for keys as evidence containers
	- Change locks and keys **annually**
- **Requirements of evidence containers:**
	- Made of **steel** with **internal cabinet** or **external padlock**
	- Acquire media safe if possible
		- Designed to **protect electronic media**
	- Strong evidence storage room in lab
	- Keep evidence log
		- Update it every time evidence container is opened or closed

#### Facility Maintenance
- **How to maintain digital forensics lab?**
	- **Immediately repair** physical damage
	- **Escort** *cleaning crew* as they work
	- **Minimize** the risk of **static electricity**
		- Antistatic pads
		- Clean **floor** and **carpets** to **minimize dust**
	- Maintain **two separate trash containers**:
		- 1 for **materials unrelated to investigation**
		- 1 for **sensitive materials**
	- If possible, **hire specialized companies** for disposing sensitive materials

#### Physical Security Needs
- Enhance security by setting security policies
- **How to enforce policy?**
	- Maintain **sign-in log** for *visitors*
		- **Who is a visitor?**
			- Anyone not assigned to the lab
	- **Escort** visitors in the lab **at all times**
	- Use **visible or audible indicators** that visitor is **inside in the premises**
		- **Example:** visitor badge
	- Install **intrusion alarm system**
	- **Hire guard force** for lab

#### Auditing Digital Forensics Lab
- **Include the following in an audit:**
	- **Inspection** of the following facility components and practices:
		- Ceiling, floor, roof, exterior walls of lab
		- Door and door locks
		- Visitor logs
		- Evidence container logs
		- Secure all evidence that is not being processed in forensics workstation at the end of every workday

#### Determining Floor Plans for Digital Forensics Lab
- **Factors affecting configuration of work area:**
	- **Budget**
	- Amount of **floor space** available
	- **Number of computers** assigned to each computing investigator
- **Ideal configuration for digital forensics lab:**
	- 2 forensics workstations
		- 1 workstation for **2-3 cases a month**
	- 1 non-forensic workstation with **Internet access**

#### Selecting Basic Forensics Workstation
- **How to select a basic forensics workstation?**
	- Depends on budget and needs
	- Use **less powerful** workstations for **mundane tasks**
	- Use **multipurpose** workstations for **resource-heavy analysis tasks**

#### Selecting Workstations for a Lab
- **How to select a workstation for a lab?**
	- Identify environment dealt with:
		- Hardware platform
		- Operating system
			- Windows or Mac
- **Selecting workstations for police labs:**
	- Police labs have more diverse needs for computing investigation tools
		- Legacy systems and software to match what is used in the community
	- **Typical configuration for small local police department:**
		- 1 multipurpose forensics workstation
		- 1-2 general-purpose workstations
- **How to create a lightweight mobile forensic workstation?**
	- Laptop PC with FireWire
	- USB 3.0
	- SATA hard disks

#### Stocking Hardware Peripherals
- **Items every lab should have in stock:**
	- Any labs should have the following in stock:
		- IDE cables
		- Ribbon cables for floppy disks
		- Extra USB 3.0 or newer cables
		- SATA cards
		- SCSI cards (preferably ultrawide)
		- Graphics cards (both PCI and AGP types)
		- Assorted FireWire
		- USB adapters
		- Hard disk drives
		- At least two 2.5 inch Notebook IDE hard drives 
			- to standard IDE/ATA or SATA adapter
		- Computer hand tools

#### Maintaining Operating System and Software Inventories
- **Licensed copies of software to maintain:**
	- Microsoft Office
	- Quicken
		- Personal finance management tool
	- Programming languages
		- Visual Basic and C++
	- Specialised viewers
	- LibreOffice, OpenOffice and Apache OpenOffice
	- Peachtree and QuickBooks accounting applications

### Chapter 8 - Processing Crime and Incident Scenes
#### Digital Evidence
- **What is digital evidence?**
	- Any information **stored** or **transmitted** in *digital form*
	- Different from document evidence
	- **Example:**
		- SWGDE (Scientific Working Group on Digital Evidence)
		- Sets standards for recovering, preserving and examining digital evidence

#### General Tasks Performed by Investigators
- **Tasks:**
	- **Identify** digital information or artefacts that can be used as digital evidence (Seizure)
	- **Collect, preserve and document** evidence (Acquisition)
	- **Analyse, identify and organize** evidence (Examination)
	- **Rebuild** evidence or **repeat situation** to verify that results can be reproduced reliably (Admission)

#### Rules of Evidence
- **Why must evidence by handled consistently?**
	- **Verify** work
	- Enhance **credibility**
- **Notes:**
	- **Comply** with **state rules of evidence**
		- for **security** and **accountability** control of evidence
	- Evidence admitted in criminal case can be used in civil suit and vice versa
	- **Be updated on latest rulings and directives on the following:**
		- collecting
		- processing
		- storing
		- admitting digital evidence
- **Difference between digital evidence and physical evidence:**
	- Digital evidence can be changed easily
	- **How to detect changes in digital evidence?**
		- Compare hash values of **original data** and **duplicate copy**
- **Hearsay**
	- Most courts interprets computer records as hearsay evidence
	- **Definition:**
		- Second-hand or indirect evidence
		- Evidence of a statement made other than a witness

> Generally, digital records considered admissible if qualified as business record

- **Computer records:**
	- **Types:**
		- **Computer-generated records**
			- Data maintained by system and not usually data **created by humans**
		- **Computer-stored records**
			- Electronic data **person created** and **saved on a computer** such as a spreadsheet or word processing document
	- **Conditions for evidence to be admitted into court**
		- Authentic
		- Trustworthy
	- **In what way are computer-generated records considered authentic?**
		- Program created the output correctly
		- Considered an exception to hearsay rule

> Evidence collected according to proper step of evidence control ensures that computer evidence is authentic

- **How would attorneys challenge digital evidence?**
	- By raising issue of whether computer-generated records were altered or damaged
	- **How to prove if computer records are authentic?**
		- Demonstrate that specific person created the records
		- **Example:**
			- Author of Microsoft Word document can be identified with file metadata
			- May not be easy as records recovered from slack space or unallocated disk space usually do not identify author

#### Best Evidence Rule
- **Definition:**
	- To **prove** the **content** of the written document, recording or photograph, the **original copy is required**
	- **Allows duplicates (copy)** instead of the original if produced by the **same impression as the original** if the original cannot be obtained
		- Although not always possible to produce the original
- **Notes:**
	- As long as **bit-stream copies of data** are **created** and **maintained** properly
		- can be admitted in court though not considered best evidence
	- **Examples of not being able to use original evidence:**
		- **Investigations involving network servers:**
			- Removing server from network to acquire data can cause harm to business or its owner
			- Might be an innocent bystander to crime or civil wrong

#### Useful Evidence
- **What are the properties of useful evidence?**
	- Admissibility
	- Authenticity
	- Completeness
	- Reliability
	- Believability

#### Collecting Evidence in Private-Sector Incident Scenes
- **How to analyse a policy violation?**
	- Businesses have **inventory databases** of computer **hardware** and **software**
	- Understand what hardware and software help with computer forensics tools needed to analyse policy violation
- **Corporate policy statement about misuse of digital assets:**
	- Allows corporate investigators to conduct covert surveillance with little or no cause
	- **Access company systems** without **warrant**
	- Companies display **warning banner** and **publish policies**
		- Stating that they **reserve the right** to inspect computing assets at will

> Corporate investigators must know under what circumstances they can examine employee's computer
> - Every organization must have well-defined process describing when investigation can be initiated

- **What happens if corporate investigator finds out employee is committing a crime or has committed a crime?**
	- Employer can file **criminal complaint** to *police*
	- Investigator should report to **corporate management immediately**

> - Employers are more interested in **enforcing company policy** rather than **seeking out and prosecuting employees**
> - Corporate investigators are mainly concerned with protecting company assets

- **What to do if you discover evidence of crime during company policy investigation?**
	- Determine whether incident **meets aspects of criminal law**
	- **Inform management** of incident
	- **Stop investigation** to ensure Fourth Amendment restrictions on obtaining evidence is not violated
	- **Work** with **corporate attorney** on how to **respond to police request** for more information

#### Processing Law Enforcement Crime Scenes
- Law enforcement officers may only search and seize criminal evidence with probable cause
	- **What is probable cause?**
		- **Reasonable grounds** to believe that particular person has committed a crime
			- especially to **justify search preferring charge**
		- Refers to standard specifying whether police officer has the **right to make an arrest**, **conduct personal or property search** or **obtain warrant for arrest**
		- With probable cause, police officer can get a **warrant from the judge**
			- Authorizes a **search and seizure** of **specific evidence** related to **criminal complaint**
			- **Fourth Amendment:** 
				- Warrants can be issued if it describes the place to be searched and persons or things to be seized

#### Identifying Type of OS or Digital Devices
- **Why is it difficult for law enforcement?**
	- Crime scene is **not controlled**
	- They might not know the **type of computer used** to commit a crime or **how they are used**
- **What to identify OS or device by?**
	- Approximate size of drive on suspect computer
	- Number of devices to process at the scene
- **Identify the following OS and hardware involved:**
	- Microsoft
	- Linux
	- UNIX
	- Macintosh
	- Mainframe computer
- **Determining whether computers and digital devices can be seized:**
	- Determine whether digital evidence can be removed
	- **Ideal situation:**
		- Seize computer and bring them to a lab for processing
	- Law enforcement investigators require a warrant to remove computer from a crime scene and transport them to a lab
- **When should computers not be removed?**
	- If removing the computer harms the business
- **Additional complications:**
	- Files stored offsite that are accessed easily
	- **Availability of cloud storage** that cannot be **stored physically**
		- Stored on drives where data from many subscribers might be stored
- **What if computers are not allowed to be taken to a lab?**
	- Determine resources needed to acquire digital evidence
	- What tools can speed up data acquisition?

#### Tools Needed for Incident/Crime Scene
- **Two types of field kits:**
	- **Initial-response field kits**
		- Should be lightweight and easy to transport
	- **Extensive-response field kits**
		- Includes all tools that you can afford to take to the field
		- Extract only items needed to acquire evidence
- **List of tools required:**
	- **Initial-response field kits:**
		- Small computer toolkit
		- Large capacity drive
		- IDE ribbon cable
		- SATA cable
		- Forensic boot media containing acquisition utility
		- Laptop IDE
		- Laptop or tablet computer
		- FireWire
		- USB dual write-protect external bay
		- Flashlight
		- Digital camera with extra batteries
		- Evidence log forms
		- Notebook
		- Computer evidence bags (or Faraday bags)
		- Evidence labels, tape and tags
		- Permanent ink marker
		- External USB devices

#### Storage Media for Digital Evidence
- **CDs, DVDs**
	- Ideal media
	- **Capacity:** 17GB
	- **Lifespan:** 2-5 years
- **Magnetic Tapes (4mm DAT)**
	- **Capacity:** 40-72GB
	- **Lifespan:** 30 years (Longest)
	- **Costs:**
		- Drive = $400
		- Tape = $40
- **Super Digital Linear Tape (SDLT)**
	- Specifically designed for large RAID data backups
	- **Capacity:** 1TB (Largest)
	- Smaller external SDLT drives can connect to workstation via SCSI card

### Chapter 9 - Historical Cellular
#### Cell Phones
- **How does a phone contact a station?**
	- **Full-Duplex**
		- Operates on two channels
		- Sends and receives at the same time
		- **How does a cell-phone send a signal?**
			- Converts electrical signal and transmits it via radio waves to nearest cell tower
	- **Half-Duplex**
		- Citizen-Band (CB) radios
		- Only one party can speak at a time
		- **How do CB radios communicate?**
			- Uses radio waves to talk to cell tower that connects it to the rest of the phone network

#### Cellular Layout
- Mobile phone network is composed of a cell
	- Cells can join and overlap each other to form large coverage areas
	- Users on network can cross into different cells without losing connection
	- Allows **frequency reuse** which causes crosstalk

#### Mobile Telephone Switching Office
- **Explanation:**
	- Contains **switching equipment** for **routing mobile phone calls**
	- Handles the **entire cell network**
	- Controls **hand-off**
	- Communicates with the **PSTN** 
		- Stands for the Public Switch Telephone Network
		- Brain of the cell phone network
	- Evaluates the signal strength between devices and network
		- **How?**
			- Tells the device or network to make the appropriate adjustments to the transmission
- **How is data transmitted?**
	- Phone makes an outbound call
	- Sends radio signal to the MTSO
	- MTSO sends the signal to the PSTN
- **What happens when phone is turned on?**
	- Phone listens for carrier and looks for a match
	- Phone must match service or phone goes into roam or no service
- **What happens when phone makes a call?**
	- Phone sends the destination number to the nearest cell tower
	- Nearest cell tower checks for the strongest channel
	- Sends signal to the MTSO 
	- MTSO sends to PSTN
	- PSTN confirms signal tone and sends back a key to the phone

#### Wireless Frequency
- **How is voice or data transmitted?**
	- via electric waves set to specific frequencies
	- measured in Hertz (Hz)

#### Cellular Hand Off
- **What is cellular handoff?**
	- The process of **transferring an ongoing call** from one cell to another cell
- **When is handoff needed?**
	- When signal on the channel from tower servicing the call becomes weaker during the call
	- If there is no tower with a stronger signal, the call is **dropped**
- **Types of handoff:**
	- **Hard Handoff**
		- Existing connection must be broken when new one created **(Break then make)**
		- Allocates **different frequency**
		- Usually not very complicated
		- Handset is always communicated with **one base station at a time**
	- **Soft Handoff**
		- Connection is made before old one is released **(Make then break)**
		- **More complex** than hard handoff
		- Communicate up to **3-4 base stations simultaneously**

#### Cellular Subsets
- **iDEN**
	- **Description:**
		- Stands for the **Integrated Digital Enhanced Network**
		- iDEN phones support SMS, voicemail, data networking like VPN, Internet and Intranets
		- **Half-duplex**
		- Allows users to take advantages of **Push-To-Talk (PTT)**
		- Used by the following ISPs:
			- Sprint
			- AT&T
			- Verizon
- **CDMA**
	- **Description:**
		- Stands for the **Code Division Multiple Access**
		- Utilizes **spread-spectrum technology**
		- **What is spread-spectrum technology?**
			- Channels are **spread across entire frequency range** (1850-1990 MHz) instead of *being dedicated to one*
			- **Spreads** information contained in particular signal of interest over much **greater bandwidth than original signal**
		- Assigns code to **each piece of data** passed across spectrum
		- Unable to carry voice and data simultaneously
		- **Two channels:**
			- Encode
			- Decode
	- **BitPIM Software for CDMA**
		- **What does PIM stand for?**
			- Personal Information Management
		- **Description:**
			- Open source, cross-platform program
			- Allows the **manipulation of data** on many CDMA phones
				- Includes the following:
					- PhoneBook
					- Calendar
					- Wallpapers
					- Ringtones
					- File system
			- Analyses most Qualcomm CDMA chipset based phones
- **GSM**
	- **Description:**
		- Standards for the **Global System for Mobile Communications**
		- Based on **TDMA**
		- 70-80% of world's phones
		- Digital cellular technology used for **transmitting mobile voice** and **data services**
		- Established in 1987 as a standard
		- Available in 212 countries and territories
		- **Frequency range:**
			- 850-1900 MHz
		- Utilizes **SIM technology**

#### Cell Phone Identification Numbers
- **MIN**
	- **Description:**
		- Stands for **Mobile Identity Number**
		- Assigned by carrier
		- Can be ported
	- **Format:**
		- 10-digit number
		- Length varies based on country code
		- **Two different parts:**
			- MIN1
				- **24-bit** number after area code
			- MIN2
				- **area** and **mobile subscriber** code
- **MEID**
	- **Description:**
		- **Replacement** for **ESN** for **CDMA devices**
		- Stands for **Mobile Equipment ID**
		- Fields are in hexadecimal values
	- **Format:**
		- `RR`: Regional code (globally administered)
		- `XXXXXX`:
			- `000000`
				- For small quantities of prototype mobiles
			- `000001` to `FFFFFE`
				- **Allocated to:**
					- regional administration bodies
					- mobile manufacturers
			- `FFFFFF`
				- **Reserved**
		- `ZZZZZZ`:
			- Manufacturer assigned to unique ID device
		- `C`:
			- Check digit
- **IMEI**
	- **Description:**
		- Stands for **International Mobile Equipment Identity**
	- **Format:**
		- Unique **15-digit** code 
			- Used to identify individual GSM mobile telephone to mobile network
	- Can be displayed by dialling `*#06#`
	- **Fields:**
		- **TAC**
			- stands for **Type Approval Code**
			- Identifies country in which type approval was sought for the phone and approval number
		- **FAC**
			- stands for **Final Assembly Code**
			- Identifies company that produced the mobile phone
		- **SNR**
			- **Serial Number**
			- Uniquely assigned to specific type of handset
		- **CD**
			- stands for **check digit**
			- Used to check IMEI for validity
	- **Checksum validation:**
		- **Steps to validate:**
			- Double every two digits
			- Sum all the digits together
			- Check if sum is divisible by 10
				- Checksum is the number that when added makes sum divisible by 10
- **IMSI**
	- **Description:**
		- Global unique identifier
			- Always 56-bit and unique in every network
	- **Format:**
		- **Consists of 3 parts:**
			- MCC (Mobile Country Code) - 3 digits
			- MNC (Mobile Network Code) - 2 digits
			- MSIN (Mobile Station Identification Number) - 10 digits

### Chapter 10 - Android Forensics
- **What is Android Forensics?**
	- Handling of recovering and analysis of data in an Android device via techniques under forensically sound conditions
- **What are some challenges in mobile forensics?**
	- Wide range of operating systems and device models
	- Preventing data alterations on mobile devices
	- Inherent security features
	- Legal issues

#### Seizure and Isolation
- **What to do when seizing an Android phone?**
	- Note location where mobile phone was found
	- Take picture of location with camera
	- **Establish chain of custody**
		- Take pictures of crime scene
		- **Acquire the following:**
			- Original state of mobile device
			- Make, model and serial number
			- IMEI number
			- OS version of device
	- Take picture of the phone before starting any progress
	- Request for PIN, pattern, password SIM pin
	- Check for Unified Endpoint Management Solutions:
	- Account for status of the device:
		- Check if it is powered on or off
			- **If powered on:**
				- Check battery and network status
			- Check where screen is locked
	- Check if there are cables located around
- **How to isolate the phone?**
	- **If device is on:**
		- Enable airplane mode
		- Check and manually disable hotspots or GPS locations, Wi-Fi and Bluetooth
		- Do not remove SIM or SD cards
		- Connect phone to power bank
		- Put phone, adapters and chargers in a Faraday bag
	- **If device is off:**
		- Do not turn it on
		- Place in evidence bag or box
		- If Faraday bag is available, place phone, adapter and chargers into the bag
		- Bring back to forensics lab
		- Write-protect SD card and remove SIM card
		- Perform acquisition of SIM and SD card
		- Phone cannot be left powered during acquisition process
		- Turn on phone if necessary and treat it as if it was on
		- Apply isolation techniques mentioned earlier

#### Hashing
- **Purpose:**
	- Prove integrity of evidence
- **Description:**
	- Done after acquisition of device
	- Perform MD5 or SHA to calculate has values
	- Document hash values to maintain record of digital evidence

#### Device Accessibility
- **Factors affecting mobile acquisition of device:**
	- Android version
	- **Device security:**
		- Pattern
		- PIN
		- Password
		- Fingerprint
		- Facial recognition
		- Bluetooth device lock and unlock
	- **Device accessibility:**
		- Non-root access
		- Root access
- **Mode of transfers:**
	- **Bluetooth**
		- Mobile acquisition can be done using the Android Debugging Bridge (ADB) via **Bluetooth connection**.
	- **Wireless**
		- Acquisition can be done using ADB via **Wi-Fi**
		- Mobile device and acquisition machine must be connected to the same Wi-Fi network
- **Pre-requisites**
	- **Media Transfer Protocol**
		- Allow media files to be transferred automatically between portable device
		- Guarantees uninterrupted device acquisition
	- **Enabling USB Debugging**
		- Developer option enables analysis machine to connect to device via ADB
			- ADB accts as bridge between computer and mobile phone
		- To use ADB, USB debugging options must be enabled on the phone
	- **Increasing Screen Time**
		- Makes mobile phone stay awake longer and prevents it from locking
		- Usually found under Settings > Developer Options

#### Acquisition Methods
- **Advanced Logical**
	- Combines both logical and file system acquisition methods
- **Manual Acquisition:**
	- Examiner uses UI of phone to browse and investigate
	- No special tools or techniques required
	- Manual extraction of chat messages
		- In the form of screenshots, export to external media
	- **What are some limitations of manual acquisition?**
		- Only files and data visible through normal UI
		- Data on the device can be modified easily (tamper and damages evidence)
- **Brute-Force Acquisition**
	- Use of offensive techniques like password cracking, patterns, pins and rooting the device to gain access to the phone

#### Operating Modes of Android
- **Recovery Mode**
	- **Description:**
		- Android-based lightweight runtime environment separate from and parallel to main Android OS
	- **Types of recovery:**
		- Stock
		- Custom
- **Fastboot Mode**
	- **Description:**
		- Tool that comes with SDK package
		- Can be used to reflash partitions on Android device
		- Alternative to recovery mode for doing installation and updates
		- Used for unlocking bootloader for some Android device models

#### Android Operating System
- **Description:**
	- Mobile operating system based on modified version of Linux kernel
	- Developed by Open Handset Alliance (OHA)
	- Created by Google

#### Android Architecture
- **Linux Kernel**
	- **Functions:**
		- Process management
		- Memory management
		- Security
		- Networking
- **Hardware Abstraction Level (HAL)**
	- **Functions:**
		- Allows higher level Java framework to work with hardware of mobile device
		- Can be done due to multiple library modules
			- provides interfaces for different types of hardware components
			- **Examples:** Bluetooth, camera
- **Android Runtime**
	- Instance that all applications run with together with their own processes
	- Allows several virtual machines to run on low-memory devices by executing DEX (Dalvik Executable files)
- **Native C/C++ Libraries**
	- **Contains:** 
		- C and C++ native libraries
		- 3D graphics
- **Java API Framework**
	- Framework that allows developers to create applications using modular system components and services as building blocks
	- **Components:**
		- **View system:**
			- Allows building of UI of application
		- **Resource manager:**
			- Provides access to non-code components of application like localized strings, graphics and layout files
		- **Notification manager:**
			- Allows applications to display custom alerts
		- **Activity manager:**
			- Manages life cycle as application and back stacks order in each activity is opened
		- **Content Providers:**
			- Allows applications to access other application data and share their own
- **System Apps**
	- Apps that are preinstalled on phone
	- Cannot be uninstalled or changed by user
	- **Reason:**
		- Read-only production devices
		- Some devices offer the option to disable these apps
	- **Location:**
		- `/system/partition`
- **User Installed Apps**
	- Applications downloaded and installed by user from distribution platforms
		- Example: Google Play
	- **Location:**
		- `/data`

### Chapter 11 - iOS Forensics
#### iOS Architecture
- **History of iOS:**
	- Evolved from Apple OS called Darwin
- **Definition:**
	- Proprietary mobile system owned by Apple
	- Only allowed to be installed in Apple devices
- **Descriptions:**
	- UNIX-like OS
	- Linux is family of open-source UNIX-like OS
- **Architecture:**
	- **Cocoa Touch**
		- Layer at which most application interacts with
	- **Media**
		- Media layer with media services e.g. audio and video
	- **Core Services**
		- Used in upper layers
	- **Core OS**
		- Where most Mac OS X components are in
		- Low level and works closely with computational instructions
	- **Kernel and Device Drivers**
		- Layer which most applications interact with
- **Partitions:**
	- System partition

#### Acquisition Procedures
- **Advanced Logical**
	- Combines both logical and file system acquisition methods
- **Cloud Acquisition**
	- iCloud backups
	- iCloud Drive
	- iCloud Photos
	- Health data
	- FileVault2 Recovery Token (Disk encryption program in Mac OS)
	- Messages
		- iMessage
		- SMS
	- **Drawbacks:**
		- Requires proper authentication credentials
		- Requires user's Apple ID password and 2FA
- **iTunes Backup Acquisition**
	- Used if iOS device is not available
	- Backup retrieved from the workstation (Windows or Mac)
	- Device that typically connects to for update or syncing music, movies and apps
	- iTunes performs automated backup during sync process when upgrade to iOS performed
- **Manual Acquisition**
	- Examiner uses UI of phone to browse and investigate
	- No special tools or techniques required
	- **Limitations:**
		- Only files and data visible through normal UI examined
	- Data on device can be easily modified
- **Brute Force Acquisition**
	- Use of offensive techniques like password cracking and jailbreaking

#### Operating Modes of iOS Devices
- **Normal Mode**
	- When iPhone switched on, boots in the OS
	- In normal mode, user can perform all regular activities
	- **3 steps in the boot process:**
		- Low-level bootloader
		- iBook
		- iOS kernel
- **Recovery Mode**
	- Device enters into recovery mode if normal boot process failed to load or verify
- **Device Firmware Upgrade (DFU)**
	- Used to perform iOS upgrading
	- Low-level mode for diagnosis
	- If Boot ROM is not loading or verified during boot up, iPhone presents a black screen

#### Jailbreaking
- **Implications of iOS jailbreaking:**
	- Violation of terms of conditions of its use
	- Advises customers that the practice exposes the phone to risks
	- **Examples of risks:**
		- Security vulnerabilities
		- Stability issues
		- Potential crashes and freezes
		- Shortened battery life

#### iOS Devices
- iPhone
- iPad
- iPod
	- **Features:**
		- Camera
		- Wi-Fi
		- Safari
		- Storage
		- Audio Playback
		- Photo and Video
		- YouTube
		- App Store

#### Property List (plist)
- **Definition:**
	- File used to store various types of data on iOS and MacOS
	- Used in the management of configuration of iOS and its applications
- **Contains the following useful artefacts:**
	- Web cookies
	- Email accounts
	- GPS map routes
	- Searches system configuration preferences
	- Browsing history and bookmarks
- File can be opened using simple text editor to view contents

#### EXIF Files
- **Description:**
	- Stands for Exchangeable Image File 
	- Standard that specifies formats for images and sounds used by digital cameras, scanners and other systems handling image and sound files
- **Contains the following data:**
	- Timestamps
	- Longitude
	- Latitude
	- Location
	- Device Information
		- Depending on device used to capture image or sound

#### SQLite Data Format
- **File Extension:** `.db`
- **Description:**
	- Popular format for mobile device and open source applications
	- Logical extraction of iPhones provides many SQLite database files
	- Uses SQLite databases to store user data
	- Native iOS applications uses this database to store and organize data

### Chapter 12 - Rooting and Jailbreaking
#### Overview
- **Restrictions in mobile devices:**
	- Limits application installation
	- Limited access privileges to device
	- **Code signing:**
		- Security mechanism in iOS where all binaries and libraries must be signed up by trusted authority
		- Assures users that it is from known source and app has not been modified since being last signed

#### Rooting in Android
- **Definition:**
	- Android equivalent of jailbreaking
- **Explanation:**
	- Means of unlocking operating system
	- **To do the following:**
		- Install unapproved apps
		- Deleted unwanted bloatware
		- Update OS
		- Replace firmware and customization
	- Allows users to gain "root" user privileges
	- Allows **sideloading** without rooting by default:
		- Installing apps from non-Android stores (`.apk` files)

#### Motivations for End Users
- **Motivations:**
	- More application sources
	- Access to unauthorized applications
	- Remove bloatware (vendor-installed software)
	- Improve performance
	- Increase available RAM or ROM
	- Access restricted hardware resources
		- To perform **system tweaking**

#### Considerations of Jailbreaking
- **Considerations:**
	- Voiding of warranty
	- Error and performance issues
		- Can cause phones to be unstable
	- Violation of organization's security policies on permitted activities with corporate devices (Example: EULA)
	- Installing third-party tools that may be unsecure and untrusted

#### Tools Used in Jailbreaking
- **Tools:**
	- ADB (Outdated)
	- z4root
	- SuperOneClick
	- Motochopper
	- Flashing memory and custom ROM

---
## Table Summaries
### Chapter 1
**Public vs Private Sector Investigations**

| Public-Sector Investigations                                                        | Private-Sector Investigations                                                                       |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Involve government agencies responsible for criminal investigations and prosecution | Involve private companies and lawyers addressing company policy violations and litigation disputes. |
| Follows the legal process                                                           |                                                                                                     |

**Case Law**

| Details              | Explanation                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| Definition           | Law established by the outcomes of former cases                                                       |
| When is it used?     | Used by legal counsel to apply previous similar cases to current ones when there is ambiguity in laws |
| What is it required? | Existing laws cannot keep up with the rate of technological advancement                               |

### Chapter 3
**Image Formats**

| Format             | Advantages                                                                                                                      | Disadvantages                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Raw                | Fast data transfers, ignores minor data read errors on source drive and format is read by most forensics tools                  | Requires too much storage as original disk |
| Proprietary Format | Option to compress image files to save space, can split image into smaller segmented files and can integrate metadata into file | Unable to share image between different tool or vendors, file size limitation for each segment                                           |

**Acquisition Methods**

| Collection Method          | Description                                                                                                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Disk-to-image              | Most common and flexible method<br> More than one copy can be made<br> Copies are for bit-for-bit replications of original drive<br> Tools that use disk-to-image: ProDiscover, Encase, FTK, SMART, Sleuth Kit, X-Ways, iLookIX |
| Disk-to-disk               | Used when disk-to-image not possible<br> Tools can adjust disk's geometry like trackers and sectors<br> Tools that use disk-to-disk: Encase, SnapCopy and Safeback                                                              |
| Logical/Sparse Acquisition | Used when time is limited<br> Logical acquisition captures only specific files of interest to case<br> Sparse acquisition captures deleted data<br> For large disks, PST or OST mail files and RAID servers                                                                                                                                                                                                                                |

### Chapter 4
**Types of Forensics Tools**

| Type                     | Explanation                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| Hardware Forensics Tools | Can range from **single-purpose components** to **complete computer systems and servers** |
| Software Forensics Tools | Ranges from $300 and above<br> Can be either command-line applications and GUI applications<br> Typically used to copy data from suspect disk drive to image file                                                                                          |

**Advantages and Disadvantages of GUI Forensics Tools**

| Advantages                         | Disadvantages                                        |
| ---------------------------------- | ---------------------------------------------------- |
| Easy to use                        | Excessive resources required                         |
| Allows multitasking                | Produces inconsistent results due to type of OS used |
| There is no need to learn older OS | Creates tool dependencies                                                     |

**Types of Write Blockers**

| Type                    | Explanation                      |
| ----------------------- | -------------------------------- |
| Software write-blockers | Runs in shell mode (Windows CLI) |
| Hardware write-blockers | Ideal for GUI forensics tools<br> Prevents Windows or Linux from writing data to blocked drive <br> Bridge between suspect drive and forensics workstation<br> Can navigate to blocked drive with any application and discards written data                                 |

**Subfunctions of Validation and Verification**

| Subfunction            | Description                                                | Description #2                        |
| ---------------------- | ---------------------------------------------------------- | ------------------------------------- |
| Hashing                | Ensuring that data is not changed                          | CRC-32, SHA-1, MD5                    |
| Filtering              | Separate good files and files that need to be investigated | Based on has value sets               |
| Analysing file headers | Check on the change of file type                           | Discriminate files based on file type |

**Subfunctions of Extraction**

| Subfunction       | Description                                               |
| ----------------- | --------------------------------------------------------- |
| Data Viewing      | Different tools provide different ways of viewing data    |
| Keyword Searching | Good function but may produce noise if wrong keyword used |
| Decompressing     | Also known as uncompressing                               |
| Carving           | Reconstruct file fragments                                |
| Decrypting        | Potential problem for the investigation                   |
| Bookmarking       | Or tagging                                                |


### Chapter 6
**Steganography Techniques**

| Technique              | Description                                                                    |
| ---------------------- | ------------------------------------------------------------------------------ |
| Data Hiding            | Changing or manipulating a file to conceal information                         |
| Change File Extensions | Manipulating the file extension of the file to appear as a different file type |
| Hiding Partitions      | Setting the attribute to hidden                                                |
| Bit Shifting           | Done by changing the order of binary data using low-level encryption programs  |
| Encryption             | Making the file unreadable                                                     |
| Password-protecting    | Secure the file using a password                                                                               |

**Password Attacks**

| Attack             | Description                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Brute-Force Attack | Using every possible character on the keyboard to guess a password                                                                         |
| Dictionary Attack  | Use of common words found in the dictionary and try them as passwords                                                                      |
| Rainbow Attack     | File containing hash value of every possible password that can be generated from a keyboard (Faster than brute-force or dictionary attack) |

### Chapter 9
**Types of handoff**

| Hard Handoff                                                                   | Soft Handoff                                  |
| ------------------------------------------------------------------------------ | --------------------------------------------- |
| Existing connection must be broken before new one is created (Break then make) | Connection is made before old one is released |
| Not very complicated                                                           | More complex than hard handoff                |
| Communicates with one base station at a time                                   | Communicates up to 3-4 base stations at the same time                                           |

**Cellular Subsets**

| Technology | Explanation                                                                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| iDEN       | Supports SMS, voicemail, VPNs, Internet and Intranets                                                                                               |
| CDMA       | Utilizes spread-spectrum technology<br> Unable to carry voice and data simultaneously<br> Assigns code to each piece of data passed across spectrum |
| GSM        | Based on TDMA, used for transmitting mobile voice and data services<br> Makes up of 70-80% of world's phones                                                                                                                                                    |

### Chapter 10
**Android Architecture**

| Components                       | Explanation                                                                                              |
| -------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Linux Kernel                     | Process management, memory management, security and networking                                           |
| Hardware Abstraction Level (HAL) | Allows higher level Java framework to work with hardware of mobile device                                |
| Native C/C++ Libraries           | SQLite, C, C++, 3D graphics                                                                              |
| Java API Framework               | Allows developers to create applications using modular system components and services as building blocks |
| Android Runtime                  | Instance that all applications run with together with their own processes                                |
| System Apps                      | Apps preinstalled on phone and cannot be uninstalled or changed by user                                                                                                         |

### Chapter 11
**iOS Architecture**

| Components                | Explanation                                      |
| ------------------------- | ------------------------------------------------ |
| Cocoa Touch               | Layer at which most applications interacts with  |
| Media                     | Where media services e.g. audio and video exists |
| Core Services             | Used in upper layers                             |
| Core OS                   | Where most Mac OS X components are               |
| Kernel and Device Drivers | Layer where most applications interact with                                                 |

**iOS Files**

| File               | Description                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Plist              | File that stores types of data on iOS and MacOS and used in the management of configuration of iOS and its applications |
| EXIF               | Format that contains data of image and sound files                                                                      |
| SQLite Data Format | Format where user and native iOS applications data is stored in SQLite databases                                        |

---
## Illustrations
### Chapter 5
**Components of a disk drive**
![335](https://i.imgur.com/wkHaFVz.png)

**Parts of a disk**
![](https://i.imgur.com/UmSCptT.png)

**Disk Partitions**
<img title="" src="https://i.imgur.com/DJ3Jwuz.png" alt="" data-align="center" width="384">

**Partition table in a hexadecimal editor**
![](https://i.imgur.com/Nc6DTxr.png)

**Parts of file slack space**
![](https://i.imgur.com/ZkqQo6k.png)

**Resident file in MFT record (hexadecimal editor)**
![](https://i.imgur.com/6r0BW3w.png)

**Non-resident file in MFT record (hexadecimal editor)**
![](https://i.imgur.com/SPXTBn4.png)

**Virtual cluster numbers (VCN)**
![](https://i.imgur.com/MJEdC6h.png)

### Chapter 7
**Forensics lab layout**
![500](https://i.imgur.com/9ALE5Kc.png)

**Regional digital forensics lab**
![500](https://i.imgur.com/9WhOX5G.png)

### Chapter 9
**Cellular Handoff**
![400](https://i.imgur.com/CAc3jVL.png)
**MEID Fields**
![600](https://i.imgur.com/r39l7hY.png)