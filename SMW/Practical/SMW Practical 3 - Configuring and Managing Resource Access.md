# SMW Practical 3 - Configuring and Managing Resource Access

###### tags: #SMW #Practical 

## Table of Contents
```toc
```

## Adding a New Member Server (Windows Server 2012 R2) to Domain
1. Start the Domain Controller
2. After Domain Controller has been started, start up the Windows 2012 R2 VM
3. Default username and password of Windows 2012 R2 is:
	- Username: `ladmin`
	- Password: `1qwer$#@!`
4. Configure the Windows 2012 R2 server to use a static IP address
5. Verify if the new server can access the Internet and ping the FQDN domain before joining the domain
6. Change the server name and join the domain (Use the Mgr1 credential for Authentication)
7. Verify the setup by logging into the new member server with the following Domain user accounts:
	- Mgr1
	- Staff1
	- User1

![](https://i.imgur.com/qJkZx13.png)

## Encrypting Files
1. Login as User1
2. Navigate to `C:\Users\User1\Documents`
3. Create a new folder on the File Explorer
4. Right-click on the new folder and click **Properties**
5. Click the **Advanced** button
6. Check **Encrypt contents to secure data** and click **OK**
7. Click **Apply**
8. Ensure that **Apply changes to this folder, subfolders and files** is selected and click **OK**
9. Click OK again to exit the Properties dialog box