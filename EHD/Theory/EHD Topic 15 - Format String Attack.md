# EHD Topic 15 - Format String Attack

###### tags: #EHD #Theory

## Table of Contents
```toc
```

## Format String
- Examples:
	- `Alert()`
	- `MsgBox()`
	- `System.out.printIn()`
	- `printf()`
- Takes whatever strings specified and displays them in the output console

**Example Problem**
- `formatit.c`
```c
// the program prints out the first argument
int main(int argc, char *argv[])
{
	printf("%s", argv[1]);
	return 0;
}

// when the format string is missing:
int main(int argc, char *argv[])
{
	printf(argv[1]);
	return 0;
}
// the program can still print out the first argument but will be vulnerable to a format string attack
```
- If the code `formatit` is run with `%s` or `%x` in the argument, the program will print the value on top of the stack

![300](https://i.imgur.com/LJL8mQj.png)

### Using Perl or Python to Print Characters
- In format string attacks, we may need to repeat a sequence of characters repeatedly
```
./formatit %x.%x.%x.%x.%x.%x.%x.%x
```
- Using Perl or Python can help make this process easier
```
./formatit $(perl -e 'print("%x." x 8)')
./formatit $(python -c 'print("%x." * 8)')
```
- Perl and Python can also print any character using its ASCII code by using `\xNN` where `NN` is the ASCII code of the character in hexadecimal
```
./formatit $(perl -e 'print("%x." x 4, "\x61\x62")')
./formatit $(python -c 'print("%x." ** 4 + chr(0x61)')
```

## Reading the Stack
- If the stack looks like this:
```
18 44 f9 77 c2 44 f9 77 
```
- Then `formatit hello,%x,%x` would return the following:
```
# returns the first two words in the stack (little endian order is used)
hello,77f94418,77f944c2
```
- Potentially, it can read the entire stack
- Can find sensitive information such as passwords, keys which can also be found in the stack

## Crashing the Application
- If running `formatit hello,%x,%x,%x`, it returns the following:
```
77f94418,77f944c2,0012fe10
```
- Application can be crashed by reading the memory content pointed to by the address in the stack
```
formatit %s%s%s
```
- This will attempt to read the memory pointed by `77f94418, 77f944c,0012fe10`
- Application will crash as access to memory address to `0012fe10` is prohibited

## Writing to Stack
- `%n` writes the number of characters formatted by the `printf` function to the specified memory address
```
formatit %x_%x_%n
```
- prints the following output: `80000_6f38c_` (only 12 characters or `0c` in hexadecimal)
- The value of `0c` will be written to the address `0x7ffdf000`
