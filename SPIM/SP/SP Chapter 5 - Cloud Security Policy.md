# SP Chapter 5 - Cloud Security Policy

###### tags: #SPIM 

## Table of Contents
```toc
```

## Cloud Computing
- Shared/Outsourced assets, resources and services
	- Off-premise
	- Applications, data, etc., sit on other people's' infrastructure
	- Pay-as-you-go
		- Operational Expenditure rather than Capital Expenditure
	- Cost-saving
		- Less staff required
- Flexible, scalable on-demand and infrastructure supply
	- No need to purchase own assets and infrastructure
	- Excellent for storage and backup of data, application-hosting, etc.
	- Quick provisioning for users (servers, disk space, etc.)
	- Good for Business Continuity (BC) and Disaster Recovery (DR)
	- <u>Cloud Service Models</u>
		- Infrastructure-as-a-service (IaaS)
		- Platform-as-a-service (PaaS)
		- Software-as-a-service (SaaS)

## 5 Essential Characteristics
- NIST SP-800-145 Definition of Cloud Computing:
	- On-Demand Self-Service
	- Broad Network Access
	- Resource Pooling
	- Rapid Elasticity
	- Measured Service

## Drives for Cloud Adoption
- Cost Management (OPEX vs CAPEX)
- Risk Reduction (e.g. Testing before commitment)
- Elasticity (Consumption-based Pricing)
- Business Agility and Mobility
- Focus on Core Business
- Business Continuity
- Collaboration and Innovation Platform
- Green IT
- Simplicity, Expandability and Elasticity

## Cloud Service Models
### Infrastructure-as-a-Service (IaaS)
- Fully self-service for accessing and monitoring computers, networking, storage and other services
- Allows business to purchase resources on-demand and as-needed instead of having to buy hardware outright
- Resources are available as a service
- Cost varies based on consumption
- Services are highly scalable
- Multiple users on a single piece of hardware

### Software-as-a-Service (SaaS)
- Also known as <u>cloud application services</u>
- Uses the internet to deliver applications managed by third-party vendors
- Hosted on a remote server
- Accessible over the Internet
- Uses the web to deliver applications that are managed by a third-party vendor whose interface is accessed on the client side

### Platform-as-a-Service (PaaS)
- Provides cloud components to certain software while being used mainly for applications
- Delivers a framework for developers that they can build upon and use to create customized applications
- Servers, storage and networking can be managed by enterprise or third-party provider while developers can maintain management of the applications
- Uses virtualization technology
- Integrates web services and databases

## Key Issues
- Loss of Visibility
- Loss of Control
- Hard to Approach Governance, Risk and Compliance (GRC)
- <u>Examples:</u>
	- Risk of data spillage due to multi-tenancy and mingling nature of cloud
	- Risk of mis-provisioning or misconfiguration
	- Difference in security standards, policies and processes
	- If suppliers cut corners, has internal issues, or gets attacked: data, application and services will be severely affected
	- Traditional enterprise security solutions may not be effective or adequate to protect cloud-hosted data, applications and/or services

## Data Security Issues
- **Issues**
	- Data Loss (Availability)
	- Data Leakage (Confidentiality)
	- Data Rights Management (DRM)
	- Compliance (Data Sovereign Issues)
- **Proposed Solutions**
	- Data Management
	- Data Encryption
	- Data Sanitization

## Policy Considerations
- Ensure provider's security policies and practices and service level meet requirements
- Legal, Regulatory and Insurance Considerations
- Data Protection
- Service Availability, Performance and Quality
- Backup and Storage
- Cyber Resiliency Provisions
- Communications Protocol between User and Provider especially in Time of Conflict
- Vendor Lock-in
- Service Exit Clauses (immediate and definite deprovisioning )