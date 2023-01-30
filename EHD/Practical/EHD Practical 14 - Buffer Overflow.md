# EHD Practical 14 - Buffer Overflow

###### tags: #EHD 

## Table of Contents
```toc
```

## Instruction Pointer or Extended Instruction Pointer (EIP)
> The Instruction Pointer contains the address of the next instruction to execute.

**On WinXP VM**
1. Create the following assembly program `nop.asm`
```assembly
dosseg
.model small
.stack
.code
main    proc
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
