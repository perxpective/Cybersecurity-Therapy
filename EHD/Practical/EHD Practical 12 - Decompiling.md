# EHD Practical 12 - Decompiling

###### tags:: #EHD 

## Table of Contents
```toc
```

## Installing a C Compiler in Windows
**On Win10 VM**
1. Create a folder called `C:\cygwin-setup` on the virtual machine
2. Download the Cygwin setup file
3. Extract the contents of the zip file and run the setup file to install Cygwin
4. For Root Directory, use the default directory
5. For Local Package Directory, use the default value
6. In Select Packages, expand All
7. Under Devel category, click the down arrow for gcc-core and select the version number
8. Under Interpreters, select the perl and python27 package
9. Under Editors category, select either vim or nano or both for text editors
10. Create the following C program `enternumber.c`

This program asks the user to enter a number and print the number to the screen
```c
# include <stdio.h>
int main() {
	int number;
	printf("Enter a number: ");
	scanf("%d")
}
```
