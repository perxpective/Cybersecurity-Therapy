# OSSA Summary

## Description
Useful notes and summaries for the Organisational System Security Analyst (OSSA) Certification

## Table of Contents
```toc
```

## Commands
### Snort
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

###