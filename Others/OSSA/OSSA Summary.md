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

- 