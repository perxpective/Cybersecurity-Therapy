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

- **DOS MZ Headers** start with MZ (Mark Zbikowski)
- Message: `This program cannot be run in DOS mode`
- 