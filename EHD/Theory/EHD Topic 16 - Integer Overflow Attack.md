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
```
size of num1 = 2 bytes
size of good_num1 = 4 bytes
```