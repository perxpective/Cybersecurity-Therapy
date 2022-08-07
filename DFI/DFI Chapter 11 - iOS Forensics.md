# DFI Chapter 11 - iOS Forensics

###### tags: #DFI

## Table of Contents
```toc
```

## Introduction
> **Forensically sound** - term used in digital forensics to quality and justify use of particular forensic technology or methodology

- Main principle for sound forensic examination is that original evidence must not be modified

## Seizure and Isolation
- Take note of location where mobile phone has been collected
- Take picture using camera and take picture of location
- Document chain of custody
	- To maintain each record of digital evidence from collection to presentation
- Take picture of mobile phone before starting any progress
- Request for passcode, SIM pin, iTunes backup password (if possible)
- Check for **Unified Endpoint Management solutions**
- Note status of device:
	- Whether it is powered on or off
	- If powered on, check battery and network status
	- Check where screen is locked
- Search and request for SIM and if any cables located around

### Major Pointers
- Circumventing passcode and iTunes backup password not always possible
	1. Secure passcode from owner or immediately disable passcode requirement if accessible
	2. Place phone in Airplane Mode
	3. Change setting to disable Auto-Lock setting for the duration of forensic acquisition
	4. Document settings changed prior to taking forensic image

### Isolation Techniques
**If phone is turned on:**
- Place phone to Airplane Mode
- Check and manually disable hotspots or any GPS locations, Wi-Fi and Bluetooth
- Connect phone to power bank
- Do not remove SIM card at this point as some phones might lock up when SIM card is removed
- Use Lightning adapter to prevent USB restricted mode from being activated 
	- For devices running iOS 11.4.1 only
	- iOS 12 or 13 may restrict USB immediately
- If Faraday bag is handy, place phone, adapter and charger into Faraday bag 

**If phone is turned off**:
- Place phone into Evidence Bag or Box
- If Faraday bag is handy, place phone, adapter and charger into Faraday bag
- Bring back to Forensics Lab
- In the Forensics Lab:
	- Remove SIM card
	- Do proper acquisition of SIM card
	- Turn on the phone if necessary and treat it as if it was turned on and apply **Isolation Techniques**

### Forensic Acquisition
> **Imaging** -  process of acquiring original evidence in forensically sound manner while maintaining integrity of it
- Can be done on site or offsite in the lab

### Hashing
- Done after acquisition of device
- Method used to prove integrity of evidence
- MD5 or SHA are widely used algorithms
- Hash values should be documented to maintain record of digital evidence

## Types of Acquisition
### Advanced Logical
- Combines both Logical and File System extraction methods

### Cloud Acquisition
- iCloud Backups
- iCloud Drive (full content including third-party app data not available by other means)
- iCloud Photos
- FileVault2 recovery token (disk encryption program in Mac OS)
- iCloud keychain
- Health data
- Messages (iMessage and SMS)

**Drawbacks**
- Need proper authentication credentials
- Need user's Apple ID password and 2FA (if it is enabled)

### iTunes Backup Acquisition
- If iOS device not available, backup would be retrieved from workstation (Windows or MacOS)
- Device typically connects to for updates or syncing music, movies and apps

> **Note:** iTunes performs automated backup during sync process when upgrade to iOS performed


