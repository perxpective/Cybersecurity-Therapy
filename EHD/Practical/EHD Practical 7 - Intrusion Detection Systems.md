# EHD Practical 7 - Intrusion Detection Systems

###### tags: `EHD`

## Table of Contents
```toc
```

## Network Intrusion Detection Systems (NIDS)
### Configuring Snort
- Display version number of snort
```
snort -V
```

- Listen to particular network interface device
```
snort -i
```

- Verbose Mode
```
snort -v
```

- Dump the application layer
```
snort -d
```

**On web-server2 VM**
- Display available options
```
snort -h
```

- Open snort configuration file with text editor
```
vim /etc/snort/snort.conf
```

- Edit Snort configuration file and search for line containing `HOME_NET`
	- Replace word "any" to web-server2 IP address to make the web server the home network to protect
```
ipvar HOME_NET any
```

```
ipvar HOME_NET web-server2-IP
```

- Search for line containing `EXTERNAL_NET` and check that it is set to value "any"
```
var EXTERENAL_NET any
```

- Check value of `RULE_PATH`, rule files should be placed in the folder `/etc/snort/rules`
```
var RULE_PATH /etc/snort/rules
```

- Set values for the following paths under the rule folder:
```
var SO_RULE_PATH /etc/snort/so_rules
var PREPROC_RULE_PATH /etc/snort/preproc_rules
var WHITE_LIST_PATH /etc/snort/rules
var BLACK_LIST_PATH /etc/snort/rules
```

- Create new directory for Snort dynamic rules
```
mkdir /usr/local/lib/snort_dynamicrules
```

- Create white and black lists
```
touch /etc/snort/rules/white_list.rules
touch /etc/snort/rules/black_list.rules
```

- Running Snort manually

> - `-i` option is to specify network interface card that Snort will listen on
> - `-l` option means captured network packets will be logged into specified directory

```
snort -i eno16777736 -c /etc/snort/snort.conf -l /var/log/snort
```

^50a927

- Check that Snort can run without any errors
- Do <kbd>Ctrl</kbd> + <kbd>C</kbd> to end Snort program

### Creating a Snort Rule File
- Create new rule file:
```
touch /etc/snort/rules/my.rules
```

- Enter following rule into the file (Use a big SID so it will not clash with other SIDs in Snort)
```
alert tcp Kali-IP any -> !$HOME_NET any (msg:"TCP traffic from Kali!"; sid:99999;)
```

- Edit `/etc/snort/snort.conf`

- Add the newly created rule file:
```
# site specific rules
include $RULE_PATH/my.rules
```

- Run Snort manually
- From Kali VM, run an nmap scan against web-server2 VM
- When scan is completed, stop Snort
- View contents of file `/var/log/snort/alert` - All alert messages due to TCP traffic from Kali are captured in this file

![](https://i.imgur.com/D6OjBZl.png)

- In `/var/log/snort` directory, there is another file `snort.log.NNNNNNN` that can be opened in Wireshark
	- Contains packets that generated the alerts

### Creating Snort Rules to Detect Illegal TCP Flags
**On web-server2 VM**
- Comment out any existing rules in `/etc/snort/rules/my.rules`
- Create the following rule:
```
snort -i eno16777736 -c /etc/snort/snort.conf -l /var/log/snort
```

- Run Snort manually

**On Kali VM**
- Run Null scan against some ports on web-server2 VM
```
sudo nmap -sN -p21,22,23 web-server2-IP
```

**On web-server2 VM**
- Check `/var/log/snort/alert` file to view alert messages about null packets
- Stop Snort

### Using Snort Community Rules
- View Snort community rules
```
vim /etc/snort/rules/community.rules
```

- Uncomment the following rule:
```
alert icmp $EXTERNAL_NET any -> $HOME_NET any (msg:"PROTOCOL-ICMP PING Windows"; itype:8; content:"abcdefghijklmnop"; depth:16; metadata:ruleset community; classtype:misc-activity; sid:382; rev:11;)
```

- Add Snort community rules to `/etc/snort/snort.conf`
```
# site specific rules
include $RULE_PATH/my.rules
include $RULE_PATH/community.rules
```

- Run Snort manually

**On Kali VM, Win10 VM or Host PC**
- Ping web-server2 VM

**On web-server2 VM**
- Check that `/var/log/snort/alert` file to view alert messages about null packets
	- Only ICMP packets from Windows system have alert messages
	- ICMP packets from Kali do not have alert messages

### Running Snort as a Service
**On web-server2 VM**
- Edit `/etc/sysconfig/snort`
- Look for following `INTERFACE` line and update it to name of web-server2 VM network interface
```
INTERFACE=eno16777736
```

- Look for user `USER` and `GROUP` lines and update them to run Snort as root
```
USER=root
GROUP=root
```

- Starting the Snort service (and checking status)
```
systemctl start snortd
systemctl status snortd
```

## Host-Based Intrusion Detection Systems (HIDS)
### Using Tripwire
**On Kali VM**
- Installingg 