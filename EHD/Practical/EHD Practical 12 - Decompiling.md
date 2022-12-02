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
gcc HelloWorld.c -o HelloWorld
./HelloWorld
```

**On Kali VM**
1. Copy the compiled `HelloWorld.class` file from the Win10 VM to the Kali VM
2. Run the Java class file
```
java HelloWorld
```
3. Copy the compiled C program executable file from the Win10 VM to the Kali VM
4. On Kali, run the C executable (you should get an error)
```
sudo chmod 755 HelloWorld.exe
./HelloWorld.exe
```

## Decompiling the C Executable with Snowman Decompiler
**On Win10 VM**
1. Download the Snowman Decompiler 
2. Run `snowman.exe`
3. On the left hand column, the HelloWorld program is disassembled into assembly code
4. On the right hand column, the HelloWorld program is decompiled into C code

## Decompiling the Java Class File with Jad
**On Kali VM**
1. Download Jad for Linux 
2. Use Jad to decompile the Java class file `HelloWorld.class`
```
./jad HelloWorld.class
```
3. Use a text editor to view the generated `HelloWorld.jad`

## Obfuscating a Java Program
**On Kali VM**
1. Create the following 2 directories (`proguard-in` and `proguard-out`)
2. Download the sample `CalculateArea.class`
3. Try running the `CalculateArea.class`
```
java CalculateArea
```
4. Use Jad to decompile the class file
```
./jad CalculateArea.class
```
5. View the decompiled file `CalculateArea,jad` to see the generated source

### Using ProGuard to Obfuscate a Program
1. Copy the `CalculateArea.class` to `proguard-in` directory
```
cp CalculateArea.class proguard-in
```

2. Download the ProGuard zip file
3. Extract out the contents of the downloaded ProGuard file
```
tar -xvf proguard6.2.0.tar.gz
```
4. Change directory to the `proguard/lib` directory
5. Run the ProGuard GUI
```
java -jar proguardgui.jar
```
6. Click on the Input/Output button
7. Click on the Add input and select the `proguard-in` directory 
8. Click on the Add output and select the `proguard-out` directory
9. Under the Library jars section, select the `/usr/lib/jvm/java-11-openjdk-amd64/lib/rt.jar` entry and click Remove
10. Click on the Shrink button and uncheck the Shrinking option
11. Click on Obfuscation button and check Overload aggressively
12. Click on Information button and check Ignore warnings about possibly errorneous input
13. Click on Process button and click Process to start obfuscating
14. In a terminal, view the file created in the `proguard-out` directory
15. Change the directory to the `proguard-out` directory
16. Try running the obfuscated `CalculateArea.class` and it should run the same way as before
```
java CalculateArea
```
17. Use Jad to decompile the class file
```
jad CalculateArea.class
```
18. View the decompiled file to see the generated source

## Decompiling Java Applets
**On Any Windows Systems**
1. Download the Jad for Windows
2. Browse to the following webpage for a sample Java applet (http://www.cs.rit.edu/~ncs/color/a_spaces.html)
3. Applet may not be able to run due to web browser restriction

