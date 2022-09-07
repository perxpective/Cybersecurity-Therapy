# SMW Lecture 2 - Windows Configurations and Active Directory Basics

###### tags: #SMW

## Table of Contents
```toc
```

## Using Server Manager
- Consolidates administrative functions to make a server easier to manage
- Server Manager typically has two main panels:

| Left-Side Panel                                           | Right-Side Panel |
| --------------------------------------------------------- | ---------------- |
| Displays all available manageable services and components | Displays relevant dashboard or menu based on the current selected item on the left panel<br> Alerts administrators of any system issues that cross the entire system in near real-time manner                 |

![500](https://i.imgur.com/m3kieDe.png)

![500](https://i.imgur.com/lMch7pn.png)

![500](https://i.imgur.com/BTqfZGj.png)

![500](https://i.imgur.com/4MhXdik.png)

![500](https://i.imgur.com/Qn5LSgJ.png)

![500](https://i.imgur.com/1B8gtx5.png)

## Installing and Removing Server Roles
**Two common roles for a Windows Server 2016**
- **File and Storage Services Role**
	- Focuses on sharing files from server
	- Use the server to coordinate and simplify file sharing through **Distributed File System (DFS)**
- **Print Document Services Role**
	- Used to manage network printing services
	- Can offer one or more network printers connected to the network through the server itself

## Using the Best Practices Analyzer (BPA) for the Server Roles
- It is important to determine that the best practices for the establishment of the role are followed
- BPA can be used to determine if one or more roles are installed and configured to follow guidelines recommended by Microsoft
- When problems are found, analysis of each role 