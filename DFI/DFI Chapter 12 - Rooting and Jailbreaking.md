# DFI Chapter 12 - Rooting and Jailbreaking

###### tags: `DFI`

## Table of Contents
```toc
```
## Rooting and Jailbreaking
- Limit **application installation**
- Limited access privileges to device
- Code signing
> **Code Signing**
> - One of the most important security mechanisms in iOS
> - All binaries and libraries must be signed up by trusted authority 
> - **Code Signing App** assures users that it is from known source and app has not been modified since it was last signed

### Rooting in Android
> **Rooting** is the Android equivalent of jailbreaking

- Means of unlocking operating system to 
	- Install unapproved apps
	- Deleted unwanted bloatware
	- Update OS
	- Replace firmware and customize etc.
- Allows users to gain "root" user privileges
- Android allows **sideloading** without rooting by default
	- Installing apps from non-android stores (e.g. `apk` files from websites)

## Motivations for End User
- More application sources
- Access to unauthorized applications
- Remove vendor-installed SW (bloatware)
	- Improves performance
	- Increase available memory (RAM/ROM)
- Access restricted hardware resources
	- Perform **system tweaking**

## Warning Before Rooting or Jailbreaking
- Third party tools required to escape control
- Voiding of warranty
- Error and performance issues
	- Can cause phones to be unstable
- Check organizations' legal posture (security policies) on permitted activities with corporate devices
	- **Example:** EULA (End-user license agreement)

## Jailbreaking iPhone
- Common tools used:
	- JailBreakMe (easiest to free)
	- Redsn0w
	- Evasi0n
- Vulnerabilities exploited usually fixed as soon as possible in next revision of iOS
	- This, nearly every new version of iOS requires new set of vulnerabilities to jailbreak the device

## Rooting Android
- Varies significantly from device to device due to differences in hardware
- Rooting steps:
| Step                       | Description                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------- |
| Flash Recovery             | Enter Recovery and is meant to backup device and load new OS                       |
| Flash Boot (fastboot)      | Used to flash images such as recoveries, bootloaders and kernels to Android device |
| Local Privilege Escalation |                                                                                    |
| ADB Privilege Escalation   | Android Debugging Bridge allows communication between Android device and phone using the command line                                                                                   |
- **Methods:**
	- Sideloading
	- Enable USB debugging
		- Developer mode in Android phones that allows newly programmed apps to be copied via USB to device for testing

**Tools used:**
- ADB (Old)
	- Requires drivers, scripts, SU apk
	- z4root (Android 2.3)
	- SuperOneClick (requires ADB)
	- Flashing memory and custom ROM
	- Motochopper (Android 4.3.2)

- Once rooted ADB can yield **rootshell** when local privilege escalation request `su` is requested
- `superuser.apk` will prompt, which user needs to grant before rootshell is granted to shell