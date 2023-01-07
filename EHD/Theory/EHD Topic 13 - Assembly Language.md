# EHD Topic 13 - Assembly Language

###### tags: #EHD #Theory 

## Table of Contents
```toc
```

## Number Representation
### Hexadecimal Representation
- In C programs, hexadecimal characters can be represented by adding a `0x` to the front of the character
- Sometimes, hexadecimal characters are represented by appending the letter `h` to the character

## Computer Architecture
### Data Storage
- All data is stored on the hard disk or memory as bytes
- 1 byte = 8 bits
- The word `hello` would be stored as 5 bytes (40 bits)

### Little Endian vs Big Endian
- Refers to how multi-byte numbers are stored
- **Little Endian:**
	- Smaller bytes in lower address
	- Address 0 (byte 0)
	- Address 1 (byte 1)
	- Address 2 (byte 2)
	- Address 3 (byte 3)
- **Big Endian**
	- Bigger bytes in lower address
	- Address 0 (byte 3)
	- Address 1 (byte 2)
	- Address 2 (byte 1)
	- Address 3 (byte 0)

## Assembly Language
> The English version of machine code
- Low level
- Runs very fast
- Program size small when compared to C, Java or other compiled programs
- Useful for communicating with computer at hardware level
- Useful to understand assembly language when debugging or reverse engineering programs

## CPU Registers
- Internal storage used by the CPU to hold data temporarily while it is running a program
- Register size depends on processor size (16-bit, 32-bit, 64 bit)
- Register types:
	- General Purpose Registers
	- Segment Registers
	- Index (Pointer) Registers

##  General Purpose Registers
- **Extended Accumulator (EAX)**
	- Used in arithmetic and I/O operations
	- When CPU adds two numbers together, it will store the result in the EAX
```
ADD EAX, 0x02
```
- **Extended Base Register (EBX)**
	- Usually points to a procedure or variable
- **Extended Count Register (ECX)**
	- Usually used in program loops
- **Extended Data Register (EDX)**
	- Similar to EAX, used in arithmetic and I/O operations

## Segment Registers
- Code Segment (CS)
	- Holds the base location for the executable code in the process
- Data Segment (DS)
	- Holds the base location where variables are stored in the process
- Stack Segment (SS)
	- Holds the base location of the stack
- Extra Segment (ES)
	- Additional base location for variables

## Index Registers
- Extended Stack Pointer (ESP)
	- Offset from the base location of stack to top of stack
- Extended Base Pointer (EBP)
- Extended Instruction Pointer (EIP)
	- Points to the next instruction to be executed

## Registers
- RIP, RAX refers to the 64-bit registers
- EIP, EAX refers to 32-bit registers
- IP, AX refers to 16-bit registers
- AH and AL refer to the higher and lower parts of the AX register
![](https://i.imgur.com/ymagI86.png)

## Memory Segments
- When a program is loaded into memory to be run, the memory is divided into the different segments:
	- **Code Segment**
		- Holds compiled program instructions in machine language
	- **Data Segment**
		- Global variables used by the program
	- **Stack**
		- Variables and arguments used by functions
	- **Heap**
		- For dynamic memory allocation

## Opcodes and Operands
- To write an assembly program, the opcodes of the processor needs to be known
- Opcode is a machine language instruction that instructs the processor of the operation that needs to be performed
- Operand is the value that is given to the opcode
```
MOV AX, 20h 
```
- Not all opcodes require operands
- For example, the No Operation `NOP` command does not require any operands

## Decompiling and Disassembling
- **Decompiling**
	- Attempts to generate the original source code from the executable program
	- Not always successful
- **Disassembling**
	- Generates the assembled code from the executable program

## Dynamic Link Library (DLL)
> Files containing libraries of functions that can be used by other programs

![](https://i.imgur.com/XQ83rMq.png)

- List of DLLs can be found in `C:\\Windows\System32`
- 