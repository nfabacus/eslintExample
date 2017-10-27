# ESLint example
1. Create a file called .eslintrc in your project root folder. Below, "jsx" is for react projects.
```
{
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
  },
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "rules": {
    "no-unused-vars":[
      "off",
      {
        "vars": "local",
        "args": "none",
      }
    ]
  }
}
```

2. Install ESLint in your project root folder.
```
npm install --save-dev eslint
```
3. Make sure you have an extension for ESLint in your code editor.
For Visual Studio Code, you can use "ESLint" extension.

4. To install airbnb eslint.
```
npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```
5. Make sure to update your .eslintrc as below:
```
{
  "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
  },
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "rules": {
    "no-unused-vars":[
      "off",
      {
        "vars": "local",
        "args": "none",
      }
    ],
    "react/jsx-filename-extension": 0
  }
}
```

