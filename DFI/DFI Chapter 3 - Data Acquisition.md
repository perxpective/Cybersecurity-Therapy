# DFI Chapter 3 - Data Acquisition

###### tags: #DFI

## Table of Contents
```toc
```

## Storage Formats for Digital Evidence
- Data in forensics acquisition tool stored as **image file**
- Can be one of the three:
	- Raw format
	- Proprietary format
	- Advanced Forensics Format (AFF)

### Raw Format
- Makes it possible to write bit-stream data to files

| Advantages                                        | Disadvantages                                                                                             |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Fast data transfers                               | Requires too much storage as original disk or data                                                        |
| Ignores minor data read errors on source drive    | Tools might not collect marginal sectors due to low threshold of retry reads on weak media spots on drive |
| Most computer forensics tools can read raw format |                                                                                                           |

### Proprietary Format
- Have their own formats

| Advantages                                                                       | Disadvantages                                        |
| -------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Option to compress or not compress image files (Save space)                      | Unable to share image between different tool/vendors |
| Can split an image into smaller segmented files (integrity check for split data) | File size limitation for each segmented volume       |
| Can integrate metadata into file                                                 |                                                      |

### Advanced Forensics Format
> AFF is **open source**

**Design goals:**
- Provide compressed or uncompressed image files
- No size reduction for disk-to-image files
- Provide space in image file or segmented files for metadata
- Simple design with extensibility
- Open source for multiple platforms
- OSS vendor have no implementation restrictions on this format
- Internal consistency checks for self-authentication

> **File extensions:**
> - `.afd` for segmented image files
> - `.afm` for AFF metadata

## Best Acquisition Method
 **Two types of data acquisition:**
- Static acquisitions
- Live acquisitions
  
**Four methods of data collection:**
- Creating disk-to-image file
- Creating disk-to-disk
- Creating logical disk-to-disk
- Creating sparse copy of file or folder

### Creating Disk-to-Image File
- Most common method, most flexibility
- More than one copy can be made
- Copies are bit-for-bit replications of original drive
- Example of tools: ProDiscover, EnCase, FTK, SMART, Sleuth Kit, X-Ways, iLookIX

### Creating Disk-to-Disk
- When disk-to-image copy is not possible
- Tools can adjust disk's geometry (tracks, sectors)
- EnCase, SnapCopy, SafeBack

### Logical/Sparse Acquisition
**Reasons:**
- Use when your time is limited
	- **Logical acquisition** captures only specific files of interest to case
	- **Sparse acquisition** captures deleted data
- Large disks
- For PST or OST mail files, RAID servers (up to several terabytes)

#### Considerations when making a copy
- Size of source disk
	- Lossless compression might be useful (does not remove data permanently, target does not need to be too big)
	- Use digital signatures for verification
- When working with large devices, alternative is using tape backup system
- Whether you can retain the disk
	- Sometimes after copy, original disk may need to be returned to owners 

## Contingency Planning for Image Acquisition
- Create duplicate copy of evidence image file
	- In case of failure
- Make at least two images of digital evidence
	- Using different tools/techniques
- Copy **host protected area (HPA)** - area not visible for OS on drive
	- Use hardware acquisition tool that can access hard drive at BIOS level then HPA
- Be prepared to deal with encrypted drives
	- Windows has whole disk encryption called BitLocker which makes static acquisition difficult
	- May require user to provide decryption key (suspect may not cooperate)

## Using Acquisition Tools
### Acquisition Tools for Windows
| Advantages                                                  | Disadvantages                                                                       |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Makes acquiring evidence from suspect drive more convenient | Must protect acquired data with well-tested write-blocker hardware device           |
|                                                             | Tools cannot acquire data from disk's host protected data                           |
|                                                             | Some countries haven't accepted use of write-blocking devices for data acquisitions |

### Capturing Image with ProDiscover Basic
- Connecting suspect's drive to workstation
  - Document chain of evidence for drive
  - Remove the drive from suspect computer
  - Configure suspect drive jumpers as needed
  - Connect suspect drive to write-blocker device
  - Create storage folder on target drive
  - ProDiscover creates:
    - image files with `.eve` extension 
    - log file with `.log` extension
    - special inventory file with `.pds` extension 
    - if compression option selected, uses `.cmp` extension

### Capturing Image with AccessData FTK Imager Lite
- Windows data acquisition tool included with AccessData Forensic Toolkit
- Designed for viewing evidence disks and disk-to-image files
- Makes disk-to-image copies of evidence drives at logical partition and physical drive level
- Image files can be segmented
- Evidence drive must have hardware write-blocking device 
	- or run from Live CD like Mini-WinFE

![](https://i.imgur.com/jyDeDdv.png)

![](https://i.imgur.com/nyMRPJu.png)

- FTK Imager however cannot acquire drive **host protected area (HPA)**

**Use write-blocking device and follow steps:**
1. Boot to Windows
2. Connect evidence disk to write-blocker
3. Connect target disk to write-blocker
4. Start FTK Imager Lite
5. Create disk image - use physical drive option

## Validating Data Acquisitions
- Requires a hashing algorithm utility
- Validation techniques:
	- CRC-32, MD5, SHA-1, SHA-512

### Windows Validation Methods
- Third party utilities used such as WinHex (hexadecimal editor)
- Commercial computer forensics programs have built-in validation features
	- Each program has its own validation technique
	- ProDiscover `.eve` files contain metadata in acquisition file or segmented files
    - Including hash value of suspect drive or partition
- Raw image format do not contain metadata
	- Separate manual validation recommended for all raw acquisitions

### Using Remote Network Acquisition Tools
- It is possible to remotely connect to suspect computer and copy data from it
- Many tools e.g. Encase and ProDiscover allow remote acquisition
- Drawbacks:
	- antivirus, antispyware, firewall tools can be configured to ignore remote access programs and access can be blocked
	- suspects can easily install their own security tools that trigger alarm to notify them of remote access intrusions

### Remote Acquisition Tool
Being able to connect to suspect computer directly allows following capabilities:
- Preview suspect drive remotely while in use or powered on
- Perform live acquisition (also called a **smear**) as disk data is altered while suspect computer is turned on
- Encrypt connection between suspect and examiner computer
- Copy suspect computer's RAM while computer is on
- Use optional stealth mode to hide remote connection from suspect while data being acquired or previewed

> **Other functions:**
> - Create volatile system state information
> - Analyse current running processes on remote system
> - Locate unseen files and processes on remote system that might be running malware or spyware
> - Remotely view and listen to IP ports on compromised system
> - Run hash comparisons on remote system to search for Trojans and rootkits
> - Create hash inventory of all files on system remotely to establish baseline if attacked

## Using Other Acquisition Tools
### Magnet Axiom
- Able to recover digital evidence from most sources including:
	- smartphones
	- cloud services
	- computers
	- IoT devices
	- third-party images
- Helps forensics professionals find most relevant data and visualize it for better analysis

### PassMark Software ImageUSB
- ImageUSB downloaded from OSForensics website 
- Free utility (can write image concurrently to multiple USB flash drives)

### Runtime Software
- Offers shareware programs for data acquisition and recovery
	- DiskExplorer for FAT and NFTS
- Features:
	- Create raw format image file
	- Segment raw format or compressed image for archiving purposes
	- Access to network computer drives

### Source Forge
- Provides several applications for security, analysis and investigations

