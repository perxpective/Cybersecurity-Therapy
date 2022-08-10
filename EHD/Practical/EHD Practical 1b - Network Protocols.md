# EHD Practical 1b - Network Protocols

###### tags: #EHD

## Table of Contents
```toc
```

## Remote Desktop Connection
### Address Resolution Protocol (ARP) Spoofing
View all entries in the ARP Table

```linux
arp -a
```

### Installing arpspoof
Browse to `http.kali.org` to download `libnids` and `dsniff` packages.

Can be found:
* `libnids` - pool/main/libn/libnids

### Spoofing

**On Host PC**
- Ping the Windows 10 VM
- Run `arp -a` and check if MAC address belongs to the Windows 10 VM

**On Kali VM**
- Run this command to make ARP entry for Windows 10 VM in Host PC point to the Kali Linux VM

```linux
sudo arpspoof –i eth0 –t {Host_PC_IP} {Win10_VM_IP}
```

- Run Wireshark and start capturing packets

**On Host PC**
- Run `arp -a` again for the Windows 10 VM. Check if the MAC address now belongs to the Kali VM.
- `ping` Windows 10 VM - Ping should not be successful

ARP spoofing sends ARP packets to Host PC to update "spoofed" MAC address and all packets will be sent to the Kali VM instead of the web server although it shows the web server IP, the MAC address belongs to the Kali VM.

## Using Bettercap (ARP, DNS Spoof and SSL Strip)

### ARP Spoofing
**On Kali VM**
Installing Bettercap

```linux
sudo apt update
sudo apt install bettercap
```

Running Bettercap

```linux
sudo bettercap
```

View Network Information

```linux
net.show
```

> Type `help` to see available commands and modules and to see which services are running

`net.probe` searches for other hosts in the same network. 

Enable (and disable) it using the command:

```linux
net.probe on
net.probe off
```

> On Wireshark, `net.probe` broadcasts packets in the network. 

Configure `arp.spoof` to trick the Windows 10 VM into thinking that the Kali VM is the gateway

```linux
help arp.spoof
set arp.spoof.targets {Win10_VM_IP}
```

Check settings in `arp.spoof` module:

```linux
get arp.spoof.*
```

Start `arp.spoof`

```linux
arp.spoof on
```

### DNS Spoofing

**On Kali VM**
Configure `dns.spoof` to direct DNS requests for the domain yahoo.com to IP address of web-server2

```linux
help dns.spoof
set dns.spoof.address {web-server2-IP}
set dns.spoof.domains yahoo.com
```

Check settings of `dns.spoof`

```linux
get dns.spoof.*
```

Start `dns.spoof`

```linux
dns.spoof on
```

> :warning: Remember to flush your DNS cache in your Win10 using `ipconfig/flushdns`

- Browse to www.yahoo.com. You should be redirected to the web server instead of the actual Yahoo website
- Switch off `arp.spoof` and `dns.spoof` and clear DNS cache and browsing history in the Win10 VM

### SSL Strip

Enable SSL Strip in the http.proxy and https.proxy modules and start both modules

```linux
set http.proxy.sslstrip true
set https.proxy.sslstrip true
http.proxy on
https.proxy on
```

## Domain Name Client Tools

**On Win10 VM**

Using `nslookup` to find IP addresses of a website:

