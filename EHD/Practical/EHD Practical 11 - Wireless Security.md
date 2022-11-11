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
	- `-v` for verbose mode
	- `-vv` for more verbose
```
lspci
lspci -v
lspci -vv
```

- Type `iwconfig` - wireless card should have device interface name `wlan0` or `auth0` (managed mode and not associated with any Access Point)
![](https://i.imgur.com/rHhM8lf.png)

- Type `ifconfig` - `wlan0` network interface may be listed along with `eth0` and the wired network card
- The following command can also be used to see status of wireless devices and drivers used:
```
airmon-ng
```
![](https://i.imgur.com/hshKAAL.png)

- Type `man iwlist` to see help page for the command
- Type the following command to view listing of available wireless APs nearby
```
iwlist wlan0 scan
```
- On Kali, in the top right hand corner, click the Network icon and select one of the EHD networks using WPA-PSK
![](https://i.imgur.com/mNJ5zr8.png)

- Once connected, type `iwconfig`. ESSID now contains SSID of the connected wireless AP
	- AP contains BSSID or MAC address of the connected wireless AP
![](https://i.imgur.com/wDzUY4h.png)

- To see the IP address assigned to wireless card, type:
```
ifconfig wlan0
```
- Start browser and check if you can access the Internet
- Disconnect from the wireless network

## Monitoring Wireless Signals