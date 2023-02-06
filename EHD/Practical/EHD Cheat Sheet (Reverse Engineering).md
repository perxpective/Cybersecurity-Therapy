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

> Online Java D