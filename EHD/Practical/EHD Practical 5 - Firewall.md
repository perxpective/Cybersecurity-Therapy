# EHD Practical 5 - Firewall

###### tags: #EHD

## Table of Contents
```toc
```

## fwbuilder
### Managing Linux iptables
> Iptables is used to implement packet filtering on Linux. It can be easily configured on the Linux command line.

**On Red Hat Linux**
1. View IP address of Red Hat Linux VM by running:
   
   ```
   ip addr
   ```

2. Start the Apache web server using the command:
   
   ```
   service httpd start
   ```

3. Create a default homepage for the Apache web server by creating and editing the file `/var/www/html/index.html` and enter content

4. Open the web browser and browse to `http://ip_address` (Red Hat Linux IP address)

5. Create a new directory to store Firewall Builder configuration
   
   ```
   mkdir /etc/fw
   ```

6. Test that Kali can establish a SSH connection to RHEL6
   
   ```
   ssh root@rhe-16-IP
   ```

7. Type yes to continue connecting when the key fingerprint of host message pops up

8. Type `redhat` for the password

9. Type `exit` to exit the connection

### Firewall Builder on Kali Linux

- Start Firewall Builder by typing `fwbuilder`

#### Using Firewall Builder to set up firewall configuration

**On Kali VM**
1. Test that the Kali Linux VM can ping the Red Hat Linux VM
2. Open web browser and browse to http://ip_address (Red Hat Linux). You should not be able to view the web page as default iptables setting of Red Hat Linux is not allowing connections to the Apache web server.
3. On Firewall Builder, create a new firewall
4. Give a name for the new firewall object
5. Choose **'iptables'** for firewall software
6. For OS, choose **"Linux 2.4/2.6"**

<img title="" src="https://i.imgur.com/UxB077Y.png" alt="" data-align="left" width="503">

7. Click **next**
8. Configure interfaces manually (Do not need to specify network interfaces)
9. Save firewall file

### Add a rule to allow SSH Connections
1. Right click empty rules panel and select **Insert New Rule**
2. Choose **Standard** from Library

<img title="" src="https://i.imgur.com/wFrZSKv.png" alt="" data-align="left" width="226">

3. Expand services and expand TCP
4. Look for "ssh". Click it and drag it to **Service** column of the new rule
5. In the new rule, right click on **Deny  Action** and change to accept
6. In the new rule, right click on log option and change it to **Logging Off**

<img title="" src="https://i.imgur.com/t9bvG63.png" alt="" width="558" data-align="center">

### Add a new rule to allow HTTP connections
**On Kali VM**
1. Create a new rule
2. Expand Services on the left hand panel and then expand TCP and look for **"http"**
3. Change action to **"Accept"** in the Action column
4. Change logging to **"Logging off"** in the Logging column

<img title="" src="https://i.imgur.com/09661UZ.png" alt="" data-align="center" width="557">

### Add a rule to deny all traffic
**On Kali VM**
1. Right click on empty section in the rules panel and insert a new rule. By default, rule denies all other traffic.

### Compile and install rules to Red Hat Linux
**On Kali VM**
1. From **Library** drop-down, select **User**
2. Right click myfirewall and choose install.

<img title="" src="https://i.imgur.com/sRfiIqf.png" alt="" width="416">

3. Click **Next** to start compiling the firewall

<img title="" src="https://i.imgur.com/Ky9Robz.png" alt="" data-align="left" width="288">

4. After the firewall is compiled successfully, click **Next**
5. Enter credentials for Red Hat Linux and the IP address for Red Hat Linux.
6. Select **Verbose**
7. Click **Install**

> #### Login Credentials for Red Hat Linux
> 
> **Username:** root
> **Password:** redhat
> 
> <img title="" src="https://i.imgur.com/m4eikXI.png" alt="" width="386">

### Testing the rules

**On Kali VM**
- Open web browser and browse to http://ip_address (IP address of Red Hat Linux)
- Test if Red Hat Linux VM can be pinged. It should be unsuccessful as there are no rules to allow ping packets yet.

### Setting direction for firewall rules
#### On Kali
1. Change direction of ICMP rule to inbound
2. Install modified rules to Red Hat Linux VM
3. Test if Red Hat Linux can be pinged. It should be successful

**On Red Hat Linux**
1. Test that Kali Linux VM can be pinged. It should not be successful as ICMP rule only accepts incoming ICMP packets and outgoing ICMP packets are blocked.

### Setting source or destination for firewall rules
**On Kali VM**
1. Run `ipconfig` or `ip addr` to check IP address and netmask of Kali VM.
2. On Firewall Builder, on left hand Object panel, expand **Objects**
3. Right click on **Hosts** and select **New Host**

<img title="" src="https://i.imgur.com/z9pPZWm.png" alt="" data-align="left" width="277">

4. For Name of New Object Host, type "Kali" and click Next
5. Select "Configure interfaces manually" and click Next
6. For interface name, type the name of network interface
7. Enter IP address and netmask of Kali VM
8. From Objects panel, drag Kali icon to Source column of ICMP rule
9. Install new rules on Red Hat Linux VM
10. Test that Kali VM can ping the Red Hat Linux VM. Host PC or webserver should not be able to ping Red Hat Linux VM.

<img title="" src="https://i.imgur.com/xlsRqoF.png" alt="" width="537" data-align="center">

### Using the negate option
- Specifies that only Kali Linux VM cannot ping Red Hat Linux
1. Right click on Kali in ICMP rule and click on **Negate**
2. The ICMP rule now means any IP address except Kali VM can ping Red Hat Linux.
3. Install new rules to Red Hat Linux VM
4. Test that Kali VM cannot ping Red Hat Linux VM but other systems (e.g. Host PC and webserver) can ping Red Hat Linux

### Viewing Firewall Logs on Red Hat Linux
- To view the last 30 lines of `/var/log/messages`, run:

```
tail -30 /var/log/messages
```
<img title="" src="https://i.imgur.com/nFthG4X.png" alt="" data-align="center" width="637">
- Packets that have been denied by firewall are logged down