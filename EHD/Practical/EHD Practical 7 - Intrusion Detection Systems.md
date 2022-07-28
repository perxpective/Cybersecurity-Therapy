# EHD Practical 7 - Intrusion Detection Systems

###### tags: `EHD`

## Table of Contents
```toc
```

## Configuring Snort
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
ipvar HOME_NET <web-server2-IP>
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

