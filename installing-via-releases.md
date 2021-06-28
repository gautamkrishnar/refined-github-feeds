## Building from sources

Download the latest source code from [Github Releases](https://github.com/gautamkrishnar/refined-github-feeds/releases/latest)

### Install the dependencies
- Install Node JS and NPM

#### Chrome
* Open `chrome://extensions` in chrome
* Toggle the developer mode by clicking on the toggle button on the top right corner
* Run `npm run build chrome` in the extension's source code directory
* Load extension in the browser using the **Load Unpacked** button. Point it to the `dist/chrome` folder
* Click on the extension icon and use it

#### Firefox
* Open `about:debugging` in firefox
* Click on This firefox option on left
* Run `npm run build firefox` in the extension's source code directory
* Zip the contents of `dist/firefox` by running `cd dist/firefox && zip -r ../firefox.zip *` command
* Click on **Load Temporary add-on...** button
* Select the `dist/firefox.zip` zip file
* Once the extension is loaded you can see its icon in the toolbar
* Click on the extension icon and use it

#### Edge

* Open `edge://extensions` in edge
* Toggle the developer mode by clicking on the toggle button on the left bottom corner
* Run `npm run build edge` in the extension's source code directory
* Load extension in the browser using the **Load Unpacked** button. Point it to the `dist/edge` folder
* Click on the extension icon and use it

#### Opera

* Open `opera://extensions` in opera
* Toggle the developer mode by clicking on the toggle button on the top right corner
* Run `npm run build opera` in the extension's source code directory
* Load extension in the browser using the **Load Unpacked** button. Point it to the `dist/edge` folder
* Click on the extension icon and use it
