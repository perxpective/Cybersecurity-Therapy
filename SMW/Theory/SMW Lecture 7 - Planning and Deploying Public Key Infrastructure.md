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

- Root CA can issue certificates to Subordinate, Immediate or Issuing CAs
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
> 	- CA does not know the owner's private key
> - <u>Second Approach</u>
> 	- Certificate owner asks for a comprehensive service from the CA to generate the key pair and seal the public key in a digital certificate

- Possible to configure the CA to archive private keys of certificates at the time of issuance
- Enable to recover the key should it be lost
- Only highly trusted individuals should be granted the privilege of archiving and recovering keys
- Certificate Services does not archive recovery agent
- <u>Key recovery methods</u>
	- Key Recovery Agent
	- `certutil` tool
	- `krt.exe`

## Deploying and Revoking Certificate for Users, Computers and CAS II
- Conditions to auto-enrol certificates:
	- Client computer must be integrated into Active Directory
	- Users require read, enrol and auto-enrol permissions
- Reasons for revoking a certificate:
	- Certificate is compromised
	- Termination of the account to whom the certificate was issued

> - The lifespan of a digital certificate is by default limited by its expiry date setting
> - However, we may need to invalidate a digital certificate before it reaches its expiry date

## Certificate Revocation Lists
- All certificates have specific lifetimes
- In some situations, there is a need to invalidate or revoke a certificate before it has reached the end of its lifetime
- Revoked certificates are published in the certificate revocation list (CRL)
- CRLs are valid only for a limited amount of time, PKI clients need to retrieve a new CRL periodically
- Must define the CRL location along with the access path before deploying certificates

## OCSP
> **OSCP** - Online Certificate Status Protocol
- An Internet protocol used for obtaining the revocation status of an X.509 digital certificate
- Complements (not replace) the operations of CRLs

### OSCP Responder
- Server that is run by the certificate issuer which returns a signed response on the status of a particular issued certificate
- <u>Possible Response</u>
	- Good, Revoked or Unknown
	- No response as the issuer does not implement the responder service
- <u>Comparison to CRLs</u>
	- Less burden for client to maintain CRLs (network and storage)
	- Easier to implement compares to CRLs for up-to-date checking
	- OCSP use non-encrypted message - it may be subject to interception
	- OCSP is an optional component for the certificate server

## Secured Web Access
- Two or three issues for non-secured web access
- <u>How to authenticate the identity of the remote server</u>
	- Hackers may setup phishing site to mislead clients to submit confidential information or even pay for an non-existing service
- How to ensure the transferred content is not tampered or intercepted by unauthorized parties
- Lastly, it may not be obvious to general users
	- For enterprise servers, they need a solution to authenticate the identity of the remote clients that is trying to access to its services
- <u>Possible Solution:</u>
	- Using SSL Certificates

## Deploying and Managing SSL Certificates
- Need to install IIS in a highly secured and locked configuration
- **Secure Sockets Layer (SSL)**
	- Public key-based security protocol
- SSL process uses the following:
	- Certificates for authentication
	- Encryption for message integrity and confidentiality
- Requires installation of valid server certificate to establish encrypted communications using SSL
- Certificate-based SSL features in IIS consist of the following:
	- Server certificate
	- Client certificate
	- Various digital keys
- Way to obtain certificates:
	- Certificate Services
	- Trusted third-party CA

## IIS Authentication Methods
| Method                            | Security Level           |
| --------------------------------- | ------------------------ |
| Anonymous authentication          | None                     |
| Basic authentication              | Low                      |
| Forms authentication              | Low or Medium (with SSL) |
| Digest authentication             | Medium                   |
| Advanced digest authentication    | Medium                   |
| Certificate authentication        | High                     |
| Integrated Windows authentication | High                     |
| .NET Password (IIS5/IIS6)         | High                     |
| Windows Live ID (IIS7 or later)   | High                     |

