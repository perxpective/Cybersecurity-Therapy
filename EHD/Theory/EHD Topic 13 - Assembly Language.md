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