| Operating Systems       | File Location                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| Windows XP              | `%systempartition%\documents and settings\%username%\Application Data\Apple Computer\MobileSync\Backup` |
| Windows Vista, 7, 8, 10 | `%systempartition%\Users\%username%\AppData\Roaming\Apple Computer\MobileSync\Backup\`                  |
| MacOS                   | `Users/%username%/Library/Application Support/MobileSync/Backup`                                                                                                        |

### Manual Acquisition
- Examiner uses user interface of phone to browse and investigate
- No special tools or techniques required
- Limitation -> only files and data visible through normal user interface
- Data extracted through other methods can also be verified using this
- Data on device can be modified on the device

### Brute Force
- Offensive techniques like passcode cracking and jailbreaking

## Operating Modes of iOS Devices
- Normal
- Recovery
- DFU

> Important to know as this knowledge required during forensic acquisition to decide which mode device should be operated to allow efficient extraction of data


### Normal Mode
- When iPhone switched on, boots in operating system (OS)
- In normal mode, user can perform all regular activities
- The boot process consists of three steps:
	- Low-Level Bootloader
	- iBook
	- iOS Kernel

### Recovery Mode
- Device enters into recovery mode if normal boot process failed to load or verify

### Device Firmware Upgrade
- Used to perform iOS upgrading
- Low-level mode for diagnosis
- If Boot ROM not getting load or verify during boot up, iPhone presents black screen

## Jailbreaking
> The **process** of exploiting flaws of locked-down electronic device to install software other than what manufacturer made available for the device

- Allows device owner to gain full access to root of OS and access all features
- User can gain access to all partitions including file system and read-write only permissions
- Not accepted forensically as it may overwrite important data, but allows performing physical acquisition efficiently
- Method is used when root access of file system or physical acquisition is needed

**Implications**
- Apple considers iOS jailbreaking a violation of its terms and conditions of use
	- Advises customers that the practice exposes phones to such risks

> **Examples of risks:**
> - Security vulnerabilities
> - Stability issues
> - Potential crashes and freezes
> - Shortened battery life

## iOS Software
> **iOS** is a mobile operating system created and developed by Apple

### iOS Devices
1. iPhone
2. iPad
3. **iPod**

> **iPod Features**
> - Camera
> - Wi-Fi
> - Safari Web Browser
> - Storage and Audio Playback
> - Photo and Video
> - YouTube Player
> - Apps from App Store 

### iOS Architecture
- Evolved from Apple OS called **Darwin**

> **Darwin** is a Berkeley Software Distribution (BSD) Unix OS

- Discontinued OS based on Research Unix

> **iOS** is a proprietary mobile system owned by Apple
> Only allowed to be installed in Apple devices

- Android and iOS are based on UNIX-like operating systems
- Linux is family of open-source UNIX-like operating systems

![](https://i.imgur.com/ZWLa9AR.png)

## App Interaction with iOS
- Sandboxing - technology whose primary job is security and control
- Enforces strict set of rules on which apps can be installed on a device and  exactly what they are allowed to do
- Minimum set of privileges needs to get its job done

![](https://i.imgur.com/VCYSlXQ.png)

![](https://i.imgur.com/e6e5dUx.png)

## iOS Standard Directories
| Directory         | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AppName.app`     | Contains app and all of its resources                                                                                                                                |
| `Documents/`      | Directory stores user-generated content (userdata)                                                                                                                   |
| `Documents/Inbox` | Directory to access files that app was asked to open by outside entities <br> Example: Mail program places email attachments associated with app into this directory |
| `Library/`        | Stores app-specific files such as data files, caches, resources and preferences                                                                                      |
| `tmp/`            | Directory to write temporary files that do not need to persist between launches of app                                                                                                                                                                     |

## iOS File System
### HFS+ File System
- Stands for the Hierarchical File System (HFS)
- Provides large data sets
- Disk formatted with HFS has 512-byte blocks at Physical level
- Two types of blocks in HFS system:
	- **Logical Blocks**
		- Numbered from first to last within volume
	- **Allocation Blocks**
		- Group of logical blocks used to track data
		- Can be tied together as group to be utilized more efficiently by HFS
- Uses both absolute time and UNIX time to identify location of system
> - Absolute time e.g. 371589010 found in `History.plist`
> - UNIX time e.g. 1349896210 found in `moz_cookies` and `global_history.dat`

- HFS file system uses catalogue file system to organize data
- Uses B* tree (Balance tree) structure to organize data
- Trees consist of nodes
- When data added or deleted, runs algorithm to keep balance

#### HFS+ File System Structure

