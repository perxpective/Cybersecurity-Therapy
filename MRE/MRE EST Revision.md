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
- More complex and har