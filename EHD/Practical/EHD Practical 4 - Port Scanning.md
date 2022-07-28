# EHD Practical 4 - Port Scanning

###### tags: `EHD`

## Table of Contents
```toc
```

## Inspecting Packets Scanned using Nmap
**On web-server2**

1. Check the firewall configuration `/etc/firewalld/zones/public.xml` contains the line that allows incoming connections from Port 23 (Telnet)

```
<service name="telnet"/>
```

2. Edit file `/etc/xinetd.d/telnet` to enable or disable telnet service

```
disable = yes    # disable telnet
disable = no     # enable telnet
```

3. Restart telnet service to load changes

```
systemctl restart xinetd
```

**On Kali VM**
1. Options available for nmap
   
   ```
   nmap -h
   ```

2. Start Wireshark capture

3. Run a SYN scan against web-server2
   
   ```
   sudo nmap -sS {web-server2-IP}
   ```

4. Stop Wireshark capture when nmap finishes running

5. Apply filter to only see SYN packets

```
tcp.flags.syn==1
```

7. Look for SYN packets going to Port 21 (FTP)

```
tcp.flags.syn==1 and tcp.dstport==21
```

8. See packets going to or coming from Port 21

```
tcp.port==21
```

## FIN Scan
**On Kali VM**
1. Start Wireshark capture
2. Use nmap to run FIN scan against range of IP addresses and specific ports

```
sudo nmap -sF -p 21,23,25,53,80,110 192.168.176.97-102
```

3. Stop Wireshark capture when nmap has finished running

Possible reponses:

- SYN/ACK packet
- RST packet
- ICMP Destination Unreachable (blocked by firewall)

## ACK Scan
- ACK Scans can be used to detect presence of stateful firewalls

**On Kali VM**
1. Start a Wireshark capture
2. Run ACK scan against web-server2 VM

```
sudo nmap -sA {web-server2-IP}
```

3. Stop Wireshark capture when nmap has finished scanning

![](https://i.imgur.com/zTDlGXy.png)

- If RST packet returned, firewall allowed ACK packet through
- If ACK packet returned, firewall filtered ACK packet
- `filtered` state means blocked by firewall
- `unfiltered` state means not blocked by firewall

## UDP Scans
**On Kali VM**
1. Start Wireshark capture
2. Run UDP scan on ports 21, 53, 80, 161 against web-server2

```
sudo nmap -sU -p 21,53,80,161 {web-server2}
```

## Other Nmap Scans
- Determine version number of service

  ```
  sudo nmap -sV {web-server2-IP}
  ```

- Can be used with other scanning methods for specific ports
  
  ```
  sudo nmap -sV -sU -p 21,53,80,161 {web-server2-IP}
  ```

- See what nmap is doing during the scan
  
  ```
  sudo nmap -sU -vv {web-server2-IP}
  ```

- Add reason option to see what kind of packet scanned port returned for nmap to make deduction if port is open, closed or unfiltered.

```
sudo nmap -sS --reason {web-server2-IP}
```

![](https://i.imgur.com/VWp6vvR.png)

- Guess the operating system
  
  ```
  sudo nmap -O {web-server2-IP}
  ```

- View `/usr/share/nmap/nmap-services` to list common ports, service names and frequencies

- Scan top 10 most frequently used ports according to nmap-services file
  
  ```
  sudo nmap --top-ports 10 {web-server2-IP}
  ```

## Ping Sweeps
**On Kali VM**
- Use `fping` command to ping range addresses from 8.8.8.1 to 8.8.8.10
  
  ```
  fping -g 8.8.8.1 to 8.8.8.10
  ```
  
  ![](https://i.imgur.com/zahtMmA.png)

- Use Netdiscover to send ARP broadcast requests to subnet of Kali VM

```
sudo netdiscover -i eth0 -r 172.16.108.0/24 (Kali subnet)
```

![](https://i.imgur.com/OtO09Yg.png)

- Sending ARP broadcast requests to local network (Host discovery)

```
sudo nmap -sn 172.16.108.0/24 (Kali subnet)
```

## Crafting Packets
**On Kali VM**
1. Start Wireshark capture
2. Use `hping` to send 2 ICMP packets to Win10 VM or web-server2 (192.168.20.20 is a fake IP)
   
   ```
   sudo hping3 -c 2 -a 192.168.20.20 --icmp (Win10-IP/web-server2-IP)
   ```

3. View ICMP packets captured -- ICMP echo requests packets have fake source IP
