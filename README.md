# Getting Started

The purpose fo this demo is to provide proof of concept of the design token pipeline from Figma to Github.

## Technologies Used:
* [Figma Tokens](https://docs.figmatokens.com/)
* [Style Dictionary](https://amzn.github.io/style-dictionary/#/)
* [Styled System](https://styled-system.com/) with [Emotion](https://github.com/emotion-js/emotion)

## Steps
### 1. Create or import tokens in Figma Tokens plug-in
### 2. Push changes to git repository
Figma Tokens plug-in is synced to this repository via a Personal Access Token. Figma tokens are stored in `data/tokens.json` and pushed to the default `tokens` branch.
### 3. Translate Figma Tokens file into something Style Dictionary can understand
To do so, we use the [token-transformer](https://www.npmjs.com/package/token-transformer) package. From the project directory, run  `node node-modules/token-transformer data/tokens.json style-dict/tokens/output.json`
### 4. Build our style dictionary
To do so, run `style-dictionary build`. See [style dictionary docs](https://amzn.github.io/style-dictionary/#/) for more information.
### 5. Use tokens in js via Styled-System provided themes!**

**More work needs to be done to configure output json from style dictionary into styled-system theme json. Currently only color works as expected.

## Future Steps
* Work on configuring styled-system need-json from style dictionary outputs
* Automated scripts to make the process of transforming files more seamless

## Set up React App
1. `npm ci` to install needed npm packages
2. `npm start`to open the application in localhost