![](https://i.imgur.com/jxQ8at8.png)

**On Kali VM**
Finding the IP addresses of `www.yahoo.com` using the `dig` command

```linux
dig www.yahoo.com
```

Output:

<img title="" src="https://i.imgur.com/rlihs1y.png" alt="" data-align="left" width="454">

Finding the IP addresses of `www.yahoo.com` using the `host` command

```linux
host www.yahoo.com
```

Output:

<img title="" src="https://i.imgur.com/MbORClD.png" alt="" width="525">

## DNSChef

**On Windows 10 VM**

<img title="" src="https://i.imgur.com/vW7Vl2K.png" alt="" width="301" data-align="center">

1. Right click on network icon and select Open Network and Sharing Center

2. Click change adapter settings

3. Right-click on Ethernet and choose properties

4. Select “Internet Protocol Version 4 (TCP/IPv4)” and click Properties.

5. Select “Use the following DNS server addresses” and enter your Kali IP.
   
   <img title="" src="https://i.imgur.com/qmM9FVr.png" alt="" data-align="center">

**On Kali VM**
1. Start Apache Web Server
   
   ```linux
   sudo systemctl start apache2
   ```

2. Browse to 127.0.0.1 (Localhost)
   
   <img title="" src="https://i.imgur.com/AV1E6QB.png" alt="" data-align="center" width="590">

3. View Check IP of DNS server (nameserver)
   
   ```linux
   cat /etc/resolv.conf
   ```

4. Use DNSChef to sned IP of Kali when it sees DNS requests for domain kali.org

```linux
sudo dnschef -i KaliIP --fakedomains kali.org,kali.org.localdomain --fakeip KaliIP  --nameservers CurrentDNS-IP
```

## Ping Sweep

**On Kali VM**
Use `fping` command to ping range of IP addresses in Kali subent

```linux
fping --alive --quiet –g 192.168.10.1 192.168.10.254
```

Use the `hping3` command to craft one single SYN packet to Win10 VM

```linux
sudo hping3 -c 1 -S -p {port} {Win10_VM}
```

## Port Scanning (Nmap)

Common Nmap options:

- `-sT` -- basic port scan: attempts to connect every point in turn using the TCP connect()
- `sS` -- TCP SYN scan: sends packets with SYN flag
- `-p <port range>` -- scan specified ports

**On Kali VM**
Run nmap against against web server to see which ports are opened

```linux
sudo nmap -sS {web-server2-IP}
```

1. Use nmap to run a SYN scan only on port numbers 22, 25 and 80 against your web-server2 

```linux
sudo nmap –sS –p22,25,80 {web-server2-IP}
```

## Banner Grabbing

Connect to web server using Telnet

```linux
telnet {web-server2-IP}
Connected to {web-server2-IP}
Escape character is ‘^\]’
GET / HTTP/1.1
```

Using netcat:

```linux
nc {web-server2-IP}
GET / HTTP/1.1
```

## Scope Definition and Host Discovery

1. Write the scope file
```linux
echo {test_ip_adress} > scope.txt
```

2. Run a host discovery scan to identify live systems in the network (write results to the output files using the command: `-oA <filename>`):
```linux
nmap -n -sn -iL scope.txt -oA nmap_host_discovery
```

Output:
```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-09-25 17:25 UTC
Nmap scan report for 152.96.6.193
Host is up (0.00053s latency).
Nmap scan report for 152.96.6.194
Host is up (0.00096s latency).
[CUT]
Nmap scan report for 152.96.6.249
Host is up (0.00041s latency).
Nmap scan report for 152.96.6.250
Host is up (0.00042s latency).
Nmap done: 64 IP addresses (24 hosts up) scanned in 1.87 seconds
```

3. Nmap creates 3 files from the scan:

```
ls -alh
```

```
total 32K
drwx------. 1 root root  119 Sep 25 17:25 .
drwxr-xr-x. 1 root root   51 Sep 25 17:21 ..
-rw-r--r--. 1 root root  570 Jul 18 21:08 .bashrc
-rw-r--r--. 1 root root  148 Jul 18 21:08 .profile
-rw-r--r--. 1 root root  165 Sep 24 07:35 .wget-hsts
-rw-r--r--. 1 root root  995 Sep 25 17:25 nmap_host_discovery.gnmap
-rw-r--r--. 1 root root 1.8K Sep 25 17:25 nmap_host_discovery.nmap
-rw-r--r--. 1 root root 5.2K Sep 25 17:25 nmap_host_discovery.xml
-rw-r--r--. 1 root root   16 Sep 25 17:24 scope.txt
```

4. Extract the IP addresses from the previous scan and write them to a new file:

```
awk '/Host/{print $2}' nmap_host_discovery.gnmap | sort -uV > targets.txt
```

5. Scanning for specific services:

```
nmap -n -Pn -p 22 -iL targets.txt -oA nmap_port_ssh
```

6. Detailed service analysis:

```
nmap -n -Pn -p 22 --script ssh-auth-methods -iL targets.txt -oA nmap_port_ssh_auth_methods
```

7. Full port scan:

```
nmap -n -Pn -p- 152.96.6.240 -oA nmap_all_ports_on_240
```

8. Scanning for specific vulnerabilities:

```
nmap -n -Pn -p 445 --script smb-vuln-ms17-010 -iL targets.txt -oA nmap_script_eternalblue
```