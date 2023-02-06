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
dissemble main
```

- Set breakpoint at `main` function of program
```
break main
```

- Run the program
```
run
```

- Display contents of the registers
```
info register
```

- Find functions
```
info function
```

- You can also use `objdump` to dump all the functions in the program
```
objdump -t program
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
cyclic -l <address>
```

- Use the Cyclic function to generate a payload based on the buffer size
```
cyclic <size>
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
./program $(perl -e 'print "%x"')
```