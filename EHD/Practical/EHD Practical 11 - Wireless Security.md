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
1. In order to monitor surrounding wireless networks, wireless card must be in "monitor" mode
2. Type the following commands to bring the wireless card down and switch it to monitor mode and bring the card back up again:
```
ifconfig wlan0 down
iwconfig wlan0 mode monitor
ifconfig wlan0 up
```
3. Type `iwconfig` and check if the wireless card is in monitor mode
4. Use Airodump to see the list of surrounding wireless networks. Note that the channel number on the top left hand corner is changing so the wireless card is hopping across channels scanning for different wireless networks
![](https://i.imgur.com/i46lfQg.png)

5. To stop using Airodump, press <kbd>Ctrl</kbd>+<kbd>C</kbd>
6. Run Wireshark and start capturing wireless frames on the `wlan0` interface
7. Type the following command to set the wireless card to channel 11:
```
iwconfig wlan0 channel 11
```
8. Run Wireshark again to see wireless frames captured on this channel

## Capturing Wireless Frames using Airodump
> To capture wireless frames and possibly crack encryption keys, the attacker usually requires a victim to connect to the wireless network. You can a laptop or smartphone to act as the victim to connect to the wireless network while the Kali system captures the wireless frames

1. As a victim, use a laptop or smartphone to connect to one of the EHD networks using WPA-PSK
2. Use Airodump to see the list of wireless networks around:
```
airodump-ng wlan0
```
3. Press <kbd>Ctrl</kbd>+<kbd>C</kbd>
4. Pick the EHD network using WPA-PSK and take note of its BSSID (MAC address of the access point) and the channel number

![](https://i.imgur.com/gZI3c5F.png)

5. Use Airodump to capture the wireless frames of selected BSSID access point and save the frames into a file called `capture01`
```
airodump-ng wlan0 -w capture01 -c (channel) --bssid (bssid)
```
6. While Airodump is running, the MAC addresses of wireless clients currently con