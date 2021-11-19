# TODO

This application is purely a TO-DO demo of the Ionic Framework and Angular.

This project is just to show off Ionic components in a real-world application. 


## Table of Contents
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [App Preview](#app-preview)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

## App Preview

### Pending tab

| Design  |
| -----------------|
| ![Pending tab](/src/assets/screenshots/1.png)|
| ![Pending tab](/src/assets/screenshots/5.png)|


### Add list

| Design |
| ----------------|
| ![Add List](/src/assets/screenshots/1.1.png) |

### Completed tab

|  Design |
| --------|
| ![Completed tab](/src/assets/screenshots/2.png)  |

### List view

|  Design |
| --------|
| ![list view](/src/assets/screenshots/3.png) |
| ![list view](/src/assets/screenshots/4.png) |
| ![list view](/src/assets/screenshots/6.png)|


## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `ionic build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`


## dependencies installation

`npm install`

## Development server

Run `ionic serve` for a dev server. Navigate to `http://localhost:8100/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.