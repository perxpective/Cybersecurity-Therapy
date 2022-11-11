# EHD Practical 11 - Wireless Security

###### tags: #EHD 

## Table of Contents
```toc
```

## Using Wireless Card in Kali Linux
**On Kali VM**
- Switch to root account:
```
sudo -i
```
- Run the following command to list all USB devices connected:
```
lsusb
```

![](https://i.imgur.com/h83e5pJ.png)

- Run the following command to list the current PCI devices connected
	- `-v` for verbose 
```
lspci
lspci -v
lspci -vv
```