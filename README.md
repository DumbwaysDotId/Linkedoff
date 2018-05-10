# React Native DumbWays Boilerplate

This is a complete React Native Boilerplate including React Navigator, Redux, and Nativebase. This Boilerplate helps u quickly jump to code as soon as possible without being confuse about structures, and setup. We make it as modular as possible to avoid headache on a big app with a big team.

## Prerequisites

- Xcode or Android Studio installed and exported on your ~/.bash_profile or similar
- JDK 1.8
- Node >= 8.*
- Watchman
- react-native-cli

## Installation

open terminal and change directory to your desired folder, then:
```
$ git clone https://github.com/DumbwaysDotId/RnDwBoilerplate YourAppName
$ cd YourAppName
$ npm install
```

## Running Your App

Make sure to open your emulator first, then
```
$ react-native run-android
or
$ react-native run-ios
```

## Example & Folder Structures

- In the 'app' folder, look at 'contacts' module, there you can look how redux, react-navigation, and native-base works together

- ContactsList is the first screen that is rendered on screen. To change that, open 'app/redux/nav.js', and change the 4th line

```
RootNavigator.router.getActionForPathAndParams('ContactsList') //change ContactsList to your desired screen
```

- Register your screen on 'app/navigators/RootNavigator.js'

- Add your reducers at 'app/redux/rootReducer'
