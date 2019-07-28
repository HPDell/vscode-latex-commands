'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import commands from './snippetCommands';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-latex-commands" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    for (const command in commands) {
        if (commands.hasOwnProperty(command)) {
            const snippet = commands[command];
            
            let disposable = vscode.commands.registerTextEditorCommand(snippet.commands, () => {
                // The code you place here will be executed every time your command is executed
                let editor = vscode.window.activeTextEditor;
                for (const selection of editor.selections) {
                    let selectedText = editor.document.getText(selection);
                    if (selection.isEmpty) {
                        editor.insertSnippet(new vscode.SnippetString(snippet.snippts), selection);
                    } else {
                        editor.insertSnippet(new vscode.SnippetString(snippet.snippts.replace("$1", selectedText)), selection);
                    }
                }
                // snippet.action(editor);
            });

            context.subscriptions.push(disposable);
        }
    }

}

// this method is called when your extension is deactivated
export function deactivate() {
}