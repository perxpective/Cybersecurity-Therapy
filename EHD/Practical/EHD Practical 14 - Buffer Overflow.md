# EHD Practical 14 - Buffer Overflow

###### tags: #EHD 

## Table of Contents
```toc
```

## Instruction Pointer or Extended Instruction Pointer (EIP)
> The Instruction Pointer contains the address of the next instruction to execute.

**On WinXP VM**
1. Create the following assembly program `nop.asm`
```
dosseg
.model small
.stack
.code
main    proc
        nop
        mov   ax,34h   ; move the value 34 to ax
        nop

        mov   ax,4C00h ; exit program with return code 0
        int   21h
                       ; this section of code will not be reached
        nop
        mov   ax,36h   ; move the value 36 to ax
        nop

main    endp
end     main
```

2. On the command prompt, use Turbo Assembler to assemble the program
```
tasm nop.asm
```

3. If there are no errors, a `nop.obj` file should be created
4. On the command prompt, use the Turbo Linker to link the object file
```
tlink nop.obj
```

5. If there are no errors, a `nop.exe` file should be created
6. Use a hex editor to open the executable program. Look for the line that looks like the following. These bytes represent the compiled instructions in the program
![](https://i.imgur.com/885fHdO.png)

7. Use the debugger to load the program
```
debug <executable filename>
```

8. Trace through the program by entering `t` - note the address stored in the Instruction Pointer (IP)
![](https://i.imgur.com/6OlGHPi.png)

9. Trace through the first line of code "NOP"
![](https://i.imgur.com/acLczLe.png)

10. Set the value in the IP to offset address of instruction `mov ax,36h`
```
-r ip
IP 0001
:B
```

11. When tracing through the next line of code, the instruction `move ax,36` is executed
![](https://i.imgur.com/GlYyOT4.png)


## Buffer Overflow to Modify Variables
**On WinXP VM**
1. Here is the source code of `buffervalue.exe`
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define BUFSIZE 16

int main(int argc, char* argv[])
{
   char *buffer1 = (char *)malloc(BUFSIZE);
   if(buffer1 == NULL)
      return 0;
   char *buffer2 = (char *)malloc(BUFSIZE);
   
   if(buffer2 == NULL)
      return 0;

   memset(buffer1, 'A', BUFSIZE-1);
   buffer1[BUFSIZE-1] = '\0';
   memset(buffer2, 'A', BUFSIZE-1);
   buffer2[BUFSIZE-1] = '\0';
   printf("buffer1 pointer = %p, buffer2 pointer = %p", buffer1, buffer2);
   printf("\n\nValue in buffer1: %s", buffer1);
   printf("\nValue in buffer2: %s", buffer2);
   printf("\n\nEnter new value to be placed in buffer1 with gets(): ");
   gets(buffer1);
   printf("buffer1 pointer = %p, buffer2 pointer = %p", buffer1, buffer2);
   printf("\n\nValue in buffer1: %s", buffer1);
   printf("\nValue in buffer2: %s", buffer2);
   printf("\n\nPress enter to (try) and free buffer1...");
   getchar();
   free(buffer1);
   printf("\n\nPress enter to (try) and free buffer2...");
   getchar();
   free(buffer2);

   return 0;
}
```

<u>Questions</u>
**How many bytes separate the start buffer1 and buffer2?**
![](https://i.imgur.com/S7mY074.png)
- Number of bytes separating buffer1 and buffer2 = 0x438 - 0x420 = 0x18 (24 bytes)

**How to use buffer overflow to modify other variables in a program?**
- If we input more than 24 characters in buffer1, the 25th character onwards will overflow into buffer2

**How to prevent buffer overflow situation in the code?**
- Control the size of user input

## Using Buffer Overflow to Crack a Program
- Source code of `login.exe`
```c
int authenticate() {
	char terminator = ''
}
```