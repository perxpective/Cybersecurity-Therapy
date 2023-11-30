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
	- Use Procmon to view processes running when malware is run (or find changes to the registry)
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

### RegShot
> Take a snapshot of the registry before and after the malware infection.

1. Take a snapshot before running the malware.
2. After running the malware, take a second snapshot. Analyse the changes made to the repository.
### Process Monitor (Procmon)
> Monitor the processes running and created when the malware is executed.

1. Infect the VM with the malware again and see the malware process running in Procmon.
2. Save a CSV file from Procmon by selecting File -> Save. Save the CSV to the desktop for easy access.
### Autoruns
> Takes a snapshot of the system processes.

1. Start a clean VM and run Autoruns (Start -> System Internal Tools -> Autoruns.exe)
2. Click the **Save** button to create a snapshot of the system processes. Save it as a file on the Desktop.
3. Run the malware and refresh Autoruns.
4. Select File -> Compare and select the snapshot created before the infection. Green highlight means a new process after running the malware.

### Network Analysis
- Ensure the following services are running on REMnux:
	- FakeDNS `fakedns -a <target-IP>`
	- `inspircd` service
- Ensure that both the XP VM and REMnux VM network adapters are set to Host-Only and the XP default gateway is set to the IP of the REMnux VM.

#### CaptureBAT
- Run CaptureBAT (`CaptureBat.exe -n -c`)
- Find the network dump file in `C:\Program Files\Capture\logs`
- Add `-l <logfile>` to pipe messages to a file

### ProcDOT
1. Close all applications and stop the malware
2. Start Process Monitor (Start -> Process Monitoring Tools -> Procmon.exe)
3. On Process Monitor Filter page, click OK
4. Go to Options -> Uncheck Show Resolved Network Addresses
5. Options -> Select Columns - ensure that Thread ID is checked and Sequence Number is not checked
6. `windump -w C:\out.pcap` to capture network traffic
7. Open Process Hacker or Task Manager
8. Run the malware and kill the task
9. Stop capture network traffic
10. On Process Monitor, select File -> Save the CSV
11. Start ProcDOT
12. Upload the Procmon CSV and Windump PCAP file and select the malware from the launcher.

### Mutexes
1. Navigate to Start -> System Internal Tools and select `procexp.exe`
2. Press <kbd>Control</kbd> + <kbd>l</kbd> to display the lower panel
3. Look through the list and look for mutexes

### PE Analysis
- Use **BinText** to analyse strings of unpacked and packed malware
- Unpack a packed malware with `upx -d yourfile.exe`

### IDA Free
1. Select File -> Open -> Malware file.
2. Open a new window of IDA and upload another malware file (if any)
3. Compare Imports, Name, Functions and String windows of packed and unpacked malware.

#### PEiD
1. Start PEiD via Start -> PE Tool
2. Select file to be analysed by clicking the \[...\] button.
3. View sections in PE, ASM code and PE header info.

#### CFF Explorer
1. Drag and drop the malware into the CFF Explorer
2. Repeat previous step to load the alware file
3. Compare the Section Headers of packed d unpacked malware
4. Explore Optional Header after program is loaded into memory - locate the entry point location

### HookME
> Intercepts TCP communications by hooking the process and API calls for sending and receiving network data through the network

1. Click File -> Attach and double click the malware
2. Click the Forward button to forward the request across the proxy

### API Monitor
1. Start the API monitor
2. Monitor file actions (`CreateFileA`, `CreateFileW`, `NtCreateFile`)
3. Select File -> Monitor New Process
4. Select the malware to monitor
5. Hook using "Remote Thread (Extended)"

### Process Injection
1. Run a malware. The malware will run in the background
2. Use Autoruns to uncheck a service

## Tips
- Observe the behaviour of the malware before and after a VM reboot for any changes.

## Checklist
- [ ] Set VMs to **Host-Only**
- [ ] Configure REMnux as the default gateway and DNS server of XP VM
- [ ] VMs can ping each other
- [ ] Check if malware sample is packed (PEiD or Exeinfo PE)
- [ ] Check static properties (MD5, Size of packed and unpacked malware, PE type, subsystem, if malware is packed)
- [ ] Monitor services or processes when malware is run
- [ ] Detect changes in registry
- [ ] List DLLs loaded
- [ ] Ensure that FakeDNS and IRC service is running
- [ ] Check network activities (Wireshark)
- [ ] Check for strings or mutexes (Process Explorer and BinText)
- [ ] For each check, reboot the VM and observe possible changes in behaviour of the malware