## HTTPS
- Technology that encrypts individual messages in web communications rather than establishing a secure channel
- Popular ecommerce technology used for securing online shopping
- Communicates on port 443
- SSL-secured URLs begin with `https://` prefix

## Configuration of the Web Server for SSL Certificates
- Use SSL encryption only for sensitive information
- Encrypted transmissions can significantly reduce transmission rates and server performance
- Server certificates provide a way for users to confirm the identity of website
- <u>Server certificate contains:</u>
	- Organisations name affiliated with the server content
	- Name of the organisation issuing the certificates
	- Public key that is used to establish an encrypted connection

## Self-Issued Certificates
- <u>Considerations when deciding to issue own server certificates:</u>
	- Microsoft Certificate Services can accommodate different certificate formats and provide auditing and logging of certificate-related activity
	- Evaluate the cost of each certificate
	- Keep the learning curve in mind
	- Evaluate the willingness of outside vendors clients to trust your organisation as a certificate supplier

## Publicly-Issued Certificates
- Used when a user suspects your self-issued certificates
- Certificate can be obtained from a mutually trusted, third-party CA, e.g. VeriSign, GlobalSign, Thawte
- **Wait time:** Several days to several months
- Certificate must be renewed on a regular basis
- <u>General rules about any type of web certificates:</u>
	- Each website can have only one server certificate assigned to it
	- One certificate can be assigned to multiple websites
	- You can assign multiple IP addresses per website
	- You can assign multiple SSL ports per website

## Configuration of the Client for SSL Certificates
- Typical client certificate contains the following information:
	- Identity of the user
	- Identity of the certification authority
	- Public key used for establishing encrypted communications
	- Validation information such as an expiration date and serial number
- To protect web content from unauthorized access, do one of the following:
	- Use Basic, Digest or Integrated Windows authentication in addition to requiring a client certificate
	- Create a Windows account mapping for client certificates

> - Windows account mapping is a unique feature.
> - Once a client system has presented its client certificate to the web server, client system will access to the server with the mapped user credential
> - Provides more convenience to the user but there is a higher security risk
> - Mapping is done manually by the system administrator

## Certificate Renewal
- Security and renewal requirements for certificates should be based on the following factors:
	- Value of the network resources protected by the CA trust chain
	- Degree to which you trust your certificate users
	- Amount of administrative effort that you are willing to devote to certificate and CA renewal
	- Business value of the certificate

> **Renewal requirement** usually refers to how often to renew a key-pair and how often to renew a certificate

| Certificate Purpose                            | Certificate Life | Renewal Recommendation                                                  |
| ---------------------------------------------- | ---------------- | ----------------------------------------------------------------------- |
| Enterprise CA for medium security certificates | 5 years          | Renew every 3 years and renew by using a new key at least every 5 years |
| Enterprise CA for high security certificates   | 5 years          | Renew with new key at least 4 years                                     |
| Enterprise CA for external certificates        | 5 years          | Renew at least every 4 years. Renew by using a new key every 5 years    |
| Secure mail and secure browser certificates    | 1 year           | Renew by using a new key at least 2 years                               |
| Smart card certificates                        | 1 year           | Renew by using a new key at least every 2 years                         |
| Administrator certificates                     | 1 year           | Renew by using a new key at least every 2 years                         |
| Secure Web Server certificates                 | 2 years          | Renew by using a new key at least every 2 years                         |

**Similar but different certificate-related operations:**
- All certificates have an expiry date
- Renew a certificate before its expiry date
- Since each certificate contains a public key for a specific application, one type of renewal is just to create and sign on a new certificate containing the same public key
- Public key owner can generate a new key-pair and replace the old public key with the newly generated public key while renewing the certificate
- Finally, the signer itself should also update its key-pair. Once signer's key-pair has changed, a new root CA certificate should be generated too
- To keep the PKI operation running smoothly, you may see multiple root CA certificates for the same CA organisation coexisting in the Trust Root Certificate Authorization Store
