# DFI Chapter 10 - Android Forensics

###### tags: #DFI

## Table of Contents
```toc
```
## Introduction to Android Forensics
- Android forensics handle the extracting, recovering, and analysis of data in an Android device through various techniques under **forensically sound** conditions
- Due to open nature of Android OS, forensics techniques and methods can be applied to more than just mobile phones
	- Can be other devices that run Android OS

## Challenges in Mobile Forensics
- Wide range of operating systems and device models
- Preventing data alterations on mobile devices
- Inherent security features
- Legal issues

## Seizure and Isolation
- Take note of location where mobile phone is collected
	- Take picture of location using a camera
- Chain of custody:

 - Document to maintain each record of digital evidence from collection to presentation
 - Another part of documentation is:
> 	- Taking pictures of crime scene
> 	- Acquiring the following:
> 		- Original state of mobile device
> 		- Make, model and serial number
> 		- IMEI number
> 		- OS version

- Take pictures of mobile phone before starting any progress
- Request for pin, pattern, password, SIM pin
- Check for Unified Endpoint Management solutions
- Note status of device
	- Whether it is powered on or off
		- If powered on, check battery and network status
	- Check where screen is locked
- Search or request for SIM and if found any cables around

### Isolation Techniques
**If device is on**
- Activate airplane mode
- Check and manually disable hotpots or GPS locations, Wi-Fi and Bluetooth toggles
- Do not remove SIM or SD card at this point
- Connect phone to power bank
- Put phone, adapters and charges into a Faraday bag (if have)

**If device is off**
- Do not turn it on
- Place it in an evidence bag or box
- If you have Faraday bag handy, place phone, adapter and chargers into Faraday bag
- Bring back to forensics lab
- Write-protect SD card and remove SIM card
- Perform proper acquisition of both SIM and SD card
- Phone cannot be left powered off during acquisition of phone
- Turn on phone if necessary and treat it as if it was on
- Apply isolation techniques mentioned earlier

### Forensics Acquisition
> Process of acquiring original evidence in forensically sound manner while maintaining its integrity
- Also known as "Imaging"
- Can be done onsite or offsite

### Hashing 
> Method used to prove integrity of evidence
- Done after acquisition of device
- MD5 or SHA widely used to calculate hash values
- Hash values should be documented to maintain record of digital evidence

## Gathering Information on Device Accessibility
### Factors
- Android version
- Device security
	- Pattern
	- PIN
	- Password
	- Fingerprint
	- Facial recognition
	- Bluetooth device lock and unlock
- Device accessibility
	- Non-root access
	- Root access

### Mode of transfers
- **Bluetooth**
	- Mobile acquisition can be performed by utilizing <u>Android Debugging Bridge (ADB)</u> via Bluetooth connection
- **Wireless**
	- Mobile device and acquisition machine need to be connected to the same Wi-Fi network
	- Device acquisition can be performed by using ADB via Wi-Fi

#### Prerequisites
**Media Transfer Protocol**
- Allow media files to be transferred automatically between portable device
- Guaranteed uninterrupted device acquisition

**Enabling USB Debugging**
- Developer option which enables analysis machine to connect to a device via the Android Debugging Bridge
- ADB acts as a bridge between computer and mobile phone
- Communicate with phone from computer via ADB
- To use ADB, USB debugging options to be enabled on the phone

**Increasing Screen Time**
- Enabling this option makes the device stay awake longer, does not get locked
- Option usually found under Settings > Developer options

## Types of Acquisition
### Advanced Logical
- Combines logical and file system extraction methods

### Manual Acquisition
- Examiner uses user interface of phone to browse and investigate
- No special tools or techniques needed
- Manual extraction of chat messages (screenshots, export to external media)
- Limitation:
	- Only files and data visible through normal UI
	- Data extracted through other methods can also be verified using this
	- Data on device can be modified easily

### Brute-Force Acquisition
- Use of offensive techniques like password cracking, patterns, pins and rooting the device

## Operating Modes of Android
### Android Safe Mode
- Safe mode builds clean and secure environment
- Third-party apps disabled and greyed out
- Troubleshoot smartphone's problem
	- e.g. restarting itself, lagging, freezing, battery issues, disappearance of data, third-party applications

### Android Recovery Mode
> **Recovery** -> Android-based lightweight runtime environment separate from and parallel to main Android operating system
- Two types of recoveries:
	- Stock recovery
	- Custom recovery
- Several custom recovery images in the market e.g. ClockworkMod Recovery, TeamWin Recovery Project

### Android Fastboot Mode
- Tool/protocol that comes with Android SDK (software developer kit) package
- Can be used to re-flash partitions on Android device
- Alternative to recovery mode for doing installations and updates
- Fastboot mode can be used for unlocking bootloader for certain Android device models

## Rooting Android Phone
> **Rooting** is the process of letting users of Android phones gain highest privilege (root user privilege on Android phone)

- Android is based on Linux
	- Thus gaining root access same as gaining root user access or administrative access on Linux OS
- From forensics perspective, main reason from rooting is to gain access to those parts of system normally not accessible
- Most public root tools result in permanent root
	- Changes persist after rebooting device
