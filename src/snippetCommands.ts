import * as vscode from 'vscode';

interface LaTeXCommands {
    commands: string;
    snippets: string;
    handler: (editor: vscode.TextEditor, snippet: LaTeXCommands) => void;
}

let commands: LaTeXCommands[] = new Array<LaTeXCommands>();

commands.push({
    commands: "latex-commands.inlinemath",
    snippets: "\$ $1 \$",
    handler: function(editor, snippet) {
        for (const selection of editor.selections) {
            if (selection.isEmpty) {
                editor.insertSnippet(new vscode.SnippetString(snippet.snippets), selection.active);
            } else {
                let selectedText = editor.document.getText(selection);
                editor.insertSnippet(new vscode.SnippetString(snippet.snippets.replace("$1", selectedText)), selection);
            }
        }
    }
});

commands.push({
    commands: "latex-commands.displaymath",
    snippets: "\$\$ $1 \$\$",
    handler: function(editor, snippet) {
        for (const selection of editor.selections) {
            if (selection.isEmpty) {
                editor.insertSnippet(new vscode.SnippetString(snippet.snippets), selection.active);
            } else {
                let selectedText = editor.document.getText(selection);
                editor.insertSnippet(new vscode.SnippetString(snippet.snippets.replace("$1", selectedText)), selection);
            }
        }
    }
});

commands.push({
    commands: "latex-commands.item",
    snippets: "\\item ",
    handler: function(editor, snippet) {
        for (const selection of editor.selections) {
            editor.insertSnippet(new vscode.SnippetString(snippet.snippets), selection.active);
        }
    }
});

commands.push({
    commands: "latex-commands.seq1n",
    snippets: "",
    handler: function (editor, snippet) {
        for (let i = 0; i < editor.selections.length; i++) {
            const selection = editor.selections[i];
            if (i < (editor.selections.length - 1)) {
                snippet.snippets = `${i + 1}`;
            } else {
                snippet.snippets = "${1:n}"
            }
            editor.insertSnippet(new vscode.SnippetString(snippet.snippets), selection);
        }
    }
});

commands.push({
    commands: "latex-commands.plus1",
    snippets: "",
    handler: function (editor, snippet) {
        for (let i = 0; i < editor.selections.length; i++) {
            const selection = editor.selections[i];
            if (!selection.isEmpty) {
                try {
                    let number0 = parseInt(editor.document.getText(selection));
                    snippet.snippets = `${number0 + 1}`;
                } catch (error) {
                    continue;
                }
                editor.insertSnippet(new vscode.SnippetString(snippet.snippets), selection);
            }
        }
    }
});

export default commands;