# Chapter 4 - Windows Executables and Packers

###### tags: #MRE 

## Table of Contents
```toc
```

## Windows Executable Basics
- Windows uses <u>PE format</u> for executables, object code, DLLs, font files and SYS files (drivers)
- PE stands for **Portable Executable** in 32-bit and 64-bit OS
	- Modified version of Unix COFF (Common Object File Format)
- <u>Other formats:</u>
	- Executable and Linkable format (ELF) in Linux
	- Mach Object (Mach-O) in MacOS
	- MZ DOS executable in DOS (support in 32-bit Windows using Virtual DOS machine)

![300](https://i.imgur.com/3QwG061.png)

### Structure of a 32-bit Portable Executable
- **DOS MZ Headers** 
	- Start with MZ (Mark Zbikowski)
	- Message: `This program cannot be run in DOS mode`
- **PE Header**
	- Starts with `50h 45h 00h 00h`
	- Data structure of execution settings:
		- Machine type
		- Timestamp
		- Size
		- EntryPoint (Start of code)
- **Section Table**
	- Name, permission and size of each table
	- Windows will allocate memory pages to each section
- **Sections**
	- Contains different groups of data
	- Group data is based on characteristics (e.g. read-only, read-and-write)
	- Compilers and linkers will make as little sections as possible to save memory
	- **`.data`** section
		- Imports Address Table
		- Address of external functions needed
		- Used by app to find DLLs in memory
		- Updated at runtime (NULL at compile time)

### Running Executables
- When a program is executed:
	- The DOS MZ header is checked
	- PE header is checked
	- Section Table is read
	- Allocate memory based on Section Table

### Running Executables on Memory
- **If disk image is not used:**
	- Windows populated the Import Address Table
	- Control passed to the EntryPoint value

## Tools for PE Analysis

### CFF Explorer
- Freeware
- PE editor for PE32/64
- PE memory dumper and signature updater
- PE rebuilder

### PE Studio
- Automatically flags aspects that is malicious
- Can query VirusTotal for hash matches

## Introduction to Packers
- Executable software (`.exe`)
- Packers typically compress files (`zip`, `rar`, `7z`)
- Attach their own decryption/loading stub
- Only a small part of the software is exposed
- **Packed malware cannot infect computers**

### Why is Malware Packed?
- **Functional Advantages**
	- <u>Compression</u>
		- Reduced download time and load time
		- Reduced footprint (smaller in size)
- **Additional Advantages**
	- <u>Prevent detection by antivirus signatures</u>
		- Use behavioural or heuristic analysis
	- Prevent reverse engineering

### Common Packers
- UPX
- VBox
- EZIP
- PE-PaCK
- FSG
- Dropper
- Mew
- NSPack
- Thinstall
- PEBundle
- PECompact
- Armadillo
- Themida
- NeoLite

### Simple Packers
- Single process containing only 1 thread
- Single layer of **compression** and **encryption**
- Might use some anti-debug tricks
- Do not modify the code
- Implementation can be hard
- Commonly used
- Examples: UPX, FSG

### Complex Packers
- Uses multiple processes
- Multi-layer encryption
- **Code abstraction** -> metamorphic code, use virtual machine
- Examples: VMProtect, ExeCrypt

## Introduction to Unpackers
- Required to know the unpacking algorithm to unpack
- Unpacks the program before resuming execution at the program's original entry point
- Malware can selectively unpack harmful or harmless code after environment analysis

## Packer Structure
- Running the unpacking function, unpack the malware
- The Import Address Table is propagated by the packer (not by Windows)
- Pass the command to the entry point of the malware

![300](https://i.imgur.com/Lpz8YyB.png)

## Packer Detection Tools

### Exeinfo PE
- Examines various Windows executables
- Good at identifying signatures of commonly-used packers
- Actively supported

### PEiD
- Well-established, not actively supported
- Uses signatures, stored in the `userdb.txt` file
- Provides information about the PE header
- Could disassemble code for viewing
- Able to identify the packer used

### Peframe
- Command-line tool to extract static file properties
- Extracts PE header deatails
- Identify common packers
- Detect suspicious API calls

## Strings and Signature Tools

### Signsrch
- Command-line tool to search for signatures in files and executables
- Recognise large number of compressions, multimedia, encryption algorithms and anti-debugging code

### BinText
- Small, fast, text extractor
- Extract plain Unicode, resources strings
- Free tool from McAfee

### Strings2
- Extracts ASCII and Unicode in one step