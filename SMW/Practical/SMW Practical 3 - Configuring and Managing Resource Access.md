# SMW Practical 3 - Configuring and Managing Resource Access

###### tags: #SMW #Practical 

## Table of Contents
```toc
```

## Adding a New Member Server (Windows Server 2012 R2) to Domain
1. Start the Domain Controller
2. After Domain Controller has been started, start up the Windows Server 2012 R2 VM
3. Default username and password of Windows 2012 R2 is:
	- Username: `ladmin`
	- Password: `1qwer$#@!`
4. Configure the Windows Server 2012 R2 to use a static IP address
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
8. Click **Show advanced permissions in the Permission Entry** window

![](https://i.imgur.com/PTGNQOG.png)

9. Click the **Allow** box for each of the following advanced permissions entries:
	- Create files/write data
	- Create folders/append data
	- Delete subfolders and files
	- Delete
10. Click the box for **Only apply these permissions to objects and/or containers within this container**
11. Click **OK** three times

## Verifying the Effect of Deny Permissions
1. Login as Domain Admin on the Domain Controller
2. Ensure there are two global groups in the domain: GlobalMgrs and GlobalStaff
3. Create a new domain user account: newManager
4. Add newManager to both the GlobalMgrs and GlobalStaff global groups
5. Ensure that there are two domain local groups in the domain: DLMgrs and DLStaff
6. Add GlobalMgrs group to DLMgrs
7. Add GlobalStaff group to DLStaff
8. Switch to the Windows Server 2012 R2  and login as Domain Admin
9. Create a file called `testDeny.txt` at `C:\Users\Public\TestXX` folder
10. Assign the full control permission of `testDeny.txt` to DLMgrs
11. Assign full read control permission of `testDeny.txt` to DLStaff
12. Switch the login to newManager at the Windows Server 2012 R2 
13. Test if newManager can update the `testDeny.txt` file
14. As newManager, add Deny Read permissions to DLStaff group for the `testDeny.txt`
15. Test if newManager can update the `testDeny.txt`

![](https://i.imgur.com/0F82Mpv.png)

## Enabling the Shared Folder Feature
1. Login as a Domain Admin to the Windows Server 2012 R2
2. As Shared Folder feature requires to turn on File and Printer Sharing and Network Discovery, go to the Network and Sharing Center and select Advanced Sharing Settings
3. Turn on Network Discovery but cannot save the setting because the default network security settings disallows it to be turned on

![](https://i.imgur.com/L13gOyq.png)

4. To change thee default network security settings, either update the firewall rules or use the Security Configuration Wizard (SCW)
5. Run the Security Configuration Wizard via the Tools menu of the Server Manager

![](https://i.imgur.com/1LFVmDW.png)

6. In the Server Select menu, choose the local Windows Server 2012 R2  
7. In the subsequent screen, the wizard will display the detected installed roles, features, options for viewing and verification. Enable the "Network Discovery" feature and press Next

![](https://i.imgur.com/Zd2oq6x.png)

8. In the Installed Options screen, the wizard has selected 'Smart Card' option for the server (unselect it)
9. In the Confirm Services Change screen, note that the wizard has suggested to change for all the listed services (for some services, they will be changed from Manual start to Disable and some others will be from Manual start to auto start)
10. When the wizard reaches the Network Security Rules screen, note that the wizard has enabled many network security rules based on the server roles

![](https://i.imgur.com/l6TWE0p.png)

11. Go through the remaining wizard pages till the wizard prompts to enter a filename for the file to store confirmed configurations (use `server1.xml` as the filename)
12. In the next page, there is an option to apply the configuration later or immediately (it should be applied now)
13. Restart the firewall services or the system to apply the new changes
14. Return to the Network and Sharing Center and turn on Network Discovery

## Configuring a Shared Folder
1. Login as `User1@smw.soc.com` to the Window Server 2012 R2
2. Navigate to This PC > Documents and create a new folder with the name `DocumentXX`
3. Share out the folder and let DomainMgrs group members have Read and Write permissions and Authenticated Users have Read permissions to the shared folder
4. Click the Share button to complete the creation of the Shared folder
5. On Windows 10, login as Mgr1 and access the shared folder
6. Test if Mgr1 can view, create and modify the files in the shared folder (Mgr1 has co-owner share permissions)
7. On Windows 10, login as Staff1
8. Access the shared folder and test if Staff1 can view but cannot make changes to the shared folder (Authenticated User has Read Share permissions only)

### Configuring a Shared Folder Using a Server Manager
1. Login to Windows Server 2012 R2 as a Domain Admin
2. Open the Server Manager
3. Click **Manage** near the top of the Server Manager window and click **Add Roles and Features**
4. Ensure **Role-based or feature-based installation is installed** and click Next
5. In the Select destination server window, ensure the server is selected and click Next
6. Ensure that **File and Storage Services** is already marked as installed and click the **right-pointing** arrow in front of the File and Storage Services
7. Click the **right-pointing** arrow in front of **File and iSCSI** services to view the options under it
8. Check the box for **File Server Resource Manager**
9. On the Add Roles and Features wizard, click **Add Features**
10. Click Next twice
11. Click install in the Confirm installation window
12. Ensure that the installation is successful and click Close in the installation progress window
13. On the left pane of the Server Manager, click **File and Storage Services**
14. Click Shares in the left pane
15. In the middle pane, notice the Documentation folder under Shares
16. Click the **down arrow** for tasks and click **New Share**
17. In the Select the profile for this share window, select **SMB Share**. Click Next
18. Select **Type a custom path**, click the **Browse** button and browse to the Utilities folder
19. Click Next in the server and path for the share window
20. In the Specify share name window, leave the share name of the folder as the default and click Next
21. Ensure that **Allow caching of share** is selected and click Next
22. Review the permissions already configured in the Specify permissions to control access window and click **Customize permissions**
23. In the Advanced Security Settings for the folder window, click the Share tab
24. Click Add

![](https://i.imgur.com/G54EVZY.png)

25. In the Permissions Entry window for the folder, click **Select a principal**
26. Click **Advanced** and click **Find Now**
27. Double-click the Server Operators group and click OK in the Select User, Computer, Service Account or Group box
28. Ensure that Allow is configured for Type and place a checkmark in the box for Full Control
29. Click OK in the Permission Entry for the folder window
30. In the Advanced Security Settings for the folder window, if the Everyone group is shown, click it and click Remove
31. Click the Permissions tab and click **Server Operators** > **Edit**
32. In the Permission Entry for the folder window, ensure that Full Control is selected for the Allow type and click OK
33. Click OK in the Advanced Security Settings for the folder window
34. In the New Share Wizard window, click Next
35. In the specify folder management properties window, check the boxes for the User Files and Application Files
36. Click Next
37. In the Apply a quota to a folder or volume window, click Next
38. In the Confirm selections window, review choices and click **Create**
39. Click Close in the View results window
40. In the Server Manager, verify that the new share is shown under Shares
41. (Optional) Verify if the data transfer between Windows 10 and SF1 are encrypted using Wireshark

## Publishing a Shared Folder
1. Click Tools and click Active Directory Users and Computers
2. Create a new Shared Folder
3. Enter the network path to the share: `\\servername\Users\Administrator\Documents\DocumentationXX`
4. Click OK
5. Notice that the shared folder is one of the objects listed in the right pane within the Users or OU folder
6. On Windows 10, under the Network Node of the File Explorer, locate the shared folder by clicking on **Search Active Directory** on the Network tab

## Adding Login and Shared File Access
1. On the Domain Controller, login as Domain Administrator
2. Run `mmc` and on the Run box and click OK
3. Click File and click Add/Remove Snap-in
4. Click the **Group Policy Management Editor** and click Add
5. In the Select Group Policy Object dialog box, click the Browse button
6. In the Browse for a Group Policy Object dialog box, click **Default Domain Policy** and click OK
7. Click Finish in the Select Group Policy Object dialog box
8. Click OK in the Add or Remove Snap-ins dialog box
9. On the left pane, click the right pointing arrow in front of Default Domain Policy to display items under it
10. Click the right pointing arrow in front of the Computer Configuration
11. Double-click the Policies folder > Windows Settings > Local Policies > Audit Policy in the left pane
12. In the middle pane, double-click **Audit directory service access**
13. Click **Define these policy settings** and click Success and Failure to audit successful completion of an action and failure of an action
14. In the middle pane, double-click **Audit object success** and click **Define these policy settings**
15. Click Success and Failure and click OK
16. Close Console1 MMC window and provide a name of the console e.g. Default Domain Policies, click **Desktop** and click **Save**

![](https://i.imgur.com/wU5u9pl.png)

<u>To configure auditing for Documentation folder</u>
1. From the  File Explorer window, right-click the Documentation folder and click Properties
2. Click the Security tab and click the **Advanced** button
3. Click the **Auditing** tab and click Add
4. Click **Select a principal** at the top of the Auditing Entry window
5. Click **Advanced** button in the Select User, Computer, Service Account or Group dialog box
6. Click Find Now and double-click the **Everyone** group, click OK
7. Notice the permissions granted to the group and click the down arrow for the Type box and select All to audit both successful and failed access activities
8. Click OK (x3)

<u>Test the settings</u>
1. As Mgr1 on Windows 10, access the shared folder created by User1 and create a new file called `mgr.txt`, entering some te