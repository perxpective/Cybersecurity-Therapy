# DFI Chapter 8 - Processing Crime and Incident Scenes

###### tags: #DFI

## Table of Contents
```toc
```

---
## Identifying Digital Evidence
> **What is digital evidence?**
> - Any information stored or transmitted in digital form
> - There is a difference between document evidence and digital evidence
> - Groups like the **Scientific Working Group on Digital Evidence (SWGDE)** set standards for recovering, preserving and examining digital evidence

### General Tasks Performed by Investigators
1. Identify digital information or artefacts that can be used as evidence
2. **Collect**, **preserve**, and **document** evidence
3. **Analyse**, **identify**, and **organize** evidence
4. **Rebuild evidence** or **repeat situation** to verify that results can be reproduced reliably

### Understanding Rules of Evidence
- <u>Consistent practices</u> help verify work and **enhance credibility**
	- Must handle all evidence consistently
- Comply with state rules of evidence or with <u>Federal Rules of Evidence</u>
	- Security and accountability control for evidence
- Evidence admitted in criminal case can be used in civil suit and vice versa 
- Keep current on latest rulings and directives on:
	- collecting;
	- processing;
	- storing and
	- admitting digital evidence
- Digital evidence is different from physical evidence as it can be <u>changed easily</u>
	- Only way to detect these changes is to compare original data with duplicate (hash)
- Most courts have interpreted computer records as hearsay evidence
> - **Hearsay** is second-hand or indirect evidence
> - Evidence of a statement made other than a witness

- Generally, digital records considered **admissible** if qualified as a business record
---
- Computer records usually divided into the following:
- **Computer-generated records** -> Data maintained by system and not usually data created by human
- **Computer-stored records** -> Electronic data person creates and save on a computer, such as a spreadsheet or word processing document. 
- Computer and digitally stored records must be shown to be <u>authentic</u> and <u>trustworthy</u>
	- So can be admitted into court
- Computer-generated records considered authentic if program created the output function correctly
	- Considered an exception to hearsay rule
- Collecting evidence according to proper steps of evidence control helps ensure that computer evidence is authentic
- When attorneys challenge digital evidence,
	- Often raise the issue of whether computer-generated records were altered or damaged
- <u>How to prove that computer-records are authentic?</u>
	- Demonstrate that specific person created the records

> **Example**
> - Author of Microsoft Word document can be identified with file metadata
> - May not be easy as records recovered from slack space or unallocated disk space usually do not identify author
	
#### Best Evidence Rule
> **Best Evidence Rule states:**
> - to prove content of written document recording, photograph, ordinarily the original writing, recording, or photograph is required
> - Allows duplicates instead of originals when produced by the same impression as the original
> 	- Although not always possible to produce original

---
- As long as bit-stream copies of data created and maintained properly:
	- Copies can be admitted in court though not considered best evidence

> **Example of not being able to use original evidence:**
> - Investigations involving network servers:
> 	- Removing server from network to acquire data can cause harm to business or its owner
> 	- Might be an innocent bystander to crime or civil wrong

#### Five Properties of Useful Evidence
1. Admissible
2. Authentic
3. Complete
4. Reliable
5. Believable

## Collecting Evidence in Private-Sector Incident Scenes
- Businesses typically have inventory databases of computer hardware and software
	- Understand what h/w and s/w help with computer forensics tools needed to analyse policy violation
	- Best way to conduct analysis
- Corporate policy statement about misuse of digital assets
	- Allows corporate investigators to conduct **covert surveillance** with little or no cause
	- **Access company systems** without warrant
- Companies should display warning banner and publish policies
> State that they reserve the right to inspect computing assets at will.

- Corporate investigators should know under what circumstances they can examine employee's computer
	- Every organization must have well-defined process describing when investigation can be initiated

- If corporate investigator finds that employee committing or has committed a crime:
	- <u>Employer</u> can file a criminal complaint with police
	- Investigator should immediately report to corporate management
- Employers usually interested in enforcing company policy
	- Not seeking out and prosecuting employees
- Corporate investigators primarily concerned with protecting company assets

