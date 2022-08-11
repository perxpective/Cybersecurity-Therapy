# EHD Practical 1a - Network Protocols

###### tags: #EHD

### Table of Contents
- [[#Using Kali Linux|Using Kali Linux]]
- [[#Configuring Network Settings in Kali Linux|Configuring Network Settings in Kali Linux]]
	- [[#Configuring Network Settings in Kali Linux#Following TCP Streams|Following TCP Streams]]
- [[#Identifying Open Ports in Linux|Identifying Open Ports in Linux]]
- [[#Connecting to Servers|Connecting to Servers]]
	- [[#Connecting to Servers#Connecting to FTP Server|Connecting to FTP Server]]
	- [[#Connecting to Servers#Connecting to Telnet|Connecting to Telnet]]

## Using Kali Linux

View Kali Linux version

```linux
cat /etc/os-release
uname -a
```

View IP address

```linux
ip addr
```

View IP gateway

```linux
ip route
```

View DNS Server

```linux
dkpg --list
apt list --installed
```

## Configuring Network Settings in Kali Linux

1. Go to Kali menu

2. Choose Settings -> Advanced Network Configuration -> Ethernet -> Wired connection 1

3. Click on IPv4 tab

   You can manually set your own static IP address, netmask and gateway by setting Manual

   (1) Activate (2) Deactivate (3) Reload Wired connection 1 (using nmcli)
   
   ```linux
   nmcli connection up "Wired connection 1"
   nmcli connection down "Wired connection 1"
   nmcli connection reload "Wired connection 1"
   ```
   
   Change IP settings by editing the `"/etc/NetworkManager/system-connections/Wired connection 1"` file
   
   ```linux
   [ipv4]
   method=manual
   address1=172.16.108.191/24,172.16.108.2 
   (Your own IP, subnet mask and gateway)
   ```
   
   Reset Wired connection 1 to use DHCP by editing the `"/etc/NetworkManager/system-connections/Wired connection 1"` file
   
   ```linux
   [ipv4]
   method=auto
   ```
   
   ## Using Wireshark
* Type "icmp" to view only packets involved in the `ping` command
* Type "http" to view only packets involved in the `http` command
* Type `ip.addr==127.0.0.1` to view packets that are sent and received by your Kali VM (Your Kali IP)

To search for a strings in packet, type:

```
frame contains keyword
```

Type the following to view only the three packets in the TCP 3-way handshake:

```
tcp.flags.syn==1 or (tcp.seq==1 and tcp.ack==1 and tcp.len==0 and tcp.analysis.initial_rtt)
```

---

### Following TCP Streams

Web forms usually use the HTTP POST Method

```
http.request.method=="POST"
```

![](https://i.imgur.com/Q8KoSQC.png)
The red part is the HTTP request sent by web browser in cleartext
The blue part is the HTTP response sent by web server

---

## Identifying Open Ports in Linux

**On web-server2:**

`-tuna` displays all TCP and UDP connections in numeric format 

```
netstat -tuna
```

`-tunap` displays processes responsible for opening the ports

```
netstat -tunap
```

## Connecting to Servers
### Connecting to FTP Server
1. Run wireshark and start capturing packets
2. Type in terminal: `ftp web-server2-IP`
3. Username: student00 or anonymous
4. Password: student00 or press <kbd>ENTER</kbd> if anonymous
5. Type `help` for list of available commands
6. Type `dir` or `ls` to list current directory of FTP Server
7. Type `bye` or `exit` to exit connection
8. Type "ftp" in the filter box to find username, password and name of downloaded file
   ![](https://i.imgur.com/0NURPlA.png)
9. Type "ftp-data" to see packet containing downloaded files and its contents by following the TCP stream
   ![](https://i.imgur.com/bYWW1LQ.png)

### Connecting to Telnet

1. On the web server, edit the `/etc/xinetd.d/telnet` file to enable telnet:
   
   ```
   disable = no
   ```

2. Start xinetd service if not running:
   
   ```
   systemctl start xinetd
   ```

3. Edit the `/etc/firewalld/zones/public.xml` file to allow connections to Telnet Port 23
   
   ```
   systemctl restart firewalld
   ```

4. Use `netstat -tuna` to check if Telnet is running

5. On Kali VM, start capturing packets

6. Type in terminal: `telnet web-server-2-IP`

7. Type `exit` to exit the Telnet session

8. Right click any Telnet packet and follow TCP stream to see unencrypted commands, password and messages.
