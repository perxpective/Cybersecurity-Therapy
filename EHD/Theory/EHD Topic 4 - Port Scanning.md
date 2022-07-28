# EHD Topic 4 - Port Scanning

###### tags: `EHD` `Theory`

## Table of Contents
```toc
```

## Port Scanning Tools

- Nmap
- Unicornscan
- Nessus

## Types of Scanning

- SYN scan
- TCP connect scan (3-way handshake)
- NULL scan (packet flags turned off)
- XMAS scan 
  - **FIN, PSH, URG** flags set

### TCP Connect Scan (-sT)

- If the port is opened, TCP 3-way handshake established
  
  <img src="https://i.imgur.com/LsSD4I9.png" title="" alt="" data-align="center">

- If port closed, RST flag returned
  
  <img title="" src="https://i.imgur.com/iOSsFDm.png" alt="" data-align="center" width="454">

### SYN Scan (-sS)

- 3-way handshake not completed, so application will not log connection

- Quiter and stealthier compared to TCP connect scan

- If port is opened
  
  <img title="" src="https://i.imgur.com/KghXQmf.png" alt="" data-align="center" width="479">

- If port is closed
  
  <img src="https://i.imgur.com/gkosMyL.png" title="" alt="" data-align="center">

### FIN, XMAS, Null Scans

- Known as steath scans since 1 packet is sent and only 1 reply expected
  
  #### FIN Scan (-sF)

- Send only packets with FIN flag on

#### XMAS scan (-sX)

- Send packets with FIN, PSH and URG on 

#### Null Scan (-sN)

- Send packets with no flags on

- If port is open:
  
  <img title="" src="https://i.imgur.com/p5JJJzC.png" alt="" data-align="center" width="482">

- If port is closed:
  
  <img src="https://i.imgur.com/JtbPM4I.png" title="" alt="" data-align="center">

### ACK Scan (-sA)

- Only reply 'filtered' and 'unfiltered'

- Use for traversing through firewall

- If no response, firewall may be present (filtered)
  
  <img title="" src="https://i.imgur.com/YoUFcJz.png" alt="" width="534" data-align="center">

- If RST received, no firewall present or firewall let packet through
  
  <img src="https://i.imgur.com/FafBtbR.png" title="" alt="" data-align="center">

## Avoiding Detection

- Port scans usually noisy
- Attackers may avoid sending large number of packets in short burst of time
- Scan throttling (delay progression of scan over hours, days, weeks)

### Common Nmap Timing Options

- `--scan-delay <number of packets sent between probes>`
- `--max-rate <number of packets per second>`
- `-T 2 or -T polite <slows down scan>`
- `-T 3 or -T normal <scan at normal speed>`
- `-T 4 or -T aggressive <speed up scan>`

## Host Discovery

- If target in the same network, nmap sends ARP broadcast to discover host is up
  
  <img title="" src="https://i.imgur.com/5X53uVh.png" alt="" width="697" data-align="center">

- If target in different network, nmap sends following to discover if host is up
  
  - ICMP echo request
  - SYN packet to port 443 + ACK packet to port 80
  - ICMP timestamp request

- Common nmap options for host discovery:
  
  - `-sn` -- do host discovery only
  - `-Pn` -- do port scanning only

## Unicornscan

- Ideal for large networks
- Scans 65,535 ports in 3 to 7 seconds
- Handles port scanning using:
  - TCP
  - ICMP
  - IP
- Optimizes UDP scanning
- Unix-based

## Fping

- Ping multiple IP addresses simultaneously
- Equivalent to `nmap -sP ip_addr`

## Hping

- Used to bypass filtering devices
- Allows users to fragment and manipulate IP packets
