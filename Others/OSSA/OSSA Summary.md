# OSSA Summary

## Description
Useful notes and summaries for the Organisational System Security Analyst (OSSA) Certification

## Table of Contents
```toc
```

## Commands
### Network-Based IDS Configuration (Snort)
- Starting snort:
```
snort -c /etc/snort/snort.conf
```

- View all Snort logs:
```
tail -f /var/log/snort/alert
```

- Check the latest Snort log:
	- `<filename>` is the desired log file
```
more /var/log/snort/<filename>
```

### File Integrity Checker and Host-Based IDS (Tripwire)
- Take a snapshot of the system:
```
tripwire --init
```

- Check for any changes in the file system:
```
tripwire --check
```

- View Tripwire report:
```
twprint -m r --twrfile /var/lib/tripwire/report/<filename>
```

- Policies can be edited on the Tripwire Policy text file: `twpol.txt`

- Update the Tripwire database whenever `twpol.txt` was edited:
```
tripwire --update --twrfile /var/lib/tripwire/report/<filename>
```

### Cryptography (GPG)
- Generate a new keypair:
```
gpg --gen-key
```

- Import third-party public keys:
```
gpg --import <filename>
```

- View the imported keys:
```
gpg --fingerprint
```

- Sign the imported key to show that verification of the public keys was done:
```
gpg --sign-key <keyid>
```

- Verify the signature of the file:
```
gpg --verify <public_signature> <filename_to_check> 
```


### DNS Reconnaissance
- Find IP address of server:
```
dig securitystartshere.org
```

**dig options:**
- `mx` - find **mail exchanger** records
- `ns` - find **name server** records 
- `soa` - find **SOA (Start of Authority)** 
	- stores information about the name of the server, zone administrator, current version of zone data file etc.

**Perform a zone transfer of the pod's DNS internal server**
```
dig @10.50.6.1 pod6.com axfr
```

### Port Scanning (Nmap)
- **Ping Sweep:**
```
nmap -sP -n 10.50.6.0/24
```

- **SYN Stealth Scan:**
```
nmap -sS <ip address> 
```

- **Suggested SYN Scan:**
```
nmap -sS -n -Pn -vv -p<target port range> -g<source port range> <target IP address> --max-retries=<value> --min-parallelism<value> --max-rtt-timeout=<value>ms
```

- **ACK Scan:**
```
nmap -sA <ip adress>
```

- **OS Version Detection:**
```
nmap -sV -Pn -n -p80,135-139,445 -vv 10.50.6.3
```

### ARP Spoo