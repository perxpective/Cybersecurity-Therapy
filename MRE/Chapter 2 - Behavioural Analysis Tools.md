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
	- Start-up shortcuts
	- Registry
	- Services
	- Explorer Started
	- Scheduled Tasks

### Registry Tools
- <u>Regshot</u>
	- Create a snapshot before and after executing the malware
	- Compared the changes and differences
		- Open-source
		- Supports output as text or `html`

#### Common Registry Keys (used by malware to remain persistent)
- **Run/RunOnce**
	- `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run`
	- `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce`
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce`
	- `HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run`
- **BootExecute Key**
	- `smss.exe` process will run before Windows subsystem to load the hives
	- Launch programs defined by BootExecute key in `HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Control\Session Manager`
- **`Userinit` Key**
	- Located in `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon`
	- `Winlogon` runs `Userinit.exe` which runs logon scripts, start network and `explorer.exe`
- **Notify**
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify`
	- When `CTRL` + `ALT` + `DEL` is pressed, DLLs can be launched if defined in its subkeys
- **`Explorer.exe` Key**
	- Points to `explorer.exe` without path `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Shell`
- **Boot Shell**
	- Points to location under `Winlogon` only
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\IniFileMapping\system.ini\boot`
- **Start-Up Keys**
	- `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell 
	- `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell `
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell `
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\User Shell`
- **Service Key**
	- `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services`
- **`App_init` DLLs**
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Windows\AppInit_DLLs`

### Network
- Wireshark (with GUI) or `tcpdump` for monitoring network traffic
- WinPcap in Windows
- <u>Known Issues:</u>
	- Malware may change behaviour
	- Realtime battle between user and C&C of malware
	- IP is reported as attacker IP (malware execution)
- <u>Game Plan:</u>
	- Allow malware to call home but fake the response
	- Use Tor if necessary

### Network Monitoring
- TCPView from SysInternals
	- Spies on all ports owned by a process
- **Paros Web Proxy**
	- Java based HTTP/HTTPS proxy
	- Edit, viewing HTTP message on-the-fly
	- Open-source
- **Fiddler Web Proxy**
	- Free to use
	- Web debugging and security testing similar to Paros

### System Monitoring Tools
#### CaptureBAT
- CaptureBAT developed and maintained by Christian Selfert
	- Able to monitor the state of a Win32 OS during malware execution
	- Operates at low kernel level (compatible with different configuration)
	- Provides insights on how the software operates (without source code)

#### ProcDOT
- Correlates Process Monitor and `pcap` files into an interactive graph
- Visualisation - shows complex relationship
- Filtering of "noise"
- Detects thread injection