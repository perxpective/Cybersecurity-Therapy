# SMW Exam AY2021/2022 Semester 1

###### tags: #SMW

## Question 1
(a) Briefly explain the main security function of the Authentication Header (AH) protocol

(b) List three possible choices of an IPSec filter action setting

(c) Illustrate with a diagram the transformation of an IP packet after applying AH protocol in transport mode with all its security options enabled (Hint: The diagram below represents the IP packet before the transformation)

![](https://i.imgur.com/sHhWsOL.png)

(d) Other than filter action, list the other four elements that make up an IPSec rule.

## Question 2
(a) Briefly explain how the "Enforced" and "Block Inheritance" settings affect the actual resultant set of Group Policy Settings for a particular domain workstation

(b) List four "User Rights" privileges that can be managed by GPO settings

(c) In a single domain Windows system, there are a total of four domain workstations (hr_pc1, hr_pc2, hr_pc3, hr_pc4) allocated to the HR department. Based on the existing security groups and group policy configurations, only the HR staff can login to these workstations.

There is a dedicated member server (hr_server) that has been allocated to the HR department. The system administrator is going to create a shared folder (`\\hr_server\hr_share`) at the member server (hr_server). This new share should only be allowed to access from the four HR workstations.

Briefly describe how to configure and deploy a domain policy to accomplish the desired objective. State your assumptions to support your answer.

## Question 3
(a) In terms of Patch Management and WSUS:
- (i) Identify two common troubleshooting strategies for handling Windows update issues
- (ii) List one pro and one con of using test site approach to test a new update before the actual deployment

(b) In terms of Remote Access Security:
- (i) List three of the build-in VPN protocols available in Microsoft Windows 2016 and briefly describe a unique feature/attribute for each of these protocols
- (ii) Explain one pro and one con of applying the combination of IPSec and VPN for remote access to a shared folder

## Question 4
In terms of Public Key Infrastructure (PKI):

(a)  Briefly describe two issues for the use of:
- (i) Certificate Revocation Lists to identify invalidated certificates
- (ii) Online Certificate Status Protocol to identify invalidated certificates

(b) Briefly explain two security or operation implications if there is no certificate renewal process incorporated in the PKI design