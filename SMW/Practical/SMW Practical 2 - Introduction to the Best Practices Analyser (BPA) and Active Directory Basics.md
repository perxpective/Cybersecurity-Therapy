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
1. In Server Manager, click **Tools** and click the **Active Directory Domains and Trusts**
2. In the tree in the left pane, right-click **Active Directory Domains and Trusts** (server and domain name)
3. Click **Raise Forest Functional Level**

![](https://i.imgur.com/uj5YGTH.png)

4. Select a functional level (Functional levels cannot be rolled back to a lower level)
5. Click **Raise**

## Creating Domain User Accounts in Active Directory
1. Run **mmc**
2. Click the **File** menu and select **Add/Remove Snap-in**
3. Under available snap-ins, click **Active Directory Users and Computers** and click **Add** and **OK**
4. Click the right point arrow in **Active Directory Users and Computers** and under `smw.soc.com` to display the folders and OUs below
5. Select the **Users** folder and in the middle pane, view the user accounts (with one head icons) and groups (with two head icons) already created
6. Right click **Users** in the left pane and point to **New** and click **User**

![](https://i.imgur.com/irus2CQ.png)

![](https://i.imgur.com/A9MNuz2.png)

> Three accounts to be created: User1, Staff1, Mgr1

7. To continue configuring an account, double click an account (or right click the account and select **Properties**)

## Group Policy Controlling Access to the Domain Controller
> - As the domain controller is a very important server, physical access to it should be restricted
> - Direct login to the Domain Controller should also be restricted

1. On the Domain Controller, login as any one of the three domain user accounts just created - It should be unsuccessful (security by default)
2. Login as Domain Administrator
3. Under Administrative Tools, run Group Policy Management and expand the domain. 
4. Under Domain Controllers, there is a **Default Domain Controller Policy** (policy that controls all domain controllers in the domain)
5. Right click on Default Domain Controller Policy and select **Edit**
6. Expand Computer Configuration > Policies > Windows Settings > Security Settings > Local Policies, click on **User Rights Assignments**
7. On the right-hand pane, double click on **Allow log locally**
8. Click on **Add User or Group** and click browse
9. Type **Mgr1** and click **Check Names**. Click OK three times
10. Login as Mgr1 on the Domain Controller - It should be successful now

## Granting Administrative Rights to User Account By Security Group Member
1. Create another domain user account and make them a member of the Domain Administrators group
2. Login to the Domain Controller directly with the newly created account to prove it has administrative rights

## Managing Organisational Units (OU)
1. On the Server Manager, click on **Tools** and click **Active Directory Users and Computers**
2. Right click `smw.soc.com` on the left pane and select New > Organisational Unit
3. Create a new OU called SalesOU
4. Move the User1 and Staff1 user accounts and the Windows 10 computer object to the SalesOU

![](https://i.imgur.com/pBK6UW9.png)

5. Click **Delegate Control**
6. Click **Next** when the delegation of control wizard starts and follow the instructions
7. Delegate the control of SalesOU to Mgr1 to only reset user passwords and force password change at next logon control

![](https://i.imgur.com/3KfvjNS.png)

## Installing and Configuring Server Administration Tools on Windows 10
> - Often the Administrators wish to carry out admin tasks e.g. creating domain users using their own workstations instead of physically going to the Domain Controller every time
> - They can instal the Remote Server Administration Tools (RSAT) on their own workstations

1. On Windows 10, right click on the Start button and click on the **Apps and Features** menu
2. Click on **Optional Features** to find all installable RSAT components
3. Search for "RSAT" and install it
4. After the installation, login as Mgr1 (Domain user account) at the client Windows workstation