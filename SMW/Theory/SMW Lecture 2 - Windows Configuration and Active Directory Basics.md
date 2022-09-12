# SMW Lecture 2 - Windows Configurations and Active Directory Basics

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
- When problems are found, analysis of each role yields report with **three levels of severity:**
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
	- To recover a malfunction system due to corrupted system files

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
> - Registry is the coordinating center for a specific server

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
- Contains information about the desktop setup for the account currently signed in to the server con