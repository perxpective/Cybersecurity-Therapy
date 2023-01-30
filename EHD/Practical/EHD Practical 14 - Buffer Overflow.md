# EHD Practical 14 - Buffer Overflow

###### tags: #EHD 

## Table of Contents
```toc
```

## Instruction Pointer or Extended Instruction Pointer (EIP)
> The Instruction Pointer contains the address of the next instruction to execute.

**On WinXP VM**
1. Create the following assembly program `nop.asm`
```
dosseg
.model small
.stack
.code
main    proc
        nop
        mov   ax,34h   ; move the value 34 to ax
        nop

        mov   ax,4C00h ; exit program with return code 0
        int   21h
                       ; this section of code will not be reached
        nop
        mov   ax,36h   ; move the value 36 to ax
        nop

main    endp
end     main
```

2. On the command prompt, use Turbo Assembler to assemble the program
```
tasm nop.asm
```

3. If there are no errors, a `nop.obj` file should be created
4. On the command prompt, use the Turbo Linker to link the object file
```
tlink nop.obj
```

5. If there are no errors, a `nop.exe` file should be created
6. Use a hex editor to open the executable program. Look for the line that looks like the following. These bytes represent the compiled instructions in the program
![](https://i.imgur.com/885fHdO.png)

7. Use the debugger to load the program
```
debug <executable filename>
```

8. Trace through the program by entering `t` - note the address stored in the Instruction Pointer (IP)
![](https://i.imgur.com/6OlGHPi.png)

9. Trace through the first line of code "NOP"
![](https://i.imgur.com/acLczLe.png)

10. Set the value in the IP to offset address of instruction `mov ax,36h`
```
-r ip
IP 0001
:B
```

11. W