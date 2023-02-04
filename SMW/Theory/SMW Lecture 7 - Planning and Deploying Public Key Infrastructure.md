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
	- 