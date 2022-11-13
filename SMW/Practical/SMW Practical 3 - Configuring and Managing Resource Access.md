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

**Using the cipher command:**
- `/e` - encrypts files
- `/d` - decrypts files

## Configuring Folder Permissions
1. Login as User1
2. Navigate to `C:\Users\Public`
3. Create the `Test` folder and `Utilities` subfolder
4. Right-click the new Utilities folder, click **Properties** and click the **Security** tab
5. Click the **Edit** button and then the **Add** button
6. Click the **Advanced** button under the <u>Select Users, Computers, Service Accounts or Groups</u> dialog box and click **Find Now**
7. Select **DomainMgrs** group and click **OK**
8. Click the Allow box for Modify and grant Modify permissions to DomainMgrs

## Inherited Permissions
1. Login as Mgr1 and Staff1 and find out if the two accounts can both navigate to `C:\Users\Public\TestXX\UtilititiesXX`
2. Right-click the folder and click Properties
3. Click the Security tab and click the Advanced button
4. Review the groups that have permissions for the folder - click **Disable inheritance** button

![](https://i.imgur.com/MsAENcB.png)

5. Notice that you can select to convert the inherited permissions to specific permissions for the folder or select to remove all inherited permissions. Click **Remove all inherited permissions from this object**
6. In Advanced Security Settings window, all other groups and user accounts with permissions have been removed except for the DomainMgrs group configured manually and that does not use inherited permissions. Click **Confirm**
7. Click OK on the folder's Properties dialog box
8. Login as Mgr1 and Staff1 again to try navigating to `C:\Users\Public\TestXX\UtilititiesXX`

## Configuring Advanced Permissions
1. Create a new folder under `C:\Users\Account\Documents` folder called Documentation
2. Right-click the new folder and click **Properties**
3. Click the **Security** tab and click **Edit**
4. Click Advanced > Find Now > double-click the Domain Users group under *search results*
5. Click **OK** twice
6. Ensure that **Domain Users** is selected under Group or usernames in the Properties dialog box
7. Click the **Advanced** button and select **Domain Users** under *Permission entries* in the Advanced Security Settings window and click the **Edit** button
8. 