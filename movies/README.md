## Description
Movie list app that fetches data from 

## Requirements
- Create a movie list using the Trakt open API

- Use the following libraries:
  * https://www.npmjs.com/package/redux, for app state controll.
  * https://www.npmjs.com/package/redux-promise-middleware, async Redux calls.
  * https://www.npmjs.com/package/axios, for making API requests.
  * https://www.npmjs.com/package/styled-components, provides CSS like styling.

- Make unit testing using the following libraries:
  - https://www.npmjs.com/package/jest, logic unit testing.
  - https://www.npmjs.com/package/@testing-library/react-native, component unit testing.

## How to build the app

To use the application, with React Native configured, run the following on your terminal (inside the project root folder)
```
yarn install
// or with npm
npm install
```
To build the project and download libs.

After that, wihth Android and iPhone simulators opened, run
```
yarn react-native run-android
yarn react-native run-ios 
// or with npm
npm react-native run-android
npm react-native run-ios
```
To build the app on the simulators of your choice.
```
Note: you can use XCode to build the project.
```

## Ideia
Usar tanto a API aberta da Trakt como a API do TMDb para ter mais informações sobre os filmes e mostrar em uma tela de detalhes sobre o filme.

## Design
![](https://cdn.dribbble.com/users/627492/screenshots/4699443/cinema_app_dribbble_shot_1x.png)

Créditos: [dribbble](https://dribbble.com/shots/4699443-Cinema-App-Movies-List)