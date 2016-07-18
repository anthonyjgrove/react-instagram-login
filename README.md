# React Instagram Login

> An Instagram oAUth Sign-in / Log-in Component for React 


## Install
```
npm install react-instagram-login

```
## How to use
```js
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import InstagramLogin from 'react-instagram-login';

const responseInstagram = (response) => {
  console.log(response);
}

ReactDOM.render(
  <InstagramLogin
    clientId="5fd2f11482844c5eba963747a5f34556"
    buttonText="Login"
    callback={responseInstagram} 
  />,
  document.getElementById('instagramButton')
);
```
## Callback

Callback will return a code for use on your server to get a full access_token. 

## Parameters

|    params    |   value  |             default value            |
|:------------:|:--------:|:------------------------------------:|
|    clientId  |  string  |               REQUIRED               |
|     scope    |  string  |                 basic                |
|   callback   | function |               REQUIRED               |
|   buttonText |  string  |            Login with Instagram      |
|   cssClass   |  string  |                   -                  |

Instagram API Docs: https://www.instagram.com/developer/

You can now also pass child components such as icons into the button component.
```js
  <InstagramLogin
    clientId='5fd2f11482844c5eba963747a5f34556'
    callback={responseInstagram}
  >
    <FontAwesome
      name='instagram'
    />
    <span> Login with Instagram</span>
  </InstagramLogin>

```
## Dev Server
```
npm run start

```
## Run Tests
```
npm run test:watch

```

## Production Bundle
```
npm run bundle
```
##### Checkout my other login: [React Google Login](https://github.com/anthonyjgrove/react-google-login) 

##### Checkout keppelen's: [React Facebook Login](https://github.com/keppelen/react-facebook-login) 

### Follow me on Twitter: [@anthonyjgrove](https://twitter.com/anthonyjgrove)