- If you discover evidence of crime during company policy investigation:
	1. Determine whether incident meets elements of <u>criminal law</u>
	2. <u>Inform management</u> of incident
	3. <u>Stop investigation</u> to ensure Fourth Amendment restrictions on obtaining evidence is not violated
	4. <u>Work with corporate attorney</u> on how to respond to police request for more information

## Processing Law Enforcement Crime Scenes
- Must be familiar with criminal rules of <u>search and seizure</u>
- <u>Understand how search warrant works</u> and what to do when you process one
- Law enforcement officer may search and seize criminal evidence only with <u>probable cause</u>

> **Probable Cause**
> - reasonable grounds to believe that particular person has committed a crime
> 	- especially to justify making search preferring charge
> - refers to standard specifying whether police officer has the right to make an arrest, conduct a personal or property search or obtain a warrant for arrest

- Police officer can obtain search warrant from judge with **probable cause**
	- Authorizes a search and seizure of specific evidence related to the criminal complaint
	- **Fourth Amendment** states that only warrants <u>"particularly describing the place to be searched and persons or things to be seized"</u> can be issued

## Understanding Concepts and Terms used in Warrants
### Innocent Information
- <u>Unrelated information:</u>
	- Included in information that is sought after
	- Sort all information to obtain what is needed
	- Amount of data can be up to a Terabyte
	- <u>Example: Enron Scandal</u> -> by the use of accounting loopholes and poor financial reporting
- Judges issue **limiting phrase** to warrant
	- Allows police to separate innocent information from evidence
	- Warrant must list which items can be seized

### Plain View Doctrine
- Objects falling in **plain view** of officer's eyes 
	- Has the right to be in position to have view subject to seizure without warrant and may be introduced in evidence
- <u>Three criteria must be met:</u>
	- Officer where they have a legal right to be
	- Ordinary senses must not be enhanced by advanced technology in any way
	- Any discovery must be by chance
- Doctrine applicability rejected in the **digital forensics world**
> **Example:**
> - In case where police searched a computer for evidence related to illegal drug trafficking
> - If examiner observes `.avi` file and find child pornography, must get additional warrant to continue search for child pornography

## Preparing for a Search
- <u>Preparing for computer search and seizure</u>
	- Most important step in computing investigations
- <u>To perform these tasks:</u>
	- **Get answers** from the victim and informant
	- Can be a:
		- Police detective assigned to case
		- Law enforcement witness
		- Manager or co-worker
		- Person of interest to investigation
- Identifying nature of the case

## Identifying Nature of the Case
- Include whether it involves private or public sector
- Dictates how you proceed
	- and what types of assets or resources needed for the investigation

### Identifying Type of OS or Digital Devices
- <u>For law enforcement:</u>
	- Most difficult because crime scene isn't controlled
	- Might not know the type of computer used to commit a crime or how they were used
	- Identify OS or device by:
		- Approximate the size of drive on suspect's computer
		- How many devices to process at the scene
	- Determine which OS and hardware involved:
		- Microsoft, Linux, UNIX, Macintosh, mainframe computer

### Determining Whether Computers and Digital Devices Can Be Seized
- <u>Type of case and location of evidence:</u>
	- Determine whether digital evidence can be removed
	- Ideal situation is seizing computers and brining them to a lab for processing
- Law enforcement investigators need warrant to remove computers from crime scene (and transport them to a lab)
- If removing computer harms a business, computers should not be taken away

> **Additional Complications**
> - Files stored offsite that are accessed remotely
> - Availability of cloud storage, cannot be located physically
> - Stored on drives where data from many subscribers might be stored

- If not allowed to take computers to a lab:
	- Determine resources needed to acquire digital evidence and;
	- What tools can speed up data acquisition

## Using Additional Technical Expertise
- Determine if specialized help needed to process incident or crime scene
	- Look for domain expert
- Look for specialists in
	- OSs
	- RAID servers
	- Databases
- Educate specialists in investigative techniques
	- Prevent evidence damage

## Determining Tools Needed
- Prepare tools using information from incident/crime scene
- Create **initial-response** field kit
	- Should be lightweight and easy to transport
