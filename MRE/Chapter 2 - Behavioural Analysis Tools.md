# Chapter 2 - Behavioural Analysis Tools

###### tags: #MRE 

## Table of Contents
```toc
```

## Behavioural Analysis Process
1. Setup
2. Start monitoring tools
3. Run or install malware
4. Wait
5. Terminate malware processes
6. Stop monitoring tools
7. Analysis -> reporting
8. Revert to original state and repeat
	- Consistency check
	- Change conditions

<u>Problem:</u>
- Malware may not act immediately when executed or installed

### Process Explorer
- Default location -> `C\Program Files\procexp.exe`
- Display image path, start-up command, digital signature and more
- Submit suspicious process hash to virustotal.com for scanning

### Process Hacker
- Open-source project
- Alternative task manager
- Create, edit and control services and monitor network
- Option to install a kernel-mode driver

### Process Monitor
- Developed by System Internals now under MSDN
- Uses Native API monitor changes in registry and file system
- <u>Powerful filters:</u>
	- Show what is read, written
	- Quick filters to display, hide files, registry, network activities and thread profiling
- Can be exported to various formats
- Use Excel for analysis (`.csv` file)

### Autoruns
- Option to hide signed Microsoft Entries
- Created by System Internals to display, turn on or off auto-starting images