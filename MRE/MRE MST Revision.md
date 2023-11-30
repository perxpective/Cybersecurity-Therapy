# MRE MST Revision

###### tags: #MRE

## Table of Contents
```toc
```

## Malware Analysis Format
- **Summary**
	- Describe the infection process of the malware
- **Malware Static Properties**
	- Determine properties of packed and unpacked properties 
	- Find MD5 hash (`certutil -hashfile <file> MD5` or `md5sum`)
	- Find size of malware sample (File properties)
	- Determine the type of PE (PEiD)
	- Find subsystem and PE with CFF Explorer
- **File Activities Detected**
	- Use Procmon or RegShot to view the file actions performed by the malware
- **Processes and Services Detected**
	- Use Procmon to  view processes running when malware is run (or find changes to the registry)
	- Check if malware starts automatically after rebooting the VM
- **Describe Key DLLs Loaded**
	- Use API monitor to hook API calls the DLLs loaded are
- **Registry Activities Detected**
- **Network Activities Detected**
	- Use Wireshark, FakeDNS and HTTPd
- **Other Interesting Strings and Mutexes**
	- FakeDNS domains
	- Mutexes found

## Tools

> To check MD5 of file, use the command `md5sum`

#### RegShot
> Take a snapshot of the registry before and after the malware infection.

1. Take a snapshot before running the malware.
2. After running the malware, take a second snapshot. Analyse the changes made to the repository.
#### Process Monitor (Procmon)
> Monitor the processes running and created when the malware is executed.

1. Infect the VM with the malware again and see the malware process running in Procmon.
2. Save a CSV file from Procmon by selecting File -> Save. Save the CSV to the desktop for easy access.
#### 