# EHD Topic 11 - Wireless Security

###### tags: #EHD #Theory 

## Table of Contents
```toc
```

## Wireless Terms and Definitions
| Term                               | Definition                                           |
| ---------------------------------- | ---------------------------------------------------- |
| Hotspots                           | Locations where wireless data services are available |
| Wireless local area network (WLAN) | Devices form a LAN using wireless technologies       |
| Access point (AP)                  | Transfers signals between wireless NICs              |

## Wireless Network Interface Card (WNIC)
**Wireless NICs for desktop computers**
![](https://i.imgur.com/EkOR3nO.png)

**Wireless NICs for laptop computers**
![](https://i.imgur.com/8T2pRlg.png)

### WMIC Modes
| Mode         | Description                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| Managed Mode | also known as client mode - able to associate with an access point and connect to the wireless network |
| Ad hoc Mode  | WNIC communicates directly with other WNIC to form ad hoc networks                                     |
| Monitor Mode | WNIC able to capture wireless traffic without having to associate with an access point                 |
| Master Mode  | WNIC acts as an access point                                                                           |

>**Note:** Not all WNICs support all modes

### Access Points
- **3 major parts:**
	- Antenna and radio transmitter/receiver
		- Transmit and receive from wireless nodes
	- RJ-45 wired network interface
		- To connect to wired network
	- Special bridging software
		- Translate communications between wired and wireless networks
- **2 basic functions:**
	- Base station for wireless network
	- Bridge between wireless and wired networks
- Range of access points depends on several factors
	- Type of wireless networks supported (e.g. 802.11ac)
	- Environment like walls, doors and other interference sources
- Number of wireless clients that single AP supports varies
- Administrator password to AP should not be left as default
	- Default IP, username and password of most network devices can easily be found on the Internet

### Antenna
- <u>Omnidirectional</u>
	- Signals in all directions
- <u>Di</u>