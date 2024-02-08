# MRE EST Revision

###### tags: #MRE 

## Table of Contents
```toc
```

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

## Modifying PE Headers
> The PE specification defines several fields to describe the executable file.

- The size of each segment, emtry point 