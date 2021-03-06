# Refined GitHub Feeds
Making the GitHub news feeds great again. This extension enables you to filter the GitHub news feeds based on different event types:

https://user-images.githubusercontent.com/8397274/123520376-05921980-d6ce-11eb-8f6d-04d09e1486c9.mov

## Installing

### Chrome / Opera / Edge
[link-chrome]: https://chrome.google.com/webstore/detail/refined-github-feeds/hhojcmhjganofpbcbfkmpkjfkboddhpa 'Version published on Chrome Web Store'

[<img src="https://raw.githubusercontent.com/alrra/browser-logos/90fdf03c/src/chrome/chrome.svg" width="48" alt="Chrome" valign="middle">][link-chrome] [<img valign="middle" src="https://img.shields.io/chrome-web-store/v/hhojcmhjganofpbcbfkmpkjfkboddhpa.svg?label=%20">][link-chrome] also compatible with [<img src="https://raw.githubusercontent.com/alrra/browser-logos/90fdf03c/src/edge/edge.svg" width="24" alt="Edge" valign="middle">][link-chrome] [<img src="https://raw.githubusercontent.com/alrra/browser-logos/90fdf03c/src/opera/opera.svg" width="24" alt="Opera" valign="middle">][link-chrome]

### Firefox
[link-firefox]: https://addons.mozilla.org/en-US/firefox/addon/refined-github-feeds/ 'Version published on Mozilla Add-ons'

[<img src="https://raw.githubusercontent.com/alrra/browser-logos/90fdf03c/src/firefox/firefox.svg" width="48" alt="Firefox" valign="middle">][link-firefox] [<img valign="middle" src="https://img.shields.io/amo/v/refined-github-feeds.svg?label=%20">][link-firefox]

### Building from sources
More info [here](installing-via-releases.md)

## Why?

Until recently GitHub news feeds were really good and easy to use. It only contained the following feed items:
- Stars on your projects
- Followed you
- Forked your project

Recently GitHub added a lots of stuff to the news feed making it really cluttered. They even added release feeds from the starred repos.

I had opened a thread on GitHub community and found that it is a new GitHub feature. From the thread I also knew that most people are extremely unhappy about it, following are the main reasons:
- It kills the true purpose of stars: Stars were supposed to be used as a bookmark or the way of showing appreciation towards the project. Starring a project doesn't necessarily means that I want to follow the project's release updates. Its true purpose is to determine the popluarity of a project.
- There is already a release option under the watch menu.
- This feature is annoying since the news feed is getting cluttered due to the release feeds.
- People will miss the important notifications since their news feed is cluttered.

Discussions link: https://github.community/t/why-i-am-seeing-releases-from-repos-that-i-didnt-subscribed/184239

I developed this extension as temporary solution for the issue, so that I can remove all the junks from my feeds until GitHub adds a filter or remove this feature entirely. I am open sourcing this so that others can also use it.

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
If you are experiencing any bugs, don???t forget to open a [new issue](https://github.com/gautamkrishnar/refined-github-feeds/issues/new).

## Liked it?
Hope you liked this project, don't forget to give it a star ???
