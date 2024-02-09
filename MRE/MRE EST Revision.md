# MRE EST Revision

###### tags: #MRE 

## Table of Contents
```toc
```

## Disassembly Tools


## Assembly Basics
### x86 Registers
- `EAX` and `EDX` are used in multiplication and division
- `EAX` contains the return values of function calls
- `XOR EAX, EAX` will zero the `EAX`, `MOV EAX, 0`
### Instruction Types
- **Data Manipulation**
	- `ADD`, `SUB`, `END`
- **Data Transfer**
	- `MOV`, `XCHG`
- **Branching and Conditionals**
	- `JMP`, `CALL`, `CMP`
	- Cause update of `EIP`
	- Changes the execution path
	- Use for conditional, unconditional jump and looping

### Conditional Jumps
```
JA - Jump if above
JG - Jump if greater
JN - Jump if not
JB - Jump if below
JL - Jump if less than
JE - Jump if equal
JZ - Jump if zero
JNGE - Jump if not greater than or equal
```

### Arithmetic Instructions
```
ADD - Add source to destination
INC - Increments destination by 1
SUB - Subtract sourc from destination
MUL - Multiply EAX with operand and store the result in DX:AX
DEC - Decrement destination by 1
SHL/SHR - Shift left/right
ROL/ROR - Rotate left/right
DIV - Divides EAX with operand
```
> **Note:**
> - Results for `DIV` is stored as follows:
> 	- AX -> Quotient in AL, remainder in AH
> 	- DX:AX ->  Quotient in AX, remainder in DX
> 	- EDX:EAX -> Quotient in EAX, remainder in EDX

### Boolean Instructions
```
AND - Perform bitwise AND
OR - Perform bitwise OR
NEG - Negate or invert all bits of destination and source
XOR - Perform bitwise XOR
TEST - Perform bitwise AND of source and destination and updates flags; Source and destination do not change
CMP - Perform bitwise subtraction of the source from destination; Source and destination do not change
```

### Control Instructions
| Instruction | Description                                                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `LEA`       | **Load Effective Address**<br>Performs memory addressing calculations                                                         |
| `JMP`       | Unconditional jump to destination                                                                                             |
| `JXX`       | Conditional jump to destination based on flag value                                                                           |
| `LOOP`      | Uses the CX register and repeats a segment of code CX number of times                                                         |
| `PUSH`      | Put the content of the source onto the start<br>Source value is copied into the stack                                         |
| `POP`       | Get the top value from the stack and store it into the destination                                                            |
| `CALL`      | Pass control to a function at the memory address<br>Push the current location into the stack                                  |
| `RETN`      | Return to the previous function call <br>Pop stack for the return address                                                     |
| `REP`       | Repeat a specific string-related command<br>CX will be used as the counter, decreasing to 0                                   |
| `REPXX`     | Repeat a specific string-related command until a specific condition is met<br>CX will be used as the counter, decreasing to 0 |
| `SCAS`      | Scans a string pointed to by EDI for a value that matches the value in a AL/AX/EAX, used in conjunction with REPXX            |
| `NOP`            | No operation - does nothing and uses up space and time<br>For alignment purposes and used in bugger overflow as it could be used to create padding                                                                                                                              |

## Static Analysis Format
- **Describe the usage of key files by `sample.exe`.**
	- What are the behaviours of the executable with or without the key files?
	- Which key files are accessed by the executable (quote the addresses and opcodes to support your claims)
	- Which key files are used by `sample.exe` to encrypt the input files?
	- What is the selection criteria for the key files being used by `sample.exe`
	- Describe the C function calls used to determine the key files selection.
- **Investigate the encryption method used**
	- Given that the `settings.ini` was ASCII text, encoded by `sample.exe`, explain how you could decrypt the `settings.ini` file with `sample.exe`. Describe the decryption process using the first byte of the `settings.ini` file.
	- Quote the address and opcodes of the C function used by `sample.exe` to read the data from the input file and the selected key files.
	- Describe how the data in the input file is encrypted and written to the output file. Quote the address and opcodes.
- **Decipher the original message**
	- Write down the decrypted message from the `settings.ini` file.
	- Describe how you could decrypt the message without calculating the bytes manually.
- **Theory questions**

## Disassemblers
- Disassembles translate binary machine code to readable assembly
- Reversing tools:
	- IDA Pro
	- OllyDbg
	- CFF Explorer
	- RASM2
	- WinDbg
- Disassemblers attempt to find and understand Opcodes and Operands from a list of binary values to hexadecimals

### Disassembler Methods
#### Linear Sweeps
1. Goes through the `.text` section
2. Disassembles sequentially from the first byte
3. Until illegal instruction is encountered

<u>Pros</u>
- Simple
<u>Cons</u>
- Susceptible to mistakes to derail the sweep interpret data as instruction in the code segment
**Examples:**
- WinDbg
- Objdump
- SoftICE

#### Recursive Transversal
- Starts with linear sweep
- Follows the code when required to jump and branch

<u>Pros</u>
- More robust
<u>Cons</u>
- More complex and harder to implement

**Additional Considerations**
- Data embedded in code
- Variable instruction size (can be interpreted differently)
- Indirect branch instructions (i.e., `call eax`)
- Function without `CALL` cannot be identified and can be misclassified as data
- Custom hand-crafted assembly code

## Anti-Disassemblers
> The **aim** -> to hinder disassemblers and static analysis

- Detects debuggers and disassemblers and trick the tools
- Run alternative instructions or junk code
- Reverse engineers often need to run the code to see what actually happens
- May present the wrong assembly to the analyst which may be counter productive

### Modifying PE Headers
> The PE specification defines several fields to describe the executable file.

- The size of each segment, entry point address, imports, etc.
- Windows loader is fairly flexible unlike many disassemblers and debuggers
- Makes portions of the file unreadable
- Can be confusing to an analyst who is used to common or normal values

### Junk Code
> A series of useless instructions that make real instructions difficult to read

- Surrounds the useless instructions with a `POPA` and `PUSHA`
- Effective slows down the analysis

### Branch Into Instruction
- Branches into a multi-byte instruction from `jmp` or `call`
- Disassemblers cannot determine the bytes changed at runtime
	- OllyDbg sometimes halts
	- IDA Pro prompts the "EIP inside structure"
- Common with many `exec` packers
- Used in shellcode to get the current location

### Jumping via `ret`
- `ret` returns from a function
	- Pop value on stack into the EIP
- Application
	- Manually push a value onto the stack
	- Transfer control to a new location (unconditional jump)
	- Can use the mechanism multiple times
- Outcome
	- Confuses disassemblers since `ret` normally ends a function

### Others
- Obscuring flow control
- Jump instructions with the same target
- Thwarting stack-frame analysis
- Timing delay of VM