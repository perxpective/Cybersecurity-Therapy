# Vim Shortcuts

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
- `a` - Append text after cursor (`ESC` to terminate)
- `A` - Append text at the end of the line (`ESC` to terminate)
- `i` - Insert text before cursor (`ESC` to terminate)
- `I` - Insert text at the beginning of the line
- `o` - Open new line below current line for text insertion
- `O` - Open new line above current line for text insertion
- `DELETE` - Overwrite last character during text insertion
- `ESC` - Exit Insert Mode

### Text Insertion Commands
- `x` - Delete current character
- `dd` - Delete current line
- `dw` - Delete current word
- `d)` - Delete the rest of the current sentence
- `D` or `d$` - Delete from cursor location to end of the line
- `P` - Put back text from the previous delete

### Changing Commands
- `cw` - Change characters of current word until stopped with `ESC` key
- `c$` - Change text up to the end of the line
- `C, cc` - Change remaining text on current line until stopped by pressing `ESC` key
- `~` - Change case of current character
- `xp` - Transpose current and following characters
- `J` - Join current line with next line
- `s` - Delete current character and goes into Insert Mode
- `rx` - Replace current character with *x*
- `R` - Replaces following characters until terminated with the `ESC` key

### Cut and Paste Commands
- `yy` - Puts current line in a buffer (does not delete the line from its current position)
- `p` - Places line in the buffer after current position of the cursor

### Exiting Vim
- `ZZ` - Exit and save changes
- `:wq` -Write changes to current file and quit edit session
- `:q!` - Quit edit session without saving changes