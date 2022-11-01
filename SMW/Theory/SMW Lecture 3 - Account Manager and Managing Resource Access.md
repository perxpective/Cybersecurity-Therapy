# SMW Lecture 3 - Account Manager and Managing Resource Access

###### tags: #SMW 

## Table of Contents
```toc
```

## User Account Management
- **Default accounts:**
	- Administrator
	- Guest
- Accounts can be set up in <u>two general environments</u>:
	- **Local User Accounts**
		- Accounts that are set up via a stand-alone server that does not have an Active Directory
	- **Domain User Accounts**
		- Accounts that are set up in a domain when the Active Directory is installed
- When accounts are created in the domain through Active Directory, these accounts can be used to access any server or resource in the domain

> **Notes:** Default accounts are created automatically and can be threats to a system
> - Hackers can use these accounts to hack into a system

---
### Creating Accounts When Active Directory Is Not Installed 
- New accounts are created by first installing the *Local Users and Groups* MMC snap-in for stand-alone serve that do not use the Active Directory

![500](https://i.imgur.com/HzjKYpM.png)

![](https://i.imgur.com/dL3LzWz.png)
![](https://i.imgur.com/fBWTeiy.png)

### Creating Accounts When Active Directory Is Installed
- When Active Directory is installed and the server is a Domain Controller:
	- Use Active Directory Users and Computers tool either from:
		- The Windows Administrative Tools folder
		- Tools in Server Manager
		- MMC snap-in

### Disabling, Enabling, and Renaming Accounts
- When user takes a leave of absence, you have the option to disable their account
- Organisations might also have the practice of disabling accounts when someone leaves and enabling the account of the person's replacement

> **Extra Information:**
> - To preserve file ownership and forensic information, a user account should be disabled before being deleted from the system
> - Each user account object has a unique object SID or GUID which can be used to link event log records with the associated user account
> - Once an account is deleted, the linkage is broken and can cause difficulties in forensic investigations
> - Moreover, all files and folders owned by the account will be automatically changed to pass the ownership to the system administrators
> 	- Can cause security implications e.g. system administrators not being allowed to own and access highly classified information in those files and folders

### Move an Account
- When an employee moves from one department to another
	- Might need to move that person's account from one container to another
- Security group membership affects user's permissions for resources access
- OU affects user's security settings
- Security settings to a user is often mixed up with permissions granted to a user

### Resetting a Password
- Administrators do not have the option to look up a password, but can reset passwords for users
- For organisations that have accounts that manage sensitive information:
	- It is advisable to have specific guidelines that govern the circumstances under which an account password is reset

### Delete an Account
- <u>Good practice:</u>
	- Deleting accounts that are not in use
	- Failure to do so could expose a company to security risks
- <u>When an account is deleted:</u>
	- Its **globally unique identifier (GUID)** is also deleted and will not be reused even if you create another account using the same name

> **Recovering a deleted account**
> - By default, the Active Directory Recycle Bin is off

## Security Group Management
- For resource permissions management, one of the best ways to manage accounts is by grouping accounts that have similar characteristics
- **Scope of influence**
	- The reach of a group for gaining access to resources in Active Directory
- <u>Types of groups:</u>
	- Local
	- Domain local
	- Global
	- Universal


> **Note:** local group is not part of the Active Directory, 
> - Only exists and visible in the machine where it belongs
> - A local group can take in members from the Active Directory but not the vice-versa

- All of these groups can be used for security or distribution groups

| Security Groups                                                                  | Distribution Groups                                                                  |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Used to enable access to resources on a standalone server or in Active Directory | Used for email or telephone lists to provide quick, mass distribution of information |
| The resources access permission is simply implementing via group membership                                                                                 |                                                                                      |

#### Properties of Groups
- Properties of specific groups can be configured
	- Through Local Users and Groups tool for local groups or;
	- In the Active Directory Users and Computers tool for domain groups
- Properties are configured using the following tabs:
	- General
	- Members
	- Member Of
	- Managed By

#### Organizational Units (OU) vs Security Groups
- Group Policies applied to OUs (e.g. password changes)
- Delegation of authority are also applied to OUs
- Security groups are used to assign file and folder permissions, shared folder permissions and any type of resources permissions

> **Extra Information:**
> - User group policy settings also control other settings with serious security implications

### Implementing Local Groups
> **Local Security Groups** are used to manage resources on a standalone computer that is not part of a domain and on member servers in a domain
- Instead of installing Active Directory, you can divide accounts into local groups
	- Each group would be given different security access based on the resources at the server

### Implementing Domain Local Groups
> **Domain Local Security Groups** are used when Active Directory is deployed
> - Typically used to manage resources in a domain and give global groups from the same and other domains
> - Give global groups from the same and other domains access to those resources

- Scope of a domain local group is the domain in which the group exists
- Typical purpose of a domain local group is to provide access to resources
	- Grant access to servers, folders, shared folders, and printers to a domain local group
- Only put domain local groups in access control lists
	- Members of the domain local groups should mainly be global groups

- **Membership Capabilities of a Domain Local Group**

| Active Directory objects that can be members of a domain local group                                           | Active Directory objects that a domain local group can join as a member                                           |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| User accounts in the same domain                                                                               | Access control lists for objects in the same domain e.g. permissions to access a folder, shared folder or printer |
| Domain local groups in the same domain                                                                         | Domain local groups in the same domain                                                                            |
| Global groups in any domain in a tree or forest (as long there are transitive or 2-way trust relationships)    |                                                                                                                   |
| Universal groups in any domain in a tree or forest (as long there are transitive or 2-way trust relationships) |                                                                                                                   |

### Implementing Global Groups
> **Global Security Group**
> - Intended to contain user accounts from a single domain
> - Can also be set up as a member of a domain local group in the same or another domain

- Global groups can container user accounts and other global groups from the domain in which it was created
- Can be converted in a **universal group**
	- As long as it is not nested in another global group or universal group

> **Typical use for a global group:**
> - To build it with accounts that need access to resources in the same or other domain
> - Make global group in one domain a member of a domain local group in the same or other domain
> - Enables one to manage user accounts and their access to resources through one or more global groups (while reducing the complexity of managing accounts)

### Implementing Universal Groups
> **Universal Security Groups** - Provides a means to span domains and trees
- Universal group membership can include user accounts from any domain, global groups from any domain and other universal groups from any domain
- Offered to provide an easy means to access any resources in a tree
- **Guidelines to help simplify how you plan to use the groups:**
	- Use global groups to hold accounts as members
	- Use domain local groups to provide access to resources in a specific domain
	- Use universal groups to provide extensive access to resources

### Implementing Security Groups and Resources Permission
- **Two acronyms:**
	- AGDLP
	- AGUDLP

| Letter | Meaning      |
| ------ | ------------ |
| A      | Account      |
| U      | Universal    |
| G      | Global       |
| DL     | Domain Local |
| P      | Permissions  |

- There are many Group/Resources Permission approaches
	- AP
	- AGP
	- AUP
	- AGUP
- The shorter of the A to P distance implies
	- Easier to create
	- More difficult to maintain (error-prone)

#### Case Comparison
- You can simplify this routine administrative task by creating a group with **domain local scope** and assigning it with permission to access the printer **(Printer Group)**
- Put 5 user accounts in a group with the global scope and add this group to the **domain local** scope **(Printer Users Group)**
- When you want to give five users access to a new printer, assign the group with domain local scope permission to access the new printer
- All members of the group with the global scope automatically receive access to the new printer

## Managing Folder and File Security
- Creating accounts and groups are the initial steps for sharing resources
	- Next steps are to create **access control lists (ACLs)** to secure these objects and set them up for sharing

### Discretionary ACL (DACL)
- ACL that is configured by server administrator or owner of an object
- Related to resource permissions

### System ACL (SACL)
- Contains information used to audit access to an object
- Related to Active Directory object audit settings

> DACL and SACL controls for folder and files:
> - Attributes
> - Permissions
> - Auditing
> - Ownership

### Configuring Folder and File Attributes
- Stored as header information with each folder and file
	- Along with other characteristics including:
		- volume label
		- designation as a subfolder
		- date of creation
		- time of creation
- Two basic attributes remain in NTFS that are still compatible with FAT
	- Read-only and hidden
	- On General tab in an NTFS folder or file properties dialog box
- NTFS offers advanced or extended attributes
	- Accessed by clicking the General tab's Advanced button
- Advanced attributes are archive, index, compress and encrypt

![](https://i.imgur.com/UmrJiaH.png)
![](https://i.imgur.com/VYSmaXO.png)

- **Archive attribute:**
	- Indicates that the folder or file needs to be backed up as it is new or changed
	- File server backup systems can be set to detect files with archive attribute to ensure those files are backed up
- **Index attribute vs Windows Search Service:**

| Index Attribute                                                                                                                                         | Windows Search Service                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| NTFS index attribute used to index folder and file contents so that file properties can be quickly searched in Windows Server 2016 via Indexing service | To use the Windows Search Service, must install the File and Storage Services role via the Server Manaager |

- **Compress attribute**
	- A folder and its contents can be stored on the disk in compressed format
	- Compression saves space and can work on compressed files in the same way as on uncompressed files
	- Compressed files increase CPU overhead to open files and copy them
	- **Best practices for using the compress attribute**
		- Busy servers that experience high-volume write or execute operations are poor candidates for compression
		- Servers that are rarely accessed or archived on the server can be candidates
		- User home folders on server typically have high levels of read and write activity and generally should not be compressed

![](https://i.imgur.com/MP5ZCjF.png)

- **Encrypt attribute:**
	- Protects files and folders so that only the user who encrypts the file or folder can read it
	- Encrypted folder or file uses the Microsoft Encrypting File System (EFS)
		- Sets up unique, private encryption key associated with user account that encrypted the folder and file
	- When moving an encrypted file to another folder on the same computer, file remains encrypted even if it is renamed
	- **Cipher command:**
		- Usual tool that works in PowerShell for EPS operations

- **Best practices for using EFS:**
	- Move files for encryption into specifically designated folders flagged for encryption
	- Safer for an application to work on a file in an encrypted folder rather than work on an individually encrypted file
	- User and server administrators should frequently export certificates and private keys to portable media and store media in a secure place

### Configuring Folder and File Permissions
> **Permissions** - control access to an object e.g. folder and files

- When configuring a folder so that domain local group has access to only read contents of that folder
	- Configuring permissions
- At the same time, the folder's discretionary access control list (DACL) of security descriptors is configured

![](https://i.imgur.com/k5uB5zc.png)

- If need to customize permissions, there is an option to set up special permissions for particular group or user
- Known as **advanced permissions configuration**
- Microsoft provides best practice guidelines for setting permissions:
	- Protect `\Windows` folder contains OS files on Windows from general users through allowing limited access to Windows Server 2016 and its subfolders
	- Protect server utility folders with access permissions only for Administrators, Server Operators and Backup Operator groups
	- Protect software application folders with **Read**, **Execute** and **Write** to enable users to run applications and write temporary files
	- Create publicly used folders to have **Modify** access
	- Provide users full control of their own home folders
	- Remove unnecessary access groups from confidential folders
	- Use Deny sparingly

### Configuring Folder and File Auditing
- Enables activity tracking on a folder or file
- Windows Server 2016 NTFS folders and files enables auditing of a combination of any or all of activities listed as advanced permissions

### Configuring Folder and File Ownership
- With permissions and auditing setup, ownership of fille should be verified
- Folders are first owned by the account that creates them
- Folder owners have the ability to change permissions for the folders they create
- Ownership can be transferred only by having the **Take Ownership** advanced permission or **Full Control** permission

### Configuring Shared Folders and Permissions
- A folder can be set up as a shared folder for users to access over the network
- Configuring shared folders include features so that the person configuring a share is more aware of security options
- Sharing a folder or file consists of first enabling sharing

#### Enabling Sharing
- First step:
	- Make sure folder or file and printer sharing is enabled
- Network discovery can be turned on
- It is necessary for users to be able to access server's shared file/folder and printer resources

![](https://i.imgur.com/wl86gd8.png)

#### Configuring Folder/File Sharing Through Folder/File Properties
- Share permissions for folder or file
	- Can be set by configuring sharing (using the File Sharing window) and folder's or file's Sharing tab in Properties dialog box
- When configuring sharing using Advanced Sharing options:
	- Share permissions include full control and change
	- Configured using the Advanced Sharing button on the Sharing tab of the Properties
- **Share Permissions:**
	- Read
	- Write
	- Change/Contribute
	- Custom
	- Full Control
	- Owner

![](https://i.imgur.com/vnS106m.png)

- Folders can be cached to make contents of shared folder available offline
	- Any offline files that have been modified can be synchronised with network versions of the files
- **Three ways of caching:**
	- Only files and programs that users specify will be available offline
	- No files or programs from shared folder are available offline
	- All files and programs that users open from shared folder are automatically available offline
- **Access-Based Enumeration:**
	- Permits user to view only folders and files for which they have permissions
	- Besides hiding a shared folder using the `$` sign, access-based enumeration can be enabled

> **Take note:**
> - Folder caching is a good feature when client is unable to connect to Domain Network all the time
> - Can work with cached files within client and update the actual version at a later time when client connects back to network
> - However, this feature can cause issues if multiple users are accessing the same file while offline

#### Configuring Sharing Through Server Manager
- Offers an interface for managing permissions and shares from one tool
- **Server Message Block (SMB) Protocol** 
	- Enables OS to offer shared files, folders, printers, serial ports and other port communications on a network
- **Network File System (NFS) Protocol**
	- Used for file and folder sharing on UNIX and Linux systems
	- When installed on Windows system share, enables it to be accessed by UNIX and Linux computers
- **File Server Resource Manager Role Service**
	- Allows folder quotas to be set

#### Publishing a Shared Folder in Active Directory
- To publish an object:
	- Means to make it available for users when they view the contents of the Active Directory
	- Makes it easier to find when user searches for that object
- Active Directory search capabilities are automatically built into all modern Windows OS including Windows 10 and Server 2016
- When an object is published, it can be published to be shared for domain-wide access or managed through an organisational unit (OU)

## Troubleshooting a Security Conflict
- Windows Server 2016 offers the Effective Access tab in the Properties tab of a folder or file
	- Tool to help troubleshoot permissions conflicts
- Using the Effective Access tab, effective permissions assigned to a user or group can be viewed
- Calculation will take into account group membership and permission inheritance
- When a file or folder is created, copied or moved, the file and folder permissions can be affected in the following ways:
	- Newly created file inherits permissions already set up in a folder
	- File that is <u>copied</u> from one folder to another on the same volume inherits the permissions of the folder which it is copied
	- File or folder that is <u>moved</u> from one folder to another on the same volume takes with it the permissions it had on the original folder
	- File or folder that is <u>moved or copied</u> to a folder on a different volume inherits the permissions of the folder to which it is moved or copied
	- A file or folder that is <u>moved or copied</u> from an NTFS volume to a folder in a FAT or FAT32 volume that is not protected by NTFS permissions 
		- but does not inherit the same permissions if they are assigned to the FAT/FAT32 folder
	- File and folder that is <u>moved or copied</u> from a FAT volume to a folder in an NTFS volume inherits the permissions already assigned in the NTFS folder

### Combining NTFS and Shared Folder Permissions
- When accessing a shared folder over the network, both NTFS and Share permissions are considered
- When NTFS and Share permissions are combined, the more restrictive permission applies