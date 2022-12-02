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
int main () {
	int number;
	printf("Enter a number: ");
	scanf("%d", &number);
	printf("You have entered %d\n", number);
}
```
11. In the Cygwin terminal, run the following command to compile the C program into an executable called `enternumber`
```
gcc enternumber.c -o enternumber
```
12. Run `ls` to check that the file `enternumber.exe` has been created
13. Run the executable to test it
```
./enternumber.exe
```

## Installing Java JDK in Windows
1. Run the Java JDK setup file and install it using default options
2. Open the Programs files and open the Java folder
3. The bin folders contains the programs `javac.exe` and `java.exe`

> The program `javac` is used to compile Java programs
> The program `java` is used to run compiled Java classes

4. Right-click the Windows icon on the bottom left corner and choose System
5. Click on Advanced System Settings
6. Click on Environment Variables
7. Under System variables, select Path and click Edit
8. Append the following string to the variable value textbox so that Java JDK is in the path (do not overwrite the original values)
```
;C:\Program Files\Javaa\jdk1.0.8.0_271\bin
```
9. Now you can run `javac` and `java` without having to specify their full path names
10. In a command prompt, check Java JDK version on the Windows VM 
```
javac -version
```

## Creating a Java and C Program on Windows and Running Them On Linux
**On Win10 VM**
1. Create the following program called `HelloWorld.java`
```java
class HelloWorld {
	public static void main(String[] args) {
		System.out.printIn("Hello World!");
	}
}
```
2. On Command Prompt, compile and run the program
```
javac HelloWorld.java
java HelloWorld
```

3. Run Cygwin
4. Create the following C program called `HelloWorld.c`
```c
# include <stdio.h>
int main () {
	printf("Hello World\n")
}
```

5. Compile and run the program
```
gcc
```