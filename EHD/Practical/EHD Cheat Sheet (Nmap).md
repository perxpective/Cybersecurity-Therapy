# EHD Cheat Sheet (Nmap)

###### tags: #EHD

## Target Specification
- **Scan a single IP**
  ```
  nmap 192.168.1.1
  ```

- **Scan specific IPs**
  ```
  nmap 192.168.1.1 192.168.1.2
  ```

- **Scan a range of IPs**
  ```
  nmap 192.168.1.1-254
  ```

- **Scan a domain**
  ```
  nmap scanme.nmap.org
  ```

- **Scan an IP with CIDR notation**
  ```
  nmap 192.168.1.0/24
  ```

- `-iL` -- **Scan a list of targets from a file**
  ```
  nmap -iL targets.txt
  ```

- `-iR` -- **Scan a number of random hosts**
  ```
  nmap -iR 100    // Scan random 100 hosts
  ```

- `--exclude` -- **Exclude listed addresses**
  ```
  nmap --exclude 192.168.1.1    // Exclude 192.168.1.1 from scanning
  ```

## Scan Techniques

| Switch | Command                | Description           |
| ------ |:---------------------- | --------------------- |
| `-sS`  | `nmap -sS 192.168.1.1` | TCP SYN Port Scan     |
| `-sT`  | `nmap -sT 192.168.1.1` | TCP Connect Port Scan |
| `-sU`  | `nmap -sU 192.168.1.1` | UDP Port Scan         |
| `-sA`  | `nmap -sA 192.168.1.1` | TCP ACK Port Scan     |
| `-sW`  | `nmap -sW 192.168.1.1` | TCP Window Port Scan  |
| `-sM`  | `nmap -sM 192.168.1.1` | TCP Maimon Port Scan  |

## Host Discovery

| Switch | Command                   | Description                           |
| ------ | ------------------------- | ------------------------------------- |
| `-sL`  | `nmap -sL 192.168.1.1-3`  | List range of targets. No scanning    |
| `-sn`  | `nmap -sn 192.168.1.1/24` | No port scanning, only host discovery |
| `-Pn`  | `nmap -pn 192.168.1.1-5`  | No host discovery, only port scanning |

## Port Specification

| Switch        | Command                             | Description                     |
| ------------- | ----------------------------------- | ------------------------------- |
| `-p`          | nmap 192.168.1.1 -p 21              | Scan for port number            |
| `-p`          | nmap 192.168.1.1 -p 21-100          | Scan port range                 |
| `-p`          | nmap 192.168.1.1 -p U:53,T:21-25,80 | Scan range of TCP and UDP ports |
| `-p-`         | nmap 192.168.1.1 -p-                | Scans all ports                 |
| `-p`          | nmap 192.168.1.1 -p http, https     | Scans service names             |
| `-F`          | nmap 192.168.1.1 -F                 | Fast 100 port scan              |
| `--top-ports` | nmap 192.168.1.1 --top-ports 2000   | Scans top x ports               |

## Service and Version Detection

| Switch | Command                | Description                                                            |
| ------ | ---------------------- | ---------------------------------------------------------------------- |
| `-sV`  | `nmap 192.168.1.1 -sV` | Determine the version of service running on port                       |
| `-A`   | `nmap 192.168.1.1 -A`  | Enable OS Detection, version detection, script scanning and traceroute |
| `-O`   | `nmap 192.168.1.1 -O`  | Remote OS detection using TCP/IP stack fingerprinting                  |

## Output

| Switch | Example                            | Description                           |
| ------ | ---------------------------------- | ------------------------------------- |
| `-oN`  | `nmap 192.168.1.1 -oN normal.file` | Normal output to file normal.file     |
| `-oX`  | `nmap 192.168.1.1 -oX xml.file`    | XML output to xml.file                |
| `-oG`  | `nmap 192.168.1.1 -oG grep.file`   | Grepable output to grep.file          |
| `-oA`  | `nmap 192.168.1.1 -oA results`     | Output in three major formats at once |

## Timing and Performance

| Switch | Command                | Description |
| ------ | ---------------------- | ----------- |
| `-T 0` | `nmap 192.168.1.1 -T0` | Paranoid    |
| `-T 1` | `nmap 192.168.1.1 -T1` | Sneaky      |
| `-T 2` | `nmap 192.168.1.1 -T2` | Polite      |
| `-T 3` | `nmap 192.168.1.1 -T3` | Normal      |
| `-T 4` | `nmap 192.168.1.1 -T4` | Aggressive  |
| `-T 5` | `nmap 192.168.1.1 -T5` | Insane      |

| Switch                | Description                      |
| --------------------- | -------------------------------- |
| `--scan-delay <time>` | Adjust delay between probes      |
| `--max-rate`          | Send packets no faster than scan |
| `--min-rate`          | Send packets no slower than <number> scan|