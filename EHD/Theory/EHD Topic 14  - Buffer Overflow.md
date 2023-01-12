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

## Stack Overflows
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