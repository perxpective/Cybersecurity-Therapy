# SMW Lecture 7 - Planning and Deploying Public Key Infrastructure and Secured Web Content Web Services

###### tags: #SMW 

## Table of Contents
```toc
```

## Defining Certificate Requirements
- Windows Server enables secure data access based on the use of digital certificates
- Certificates allow users or systems to prove to others that they are who they say they are
- Before you can use digital certificates, a Public Key Infrastructure (PKI) needs to be designed
- **To protect exchange messages from eavesdropping attack with asynchronous encryption algorithms**
	- A key-pair is associated with an individual party
	- Each individual party will keep its private key as a secret but share out its public key to everyone
	- Messages being encrypted with the public key can only be decrypted by the corresponding private key
	- Digitally signed message with the individual private key can only be verified by its corresponding public key
	- **Concern**
		- How can we obtain a genuine public key of a particular party before we can establish a secure communication channel with the party
- **Public Key Infrastructure**
	- Refers to a technology that includes a series of features relating to authentication and encryption
	- Based on a system of certificates, each certificate contains a public key and the name of the subject
	- Allows an organisation to publish, use, renew or revoke certificates and enrol clients
- Certificates may be required if you are using any of the following applications:
	- Digital signatures
	- Secured email
	- HTTPS/SSL
	- Internet authentication
	- Software code signing
	- IP security
	- Smart card logon
	- Encrypted file system
	- 802.1x authentication

## Certificate Authority
> An entity that issues digital certificates to other parties

- Root CA can issue certificates to SubOrdinate, Immediate or Issuing CAs
- Issuing CAs can issue certificates to users or clients

### Certificate Authority Hierarchies and Roles
- Types of hierarchies that can be used for CAs:
	- Rooted trust model
	- Cross-certification trust model
	- Hybrid trust model
- Roles that can be chosen for CAs:
	- **Standalone CA**
		- Rudimentary CA
		- Intermediate CA
	- **Enterprise CA**
		- Basic Security CA
		- Medium Security CA
		- High Security CA

> Notes:
> - For Standalone CA setup, target clients are not bound to the enterprise which implements the service
> 	- Applicable for offering to the general public
> - Enterprise CA setup, its target clients are within the enterprise
> 	- Suitable for internal staff and computing operations that require the certificate services

### Rooted Trust Model
- Model in which the root CA has a self-signed certificate and the CA issues a certificate to all direct subordinate CAs
- CAs in this model can be online or offline: allows flexibility in deploying and managing PKI
- Each CA serves a single role within the hierarchy and is not dependent on the other CAs
	- Allows rooted trust hierarchies to be more scalable and easier to administer than other hierarchies
- Possible to add a new CA to a hierarchy
- Rooted trust hierarchies fall into two subcategories
	- Two-tier CA hierarchy
	- Three-tier CA hierarchy
- Any CA in a rooted trust hierarchy is either a root or a subordinate but never both
- Each CA is responsible for processing requests, issuing certificates, revoking certificates and publishing CRLs
- Each CA can be managed independently

![](https://i.imgur.com/hIr3Bgt.png)

### Cross-Certificates Model
- Model in which all CAs are self-signed and trust relationships between CAs are based on cross-certificates
	- Certificates issued by one CA will be trusted by computers which belong to other CA hierarchy
- Cross-certificates does not need to be bidirectional
- Mutually trusted CAs will issue digital certificates to each other

| Advantages                       | Disadvantages                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------- |
| Low cost and greater flexibility | Greater administrative overhead and increase risk of an unauthorized access to internal resources |

### Using Third-Party CAs
- Useful when organisation conducts most of its business with external customers and clients
- **Examples:**
	- DigiCert
	- GlobalSign
	- GoDaddy

| Advantages                                                                                                                             | Disadvantages                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Customers have greater degree of confidence when conducting secure transactions with organisations because they trust third-party CAs  | High per-certificate cost and allows less flexibility in managing certificates and auto-enrolment is not possible |
| Allows an organisation to take advantage of third-party CAs understanding of technical, legal and business issues with certificate use |                                                                                                                   |

- Windows System already configured with a list of trusted commercial third-party CAs
- Can be easily viewed and configured via web browser

### Installing Certificates Authority Roles
- Root CA is installed first followed by installing intermediate CAs and finally the issuing CAs
- **Root CA:**
	- CA that is at the top of a certification hierarchy and must be trusted unconditionally by clients in an organisation
	- An enterprise root CA stores its information in the Active Directory and the server that hosts the service must be joined to a domain
	- Storing the root CA offline is much more secure
- **Intermediate CA:** CA subordinate to a root CA
- **Issuing CA:** Issues certificates to users and computers

## Selecting a Certificate Enrolment and Renewal Method
- Depends on the following:
	- Types of certificates that you intend to use
	- Number and type of clients that you enrol
- Two types:
	- **Manual**
		- If administrative approval is required, most useful for issuing and renewing computer and IPSec certificates
	- **Automatic**
		- If no approval is necessary, can improve administrative control over certificates
		- <u>Methods for automatic enrolment include:</u>
			- Certificate auto-enrolment and renewal: based on a combination of Group Policy settings and certificate templates
			- Certificate Request Wizard and Certificate Renewal Wizard
			- Web enrolment support pages
			- Smart card enrolment station

## Configuring Certificate Templates
- Configuring Templates is a Windows utility to help CA administrator to facilitate different types of certificate enrolment
- Certificate Services provides certificate templates to simplify the process of requesting and issuing certificates
- Each template contains the rules and settings
	- can serve a single purpose or multiple purposes
- Provides a default input requirement for different type of certificate
	- helps reduce errors and make the operations more efficient
- Certificate Templates are only available on Enterprise Root and Subordinate CAs
- Stored in Active Directory
- Available to every enterprise CA in the forest
- Certificate Templates MMC snap-in provides administrators with the capability to:
	- Create additional templates by duplicating and modifying existing templates
	- Modify template properties
	- Configure policies applied to certificate enrolment, issuance and application
	- Allow the auto-enrolment of certificates
	- Configure ACLs on certificate templates
- Issuance of certificate requests can be controlled in three ways:
	- Configuring permissions on the template from the Security tab
	- Preventing the CA from issuing that certificate type by deleting the template
	- Configuring the permissions on the CA
- Restrict permissions on CAs to prevent unauthorized access
- Configure the discretionary access control list (DACL) for each template

## Configuring Archival and Recovery of Keys
> There are two approaches for generating key pairs
> - <u>First Approach</u>
> 	- The certificate owner whom will first create a key pair and send the public key to the CA to ask for its service
> 	- To enclose the public key into a digital certificate with CA's digital signature

- Possible to configure the CA to archive private keys of certificates at the time of issuance
- Enables to recover the key should it be lost
- Only highly trusted individuals should be granted thee privilege of archiving and recovering keys
- Certificate Services does not archive recovery agent
- <u>Key recovery methods</u>
	- Key Recovery Agent
	- `certutil` tool
	- `krt.exe`
