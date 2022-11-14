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
6. While Airodump is running, the MAC addresses of wireless clients currently connected to the Access Point can be seen

![](https://i.imgur.com/FIfK9Sv.png)

7. Airodump saved the wireless frames into several files with different formats. Use Wireshark to open the `capture01-01.cap` file
8. Look for the Beacon frame (filter by `wlan.fc.type_subtype==0x08`) and expand the frame and look for the SSID value
9. Management frames have the frame type 0 (set the filter to `wlan.fc.type==0x0`)
10. Control frames have the frame type 1 (set the filter to `wlan.fc.type==0x1`)
11. Data frames have the frame type 2 (set the filter to `wlan.fc.type==0x02`)

## Exploring Frames of a Non-Broadcasting Access Point
1. Use Airodump to view the list of wireless networks around 
2. When one of the BSSID of the non-broadcasting EHD Access Points are seen, stop Airodump and take note of the BSSID and its channel number
3. Use Airodump to capture frames for selected BSSID access point and save the frames into a file called `nobrdcst01` 
```
airodump-ng wlan0 -w nobrdcst01 -c (channel) --bssid (bssid)
```
4. After a while, press <kbd>Ctrl</kbd>+<kbd>C</kbd> to stop the capture
5. Use Wireshark to open the `nobrdcst01-01.cap` file
6. Look for the Beacon frame (filter by `wlan.fc.type_subtype==0x08`)
7. Expand the frame and look for the SSID, the SSID field should be blank this time
8. Look for the Probe response (filter by `wlan.fc.type_subtype==0x05`) and Probe requests (filter by `wlan.fc.type_subtype==0x04`)
9. Expand the frame and look for the SSID. Although SSID does not appear in the Beacon frame, it will appear in other frames like the Probe frames

## Exploring Frames of a WPA Connection
1. As the attacker, use Airodump to capture the frames of one of the EHD networks using WPA-PSK (broadcasting or non-broadcasting) and store the frames into a file
2. As the victim, use a computer and smartphone to connect to the EHD network and access the Internet
3. Note the MAC address of the client
4. As the attacker, when the victim connects to the Access Point, the phrase "WPA handshake" should appear in `airodump-ng`
5. Captured the 4-way WPA handshake frames of the victim
6. Stop the capture and use Wireshark to open the cap file

![](https://i.imgur.com/S3jywlh.png)

7. Look for the Beacon frame (filter by `wlan.fc.type_subtype==0x08`)
8. Expand the frame and look for the SSID, the SSID field should be blank this time
9. Look for the Probe response (filter by `wlan.fc.type_subtype==0x05`)

> This is the probe response sent by the Access Point to the laptop/smartphone
> Expand the Probe Frames - the SSID value can be found in the Probe Frames even if the Access Point is not broadcasting the SSID
> 

10. Look for Authentication frames (filter by `wlan.fc.type_subtype==0x0B`)
11. Expand the Authentication frame and look for the Authentication Algorithm (should be using the Open System Authentication)
12. Look for Association Request (filter by `wlan.fc.type_subtype==0x00`)
13. Look for Association Response (filter by `wlan.fc.type_subtype==0x01`)
14. Look for frames that make up the 4-way handshake (filter by `eapo1`) and note that sometimes not all the frames are able to be captured

## Cracking WPA Encryption
1. Using the previous cap file containing the WPA 4-way handshake, Aircrack and a dictionary file can be used to crack the WPA key
2. Use the John the Ripper dictionary file to crack the key:
```
aircrack-ng nobrdcst01-01.cap -w /usr/share/john/password.lst
```
3. Another wordlist, `rockyou.txt` in `/usr/share/wordlists` contains about 14 million possible words that can be used in the `aircrack` command

## De-Authenticating Wireless Clients
> If the client is already connected to the wireless network, attacker may try to send frames to de-authenticate the client and wait for the client to try to connect again in order to capture the WPA 4-way handshake

1. Use `airodump-ng` to capture wireless frames of an access point using WPA-PSK and has at least one client connected to it
2. While `airodump-ng` is running, in another terminal, use `aireplay-ng` to send 5 de-authentication attacks (one de-authentication attack consists of 64 frames) to a client connected to the access point
```
aireplay-ng wlan0 --deauth 5 -a (bssid) -c (client mac)
```

> If de-authentication attack is successful, the wireless client to will try to connect to the access point again and the `airodump-ng` software can capture the WPA 4-way handshake