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

## Buffer Overflow
- Use this command to output program running an executable:
```
ltrace ./program
rabin2 -z ./program
```