| Section                 | Explanation                                                                                                                                                                                                           |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reserved Boot Block     | First 1024 bytes are reserved boot blocks                                                                                                                                                                             |
| Volume Header           | Contains information about structure of HFS volume<br> Keeps track of Catalog ID numbering and increments by 1 per file added                                                                                         |
| Allocation File         | Keeps track of allocation blocks used by file system <br> Includes a bitmap<br> Each bit represents status of allocation block<br> If set to 1, allocation block is used <br> If set to 0, allocation block is unused |
| Extent Overflow File    | Consists of pointer to extent of file - If file larger than 8 contiguous blocks, uses extents                                                                                                                         |
| Catalog File            | Organizes data using balanced tree system<br> Utilized to find location of file or folder within volume <br> Contains metadata of file like creation and modification date and permissions                            |
| Attribute File          | Contains customizable attributes of file                                                                                                                                                                              |
| Start-up File           | Assists booting system which does not have built-in ROM support<br> Actual data in file system tracked by file system                                                                                                 |
| Alternate Volume Header | Located at last 1024 bytes of volume                                                                                                                                                                                  |

> **Note:** Last 512 bytes are reserved

## Partitions
### System Partitions
- Firmware and OS partitions
- Read-only partitions
- Contains only system files, upgrade files and basic applications

### Data Partitions
- Contains user data
- Partition as the main focus of most investigations
- Where all iTunes applications reside along with user's profile data

| Parts               | Description                                                                     |
| ------------------- | ------------------------------------------------------------------------------- |
| Keychains           | `keychain.db` - contains user password from various applications                |
| `LogsGeneral.log`   | `General.log` - OS version and serial number Lockdown.log - Lockdown Daemon log |
| Mobile              | User Data                                                                       |
| Preferences         | System Configurations                                                           |
| Run                 | System Logs                                                                     |
| Tmp                 | `Manifest.plist`, plist backup                                                  |
| Root                | Caches, lockdown, preferences                                                   |
| Property List Files | Other plist files residing in different locations for different applications    |

### Property List (Plist)
> **`plist`** - (also known as property file) used to store various types of data on iOS and Mac OS

- Apple used NeXSTEP format or binary format for these files
	- Deprecated and new XLM format was introduced
- Property lists/XML files used in management of configuration of OS and applications
- Contains useful artefacts such as: 
	- Web cookies
	- Email accounts
	- GPS map routes
	- Searches system configuration preferences
	- Browsing history and bookmarks
- These files can be opened using simple text editor to view contents

## SQLite Data Format
- Popular format for mobile devices and open source applications
- Logical extraction of iPhones can provide many SQLite database files
- Uses SQLite databases to store user data
	- SQLite browser is used to explore and read SQL Lite database
- Native iOS applications (e.g. Calendars, Text Messages, Notes, Photos, Address Book) makes use of this database to store and organize data

## EXIF Metadata
> **EXIF** - Exchangeable Image File

- Standard that specifies formats for images and sounds used by digital cameras, scanners and other systems handling image and sound files
- Contains the following data:
	- Timestamps
	- Longitude
	- Latitude
	- Location
	- Device Information
- Depends on device used to capture image or sound

## Data Structure and Artefacts
- Important artefacts generated by features of system or interaction of user with device
- iOS directory structure common across all iOS devices
- Folder structure resembles UNIX layout
- Some files will be stored in text format and easily available; some are stored in SQLite databases, XML or Binary format

### Timestamps:
- iOS device will have many `sqlite` and `plist` files that can build case for forensic examiner
- iOS operating system provides **MACB** (modified, accessed, changed, born date) times and can be vital when used with a timeline
- Timelines essential element for forensic analysis 
- In digital world, time stamps are recorded for many events
- **Apple Core Foundation Absolute Time** (CFAbsoluteTime) also known as Mac Absolute Time

### Applications
- Default application store their data in `private/var/mobile/Library` folder
- Includes Address Book, Mail, Calendar, Maps, Notes, YouTube, Safari, Messages, Weather and Voicemail apps
- Downloaded applications from iTunes and user data stored under `/private/var/mobile/` or `/User`
- `/private/var/mobile/Application` or `/User/Application` holds files associated with each application
- Assigned a unique 32 character alphanumeric universally unique identifier by Apple

