# BED Chapter 5 - Databases

###### tags: `BED`

## Table of Contents
```toc
```

## Database Management System (DBMS)
Collection of programs used to:
- manage (create, update, delete)
- protect
- control access of
  data in a database.

## Relational Model
- Name of relation is unique in a database
  - Another relation or table cannot be created in the same database by the same name
- Cannot have multi-valued cell
- Cannot have two attributes of the same name
- Cannot have a duplicate row

A **relational database** is a collection of inter-related proper form relations.

### Definitions
**Relation** - Two dimensional table
**Attribute** - Column name in table that defines characteristic of an object
**Candidate Key** - An attribute or group of attributes that can uniquely identify a tuple in a relation
**Tuple** - Set of attribute values in the same row

### Candidate Key
- Candidate key can be found by identifying the group of attributes that can uniquely identify tuples
- The most suitable candidate key will become the primary key

### Foreign Key
- Attribute (Column)
- Group of attributes with relation that matches
- Value of primary key or candidate key
- Home or other relation

## MySQL
### Data Types
- Integer
- Smallint
- Decimal
- Char(n)
- Varchar(n)
- Date (Date format)

### Creating a Table

```sql
CREATE TABLE <TableName> (<ColumnDefinitionList>, PRIMARY KEY (ColumnNameList))
```

### Deleting a Table

```sql
DROP TABLE <TableName>
```

### Query

Select columns from table:

```sql
SELECT ColumnName1, ColumnName2 FROM TableName
```

To select all columns, use:

```sql
SELECT * FROM TableName
```

To select distinct (non-duplicate) values, use:

```sql
SELECT DISTINCT ColumnName FROM TableName
```

Sorting Results:

```sql
SELECT * FROM TableName ORDER BY ColumnName ASC | DESC   
```

Limiting rows:

```sql
SELECT * FROM TableName ORDER BY ColumnName ASC LIMIT 3
```

### Updates

Insert:

```sql
INSERT INTO TableName (<FieldList>) VALUES (<ValueList>)
```

Update:

```sql
UPDATE TableName SET Column1 = Value1, Column2 = Value2, ... WHERE condition
```

### Table Joins

```sql
SELECT Table1.Column1, Table1.Column2, Table2.Column1 FROM Table1, Table2
```

Using table aliases as shortcut:

```sql
SELECT a.Column1, a.Column2, b.Column1 FROM Table1 a, Table2 b
```