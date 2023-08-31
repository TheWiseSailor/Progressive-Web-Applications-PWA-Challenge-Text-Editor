# Progressive Web Applications (PWA) Challenge: Text Editor

Welcome to the Progressive Web Applications (PWA) Challenge: Text Editor project! In this challenge, you'll build a text editor that runs in the browser, meets PWA criteria, and includes data persistence techniques. Here's a breakdown of the project:

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [IndexedDB Logic](#indexeddb-logic)
- [Text Editor Implementation](#text-editor-implementation)
- [Service Worker and Caching](#service-worker-and-caching)
- [PWA Installation Logic](#pwa-installation-logic)
- [Webpack Configuration](#webpack-configuration)
- [Heroku Deployment](#heroku-deployment)
- [Testing and Debugging](#testing-and-debugging)
- [Sources](#sources)

## Introduction

This project involves building a text editor that functions as a Progressive Web Application (PWA). The application allows users to create and save notes or code snippets with or without an internet connection, ensuring reliable data retrieval for later use.

## Getting Started

1. Clone the starter code repository to your local machine.
2. Set up your development environment with Node.js and npm.

## IndexedDB Logic

- Open `develop/client/src/js/database.js`.
- Implement `putDb` and `getDb` functions for interacting with IndexedDB.

## Text Editor Implementation

- Open `develop/client/src/js/editor.js`.
- Complete the `Editor` class to handle text editor functionality.
- Initialize the CodeMirror editor instance.
- Load content from IndexedDB or localStorage when the editor is ready.
- Save content to localStorage when the editor's content changes.
- Save content to IndexedDB when the editor loses focus.

## Service Worker and Caching

- Open `develop/client/src/js/index.js`.
- Register the Workbox service worker and caching strategies.
- Implement caching logic for various assets.

## PWA Installation Logic

- Open `develop/client/src/js/install.js`.
- Implement logic for installing the PWA.
- Handle the `beforeinstallprompt` and `appinstalled` events.

## Webpack Configuration

- Open `develop/client/webpack.config.js`.
- Configure Webpack for bundling and generating service worker and manifest files.

## Heroku Deployment

1. Make sure you have a Heroku account and Heroku CLI installed.
2. Navigate to your project directory in the terminal.
3. Initialize Git, commit changes, and create a Heroku app.
4. Create a `Procfile` and specify the server command.
5. Deploy your app to Heroku using Git.

## Testing and Debugging

1. Open your deployed app's URL to test it in the browser.
2. Test both online and offline functionality.
3. Use browser developer tools for debugging and error checking.

## Sources

Donna Thompson <br/>
https://www.youtube.com/ <br/>
https://developer.mozilla.org/en-US/ <br/>
https://www.w3schools.com/ <br/>
https://stackoverflow.com/
