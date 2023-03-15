# Linter installation in the project

## VScode recommendations

Recommended extensions to improve the experience when using linters

```json
{
  "recommendations": [
    "usernamehw.errorlens", 
    "dbaeumer.vscode-eslint",
  ]
}
```

If you use the extensions and want to have the code errors corrected automatically when saving, add this setting to the vscode user configuration file.

Press CTRL+ SHIFT + P keys, search for preferences: Open user settings (JSON)

Add the following script to the settings file.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Installation

Install standard for development environment with npm

```bash
  npm install standard -D
```

Add configuration in package.json file

```json
{
  "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }
}
```

Add scripts in package.json file

```json
{
  "lint": "npx standard",
  "lint-fix": "npx standard --fix"
}
```
