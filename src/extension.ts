'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import commands from './commands';

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
            const snippt = commands[command];
            
            let disposable = vscode.commands.registerTextEditorCommand(snippt.commands, () => {
                // The code you place here will be executed every time your command is executed
                let editor = vscode.window.activeTextEditor;
                let selection : vscode.Selection = editor.selection;
                let insertPosition = new vscode.Position(selection.active.line, 0);
                editor.insertSnippet(new vscode.SnippetString(snippt.snippts), insertPosition);
            });

            context.subscriptions.push(disposable);
        }
    }

}

// this method is called when your extension is deactivated
export function deactivate() {
}