# Use this template
Use this template to create and run tests on your Svelte components.
### Clone this repository:
```git
$ git clone https://github.com/...
```
### Install the dependencies present in `package.json`:
```npm
$ npm install
```
### Run the tests:
```npm
$ npm run test
```

# Configure in your project
Configure in your project to test your Svelte components.

### Install the dependencies:
- `svelte-jester:` A Jest transformer for Svelte - compile your components before importing them into tests. 
- `jest`: JavaScript testing framework
- `babel-jest`: transformer for JavaScript code. 
- `@testing-library/svelte`: Svelte Test Library test components.
- `babel/preset-env`: Smart preset that lets you use the latest JavaScript. Essential if using ECMAScript 6.
- `@babel/core`: Babel.

```npm
$ npm install --save-dev svelte-jester jest babel-jest @testing-library/svelte @babel/preset-env @babel/core
```    

### Add the settings to your project's package.json

- ### Add this at the bottom
```json
"jest": {
    "bail": false,
    "moduleFileExtensions": [
      "js",
      "svelte"
    ],
    "transform": {
      "^.+\\.js$": "babel-jest",
      "^.+\\.svelte$": "svelte-jester"
    },
    "verbose": true
  },
  "babel": {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "node": "current"
          }
        }
      ]
    ]
  }
```
- #### Add this to scripts:   
```json
"test": "jest src"
```  

