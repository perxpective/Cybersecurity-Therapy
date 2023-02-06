# EHD Cheat Sheet (Reverse Engineering)

###### tags: #EHD

## Table of Contents
```toc
```

## Decompiling
- Modify permissions of program to execute
```
sudo chmod 755 file.exe
```

- Compiling and running a C program
```
gcc program.c -o program
./program
```

- Running a Java class (example: `test.class`)
```
java test
```

- Use Jad to decompile a class file
```
./jad test.class
```

- Use the Jad GUI
```
jadx-gui
```

> Online Java Decompiler: [http://www.javadecompilers.com/](http://www.javadecompilers.com/)

- To get a Java applet, change URL in the web browser to a Java class to download the applet

## Reverse Engineering
- Finding the properties of the file
```
file <filename>
```

- Run GDB
```
gdb ./program
```

- Disassemble the `main` function
```
disassemble main
disas main
```

- Set breakpoint at `main` function of program
```
break main
b main
```

- Run the program
```
run
r
```

- Skip to a function
```
jump function_name
```

- Display contents of the registers
```
info registers
```

- Find functions
```
info functions
```

- You can also use `objdump` to dump all the functions in the program
```
objdump -t program
object -D program | grep function_name
```

- Use Ghidra
```
ghidra
```

- Use this command to output program running an executable:
```
ltrace ./program
rabin2 -z ./program
```

## Buffer Overflow
- Run GDB
- Find the buffer size of the address
```
pwn cyclic -l <address>
```

- Use the Cyclic function to generate a payload based on length
```
pwn cyclic <size>
```
- Determine size of buffer based on overflowed payload
```
pwn cyclic -o <overflowed_payload>
```

- Copy and paste the cyclic payload into the input again
- Adjust the cyclic text to match the buffer size. Modify in such a way that the overflowed text overwrites to a desired output

## Radare2
- Debug with Radare2
```
r2 -d program
```

- Analyse the program
```
aaa
```

- Put a breakpoint
```
db sym.main
db <address>
```

- Run the program
```
dc
```

- Display disassembled code of function
```
pdf
```

- Display the current contents of the register
```
dr
```

- To modify the RIP to point to the address of the instruction:
```
dr rip = <address_to_point>
```

## Format String Attack
- Format String Attack with Python or Perl
```
./program $(perl -e 'print "%08x." x 40')
./program $(python3.6 -c 'print("%08x" * 40)')
```
- Use `objdump` to find the address of a function
- Use format strings to write over the stack to an address


## Exploiting Script Template
```python
from pwn import *
io = process(["./program", "arg1", "arg2"])
address = p32(address)
payload = b'a' * number + address # remeber that payload must be all in bytes

io.sendline(payload)
io.interactive()
```
- Useful Metasploit Libraries
```
# Pattern Create
/usr/share/metasploit-framework/tools/exploit/pattern_create.rb -l [number]

# Pattern Offset
/usr/share/metasploit-framework/tools/exploit/pattern_offset.rb -q [address]

# GDB
run program <<< [pattern]
```

## Theory
Mitigations to buffer overflow:
- Bounds checking
- Error validation
- Stack canaries
- ASLR
- DEP