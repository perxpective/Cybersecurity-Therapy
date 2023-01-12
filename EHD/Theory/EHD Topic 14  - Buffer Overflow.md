# EHD Topic 14 - Buffer Overflow

###### tags: #EHD 

## Table of Contents
```toc
```

## What is Buffer Overflow
- Buffer overflow accounts for a significant of exploits
- Provides application with more data than it can hold

```c
void main() {
	char buffer[5]
	strcpy(buffer, "abcdefghijklmnopqrstuvwxyz");
	return
}
```

## Memory Structure
- Typically organised into 3 areas:
	- Code Segment
	- Stack Segment
	- Heap Segment
- Heap and stack are dynamic

![](https://i.imgur.com/u9kgsZX.png)

