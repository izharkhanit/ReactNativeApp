# property app with React Native

 property application focussing on fundamentals of React Native. The app consists of a landing page with search textInput along with property list  & selected property display page. 

## Prerequisites

Install node + npm & then Expo

[Install npm](https://www.npmjs.com/get-npm)

[Install Expo](https://docs.expo.io/versions/latest/)

## Getting Started

These instructions will get you a copy of the app and running on your local machine/emulator/device for development & feedback purposes:

- Fork the repo to your personal Github account
- Open terminal, navigate to project directory & run following commands
- *`npm i -g exp`* Install Expo if you don't have already
- *`npm install`* Install dependencies
- *`open -a Simulator`* Check your iOS simulator
- *`expo start`* Build Expo project & Run the bundler



## What will you get
Know the following concepts:

- Making a complex layout using in-built components of React Native such as View, Image, Text, TextInput, Touchables, etc.
- Adding an external library to package.json & using it
- Handling Navigation between screens using `React Navigation`
- Handling REST API and State Management for navigation using `fetch` and `Redux` 
- Creating a simple list layout
- Modifying a component for reusability

## How to proceed
This is an incremental project. You can proceed through the project by using git `tags` in the repo. The project is build step by step. Checkout the first tag(v1.0) to start. Here's a description of each step:

1. Blank expo project with Hello World layout.
2. A basic layout with TextInput, Button & Touchables.
3. Updated folder structure breaking down app to screens/sub apps & components.
4. Move the existing filters screen to new folder structure.
5. Add an external navigation library(React Navigation) and navigate to a new screen.
6. Modify the Property component to make it reusable for Property Display Page.

## CODE REFACTOR
Below are the points which are refactored:
- Project Structure for keeping in future developement, flexibilty and maintainability
- Majorily focused on Uncle Bob SOLID principles
- Added REST API with redux action FetchProperties
- Fetching Data from `https://api.myjson.com/bins/14nvfa` along with images.
- Code extraction for navigation from app.js to all other app
- Added CombineReducer in `src\apps\redux\reducers` for continuation of other reducer
- App.js having single responsibility and we can add further calls like before login here
- In `src\root-app` files helps to perform Single Responsibilty & Open Closed Principle for root
- In `src\shared` is generally Open closed with Liskov Substituition Principle for `apps` & `root-app`
- In `src\apps` :
- `apps/assets` - This is where all the images, videos, etc will go in.
- `apps/config` - This is where configurations for the app will go in. For example, your environment specific config for dev and prod, etc.
- `apps/styles` - This is where your global styles, themes, and mixins will go.
- `apps/utils` - This is where all the utility files storage utility,manupulating, calendar, data transformation utility, etc will go.
- `apps/components` - The directory will contain all the dumb components. In short, these components will only do layouting and won't contain any states or business logic inside them. All the data to these components will be passed in as props.
- `app/pages` - This directory will hold all the smart components. Their job is to pass the props to the dumb components after all the business logic has been executed.
- `app/routes` - This is where we will keep all our app's routing logic. This will contain the map between the pages(smart components) and the routes.
- `app/redux` - This will contain all our redux state management files like actions, reducers, store config, thunks etc.

### Coding Refactor
- Focused mainly on landing page
- Moved all the stateless pages into `apps\components` and data are passed in as props and doing reusability. Code Abstractions
- Every single component in `apps\components` have no business logic
- Separated out particular component in particular component folder with naming convention
- Open and closed principle followed to extend the code for future.
- In 'apps\pages' separation of concern done according to particular components and pages
- As Majorily focussed on `pages\LandingPage\` here added pageComponent, styleComponent and in future we will add testComponent for unit testing
- All the inline styling are removed from `pages\LandingPage\` & `components\LandingComponents`
- Global and local stylesheet are created and import-export done.
- Styles are also passed as props either local(styles) or global(GlobalStyles) to stateless component
- Use Strict everywhere

### ToDo
- Similar above points will be perform for SelectedPropertyDisplay
- `SlidingUtility` is created in `utils` for more abstraction from Landing and SelectedPropertyDisplay to reuse from utility itself for both component.
- adding `index.js` for every folders to `export * modules` and importing in one line
- Setup `jest` in `reactnativeapp\jest` for unit testing.
- Adding `LandingPage.component.test.js` and similar for other to do unit testing.
- From paper layout to UML Layout Ecommerce Architecture diagram draw and add for this app.
