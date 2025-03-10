// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { exec } from 'child_process';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "open-external-terminal" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const openTerminal = vscode.commands.registerCommand('et.new', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		
		// Define an enum for supported terminals
		enum SupportedTerminals {
			WezTerm = "wezterm",
		}

		const cmd = vscode.workspace.getConfiguration('terminal').external.linuxExec
		console.log(cmd)
		console.log(Object.values(SupportedTerminals).includes(cmd))
		
		if (!cmd) {
			return vscode.window.showErrorMessage("Configure 'terminal.external.linuxExec' in settings.")
		}
		if (!Object.values(SupportedTerminals).includes(cmd)) {
			return vscode.window.showErrorMessage("Set 'terminal.external.linuxExec' to a supported terminal.")
		}

		let cwd = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath
		
		if (cmd == SupportedTerminals.WezTerm){
			const args = [cmd, "start"]
			if (cwd) {
				args.push("--cwd")
				args.push(cwd)
			}
			exec(args.join(" "))
		}
		

			
	});

	context.subscriptions.push(openTerminal);
}

// This method is called when your extension is deactivated
export function deactivate() {}
