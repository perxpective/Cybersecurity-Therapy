# MRE MST Revision

###### tags: #MRE

## Table of Contents
```toc
```

## Malware Analysis Format
- Summary
	- Describe the infection process of the malware
- Malware Static Properties
	- Determine properties of packed and unpacked properties 
	- Find MD5 hash (`certutil -hashfile <file> MD5` or `md5sum`)
	- Find size of malware sample (File properties)
	- Determine the type of PE (PEiD)
	- Find subsystem and PE with CFF Explorer
- File Activities Detected
	- Use Procmon or RegShot to view processes running when malware is run (or find changes to the registry)
	- Describe processes and services detected on Procmon
- 

## Tools
- 
