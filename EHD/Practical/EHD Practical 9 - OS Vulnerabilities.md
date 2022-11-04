# EHD Practical 9 - OS Vulnerabilities

###### tags: #EHD 

## Table of Contents
```toc
```

## Windows Vulnerabilities
### View Shared Resources on Windows Systems
**On Win10 VM**
1. Repeat `net view \\Win-10 IP` to show a list of available shared folders
2. Repeat the `net view` command on another Win10 VM
3. Run `net use Z: \\Win10-IP\shared` to map shared folder to Z drive
4. Run `dir Z: \\Win10-IP\shared`
5. Type `nbtstat /?` for help
6. Type `nbtstat -a Win10-IP`

### OpenVAS
1. Power on OpenVAS image
2. At the login screen, note