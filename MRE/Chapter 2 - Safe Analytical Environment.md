# Chapter 2 - Safe Analytical Environment

###### tags: #MRE 

## Table of Contents
```toc
```

## Precautions
- **Do not run malware on computer directly**
	- Use several PCs on an isolated network and re-image PCs to restore the system (slow)
	- Use virtual machines (some malware will check for the VM)
- **Do not enable networking for malware**
	- Command and Control (C&C) can be faster than fingers
	- More malwares could be downloaded
	- Disable networking and use Tor
- **Do not use USB devices**
	- May rewrite the firmware (firmware attack)
		- Equation, Thunderstrike 2
	- Affects booting process
	- Disable auto-run in USB devices
	- Check first boot device in BIOS

## Typical Safe Environment
- Use virtualisation
	- VMWare
	- Oracle VirtualBox
	- Parallels
	- Microsoft Virtual PC
	- Xen

## Other Safe Environments
- Trumen (XP/Windows 2000, CentOS 5)
	- Open-source
	- Contains scripts to perform imaging repeatedly
	- Automatically creates a sandbox with a list of simulated services
	- Clients created runs on native hardware
- **Using HDD with write cache card**
	- <u>Use CoreRestore</u>
		- Install between HDD and motherboard
		- Redirect system changes to a temporary working area
		- Revert after reboot (only single state)
		- Hardware have been discontinued