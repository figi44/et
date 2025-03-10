# ET 👽

ET (External Terminal) provides a convenient way to open your preferred external terminal with a keyboard shortcut, directly from VS Code (or Cursor). This extension opens your configured external terminal application in the current workspace directory.

## Installation 📦

1. Download .vsix file from this repo
2. Open VS Code/Cursor
3. Go to the Extensions view.
4. Select Views and More Actions...
5. Select Install from VSIX...

## Features 🚀

This extension adds a command to open an external terminal application from your editor:

- Opens your configured external terminal in the current workspace folder
- Provides a convenient keyboard shortcut (`Ctrl+Shift+C` on Linux) - overrides the default shortcut
- Supported terminals:
  - WezTerm

## Requirements

You must configure the `terminal.external.linuxExec` setting in VS Code to use this extension.

## Release Notes

### 0.0.1 🛸

Initial release of ET:

- Added command to open external terminal (WezTerm)
- Added keyboard shortcut (`Ctrl+Shift+C` on Linux)
