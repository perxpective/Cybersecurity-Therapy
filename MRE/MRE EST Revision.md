# MRE EST Revision

###### tags: #MRE 

## Table of Contents
```toc
```

## EST

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