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
- **Example Problem**
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
