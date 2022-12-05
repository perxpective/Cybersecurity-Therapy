# SMW Lecture 2 - Windows Configuration and Active Directory Basics

###### tags: #SMW

## Table of Contents
```toc
```

## Using Server Manager
- Consolidates administrative functions to make a server easier to manage
- Server Manager typically has two main panels:

| Left-Side Panel                                           | Right-Side Panel |
| --------------------------------------------------------- | ---------------- |
| Displays all available manageable services and components | Displays relevant dashboard or menu based on the current selected item on the left panel<br> Alerts administrators of any system issues that cross the entire system in near real-time manner                 |

![500](https://i.imgur.com/m3kieDe.png)

![500](https://i.imgur.com/lMch7pn.png)

![500](https://i.imgur.com/BTqfZGj.png)

![500](https://i.imgur.com/4MhXdik.png)

![500](https://i.imgur.com/Qn5LSgJ.png)

![500](https://i.imgur.com/1B8gtx5.png)

## Installing and Removing Server Roles
**Two common roles for a Windows Server 2016**
- **File and Storage Services Role**
	- Focuses on sharing files from server
	- Use the server to coordinate and simplify file sharing through **Distributed File System (DFS)**
- **Print Document Services Role**
	- Used to manage network printing services
	- Can offer one or more network printers connected to the network through the server itself

## Using the Best Practices Analyzer (BPA) for the Server Roles
- It is important to determine that the best practices for the establishment of the role are followed
- BPA can be used to determine if one or more roles are installed and configured to follow guidelines recommended by Microsoft
- When problems are found, analysis of each role yields reports with **three levels of severity:**
	- Information
	- Warning
	- Error

### Guidelines for BPA
- Configuration
- Security
- Pre-deployment
- Post-deployment
- Performance
- BPA Pre-requisites

### General Steps for BPA
1. Open Server Manager
2. Click Local Server in the left pane
3. On the right pane, scroll to the Best Practices Analyser
4. Click the down arrow for **Tasks**
5. Click Start BPA Scan and wait for the scan to complete
6. Read the results for the scan

## Using the System File Checker
- To scan system files for integrity
- Scan all system files to verify integrity
- Scan and replace files as needed
- Scan only certain files
- Can be manually run from the Command Prompt or PowerShell window
	- Requires administration rights - `sfc /scannow`
- **Best Use Cases:**
	- Initial checking on a new system based on a new installation media or baseline
	- To verify the integrity of a possible compromised system
	- To recover a malfunctioned system due to corrupted system files

### Using Sigverif to Verify System and Critical Files
- `Sigverif` verifies system and critical files to determine if they have a signature
	- Only scans file
	- Does not overwrite inappropriate files
		- Enabling the use of the tool while users are logged on 
- After the scan is complete, results are written to a log file `sigverif.txt`
- If the tool finds a file without a signature that needs to be replaced:
	- File can be replaced when users are off the system

## Understanding the Windows Server 2016 Registry
> - A complex database containing all information the operating system needs about the entire server
> - Registry is the coordinating centre for a specific server

- **Data contained in the Registry:**
	- Information about all <u>hardware components</u>
	- Information about the Windows Server 2016 services installed
	- Data about user profiles and Windows Server 2016 group policies
	- Data on the last current and last known setup used to boot the computer
	- Configuration information about all software in use
	- Software licensing information
	- Server Manager and Control Panel parameter configurations

### Registry Editor
- Launched from the Start Button **Run** or **Command Prompt** option `regedit`
- **Precautions when working with the Registry:**
	- Establish specific group of administrators who have privileges to open and modify the Registry
	- Only make changes to the Registry as a <u>last resort</u>
	- Regularly back up the Registry as part of backing up the Windows Server 2016 Windows folder
	- Never copy the Registry from one Windows-based system over to the registry of a different system

### Registry Contents
| Component              | Description                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| Hierarchical Structure | Made up of keys, subkeys and entries                                                       |
| Registry Key           | Category or division of information within the Registry                                    |
| Registry Subkeys       | Single key can contain one or more lower-level keys                                        |
| Registry Entry         | Data parameter associated with a software or hardware characteristic under a key or subkey |
| Root Key               | Primary or highest level category of data contained in the Registry<br> Total of 5 root keys                                                                                           |

![](https://i.imgur.com/cGUrSpz.png)

#### HKEY_LOCAL_MACHINE
- Contains information on every hardware component in the server
- Includes the following information:
	- What drivers are loaded and their version levels
	- IRQ lines used
	- Set-up configurations
	- BIOS version

> A few subkeys stored as a set are called **hives**

![](https://i.imgur.com/QGYRCfi.png)

#### HKEY_CURRENT_USER
- Contains information about the desktop setup for the account currently signed in to the server console
- Alias for HKEY_USERS\ logged-on user's hive

#### HKEY_USERS
- Contains profile information for each user who has logged onto the computer
- Each profile is listed under this root key
- Within each user profile is information identical to that viewed in the HKEY_CURRENT_USER root key
	- Profile used when signed in is one of the profiles stored under HKEY_USERS

#### HKEY_CLASSES_ROOT
- Holds data to associate file extensions with programs
	- Alias for HKEY_LOCAL_MACHINE\Software\Classes
- Associations exist for executable files, text files, graphics files, Clipboard files, audio files etc.
	- Used as defaults for all users who log on to the Windows Server 2016
- Hackers can manipulate the subkeys or registry entries of this root key easily to install spyware, man-in-the-middle attack malware into the victim's system

#### HKEY_CURRENT_CONFIG
- HKEY_CURRENT_CONFIG root key
- Has information about the current hardware profile
- Holds the following information:
	- Monitor type
	- Keyboard
	- Mouse
	- Other hardware characteristics for the current profile

### Backing Up the Registry
- Before working on the Registry
	- It is important to have a backup of its contents
- **Easiest way to create a backup:**
	- Set a restore point
- **If Registry is damaged after working on it:**
	- Go back to the restore point created just before working on the Registry
- **How to create a restore point?**
	- Using the Checkpoint-Computer `cmdlet` in the PowerShell

## Active Directory Basics
### Active Directory
- Directory service that houses information about all network resources e.g. servers, printers, user accounts, groups of user accounts, security policies, emails and other information
- Windows Server 2016 uses it to manage accounts, groups and other network management services
- Records password changes
- Can be distributed around the world

### Directory Service
- Responsible for providing a central listing of resources and ways to quickly find and access specific resources and providing a way to manage network resources

### Domain Controllers (DCs)
- Servers that have AD DS server roles installed
- Contains writable copies of information in the Active Directory

### Member Servers
- Servers on a network managed by Active Directory that do not have Active Directory installed

### Domain
- Container that holds information about all network resources grouped within it
- Logical group that share the same Active Directory
- Every resource is called an <u>object</u>

### Multi-Master Replication
- Each DC is equal to every other DC
	- Contains the full range of information that composes the Active Directory
	- If information on one DC changes, it is replicated to all other DCs

> **Active Directory** is built to make replication efficient
> - Replicates individual properties instead of entire accounts
> - Replicate Active Directory on the basis of the speed of the network link

### General Concepts for Understanding the Active Directory
- Schema
- Global Catalog
- Namespace

![](https://i.imgur.com/wLsdxlY.png)

#### Schema
- Defines the objects and the information pertaining to those objects (attributes) that can be stored in the Active Directory
- **Examples of object classes:**
	- User accounts
	- Computers
	- Groups
- **Caveat:**
	- Replication between Domain Controllers require the involved parties to be having an identical Active Directory schema

![](https://i.imgur.com/uTsGYqd.png)

#### Global Catalog
- Stores information about every object within a forest
- First DC configured in a forest becomes global catalog server
- **Global Catalog Server:**
	- Stores a full replica of every object within its own domain and partial replica of each object within every domain in the forest (small number of attributes)
	- Enables forest-wide searches of data
- **Purposes:**
	- Serving as the central storehouse of key object information in a forest with multiple domains
	- Providing lookup and access to all resources in all domains
	- Providing replication key Active Directory elements
	- Keeping a copy of most used attributes for each object for quick access
	- By default, the first DC in the forest is automatically designated as the global catalog server
		- There is an option of configuring another DC to be a global catalog server as well as designating multiple DCs as global catalog servers

#### Namespace
- A logical area on a network that contains directory services and named objects
- Uniquely identifies a domain
- Has the ability to perform name resolution
- Active Directory uses the **Domain Name System (DNS)**
	- There must be a DNS server on the network that the Active Directory can access
- Active Directory also employs two kinds of namespaces:
	- Contiguous
	- Disjointed

![](https://i.imgur.com/ExsC7E0.png)

| **Contiguous**                                    | **Disjointed** |
| ------------------------------------------------- | -------------- |
| Child object contains the name of a parent object | Child object does not resemble name of parent object               |

### Containers in Active Directory
- Forests
- Trees
- Domains
- Organizational Units (OUs)
- Sites

![](https://i.imgur.com/hti5TgU.png)

### Active Directory Structure
**Logical Structure:**
- Forests
- Trees
- Domains
- Organisational Units
- Site Objects

**Physical Structures:**
- Domain Controllers
- Sites (Actual Physical Network)

### Forest
- Consists of one or more Active Directory trees in a common relationship
- **Characteristics:**
	- Trees can use a disjointed namespace
	- All trees use the same schema
	- All trees use the same global catalog
	- Domains enable administration of commonly associated objects e.g. accounts and other resources within a forest
	- Two-way transitive trusts automatically configured between domains within a single forest

![](https://i.imgur.com/Yt1Sc2t.png)

- Forest provides a means to relate the trees using a contiguous namespace in domains within each tree
	- Which have disjointed namespaces in relationship to each other
- **Advantage of joining trees into a forest:**
	- All domains share the same schema and global catalog

#### Domain Functional Level
- Refers to the Active Directory functions supported forest-wide
- **Types of Forest Functional Levels Recognised by the Active Directory:**
	- Windows 2000 Native Forest Functional Level
	- Windows Server 2003 Forest Functional Level
	- Windows Server 2008 Forest Functional Level
	- Windows Server 2008 R2 Forest Functional Level
	- Windows Server 2012 Forest Functional Level
	- Windows Server 2012 R2 Forest Functional Level
	- Windows Server 2016 Forest Functional Level
- When servers are upgraded, forest functional levels are raised to match the server OS in use

![](https://i.imgur.com/XcIZSDW.png)

### Tree
- Contains one or more domains in a common relationship
- **Characteristics:**
	- Domains are represented in a contiguous namespace and can be in a hierarchy
	- Two-way trust relationships exist between parent and child domains
	- All domains in a single tree use the same schema for all types of common objects
	- All domains use the same global catalog
- Domains in a tree typically have a hierarchical structure
	- Such as a root domain at the top and other domains under the root
- Domains within a tree are in a **Kerberos Trust Relationship**
	- Consists of two-way trusts between parent domains and child domains
	- Allows any one domain to have access to the resources of all the others

### Domain
- A logical partition within an Active Directory forest
- A grouping of objects that typically exist as a primary container within the Active Directory
- **Basic Functions:**
	- Provide an Active Directory "partition" in which to house objects that have a common relationship in terms of management and security
	- To establish a set of information to be replicated from one DC to another
	- To expedite management of a set of objects

![400](https://i.imgur.com/ythbhu7.png)

#### Domain Functional Levels
- Refers to the Windows Server operating systems on Domain Controllers and the domain-specific functions they support
- **Types of Domain Functional Levels:**
	- Windows 2000 Native Domain Functional Level
	- Windows Server 2003 Domain Functional Level
	- Windows Server 2008 Domain Functional Level
	- Windows Server 2008 R2 Domain Functional Level
	- Windows Server 2012 Domain Functional Level
	- Windows Server 2012 R2 Domain Functional Level
	- Windows Server 2016 Domain Functional Level

### Organisational Unit (OU)
- Offers a way to achieve more flexibility  in managing the resources associated with a business unit, department or division
- A grouping of related objects within a domain
	- Allows grouping of objects that can be administered using the same group policies
- OUs can be nested within OUs
- **Three concerns in mind when creating OUs:**
	- Microsoft recommends to limit OUs to 10 levels or fewer
	- Active Directory works more efficiently when OUs are set up horizontally instead of vertically
	- The creation of OUs involves more processing resources as each request through an OU requires more CPU time

### Site
- TCP/IP-based concept within the Active Directory linked to IP subnets

- **Functions:**
	- Reflects one or more interconnected subnets
	- Reflects the physical aspect of the network
	- Used for DC replication
	- Used to enable a client to access the DC that is physically the closest
	- Composed of only two types of objects: servers and configuration objects
- Sites are based on the connectivity and replication functions

- **Reasons to define a site:**
	- Enable a client to access network servers using the most efficient physical route
	- DC replication is the most efficient when Active Directory has information about which DCs are in which locations

- **Advantage of creating a site:**
	- Sets up redundant paths between DCs
	- Paths are used for replication

#### Bridgehead Server
- DC that is designated to have the role of exchanging replication information
- Only one bridgehead server is set up per site

![300](https://i.imgur.com/hELMuL9.png)

## Active Directory Guidelines
- Keep the Active Directory as simple as possible
- Plan its structure before implementing it
- Implement the least number of domains possible
	- with one domain being the ideal and building from there
- Implement only one domain on most small networks
- Use OUs to reflect the organisation's structure
- Create only the number of OUs that are absolutely necessary
- Do not build an Active Directory with more than 10 levels of OUs
- Use domains as partitions in forests to demarcate commonly associated accounts and resources governed by group and security policies
- Implement multiple trees and forests only as necessary
- Use sites in situations where there are multiple IP subnets and geographical locations
	- Acts as a means to improve logon and DC replication performance

## Security Configuration Wizard
- Useful security tools for Windows Server 2008-2012 R2
- SCW examines the roles a server plays
	- Tries to adjust security settings to match these roles
	- Unlike BPA, SCW allows the administrator the choice of applying the adjustment immediately or not
- SCW can do the following:
	- Disable unnecessary services and software
	- Close network communication ports and other communication resources not in use
	- Examine shared files and folders to help manage network access through access protocols
	- Configure audit policy
- **Components in SCW:**
	- GUI interactive wizard
	- Database
	- Command-line tool called `scwcmd`
- **Security Configuration Database (SCD)**
	- Group of XML files that establish a security policy

**`scwcmd` command-line options**

| Option      | Description                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| `analyze`   | Analyses current security settings in the SCD                                                           |
| `configure` | Configures security settings and writes them to the SCD                                                 |
| `register`  | Registers new SCD extensions                                                                            |
| `rollback`  | Rolls back security settings to the previously configured settings                                      |
| `transform` | Converts XML security settings in the SCD to a Group Policy Object (GPO) usable in the Active Directory |
| `view`      | View the current security settings in the SCD                                                                                                        |