| Directory                                | Description                                                     |
| ---------------------------------------- | --------------------------------------------------------------- |
| `<Application_Home>/AppName.app`         | Contains application bundle; file does not get backed up        |
| `<Application_Home>/Documents/`          | Contains application related data files                         |
| `<Application_Home>/Library`             | Contains application specific files                             |
| `<Application_Home>/Library/Preferences` | Contains application preference files                           |
| `<Application_Home>/Library/Caches`      | Holds Application specific support file; does not get backed up |
| `<Application_Home>/tmp/`                | Contains temporary files                                                                |

- Common files found within mist application folders e.g. `info.plist`, `resourcerules.plist` and `applestores.db`
- Depending on application varying configuration files, `plist` and XMP data will be found
- Examiner can occasionally find username and password data cookies or images that will help provide evidence
- `iTunesMetadata.plist` from root application folder contains information related to device, Apple account name and date of purchase etc.

### iTunes Backup
- Inside backup folder there are several interesting files that provides information on whether examiner is reviewing correct iOS device
- Root of backup folder will contain status, info and manifest plist files
- `status.plist` file provides data about latest backup
- Fields:
	- `isFullBackup` - identifies whether or not backup was full backup of device
	- `UUID` - Universally Unique Identifier of device
	- **Date** - Timestamp of last time backup was modified
	- `BackupState` - Identifies whether backup is new backup or one that has been update
	- `SnapshotState` - Identifies whether backup process successfully finished
- `info.plist` file contains data that can be used to confirm if backup matches the device
- IMEI number can be found here along with phone number
- `manifest.plist` file contains metadata about backed up files

### Photo
- Found in `/private/var/mobile/media/DCIM`
- Contain photos either taken or synced to device
- Pictures found here will have timestamp metadata
- Photos in `100APPLE` folder indicate they were taken from device itself
- Camera application numbers images from iOS device sequentially
- First picture taken named IMG_0001 and continue numbering without regard to files being delete or moved

### Keystrokes
- Found in `/private/var/mobile/Library/Keyboard`
- Dynamic dictionary is text file `dynamic-text.dat`
- Stores words typed by user over the course of the use of the device
- Any word entered into applications that allow text input will be captured
- Intention is to aid user in typing and thus technical or special keywords that may not be standard English words or acronyms can be helpful for investigation

### Passwords
- Stored in `/private/var/Keychains`
- iOS applications use Apple's keychain for password management
- Contains `key-chain-2.db` file
- Accounts and passwords e.g. Voicemail passwords, wireless access point (WAP) key phrases and device login passcodes can be found inside this database
- In some cases, passwords will be encrypted by iOS encryption keychain procedure and will need third party tools to decrypt them

### Notes
- Stored in `/private/var/mobile/Library/Notes`
- Review acronym or keywords that may be useful for investigation

### Text Messages
- Stored in `/private/var/mobile/Library/SMS/sms.db`
- Review text messaging communication

### Browser Cookies
- Stored in `/private/var/mobile/Library`
- Safari cookies can be important piece of evidence when identifying web browsing activities from device

### Browser Cache
- Stored in `/private/var/mobile/Library/Caches/Safari`
- Search items from using Safari Browser can be found in `RecentSearches.plist` file
	- In XML format and can be read with text viewer

### Address Book
- Stored in `/private/var/mobile/Library/AddressBook`
- `AddressBook.sqlitedb` file in iOS can contain wealth of information about owner's personal contact

### Call History
- Stored in `/private/var/Library/CallHistory`
- Call history of iOS device can place cellular calls stored in `call_history.db`

### Geographical Location and Wi-Fi Data
- GPS and Wi-Fi evidence can be sought after item to help build picture of iOS device location at specific time and user habits
- Many iOS apps will attempt to cache user's location and store GPS data depending on purpose of application
- **Example:**
	- iPhone camera stores longitude and latitude when photo is taken
- Directory `/private/var/Library/Caches/locationd/consolidated.db` holds a tremendous amount of geolocation data
- `wifilocation` table contains longitude, latitude, MAC and timestamps of wireless infrastructures iOS device has utilized
- `cellLocationLocal` table contains longitude, altitude, timestamps and tower data
