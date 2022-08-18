# DFI Chapter 6 - Analysis and Validation

###### tags: #DFI

## Table of Contents
```toc
```

## Determining What Data to Collect and Analyse
<u>Depends on:</u>
- amount of data to process
- nature of the investigation
- corporate investigators locating and recovering few specific items e.g. emails, simplifying and speeds up processing

> **Scope Creep**
> - When investigation expands beyond original description
> - Due to unexpected evidence found
> - Attorneys may ask investigators to examine other areas to recover more evidence
> - Increase time and resources needed to extract, analyse and present evidence
> - Required to document additional time spent on recovering additional evidences

- **Scope creep** is becoming more common
  - Criminal investigations require more detailed examination of evidence before trial
  - Help prosecutors fend off attacks from defence attorneys

## Approaching Digital Forensics Cases
- Begin case by creating investigation plan to define the following:
	- Goal and scope of investigation
	- Materials needed
	- Tasks to perform
- Approach largely depends on type of case investigating:
	- Corporate
	- Civil
	- Criminal

> - **Corporate cases** tend to be easier due to easy access to evidence
> - **Criminal cases** more difficult due to scope (need to contact ISP to gather evidence)

### Basic Steps for Digital Forensics Investigations
1. For target drives, use recently wiped media that have been <u>reformatted</u> and <u>inspected</u> for viruses
2. Inventory hardware on suspect computer, take note of condition of the seized computer
3. For static acquisitions, remove original drive and check date and time in system CMOS
4. Record how the data was acquired from suspect drive
5. Process drive contents methodically and logically (emails, JPG, spreadsheet, word)
6. List folders and files on image and drive and note where it is found
7. Examine contents of all data files in folders (starting from root directory)
8. Recover file contents for all password-protected files (use password recovery tools)
9. Identify function of every executable file (`.exe`) that does not match <u>known hash values</u>
10. maintain control of all evidence and findings

## Using OSForensics to Analyse Data
- Can perform forensics analysis on the following file systems:
	- Microsoft FAT12, FAT16, FAT32
	- Microsoft NTFS
	- Mac HFS+, HFSX
	- Linux Ext2fs and Ext4fs
- OSForensics and also analyse data from other sources including image files from other vendors

