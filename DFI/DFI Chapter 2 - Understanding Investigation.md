# DFI Chapter 2 - Understanding Investigation

###### tags: #DFI
## Table of Contents
```toc
```

## Systematic Approach
### Steps
1. Make initial assessment about type of case you are investigating
2. Determine preliminary design or approach to case
3. Create a detailed checklist
4. Determine resources needed
5. Obtain and copy evidence drive
6. Identify the risks
7. Test the design
8. Analyse and recover the digital evidence
9. Complete the case report
10. Critique the case (self-evaluate to improve)

## Assessing the Case
**Systematically outline the case details:**
1. Situation
2. Nature of case
3. Specifics of case
4. Type of evidence
5. Known disk format
6. Location of evidence

## Planning the Investigation
### Basic Investigation Plan
1. Acquire evidence
2. Complete evidence form and establish chain of custody
3. Transport evidence to computer forensics lab
4. Secure evidence in approved secure container
5. Prepare forensics workstation
6. Retrieve evidence from secure container
7. Make forensic copy of evidence
8. Return evidence to secure container
9. Process copied evidence with forensics tools

> - Evidence custody form helps document what has been done with original evidence and forensics copies (chain-of-evidence form)
> - Two types:
> 	- Single-evidence form (Lists each piece of evidence on a separate page)
> 	- Multi-evidence form
> - Contains the following:
> 	- Model number or serial number
> 	- Name of investigator who recovered evidence
> 	- Date and time

## Securing Evidence
- Use evidence bags to secure and catalogue evidence
- Use computer safe products when collecting computer evidence (e.g. antistatic bags and pads)
- Use well padded containers
- Use evidence tape to seal all openings
	- CD drive bays and insertion slots for power supply cords 
	- USB cables
- Write your initials on tape to prove that evidence is not tampered with
- Consider computer specific temperature and humidity ranges

## Procedures for Private-Sector High-Tech Investigations

### Employee Termination Cases
- The majority of investigative work for termination cases involves employee abuse of corporate assets
- Incidents that create a hostile work environment are the predominant types of cases investigated
	- Viewing pornography in the workplace
	- Sending inappropriate e-mails
- Organizations must have appropriate policies in place (consult with HR)

### Internet Abuse Investigations
#### Requirements for Investigations:
- Organization Internet Proxy logs
- Suspect computer's IP address
- Suspect computer's disk drive
- Preferred computer forensics analysis tool

#### Recommended Steps
- Use standard forensic analysis techniques and procedures
- Use appropriate tools to extract all web page URL information
- Contact network firewall administrator to request for proxy server log
- Compare data recovered from forensic analysis to proxy server log
- Continue analysing computer disk drive data

### Email Abuse Investigations
#### Requirements for Investigations:
- Electronic copy of offending email that contains message header data
- Email server logs
- Access to email central server where user's messages are stored
- Access to computer to perform forensic analysis on
- Preferred computer forensics analysis tool 

#### Recommended Steps
- Use standard forensic analysis techniques
- Obtain electronic copy of suspect and victim email folder or data
- For web-based email investigations, use tools such as FTK's Internet Keyboard Search option to extract all related email address information
- Examine header data of all messages of interest to investigation

### Industrial Espionage Investigations
- All suspected industrial espionage cases should be treated as criminal cases
- Staff needed:

| Staff                        | Roles and Responsibility                          |
| ---------------------------- | ------------------------------------------------- |
| Computing Investigator       | Disk forensic examinations                        |
| Technology Specialist        | Knowledgeable about of suspected compromised data |
| Network Specialist           | Perform log analysis and set up network sniffers  |
| Threat Assessment Specialist | Typically an Attorney                             |

#### Guidelines when initiating an investigation
- Determine if investigation involves possible espionage incident
- Consult with corporate attorneys and upper management
- Determine what information needed to substantiate allegation
- Generate list of keywords for disk forensics and sniffer monitoring
- List and collect resources for investigation
- Determine goal and scope of investigation
- Initiate investigation after approval from management

#### Planning Considerations
- Examine all emails of suspected employees
- Search Internet newsgroups or message boards
- Initiate physical surveillance
- Examine facility physical access logs for sensitive information
- Determine suspect location in relation to vulnerable asset
- Study suspect's work habits
- Collect all incoming and outgoing phone logs

#### Steps to conducting an industrial espionage case:
- Gather all personnel assigned to the investigation and brief them on the plan 
- Place surveillance systems at key locations
- Discreetly gather any additional evidence 
- Collect all log data from networks and e-mail servers 
- Report regularly to management and corporate attorneys 
- Review the investigation’s scope with management and corporate attorneys
- Gather resources to conduct the investigation

### Interview and Interrogations in High-Tech Investigations
> - Definition of **Interview**: conducted to collect information from witness or suspect about specific facts related to investigation.

> - Definition of **Interrogation**: process of getting a suspect to confess

#### Role of a Computing Investigator:
- Instruct the investigator who is conducting the interview on what questions to ask and what the answers should be

> Ingredients for a Successful Interview/Interrogation
> - Being patient throughout interview session
> - Repeating or rephrasing questions to zero in on specific facts from reluctant witness or suspect
> - Being tenacious

## Understanding Data Recovery Workstations and Software
### Computer Forensics
- Specially configured PC
- Loaded with additional bays and forensics software
- Write-blockers devices
  - Allows you to boot to Windows without writing data to evidence drive

### Basic Requirements
- Workstation running Windows XP or later
- Write-blocker devices
- Digital forensics acquisition tool
- Digital forensics analysis tool
- Target drive to receive source or suspect disk data
- Spare PATA (parallel) or SATA (serial) ports
- USB ports

## Conducting an Investigation
<u>Items needed:</u>
- Original storage media
- Evidence custody form
- Evidence container for storage media
- Bit-stream imaging tool
- Forensic workstation to copy and examine evidence
- Securable evidence locker, cabinet or safe 

## Gathering the Evidence
### Steps
1. Meet IT manager to interview
2. Fill evidence form and have IT manager to sign
3. Place evidence in secure container
4. Carry evidence to computer forensics lab
5. Complete evidence custody form
6. Secure evidence by locking container

## Bit-Stream Copies
- Bit-by-bit copy of original storage medium
- Exact copy of original disk
- Backup software only copies known files
- Backup software cannot copy deleted files, email messages or recover file fragments

### Bit-Stream Image
- File containing bit-stream copy of all data on disk or partition
- Also known as "image"

## Acquiring Image of Evidence Media
- The first rule of digital forensics is to **preserve the original evidence**
- Only conduct analysis on the copy of data
- Windows tools require a write-blocking device when acquiring data from FAT or NTFS file systems

## Completing the Evidence
- Produce a final report (State what was done and what was found)
- Report should show conclusive evidence
- Keep a journal of everything that was done
- Answer the 5W1H
- Explain computer and network processes

## Critiquing the Case
### Questions
- How can you improve your performance in the case?
- Did you expect the results found? 
- Did case developed into ways you did not expect?
- Was documentation as thorough as it could have been?
- What feedback has been received from requesting source?
- Did you discover any new problems?
- Did you use any new techniques during the case or research