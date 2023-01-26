# EHD Topic 16 - Integer Overflow Attack

###### tags: #EHD #Theory 

## Table of Contents
```toc
```

## Data Overflow
- Buffer overflow attempts to store data larger than its allocated size in memory
- Integer overflow is similar - it occurs when a number is larger than that variable's type can handle

## Common Data Types
- Boolean - 1 byte
- Char - 1 byte
- Short Integer - 2 bytes
- Integer - 4 bytes
- Long - 8 bytes

## Overflow in Unsigned Integer
![](https://i.imgur.com/HMlFXoW.png)


## 2's Complement System
- Allows representation of negative numbers
- **Example:**
	- 2's complement of 4-bit binary
	- 1110 -> 0001 (1's complement)
	- 0001 + 1 = 0010 (2 in decimal)
	- Hence 1110 = -2

### Wraparound Effects
| 2's complement | Decimal |
| -------------- | ------- |
| 0111           | 7       |
| 0010           | 2       |
| 0001           | 1       |
| 0000           | 0       |
| 1111           | -1      |
| 1110           | -2      |
| 1000           | -8      |

![](https://i.imgur.com/xTUDQLO.png)

## Effects of Integer Overflow
- May happen when performing arithmetic operations
- Crashing of application (dividing by zero)
- Escalation of privileges
- Buying items from e-commerce websites for negative prices