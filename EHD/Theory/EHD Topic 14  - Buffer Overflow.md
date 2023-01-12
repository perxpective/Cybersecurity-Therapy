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
