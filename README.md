# Client Server Subscriber
__Interview for BA Link company__

## Abstract
This repository intends to store 2 related projects
1. Server App
2. Client App

The Client app consists on a simple subscribe-form which connect to the Server app. The Server app can manage several routes.

## Server app
A server implemented with node.js and Express.js.

The server run on port 4000.

The server's routes are the following:
1. GET at "/country-values" to fetch some defined country values
2. POST at "/subscribe" to subscribe a client

To start the project run in terminal
```
npm install
node start
```

## Client app
A subscriber form implemented in React.js.

The global state is managed by redux library.

No CSS framework such as bootstrap has been used.

To start the project run in terminal
```
npm install
npm start
```
