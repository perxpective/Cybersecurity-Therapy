# SMW Practical 2 - Introduction to the Best Practices Analyser (BPA) and Active Directory Basics

###### tags: #SMW #Practical 

## Table of Contents
```toc
```

## Using the Best Practices Analyser (BPA) to Check Against Domain Controller
1. Login to Domain Controller
2. Open Server Manager > Local Server
3. On the right pane, scroll to **Best Practices Analyzer**
4. Click the down arrow for **Tasks**
5. Click **Start BPA Scan** and wait for the scan to complete
6. Read results shown for the scan

![](https://i.imgur.com/5r5iM07.png)

> The BPA scanning is based on different set of rules:

| Category Name   | Description                                                                                                                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Security        | Security rules applied to measure role's relative risk for exposure to threats unauthorized or malicious users or loss or theft of confidential information or proprietary data                                                                                                                       |
| Performance     | Performance rules applied to measure a role's ability to process requests and perform its prescribed duties in the enterprise within the expected periods of time given the role's workload                                                                                                           |
| Configuration   | Configuration rules applied to identify role settings that might require modification for the role to perform optimally. <br> Configuration rules can help prevent conflicts in settings that can result in error messages or prevent the role from performing its prescribed duties in an enterprise |
| Policy          | Policy rules applied to identify Group Policy or Windows registry settings that might require modification for a role to operate optimally and securely                                                                                                                                               |
| Operation       | Option rules are applied to identify possible failures of a role to perform prescribed tasks in the enterprise                                                                                                                                                                                        |
| Pre-deployment  | Pre-deployment rules are applied before an installed role is deployed in the enterprise. Let administrators evaluate before the role is used in production where best practices are satisfied                                                                                                         |
| Post-deployment | Post-deployment rules are applied after all required services started for a role and after the role is running in the enterprise                                                                                                                                                                      |
| Prerequisites   | Prerequisite rules explain configuration settings, policy settings and features that are required for a role before BPA can apply specific rules from other categories. Prerequisite result implies that a rule cannot be applied and thus not part of the scan results                                                                                                                                                                                                                                                                                                      |

## Viewing Firewall Rules
1. Navigate to **Windows Firewall with Advanced Security**

![](https://i.imgur.com/BoN0iLE.png)

## Raising the Forest and Domain Functional Level
1. In Server Manager, click **Tools**