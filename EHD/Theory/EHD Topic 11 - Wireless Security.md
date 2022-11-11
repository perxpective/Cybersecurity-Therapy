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
- <u>Directional</u>
	- Focuses signals in one direction

### Set Service Identifier (SSID)
- Network name used to identify the wireless network
- Also known as Extended Service Set Identifier
- Max length of 32 characters, case-sensitive
- Some APs support multiple SSIDs
- SSID may be included in beacon frames sent out by APs
- Turning off SSID broadcasting can help hide the network from war-drivers
- Attackers can still find the SSID of a network from other frames
- Some users may not change the default SSID of their AP
- Good practice would be to use a SSID name that does not raise attention

### Basic Service Set (BSS)
- One Access Point (AP) with one or more clients make up a Basic Service Set
- Clients communicate with one another via the access points
- **Basic Service Set Identifier (BSSID)**
	- MAC address of radio network interface of Access Point
	- Unique identifier of AP
![](https://i.imgur.com/7DXZ92b.png)

### Extended Service Set (ESS)
- Extended Service Set is a collection of two or more Basic Service Sets connected together by the Distribution System (DS)
	- DS is typically a wired network
![](https://i.imgur.com/O9VeV7D.png)


### Independent Basic Service Set (IBSS)
- Clients connected to one another in an ad-hoc network form an IBSS
- No APs in the network

## Beaconing
- APs send out Beacon frames regularly (as often as 10 times per second)
- Beacon frames contain the following information for the client to connect to the AP:
	- Timestamp
	- Channel
	- Data Rates
	- SSID
	- Other information

## Wi-Fi Alliance
- Consortium of wireless equipment manufacturers and software providers formed to promote wireless network technology
- Only products that pass the Wi-Fi Alliance tests may be referred to as Wi-Fi Certified
- Uses the 802.11 standard

### Wireless LAN Standards
- **802.11** (operates at the MAC sub-layer of Data Link and Physical layers)
- **802.11a, 802.11b, 802.11g are older technologies**
	- Speeds of 5.5 Mbps, 11 Mbps, 54 Mbps
	- Supports wireless devices up to 115 meters apart
- **802.11n**
	- Top speed from 100 Mbps to 500 Mbps
- **802.11ac**
	- Top speed from 500 Mbps to 1.3 Gbps
	- Operates only in 5 GHz