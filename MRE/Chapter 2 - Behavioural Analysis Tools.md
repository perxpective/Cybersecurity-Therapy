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
- 