![](https://i.imgur.com/Dz2YLfi.png)


## Validating Forensic Data
- Ensuring integrity of data collected is essential for presenting evidence in court
- Most forensic tools offer hashing of image files

> Example: ProDiscover loads an image file:
> - Runs a hash and compares value with original hash calculated when image first acquired

### Validating with Hexadecimal Editors
- Offers features not available in digital forensics tools like:
	- Hashing specific files or sectors
	- Use forensics tool to search for suspicious file that might have its name changed to look like an innocuous file
![](https://i.imgur.com/VdrpxHK.png)

#### Using hash values to discriminate data
- AccessData has its own hashing database known as **Known File Filter (KFF)**
- KFF filters known program files from view and contains hash values of known illegal files
- Compares known file hash values with files on evidence drive to see if they contain suspicious data
- Other forensics tools can import NSRL database and run hash comparisons 

#### ProDiscover
- `.eve` files contain metadata that includes hash values
- Has a preference that can be enabled for using **Auto Verify Image Checksum** feature when image files loaded
- If Auto Verify Image Checksum and hashes in `.eve` file metadata do not match:
	- ProDiscover will notify that acquisition is corrupt and cannot be considered reliable evidence
- Raw format image files do not contain metadata
	- They must be validated manually to ensure integrity

## Data Hiding
> **What is data hiding?**
> - changing or manipulating a file to conceal information

<u>Techniques</u>:
- Hiding entire partitions
	- By using Disk Management
- Changing file extensions
- Setting file attributes to hidden
	- By changing file signature
- Bit-shifting
	- Shift 1 bit to the left
- Using encryption
- Setting up password protection

### Hiding Files Using OS
#### Changing File Extensions
- Advanced digital forensics tools check file headers
	- Compares the file extension to verify that it is correct
	- If there are discrepancies, tool flags the file as a possible altered file
- Another hiding technique is **selecting the hidden attribute in file's properties dialog box**

#### Hiding Partitions
- Using the `diskpart remove letter` command.
	- Can unassign partition's letter which hides it from view in File Explorer
- To unhide, use `diskpart assign letter` command.
- Other disk management tools:
	- Partition Magic
	- Partition Master
	- Linux Grand Unified Bootloader (GRUB)
- To detect if partition is hidden:
	- Account for all disk space when examining evidence drive
	- Analyse any disk areas containing space that cannot be accounted for
	- In ProDiscover, hidden partition appears as highest available drive letter set in BIOS

![](https://i.imgur.com/fn9jN82.png)
![](https://i.imgur.com/HotG2fn.png)

### Marking Bad Clusters
> **Explaining Marking Bad Clusters**
> - Data hiding technique used in FAT file systems by placing sensitive or incriminating data in free or slack space on disk partition clusters
> - Involves using old utilities such as Norton and DiskEdit

- They can mark good clusters and bad clusters in FAT table so OS considers them as unusable
	- Only way they can be access from OS is to change them back to good clusters using a disk editor
- **DiskEdit** only runs in MS-DOS and can access only FAT-formatted disk media

### Bit Shifting
- Some users use low-level encryption program, changing the order of binary data
  
  > **Does this by:**
  > - Making altered data unreadable
  > - To secure a file, users run assembler program (macro) to scramble bits
  > - Run another program to restore scrambled bits to original order

- **Bit shifting** changes data from readable code to data that looks like binary executable code
- **WinHex** has feature for shifting bits

## Steganalysis
> **Steganography**
> - Greek word for 'hidden writing'
> - Hides messages in such a way that only the intended recipient knows the message is there
>   **Steganalysis**
> - Term for detecting and analysing steganography files
>   **Digital Watermarking**
> - Developed to protect file ownership
> - Not visible when used for steganography

- Steganography can be done using <u>steganography tools</u>
	- Most of them are freeware or shareware
	- Insert information into variety of files
- If plaintext file encrypted with PGP and encrypted text is inserted into a steganography file - <u>cracking the encrypted message is extremely difficult</u>

#### Steganalysis Methods
- **Steg-only attack**
  - Only have covered file to analyse
- **Known cover attack**
  - Has both covered file and converted covered file to analyse
- **Known message attack**
  - When hidden message is revealed later
- **Chosen steganography attack**
  - Steganography tool is used
- **Chosen message attack**
  - Steganalyst generates stego-object from steganography tool or algorithm of chosen message

### Examining Encrypted Files
- To decode an encrypted file
	- Users provide password or passphrase
- Many encryption programs use technology called "key escrow"

> **Key escrows** are designed to recover encrypted data if users forget their passphrases or if user key corrupted after a system failure

- Key sizes of 2048 bits and 4096 bits make breaking them nearly impossible with current technology

### Recovering Passwords
- Password cracking tools available for handling password-protected data or systems
	- Some integrated into digital forensics tools

**Standalone tools:**
- Last Bit
- AccessData PRTK
- ophcrak
- John The Ripper
- Passware

#### Brute Force Attacks
- Done by using every possible letter, number and character found on a keyboard
- Requires a lot of time and processing power

#### Dictionary Attack
- Uses common words found in dictionary and tries them as passwords
- Uses a variety of languages
- With many passwords, hackers <u>can build profiles</u> of suspect to help determine their password (common information)
- Many password-protected OSs and applications store passwords in MD5 or SHA hash values
- Brute-force attack requires converting dictionary password from plaintext to hash value
	- Requires additional CPU cycle time

#### Rainbow Attack
- File containing hash values of every possible password that can be generated from computer keyboard
- Faster than brute-force or dictionary attack since no conversion required

#### Salting Passwords
- Aims to make password cracking difficult
- Alters hash values with additional bits added to password and makes cracking passwords more difficult
