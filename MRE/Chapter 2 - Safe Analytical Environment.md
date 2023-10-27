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
	- 