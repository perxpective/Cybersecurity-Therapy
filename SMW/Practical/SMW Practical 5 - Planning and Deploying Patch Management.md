# SMW Practical 5 - Planning and Deploying Patch Management

###### tags: #SMW 

## Table of Contents
```toc
```

## Joining a WSUS Server to a domain
1. Before joining to the server successfully, set and confirm that the network connection settings of the WSUS Server accordingly (Static IP, Gateway, DNS)
2. Assign a appropriate IP address to the standalone WSUS server
3. Apply the same approach from previous labs to let this server join the domain

## Setting Up the WSUS Client Configuration
1. On the domain controller, use Active Directory Users and Computers and verify if there is an OU called "MemberServerOU" and create one if needed
2. Move Windows Server 2012 R2 to the MemberServerOU
3. Run Group Policy Management Console (GPMC), right-click on the OU and select Create a GPO
4. For Name, enter "WSUS_Policy" and click OK

![](https://i.imgur.com/zFp7I94.png)

5. Expand MemberServerOU, right-click WSUS_Policy and choose Edit

![](https://i.imgur.com/BjfVp1g.png)
