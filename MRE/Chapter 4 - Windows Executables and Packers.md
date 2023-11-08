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