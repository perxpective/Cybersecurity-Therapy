# DFI Chapter 5 - Evidence Processing

###### tags: #DFI

## Table of Contents
```toc
```

## Understanding File System
- Type of file system an OS uses determines how data is stored on the disk
- When accessing suspect's computer to gather info
	- Should be familiar with computer's OS and file system.

## Understanding Boot Sequence
- **Complementary Metal Oxide Semiconductor** (CMOS)
	- Stores sys configuration, date and time info in CMOS
- **Basic Input Output System** (BIOS) or **Extensible Firmware Interface** (EFI)
	- Contains programs that perform input/output at hardware level
- **Bootstrap Process**
	- Contained in ROM, tells computer how to proceed
	- Displays the key/keys you pressed to open CMOS setup screen
		- Besides date and time, BIOS settings are stored in CMOS
- CMOS should be modified to boot from a forensic floppy disk or CD
	- prevents evidence from hard disk being overwritten

![](https://i.imgur.com/tdf3C9g.png)

BIOS can configure:
- System Time/Date
- Boot Sequence
- Plug and Play
- Mouse/Keyboard
- Drive Configuration
- Security
- Power Management etc.

## Understanding Disk Drives
- Disk drives are made up of one or more platters coated with magnetic material
- <u>Disk drive components:</u>
	- Geometry (Structure of data)
	- Head
	- Tracks
	- Cylinders
	- Sectors (Typically has 512 bytes each)
- Properties handled at drive's hardware or firmware level include:

| Property                 | Explanation                                                                      |
| ------------------------ | -------------------------------------------------------------------------------- |
| Zone bit recording (ZBR) | Grouping tracks by zones ensures that all tracks hold the same amount of data    |
| Track density            | Space between each track -- the smaller the space, the more track on the platter |
| Areal density            | Number of bits in one square inch of a disk platter                              |
| Head and cylinder skew   | Improve disk performance by minimizing movement of read/write head               |

## Solid-State Storage Devices
- All flash memory devices have a feature called **wear-levelling**

> **Wear-levelling:** Internal firmware feature used in **solid-state drives** ensuring even wear of read and writes for all memory cells

- Generally, memory cells can perform 10k-100k reads/writes
- When dealing with solid-state drives, making full forensic copy as soon as possible is necessary
	- In case there is a need to recover data from unallocated disk space, **wear-levelling** feature automatically overwrites unallocated space

## Exploring Microsoft File Structures
- In Microsoft file structures, sectors are grouped to form **clusters**

> **Clusters:** Storage allocation of one or more sectors

- Combining sectors reduces overhead of writing or reading files to a disk
- Clusters are numbered sequentially starting at 0 in NTFS and 2 in FAT

> First sector of all disks contains a **system area, boot record and file structure database**

- OS assigns these cluster numbers called **logical addresses**
	- Address point to relative position
- Sector numbers called **physical addresses**
	- From address 0 to last sector of disk
- Clusters and addresses are specific to specific logical disk drive which is a **disk partition**

## Disk Partitions
- A partition is a logical drive
- Windows OS can have three primary partitions followed by extended partition that can contain more than one logical drives

	<img title="" src="https://i.imgur.com/DJ3Jwuz.png" alt="" data-align="center" width="384">

> **Partition Gap:** unused space between partitions and can be used to hide data
> 
> **Partition Table:** a table maintained on disk by the operating system describing partitions on the disk

- key hexadecimal codes are used to identify and maintain file system
- **Partition table** is located in the **Master Boot Record (MBR)**
	- Located at sector 0 of the disk drive, preceding first partition
- MBR stores information about partitions on a disk and their locations, size and other important items
- In a hexadecimal editor, the first partition at offset **`0x1BE`** can be found
	- **File system's hexadecimal code** is offset by **3 bytes** from `0x1BE` for first partition
	- **Sector address** of where partition starts on drive offset by **8 bytes** from `0x1BE`
	- **Number of sectors** assigned to the partition are offset **12 bytes** from `0x1BE`

	![](https://i.imgur.com/Nc6DTxr.png)

## FAT Disks
> **FAT (File Allocation Table):** File structure database that Microsoft originally designed for floppy disks

- FAT database typically written to disk's outermost track
- Contains the following:
	- Filenames
	- Directory names
	- Date
	- Timestamps
	- Starting cluster
	- File attributes
- Four current FAT versions:
	- FAT12
	- FAT16
	- FAT32
	- exFAT
- Cluster sizes can vary according to disk drive size and file system

| Drive Size   | Sectors per cluster | FAT16     |
| ------------ | ------------------- | --------- |
| 8-32 MB      | 1                   | 512 Bytes |
| 32-64 MB     | 2                   | 1 KB      |
| 62-128 MB    | 4                   | 2 KB      |
| 128-256 MB   | 8                   | 4 KB      |
| 256-512 MB   | 16                  | 8 KB      |
| 512-1024 MB  | 32                  | 16 KB     |
| 1024-2048 MB | 64                  | 32 KB     |
| 2048-4096 MB | 128                 | 64 KB     |

- Microsoft OS allocate disk space for files by clusters -- results in **drive slack** 

> **Drive slack**: Unused space in a cluster between end of an active file and end of the cluster

- Drive slack includes:
	- **RAM slack** -> portion of last sector used in last assigned cluster
	- **File slack** -> unused space allocated for a file
- An unintentional side effect of FAT16 having large clusters was reducing fragmentation as cluster size increased

### Examining FAT Disks
- When there is no more space for allocated cluster
	- OS allocates another cluster for file, creating more slack space on disk
- As files grow and require more disk space, assigned clusters are chained together
	- The chain can be broken or fragmented due to deleted files or expansion files
- When OS stores data in FAT file system, it is assigned a starting cluster position to file
	- Data for file written to the first sector of first assigned cluster
	- When first assigned cluster filled and runs out of room, FAT assigns next available cluster to file

![](https://i.imgur.com/ZkqQo6k.png)

- Document size is 5000 bytes of data
- OS allocates about 32,000 bytes or 64 sectors (512 bytes per sector) for this file (assuming hard disk size is 1.6G)
- Unused space (27,000 bytes) is the file slack
- RAM slack is portion of the last sector (10th sector)
- Data used to fill RAM slack is pulled from RAM
- Any information in RAM placed in RAM slack

### Deleting FAT Files
- When a file is deleted in Microsoft OS:
	- Directory entry marked as a deleted file
	- With hex **E5** character replacing first letter of filename
	- FAT chain for that file set to 0
- Data in file remains on disk drive
- Area of disk where deleted file resides becomes **unallocated disk space**
	- Available to receive new data from newly created files or other files needing more space

## Examining NTFS Disks
> **NTT File System (NTFS)**
> - Introduced with Windows NT
> - Main file system for Windows 8 or later

- Improvement over FAT file systems
	- Provides more information able file
	- Gives more control over files and folders
- Microsoft's move towards <u>journaling file system</u>
	- Records transaction before system deletes a file
- In NTFS, everything is written to the disk is considered a file
- On an NTFS disk:
	- First data set - **Partition Boot Sector**
	- Next - **Master File Table (MFT)**
- Results in much <u>less file slack space</u>
- Clusters smaller for smaller smaller disk drives
- Uses **Unicode** - international data format

| Drive size                    | Sectors per cluster | Cluster Size |
| ----------------------------- | ------------------- | ------------ |
| 7-512 MB                      | 8                   | 4 KB         |
| 512 MB - 1 GB                 | 8                   | 4 KB         |
| 1-2 GB                        | 8                   | 4 KB         |
| 2 GB - 2 TB                   | 8                   | 4 KB         |
| 2-16 TB                       | 8                   | 4 KB         |
| 16-32 TB                      | 16                  | 8 KB         |
| 32-64 TB                      | 32                  | 16 KB        |
| 64-128 TB                     | 64                  | 32 KB        |
| 128-256 TB                    | 128                 | 64 KB        |
| Note: Sector size = 512 bytes |                     |              |

### NTFS System Files
| Filename   | System File           | Record Position | Description                                                                                                                                     |
| ---------- | --------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `$Mft`     | MFT                   | 0               | Base file record for each folder on NTFS volume; other record positions in MFT allocated if more space needed                                   |
| `$MftMirr` | MFT 2                 | 1               | First four records of MFT saved in this position. If single sector fails in first MFT, records can be recovered                                 |
| `$LogFile` | Log file              | 2               | Transactions stored here to allow recovery after system failure in NTFS volume                                                                  |
| `$Volume`  | Volume                | 3               | Information specific to volume like label and version stored here                                                                               |
| `$AttrDef` | Attribute definitions | 4               | Table listing attribute names, numbers and definitions                                                                                          |
| `$`        | Root filename index   | 5               | Root folder on NTFS volume                                                                                                                      |
| `$Bitmap`  | Cluster bitmap        | 6               | Map of NTFS partition shows which clusters are in use and which are available                                                                   |
| `$Boot`    | Boot sector           | 7               | Used to mount NTFS volume during bootstrap process. Addition code is listed here if it is the boot drive for the system                         |
| `$BadClus` | Bad cluster file      | 8               | For clusters that have unrecoverable errors. Entry of cluster location made in this file.                                                       |
| `$Secure`  | Security file         | 9               | Unique security descriptors for volume listed in this file, where access control list (ACL) maintained for all files and folders in NTFS volume |
| `$Upcase`  | Upcase table          | 10              | Converts all lowercase characters to uppercase Unicode characters for NTFS volume                                                               |
| `$Extend`  | NTFS extension file   | 11              | Optional extensions listed here like quotas, OIDs, reparse point data                                                                           |
|            |                       | 12-15           | Reserved for future use                                                                                                                         |

- **Master File Table (MFT)** contains information about all files on the disk
	- Includes system files OS uses
- In MFT, first 15 records are reserved for system files
- Records in MFT are called <u>metadata</u>

#### MFT and File Attributes
- All files and folders stored in separate records of **1024 bytes each**
- Each record contains file or folder information
	- Information divided into record fields containing metadata
- Record field referred to as an **attribute ID**
- File or folder information typically stored in one of two ways in NFT record:
	- **Resident**
	- **Nonresident**

| Attribute ID | Purpose                                                                                                                                                                                                                                                                                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0x10`       | $Standard_Information<br>Field that contains data on file creation, alterations, MFT changes, read dates and times, and DOS file permissions                                                                                                                                                                                                                                  |
| `0x20`       | $Attribute_List<br>  Attribute that do not fit in MFT (nonresident attributes) listed with their locations                                                                                                                                                                                                                                                                    |
| `0x30`       | $File_Name<br> Long and short names for file contained here. Up to 255 Unicode bytes available for long filenames.<br> For POSIX requirements, additional names or hard links can also be listed.<br> Files with short filenames only have one attribute ID `0x30`. <br> Long filenames have two attribute ID `0x30`s in MFT record, one for short name and one for long name |
| `0x40`       | $Object_ID <br> Ownership and who has access rights to file or folder listed here. <br> Every MFT record assigned a unique GUID. Depending on NTFS setup, some file records might not contain this attribute ID                                                                                                                                                               |
| `0x50`       | $Security_Descriptor <br> Contains access control list (ACL) for file                                                                                                                                                                                                                                                                                                         |
| `0x60`       | $Volume_Name<br> Volume-unique file identifier listed here. Not all files need this unique identifier                                                                                                                                                                                                                                                                         |
| `0x70`       | $Volume_Information<br> Field indicates version and state of volume                                                                                                                                                                                                                                                                                                           |
| `0x80`       | $Data<br> File data for resident files or data runs for nonresident files                                                                                                                                                                                                                                                                                                     |
| `0x90`       | $Index_Root<br> Implemented for use of folders and indexes                                                                                                                                                                                                                                                                                                                    |
| `0xA0`       | $Index_Allocation<br> Implemented for use of folders and indexes                                                                                                                                                                                                                                                                                                              |
| `0xB0`       | $Bitmap<br> Bitmap indicating cluster status, such as which clusters are in use and which are available                                                                                                                                                                                                                                                                       |
| `0xC0`       | $Reparse_Point<br> Field is used for volume mount point and installable file system (IFS) filter drivers. For IFS, marks specific files used by drivers                                                                                                                                                                                                                       |
| `0xD0`       | $EA_Information<br> For use with OS/2 HPFS                                                                                                                                                                                                                                                                                                                                    |
| `0xE0`       | For use with OS/2 HPFS                                                                                                                                                                                                                                                                                                                                                        |
| `0x100`      | $Logged_Utility_Stream<br> This field is used by Encrypting File System (EFS) in Windows 2000 or later                                                                                                                                                                                                                                                                                                                                                                              |

- Basic Information of file in MFT starts at `0x10`
- Each MFT record starts with header specifying if it is resident or nonresident
- Files that are larger than 512 bytes are stored outside the MFT
	- MFT record provides cluster where file is stored on drive's partition
	- Referred to as data runs
- For very small files (512 bytes or less), all file metadata and data stored in MFT record

**Resident File Attributes:**
![](https://i.imgur.com/6r0BW3w.png)

**Nonresident File Attributes:**
![](https://i.imgur.com/SPXTBn4.png)

- When a disk is created as NTFS file structure
	- OS assigns logical clusters to entire disk partition
- Assigned clusters are called **logical cluster numbers (LCNs)**
	- Become the addresses that will allow MFT to link to nonresident files on disk partition
- When data is first written to nonresident files, LCN address assigned to the file
	- LCN becomes file's **virtual cluster number (VCN)**

![](https://i.imgur.com/MJEdC6h.png)

### MFT Structures for File Data
- For **header of all MFT records**, record fields of interest are as follows:
	- At offset `0x00` - MFT record identifier file
	- At offset `0x14` - length of header (indicates where next attribute starts) 
		- Convert hexadecimal to decimal for number of bytes
	- At offset `0x1C` to `0x1F` - size of entire MFT record
	- At offset `0x32` and `0x33` - the <u>update sequence array</u> stores the last 2 bytes of first sector of MFT record
		- Update sequence array used as a checksum for record integrity validation

![](https://i.imgur.com/TnPkwO3.png)

**Standard Information Attribute**
- Create date and time
- Last modified date and time
- Last access date and time
- Record update date and time

![](https://i.imgur.com/ixkgFhI.png)

### NTFS Alternate Data Streams
> **Alternate Data Streams**
> - Ways data can be appended to existing files
> - Can obscure valuable evidentiary data intentionally or by coincidence

- In NTFS, **alternate data stream** becomes **additional file attribute**
	- Allows file to be associated with different applications
- Can only tell whether file has data stream attached by examining that file's MFT entry

### NTFS Compressed Files
- Provides compression similar to FAT
- Under NTFS, files, folders or entire volumes can be compressed
- Most computer forensics tools can unzip and analyze compressed Windows data

### NTFS Encrypting File System (EFS)
> **Encrypting File System (EFS)**
> - Introduced with Windows 2000
> - Implements **public key** and **private key** method of encrypting files, folders or disk volumes

- When EFS used in Windows 2000 and later:
	- **Recovery certificate** generated and sent to local Windows administrator account
		- Recovery certificate required if there is a problem
- Users can apply EFS to files stored on local workstations or remote server

#### EFS Recovery Key Agent
- **Recovery Key Agent** implements recovery certificate (in Windows administrator account)
- Windows administrators can recover key in two ways:
	- through Windows
	- MS-DOS command prompt
		- Cipher (NTSF only)
		- Copy
		- `efsrecvr` ( for decrypting EFS files. NTSF only)

### Deleting NTFS Files
- When file deleted in Windows NT and later:
	- OS renames it and moves it to Recycle Bin
- Use Del (delete) MS-DOS command to delete file 
	- *Does not rename and move deleted file to recycle bin*
	- *Instead eliminates file from MFT listing in same way FAT does*

## Understanding Whole Disk Encryption (WDE)
- <u>Current whole disk encryption tools offer the following features:</u>
	- Preboot authentication
		- single sign-on password, fingerprint scan
	- Full or partial disk encryption with secure hibernation
		- Password protected screen saver
	- Advanced encryption algorithms
		- AES or IDEA
	- Key management function
		- Passphrase to reset password

- **WDE tools** encrypt each sector of drive separately
- Many of these tools encrypt drive's boot sector 
	- This is to prevent efforts to bypass secured drive's partition
- To examine an encrypted drive, decrypt it first.
	- Run vendor-specific program to decrypt drive
	- Many vendors use bootable CD or USB drive that prompts for OTP
- **Without necessary credentials to unlock encrypted drive, not possible to view any logical level information**

## Examining Microsoft BitLocker
- #### Hardware and software requirements
	- Computer capable of running Windows Vista or later
	- **Trusted Platform Module** (TPM) microchip, version 1.2 or newer
		- stores RSA encryption keys specific to host system for hardware authentication
	- Computer BIOS compliant with **Trusted Computing Group (TCG)**
	- 2 NTFS partitions
	- BIOS configured so that hard drive boots first before checking other peripherals

## Understanding the Windows Registry
- #### Registry
	- Database that stores the following:
		- Hardware and software configuration information
		- Network connections
		- User preferences
		- Setup information
	- To view registry, use the following:
		- **Regedit** (Registry Editor)
			- program for Windows 9x systems
		- **Regedt32** for Windows 2000, XP, Vista
		- Both utilities can be used for Windows 7 or later

#### Registry Terminology
- Registry
- Registry Editor
- HKEY
- Key
- Subkey
- Branch
- Value
- Default Value
- Hives

| HKEY                  | Function                                                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `HKEY_CLASS_ROOT`     | Symbolic link to `HKEY_LOCAL_MACHINE\SOFTWARE\Classes`<br> Provides file type and file extension information, URL protocol prefixes etc. |
| `HKEY_CURRENT_USER`   | Symbolic link to `HKEY_USERS`<br> Stores settings for currently logged-on users                                                          |
| `HKEY_USERS`          | Stores information for currently logged-on user; only one key in HKEY linked to `HKEY_CURRENT_USER`                                      |
| `HKEY_CURRENT_CONFIG` | Symbolic link to `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\HardwareProfile\xxxx`<br> Where xxxx represents current hardware profile   |
| `HKEY_DYN_DATA`                      | Used only in Windows 9x/Me systems, stores hardware configuration systems                                                                                                                                          |

## Understanding Microsoft Startup Tasks
### Startup in Windows 7 and 8
- Windows 7/8 is a multiplatform OS
- Boot process uses a **boot configuration data (BCD)** store
- BCD contains **boot loader** that initiates system bootstrap process
	- Press <kbd>F8</kbd> or <kbd>F12</kbd> when system starts to access Advanced Boot Options

### Startup in Windows NT and Later
- All NTFS computers perform following steps when computer turned on:
	- Power-on Self Test (POST)
	- Initial startup
	- Boot loader
	- Hardware detection and configuration
	- Kernel loading
	- User logon
- Startup Files for Windows Vista
	- `Bootmgr.exe`
	- `Winload.exe`
	- `Winresume.exe`
- BCD editor for modifying boot options and updating BCD registry file
- BCD store (Namespace container for BCD objects)
	- Replaces Windows XP `boot.ini` file
	- Old Windows uses `boot.ini` to configure boot sequences
- Startup files for Windows XP:
	- `NTLDR`
	- `boot.ini`
	- `ntoskrnl.exe`
	- `bootvid.dll`
	- `hal.dll`
	- `bootsect.dos`
	- `NTDetect.com`
	- `NTBootdd.sys`
	- `pagefile.sys`

**Why know the start-up process?**
- Contamination concerns with Windows XP
- When you start Windows XP NTFS workstation, several files accessed immediately
	- Last access date an time stamp for files change to current date and time
	- Destroys any potential evidence that shows when Windows XP workstation was last used

## Virtual Machines
> **What are Virtual Machines?**
> - Creates a representation of another computer on an existing physical computer
> - Just a few files on hard drive that must be allocated space to
- Virtual machine recognizes components of physical machine it is loaded on
	- Virtual OS limited by physical machine OS
	- This is because behavior of virtual OS could be affected by physical machine's OS
- Virtual machines make it possible to restore suspect drives
- Test can be performed and run nonstandard software suspect might have loaded
- **Potential Issues:**
	- Virtual machine used to attack another system or network
	- File slack and unallocated space don't exist on VM so many standard items may not work on VMs