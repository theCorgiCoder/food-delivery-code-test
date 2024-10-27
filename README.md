# Food Delivery App / code test

A simple food delivery application under the specifications given by Umain.

## Description

This project is a mobile application built using React Native with Expo, Typescript,
and Redux. The app inclused state management using Redus for global state handling
and Typescript because that's what we all use nowadays.

The app pulls from the provided API to display a list of restaurant cards and filters
that can be applied based on that information. Clicking a card will take you to a details
page for that restaurant.

Navigation was handled with expo-router, primarily for simplicity sake. Being such
a small application I wanted to focus more on other parts of the logic than deal
with react-navigation.

I also decided to use Redux, mainly because I am not yet confident in Redux and I wanted to take the opportunity
to learn more about using it as a state management library.

I think the most difficult part of this project was figuring out how to properly incorporate Redux for the API management and setting up the filter button logic properly. It was very easy for the code to get quite messy so I took some extra time to clean up the code to make it more manageable. I didn't want the screen pages to be littered with so much code if I could help it.

## Getting Started

### Dependencies

- expo CLI
- React Native
- React
- Nodejs
- Typescript
- redux
- @reduxjs/tookit
- react-redux
- @types/react-redux
- babel-preset-expo
- watchman
- Homebrew (optional)
- xcode

### Installing

1. Clone the Repository. Click here to access the repository and clone it to your
   local machine: [Food Delivery Code Test Repository](https://github.com/theCorgiCoder/food-delivery-code-test)

```
git clone https://github.com/theCorgiCoder/food-delivery-code-test.git
cd food-delivery-code-test

```

2. Make sure you have either Node.js installed, which includes npm, or install Yarn if you prefer. Run the appropriate command:

```
 npm install    # Installs dependencies using npm
yarn install   # Installs dependencies using Yarn
```

3. Set Up iOS/Android Emulators:

This project uses an iOS or Android Emulator to test the app. You’ll need to install [Android Studio](https://developer.android.com/studio) and [Xcode](https://developer.apple.com/xcode/) (for iOS emulation) to set this up.

Follow React Native’s official guide here for detailed instructions on setting up your environment: [React Native Set up Your Environment](https://reactnative.dev/docs/set-up-your-environment)

Tip: Ensure you install the necessary SDKs and tools for Android in Android Studio, and agree to any licensing agreements when prompted.

If you prefer using a physical device, the React Native setup guide also covers this. Note that you’ll need either an emulator or a physical device to run and test the app.

4. Set Up Expo Go (for Physical Devices):

If you're testing on a physical device, install the Expo Go app on your device for easy testing and live reloading. Follow this guide to set it up: [Expo Go Setup](https://docs.expo.dev/get-started/set-up-your-environment/).

### Executing program

1. Start the Expo development server:

- To start the development server, use one of the following commands:

```
npm start        # Starts with npm
npx expo start   # Starts with Expo (recommended)
yarn start       # Starts with Yarn

```

2. Open the Android or iOS Simulator:

- Using Command Line: Run the following commands to open a specific simulator:

```
npm run ios # Opens the iOS simulator
npm run android # Opens the Android simulator
yarn ios # Opens the iOS simulator
yarn android # Opens the Android simulator

```

- Expo CLI Shortcuts:

```
Press a to open the Android simulator.
Press i to open the iOS simulator (recommended for Mac users).

```

## Help

Please check the follow documentation for further details on setting up your environment and installing the proper dependencies:

- [React Native Doc](https://reactnative.dev/docs/environment-setup)
- [Expo Go Doc](https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=simulated)

## Developers & Contact

### Mobile Developer: [Elaine Bergström](https://se.linkedin.com/in/elaine-bergstrom)

### Honorary Dog-veloper: Alfie Bergström

If you have any questions or feedback please feel free to reach out to me here:

📧 **Email:** [elainebergstrom26@gmail.com](elainebergstrom26@gmail.com)
