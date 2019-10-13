# Change Log
All notable changes to the "vscode-latex-commands" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

## [0.2.1] - 2019-10-13

- Changed the `activationEvent` property to active the extension only in LaTeX file.
- The `latex-commands.seq1n` command will replace the selected text instead of insert numbers at where selections are active.

## [0.2.0] - 2019-09-01

- `latex-commands.seq1n`: Commands for generating sequence numbers at each selected position.
- `latex-commands.plus1`: Commands for adding 1 to all selected text.

## [0.1.2] - 2019-07-28

- Support for multiselection.
- While select a range of text, commands will add `$` and `$$` around the selected text instead of add a snippet at active cursor.
- Change `$` to `\$` in snippets string.