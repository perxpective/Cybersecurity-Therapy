# EHD Topic 14 - Buffer Overflow

###### tags: #EHD 

## Table of Contents
```toc
```

## What is Buffer Overflow
- Buffer overflow accounts for a significant of exploits
- Provides application with more data than it can hold

```c
void main() {
	char buffer[5]
	strcpy(buffer, "abcdefghijklmnopqrstuvwxyz");
	return
}
```

## Memory Structure
- Typically organised into 3 areas:
	- Code Segment
	- Stack Segment
	- Heap Segment
- Heap and stack are dynamic

![300](https://i.imgur.com/u9kgsZX.png)

- Buffer overflow can occur in:
	- <u>Stack</u>
		- Memory in stack allocated for functions
		- Stores local variables and return pointers
	- <u>Heap</u>
		- Memory in heap is for dynamically allocated memory

```c
int *number;
number = new int;
```

## Stack Overflow I
- When function is called, program will store the return address in the stack
- Attacker uses buffer overflow to overwrite parts of the memory with his own code
- Attacker also uses the buffer overflow overwrite the return address in the stack to point to the code
- Program will now run the attacker's code

## Stack Usage (LIFO)
- Stacks are based on a Last-In-First-Out concept
- Data is pushed onto the top of the stack
- Data is popped from the top of the stack
- When a program is run, the first function to run is often called the "main" or "entry point"
- When a function is running, it stores its local variables in the stack
- The stack will grow and shrink and as function are called and returned
- When a program is run, the Instruction Pointer (EIP) holds the address of the next instruction to be run

```c
void main {
	printf("step 1\n");
	printf("step 2\n");
	printf("step 3\n");
}
```

- After step 2 is printed, the EIP or RIP will point to the next instruction step 3

- When a function or subroutine is called, the EIP or RIP will point to the function/subroutine
- After function/subroutine completes running, the program must know where to return to
```c
function callA() {
	printf("in callA\n");
}
void main {
	printf("step 1\n");
	callA();
	printf("step 2\n");
}
```
- Before jumping to `callA`, the address of instruction "step 2" is stored somewhere so that the program will know where to return to 
- The stack is used to hold the return address whenever a function/subroutine is encountered
- When function `callA` has completed, the return address will be popped from the stack and the execution continues

## Stack Problem
- The problem arise if the hacker manages to overwrite the return address in the stack with an address to his own malicious code

## Stack Overflow II
- Overwriting the return address in the stack can be done through stack overflow
- The hacker overflows a local variable in the stack until he reaches the return address
- Hacker overflows the variables until it overwrites the return address

## Data Stack
```c
void DoHexDump(FILE*file) {
	int len
	unsigned char data[512];
	FILE* fp = file;

	fseek(fp, 0 SEEK_END);
	len = ftell(tp);
	fseek(fp, 0, SEEK_END);
	fread(data, 1, len, fp);
	fclose(fp);

	DumpHex(data, len);
}
```
- In this example, pushing 516 `a` characters will overwrite the return address
- `a` = ASCII  value of 61

## Exploiting Stack Overflow
- Strategy: change the return pointer such that it points to other user-supplied data on the stack
- Could be a shellcode/opcode entered by an attacker
- Could be loaded function already in stack

## Shell Code Examples
```
68 78 fb 11 00 FF 15 30 20 40 00
```
- Launches `notepad.exe` in Windows using an already loaded library called `Msvcr70.System`

```
eb 2a 5e 89 76 08 c6 46 07 00 c7 46 0c 00 00 00 00 b8 0b 00 00 00 89 f3 8d 4e 08 8d 56 0c cd 80 b8 01 00 00 00 bb 00 00 00 00 cd 80 e8 d1 ff ff ff 2f 62 69 6e 2f 73 68 00 89 ec 5d c3
```
- Launches a shell in Linux on Intel

## Stack Frames
- When a function is called, some data is pushed to the stack
- This data is called a **stack frame**
	- Function arguments (pushed in reverse order)
	- Return address (current EIP or RIP value)
	- Base Pointer (EBP or RBP) 
	- Memory space needed for local variables
- In a typical program, multiple nested functions may be called
- With each function call, the data associated with each function (return addresses, local variables) are pushed onto the stack frame
- The RBP (EBP) and RSP (ESP) are updated with each function call

![](https://i.imgur.com/Q1EL3Zb.png)

## Understanding Stack Frame
![](https://i.imgur.com/ZXKXrPg.png)

- EBP (RBP) points to the base of stack
- ESP (RSP) points to the top of stack
- When calling the `foobar` function:
	- Any arguments for function are pushed to stack and ESP is moved
	- Address of the next instruction `printf` is pushed to stack - this is the return address; ESP is moved
	- Current value in EBP is saved too stack; ESP moved and EBP moved to the top of the stack to point to "new base"
	- Any local variables in `foobar` are pushed to stack; ESP is moved

- Local variables and function arguments are referenced from the EBP

![](https://i.imgur.com/ONOBNcO.png)
![](https://i.imgur.com/WVlRNs8.png)

## Exploits
```c
#include <stdio.h>
NeverExecute() {
	printf("We'll never reach here\n");
	exit(0);
}

GetInput() {
	char buffer[8];
	gets(buffer);
	puts(buffer);
}

main () {
	GetInput();
}
```
- Objective: Use buffer overflow to execute the function `NeverExecute()`
- Need to know the address of the function `NeverExecute()`
- A debugger can help - more in Topic 15

## Heap Overflows
- Storage is dynamically allocated and freed durin prog