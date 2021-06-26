# Refined GitHub Feeds
Making the GitHub news feeds great again. This extension enables you to filter the GitHub news feed based on different event types:

https://user-images.githubusercontent.com/8397274/123520376-05921980-d6ce-11eb-8f6d-04d09e1486c9.mov

### Why?

Until recently GitHub news feeds was really good and easy to use. It only contained the following notification items:

- Stars on your projects
- Someone followed you
- Someone forked your repo

Recently GitHub added lots of stuff to the news feed, and they made it cluttered. They even added release feeds from the starred repos.

I had opened a thread on GitHub community and found that the most people were not happy about it since it kills the purpose of stars.

Thread Link: https://github.community/t/why-i-am-seeing-releases-from-repos-that-i-didnt-subscribed/184239

I developed this extension as temporary solution to the issue, so that I can remove all the junks from my feeds until GitHub adds a filter or remove this feature entirely. 

## Supported Browsers
- Chrome 
- Firefox
- Opera
- Edge

## Setup

### Chrome

* Open `chrome://extensions` in chrome
* Toggle the developer mode by clicking on the toggle button on the top right corner
* Download the latest release from the [releases page](https://github.com/gautamkrishnar/refined-github-feeds/releases/latest)
* Extract the release file
* Load extension in the browser using the **Load Unpacked** button. Point to the extracted release folder.
* Click on the extension icon and use it

### Firefox
* Open `about:debugging` in firefox
* Click on This firefox option on left
* Download the latest release from the [releases page](https://github.com/gautamkrishnar/motrix-chrome-extension/releases/latest)
* Click on **Load Temporary add-on...** button
* Select the downloaded zip file
* Once the extension is loaded you can see its icon in the toolbar, Set an API Key by clicking on the extension icon set any value you like
* Click on the extension icon and use it

## Development

### Install
```shell
npm install
```

### Starting the development server
```shell
npm run dev chrome
npm run dev firefox
npm run dev opera
npm run dev edge
```

### Build
```shell
npm run build chrome
npm run build firefox
npm run build opera
npm run build edge
```

### Environment

The build tool also defines a variable named `process.env.NODE_ENV` in your scripts. 

### Toolkit Docs
* [webextension-toolbox](https://github.com/HaNdTriX/webextension-toolbox)

### License
This project is licensed under GNU AFFERO GENERAL PUBLIC LICENSE Version 3.

### Bugs
If you are experiencing any bugs, don’t forget to open a [new issue](https://github.com/gautamkrishnar/refined-github-feeds/issues/new).

## Liked it?
Hope you liked this project, don't forget to give it a star ⭐
