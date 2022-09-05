# Vim Keymap

## Table of Contents
```toc
```
## Description
This document is a reference of all the editor options for the Vim command line editor.

## Keyboard Shortcuts
### Undo
- `u` - undo the last command

### Screen Commands
- `CTRL + I` - reprints current screen
- `CTRL + L` - Expose one more line at the top of the screen
- `CTRL + E` - Expose one more line at the bottom of the screen
- `CTRL + F` - Page forward one screen
- `CTRL + B` - Page back one screen
- `CTRL + D` - Page down half a screen
- `CTRL + U` - Page up half a screen

### Cursor Positioning commands
- `j` - Move cursor down one line in the same column
- `k` - Move cursor up one line in the same column
- `h` - Move cursor back one character
- `l` - Move cursor forward one character
- `RETRUN` - Move cursor to the beginning of next line
- `0` - Move cursor to the beginning of the current line
- `$` - Move cursor to the end of the current line
- `SPACE` - Move cursor forward one character
- `nG` - Move cursor to the first character of the line number *n* (default is last line of file)
- `:n` - Move cursor to the beginning of line number *n*
- `b` - Move the cursor backwards to the beginning of the previous word
- `e` - Move the cursor backward to the end of the previous word
- `w` - Move the cursor forward to the next word
- `/pattern` - Move cursor forward to next occurrence of pattern
- `?pattern` - Move cursor backward to next occurrence of pattern
- `n` - Repeats last `/` or `?` pattern search

### Text Insertion Commands
- `a` - append text after cursor (`ESC` to terminate)
- `A` - append text at the end of the line (`ESC` t)