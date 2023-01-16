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
- Using Perl or Python can help
```
./formatit $(perl -e 'print("%x." x 8)')
./formatit $(python -c 'print("%x." * 8)')
```
- 