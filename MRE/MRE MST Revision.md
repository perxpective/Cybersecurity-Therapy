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
- Close all applications and stop the malware
- Start Process Monitor (Start -> Process Monitoring Tools -> Procmon.exe)
- On Process Monitor Filter page, click OK
- Go to Options -> Uncheck Show Resolv

## Tips
- Observe the behaviour of the malware before and after a VM reboot for any changes.