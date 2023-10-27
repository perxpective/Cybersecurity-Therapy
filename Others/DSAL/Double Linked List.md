# Double Linked Lists (Insert and Delete Operations)

## Definition (What is a Linked List?)
- Linear data structure, in which the elements are not stored at contiguous memory locations
- Elements in a linked list are linked using points

![](https://i.imgur.com/05R98V5.png)

## Single vs Double Linked List
- Nodes in single linked lists only have 1 link pointing to the next node
- Nodes in double linked lists have 2 links pointing to the next and previous nodes respectively

### Advantages of Double Linked Lists
- Write code to traverse in double linked list in both forward and backward directions
- When writing code, easier to implement some operations on double linked list
	- Operations are insert, delete, etc. because these can be done with a single reference

### Disadvantages of Double Linked Lists
- Uses more memory than arrays because of the storage used by their pointers (link parts)
- While writing code to insert and delete operations, extra steps required for maintaining the node's next link and previous link
- Inherently, double linked list is sequential access. You cannot write code to jump directly to the desired node

### Applications of Single Linked Lists
- GPS navigation
- Music playlists
- Basis to implementing stack and queue

### Applications of Double Linked Lists
- Web Browser Forward and Backward
- Ctrl+Z and Ctrl+Y
- Music Player
