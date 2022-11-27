# pfSense with OpenVPN

###### tags: #EHD 

## Table of Contents
```toc
```

## Using pfSense
1. Login to pfSense with username `admin` and password `pfsense`
2. Go to the Interfaces menu and select WAN

![](https://i.imgur.com/4cGNdot.png)

3. Scroll down to the Reserved Network section and uncheck the box "Block private networks and loopback addresses"

> This is because the Win10 image represents the system in the External Network and the Win10 image has a private IP address

4. From the Firewall menu, select Rules and click the WAN interface

![](https://i.imgur.com/GZQCaSH.png)

5. Check if there is a WAN rule that allows incoming ICMP packets
6. If there is no WAN rul