- Create **extensive-response** field kit
	- Includes all tools you can afford to take to field
	- At the scene, extract only items needed to acquire evidence

![400](https://i.imgur.com/gMDlPBh.png)

### Tools in initial-response field kit
| Number needed | Tools                                                                  |
| ------------- | ---------------------------------------------------------------------- |
| 1             | Small computer toolkit                                                 |
| 1             | Large-capacity drive                                                   |
| 1             | IDE ribbon cable                                                       |
| 1             | SATA cables                                                            |
| 1             | Forensic boot media containing acquisition utility                     |
| 1             | Laptop IDE 40-44 pin adapter                                           |
| 1             | Laptop or tablet computer                                              |
| 1             | FireWire or USB dual write-protect external bay                        |
| 1             | Flashlight                                                             |
| 1             | Digital camera with extra batteries or 35mm camera with film and flash |
| 10            | Evidence log forms                                                     |
| 1             | Notebook or digital dictation recorder                                 |
| 10            | Computer evidence bags (Faraday bags)                                  |
| 20            | Evidence labels, tape and tags                                         |
| 1             | Permanent ink marker                                                   |
| 10            | External USB devices or portable hard drives                                                                       |


### Tools in extensive-response field kit
| Number needed | Tools                                                            |
| ------------- | ---------------------------------------------------------------- |
| varies        | Assorted technical manuals                                       |
| 1             | Initial-response field kit                                       |
| 1             | Laptop or tablet with cables and connectors                      |
| 2             | Electrical power strips                                          |
| 1             | Additional hand tools (bolt cutters, pry bar, hacksaw)           |
| 1             | Leather gloves or disposable                                     |
| 1             | Hand truck and luggage cart                                      |
| 10            | Large garbage bags and large cardboard boxes with packaging tape |
| 1             | Rubber bands of assorted sizes                                   |
| 1             | Magnifying glass                                                 |
| 1             | Ream of printer paper                                            |
| 1             | Small brush for cleaning dust from devices                       |
| 10            | USB drives of varying sizes                                      |
| 2             | External hard drives (>=1TB) with power cables                   |
| Assorted      | Converter cables                                                 |
| 5             | Additional hard drives or flash drives for data acquisition                                                                 |

## Preparing to Acquire Digital Evidence
- Evidence acquired depends on nature of the case
	- and alleged crime or violation
- **Ask supervisors or senior forensics examiners**:
	- Do you need to take the entire computer and all peripherals and media in the immediate area?
	- How are you going to protect computer and media while transporting them to a lab?
	- Is computer powered on upon arrival?
		- *Data might be lost after machine powered down*
	- Is suspect investigated in immediate area of computer?
		- Companies sometimes may not want employee to know about ongoing investigation
	- Is it possible that the suspect damaged or destroyed the computer, peripherals or media?
	- Do you need to separate the suspect from the computer?

## Processing an Incident or Crime Scene
- Keep journal to document activities
- Secure the scene
	- Professional and courteous with onlookers
	- Remove people who are not part of investigation
- Take video and still recordings of area around computer
	- Return belongings to original locations
	- Pay attention to details
- Sketch incident or crime scene
- Check state of computers as soon as possible
- Do not cut electrical power to running system unless it is an older Windows system
	- May lost essential network activity records if power cut off without proper shutdown
- Save data from current applications as safely as possible
- Record all active windows or shell sessions
- Make notes of everything done when copying data from live suspect computer
- Close applications and shut down computer
- Bag and tag evidence following the steps:

> 1. Assign a person to collect and log all evidence
> 	- Minimizes number of people handling evidence to ensure integrity
> 2. Tag all evidence collected with:
> 	- Current date and time
> 	- Serial numbers
> 	- Unique features
> 	- Make and model
> 	- Name of person who collected it
> 3. Maintain two separate logs of collected evidence
> 	- For verification and audit purposes
> 4. Maintain constant control of collected evidence and crime or incident scene

- Look for information related to investigation
	- Passwords
	- Passphrases
	- PINs
	- Bank accounts
- Collect documentation and media related to investigation
	- Hardware
	- Software
	- Backup media
	- Documentation manuals

## Processing Data Centres with Raid Systems
### Sparse Acquisition
- Technique of extracting evidence from large systems
- Extracts data related to evidence for case from allocated files
- Minimizes how much data needed to analyse
- Drawback:
	- Does not recover data in free or slack space

### Using a Technical Advisor
- List tools needed to process incident or crime scene
- Guides about where to locate data and help <u>extract log records</u>
	- Or other evidence from large RAID servers
- Create search warrant by itemizing what is needed for the warrant

<u>Responsibilities:</u>
- Know all aspects of seized system
- Direct investigator handling sensitive material
- Help secure scene
- Help document planning strategy
- Conduct ad hoc trainings
	- *On technologies and components being seized and searched*
- Document activities
- Help conduct search and seizure

## Documenting Evidence in the Lab
- Record activities and findings while working
	- Maintain a journal to record steps to take as evidence is processed
- Goal is to reproduce the same results
	- When investigators repeat steps taken to collect evidence, results should be identical
- Journal serves as a reference that documents methods used to process digital evidence

## Processing and Handling Digital Evidence
- Maintain integrity of digital evidence in the lab
- Steps to create image files:
	1. Copy all image files to large drive
	2. Start forensics tool to analyse evidence
	3. Run **MD5** or **SHA-1** hashing algorithm on image files to get digital hash
	4. Secure original media in evidence locker

## Storing Digital Evidence 
- Media used to store digital evidence dependent on how long it is needed to keep
- **CDs, DVDs, DVD-Rs, DVD+Rs, DVD-RWs**
	- Ideal media
	- Capacity up to <u>17 GB</u>
	- Lifespan of <u>around 2 to 5 years</u>
- **Magnetic tapes (4mm DAT)**
	- Capacity of <u>40 to 72 GB</u>
	- Lifespan of <u>30 years</u>
	- Costs:
		- Drive: $400
		- Tape: $40
- **Super Digital Linear Tape (SDLT)**
	- Specifically designed for large RAID data backups
	- Stores more than 1 TB of data
	- Smaller external SDLT drives can connect to workstation via SCSI card

> **Pointers**
> - Make two copies of every image to prevent data loss
> - Use different tools to create two images

## Evidence Retention and Media Storage Needs
- Help maintain **chain of custody** -> restrict access to lab and evidence storage area
- Lab should have <u>sign-in roster</u> for all visitors
	- Maintain logs for period based on <u>legal requirements</u>
- Retain evidence indefinitely
	- Check with local prosecuting attorney's office or state laws to ensure compliance

![](https://i.imgur.com/lasblij.png)

## Documenting Evidence
- Create or use evidence custody form
	- Evidence custody form serves following functions:
		- Identifies evidence
		- Identifies who handled the evidence
		- Lists dates and times evidence was handled
- Can add more information to form
	- e.g. section listing MD5 and SHA-1 hash values
- Include any detailed information might need to reference
- Evidence bags also include labels or evidence forms the can be used to document evidence 
	- Use antistatic (Faraday) bags for electronic components

## Obtaining Digital Hash
<u>Three rules for forensic hashes:</u>
- Cannot predict the ash value of file or device
- No two hash values can be the same
- If anything changes in file or device, hash value must change
 
### Cyclic Redundancy Check (CRC)
- Mathematical algorithm determining whether file's contents have changed
- Not considered a forensic hashing algorithm

### Message Digest 5 (MD5)
- Mathematical formula that translate a file into hexadecimal code value (hash value)
- If bit or byte in file changes, alters hash value, which can be used to verify a file or drive has not been tampered with

## Reviewing a Case
- General tasks performed in any forensics case:
	- Identify case requirements
	- Plan investigation
	- Conduct investigation
	- Complete case report
	- Critique the case

## Sample Civil Investigation
- Most cases in corporate environment considered **low-level investigations** or noncriminal cases
- <u>Common activities and practices:</u>
	- Recover specific evidence
		- Suspect's Outlook email folder (PST file)
	- Convert surveillance
		- Use must be well defined in company policy
		- Risk of civil or criminal liability
	- Sniffing tools for data transmissions

![500](https://i.imgur.com/bbVNr5Y.png)