- In case of temporary root, changes lost once device reboots
- Temporary roots should always be preferred over permanent for forensic acquisition
- Can easily modify data on device 

## Introduction to Android Operating System
> **Android** is a mobile operating system based on modified version of Linux kernel
> - Developed by Open Handset Alliance (OHA)
> - Group in charge of Android smartphone OS
- Created by Google and includes key members like China Mobile, HTC, Intel, Motorola, NTT Docomo, Sprint and T-Mobile USA

## Android Architecture
![500](https://i.imgur.com/VMeW1dC.png)

### Linux Kernel
- Manages all core functionalities of Android:
	- process management
	- memory management
	- security
	- networking

![600](https://i.imgur.com/ldZ3ntF.png)


### Hardware Abstraction Level (HAL)
- Allows higher level, Java API framework to work with hardware of mobile device with support from standard interfaces
- Can be done due to multiple library modules, providing interfaces for different types of hardware components like Bluetooth or camera

![600](https://i.imgur.com/8BJKkvW.png)


### Android Runtime
- Since Android 5.0, instance that every application runs with together with its own process
- Allows multiple virtual machines to run on low-memory devices by executing DEX (Dalvik Executable) files
- Prior to version 5.0, Dalvik was Android Runtime, so applications developed for Dalvik should work when running with ART

### Native C/C++ Libraries
- Many core Android system components and services (like HAL and ART) built from native code
- They require native libraries written in C and C++

![600](https://i.imgur.com/EnpvEJE.png)

### Java API Framework
- Allows developers to create applications using modular system components and services as building blocks
	- **View system** - allows to build user interface of application and includes lists, grids, text boxes, buttons, etc.
	- **Resource Manager** - provides access to non-code components of application like localized strings, graphics and layout files
	- **Notification Manager** - allows applications to display custom alerts
	- **Activity Manager** - manages life cycle as applications and their back stacks order in each activity is opened
	- **Content Providers** - allows applications to access other application data and share their own

![600](https://i.imgur.com/wceSCJs.png)

### Application Layer
- Topmost layer in Android stack
- Consists of applications called apps which are programs user interact directly with

![600](https://i.imgur.com/aMZuwXM.png)

#### System Apps
- Applications preinstalled on phone
- Generally cannot be uninstalled or changed by user as they are read-only on production devices although some devices offer option to disable these apps
- If system app is disabled, app and its data remain on device on system partition, app icon is merely hidden from the user
- Applications can normally be found in `/system/partition`
- Beginning Android 4.4, apps installed in `/system/priv-app/` treated as privileged applications and are granted permissions with protection-level or (`signatureOrSystem`) to privileged apps

#### User Installed Apps
- Applications downloaded and installed by user from distribution platforms (e.g. Google Play)
- Google Play is official app store for Android OS
- Apps are present under `/data` partition

## Android Security
- Linux kernel provides Android security features

> - Aims of security features and offerings:
> 	- Protect user data
> 	- Protect system resources
> 	- Make sure that one application cannot access data of another application

### User-Based Permissions Model
- Android OS implemented permission model for individual apps
- Application must declare list of permissions required under file called `manifest.xml`
- When user installs application, Android presents permission list to user so they can view list to allow or disallow installation
- Cannot install an Android application with few permissions
	- Either accept all permissions or decline to install it

### Application Sandboxing
- By default, Android makes use of Linux user-based protection model
- Every Android application assigned a UID and is run as a different process
- By default, application cannot access data of other application
- If application tries anything malicious, it can do within the context and permission assigned by the OS

![600](https://i.imgur.com/KGIy4mF.png)
### SELinux in Android
- From Android 4.3, SELinux supported by Android
- SELinux Android uses MAC (Mandatory Access Control) to ensure that application runs in isolated environment
- With SELinux Android, if user installs malicious app, malware cannot access OS and corrupt the drive

### Application Signing
- All Android apps signed by developer or owner to determine author of the app
- Key store and private key used during signing need to be protected for pushing a new update to application

### Secure Interposes Communication
- Sandboxing obtained between processes using UID assigned to different processes
- Binder framework in Android provides capabilities required to organize all types of communication between various processes
- All communications between processes using Binder framework occur via Linux kernel driver `/dev/binder`

![500](https://i.imgur.com/zylaCff.png)

## Android File Systems
- No singularly defined system for Android
- Common Android File Systems supported by Android phones:
	- Flash Memory File Systems
	- Media-Based File Systems
	- Pseudo File Systems

### Flash Memory File Systems
> - Type of non-volatile memory that erases data in units called blocks
> - Rewrites data at byte level
- Extended File Allocation Table (exFAT)
-  Flash Friendly File System (F2FS)
- Journal Flash File System Version 2 (JFFS2)
- Yet Another Flash File System Version 2 (YAFFS2)
- Robust File System (RFS)

### Media-Based File Systems
- Extended File System (EXT2/EXT3/EXT4)
- File Allocation Table (FAT, FAT12, FAT16, FAT32)
- Virtual File Allocation Table (VFAT)

### Pseudo File Systems
> Virtual entries that file system itself make up on processes or functions

- For example, `/proc` on many operating systems is a process information file system which dynamically generates directories for every process
- Control group
- `rootfs`, `procfs`
- `yfsf`
- `tmpfs`

### Partitions
- Android uses more than one file system and multiple partition to organize files and folders in device
- In the file system, partitions represented by directories
- There may be other partitions that differ in each model
![](https://i.imgur.com/kfbmtX4.png)

| Partition              | Explanation                                                                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Boot loader            | Responsible for booting Android kernel into other boot modes e.g. recovery mode, download mode, etc.                                                                      |
| `/boot`                | Contains information and files needed to boot the phone <br/>Without this partition, device cannot boot into normal mode                                                  |
| `/recovery`            | Allows device to boot into recovery console through which activities e.g. phone updates and other maintenance operations are performed                                    |
| `/data` or `/userdata` | Device's internal storage for application data <br/>Contains all user data like SMS, contacts, settings and data related to installed apps                                |
| `/cache`               | Used to store frequently accessed data e.g. recovery logs and update packages downloaded over cellular network                                                            |
| `/misc`                | Contains other important system setting information e.g. USB configuration, carrier ID and other hardware settings                                                        |
| `/sdcard`              | Partition for SD card, not for internal memory <br/>Stores any type of data e.g. media, documents, ROM, etc. <br/>Can be internal or external SD card depending on device |
| `/sd-ext`              | Commonly used by custom ROMs and not a standard Android partition <br/>Additional partition on SD card that act as data partition in custom ROMs with features like app2sd to get additional storage for installing their apps                                                                                                                                                                          |

## Android File Hierarchy
- Basic understanding of Android File Hierarchy helps forensic analyst narrow down research to specific locations

### Directories Overviews
#### acct
- Mount point for acct cgroup (control group) that provides for user accounting

#### cache
- Directory `/cache` where Android stores frequently accessed data and app components
- Wiping cache does not affect personal data, deletes existing data
- Another directory in this folder called "lost+found"
- Holds recovered files in event of filesystem corruption e.g. incorrectly removing SD card without unmounting it and so on
- Cache may contain forensically relevant artefacts e.g. images, browsing history and other app data

#### d
- Symbolic link to `/sys/kernel/debug`
- Folder used to mount debugfs file system and to debug kernel

#### data
- Partition contains data of each application
- Most of data belonging to user e.g. contacts, SMS, dialled number etc. stored in this folder
- Significant importance from forensics perspective as it contains valuable data
	- <u>Important sub-directories under</u> `/data` <u>or</u> `/userdata`
| Partitions      | Descriptions                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `/dalvik-cache` | Folder contains several logs that might be useful during examination depending on underlying requirements                    |
| `/data/data`    | Contains private data of all apps                                                                                            |
| `/dev`          | Contains special device files for all devices <br/>Defines devices available to applications                                 |
| `/init`         | When botting Android kernel, init program executed                                                                           |
| `/mnt`          | Serves as mount point for all file systems, internal and external SD cards                                                   |
| `/proc`         | Contains files with useful information about processes                                                                       |
| `/root`         | Home directory for root account, can only be accessed if device is rooted                                                    |
| `/misc`         | Miscellaneous settings (Information about hardware, USB settings etc.)                                                       |
| `/sdcard`       | Partition containing data present on SD card of device, default folders e.g. `android_secure`, Android, DCIM, media and etc. |
| DCIM            | Photos, videos and thumbnail files taken and stored                                                                          |
| `/system`       | Contains libraries, system binaries and other system-related files <br/>Pre-installed applications in the phone also present                                                                                                                             |

### Ways to Store Data
- Various sources of data on Android:
	- Apps that come along with Android
	- Apps installed by manufacturer
	- Apps installed by wireless carrier
	- Apps installed by user

#### Shared Preferences
- Store data in key-value pairs of data types in `.xml` format
- Save user preferences data of current application (e.g. user account name, passwords, settings)
- Files typically stored in application's `/data/data/<package_name>/shared_prefs`

#### Internal Storage
- Files located in application's `/data/data` subdirectory
- Data stored is private and cannot be accessed by other applications
- Internal data for each app stored in respective folders
- `shared_pref`, `lib`, `cache`, `database` folders created for most applications
- **Folder descriptions:**
	- `shared_prefs` - XML file of shared preferences contains data in key-value pair
	- `lib` - custom library files required by app
	- `files` - developer saved files
	- `cache` - files cached by app
	- `databases` - SQLite and journal files

#### External Storage
- Can be removable data such as SD cards, non-removable storage that comes with phone
- SD cards usually formatted with FAT32 filesystem
	- But can be stored as other filesystems e.g. EXT3, EXT4 also using increasingly
- Data stored in SD card are public and can be accessed by other applications 
	- Provided requesting apps have necessary permissions

#### SQLite Database
- SQLite files used by apps generally stored in `/data/data/<ApplicationPackageName>/databases`

#### Network
- Use network to store and retrieve data on web-based services
- To do network operations, classes in java.net.* and android.net.* packages can be used