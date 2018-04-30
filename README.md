# React Instagram Login

> An Instagram oAUth Sign-in / Log-in Component for React


## Install
```
npm install react-instagram-login

```
## How to use
```js
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
    onSuccess={responseInstagram}
    onFailure={responseInstagram}
  />,
  document.getElementById('instagramButton')
);
```
## onSuccess callback

Callback will return a code for use on your server to get a full access_token.

If ```implicitAuth``` is set to ```true``` it will return the full access_token directly.

## onFailure callback

Callback will return an error object.

| property name       |  value   |
|:-------------------:|:--------:|
|       error         |  string  |
|    error_reason     |  string  |
|  error_description  |  string  |

## Parameters

|    params    |   value  |             default value            |
|:------------:|:--------:|:------------------------------------:|
|    clientId  |  string  |               REQUIRED               |
|     scope    |  string  |                 basic                |
|   onSuccess  | function |               REQUIRED               |
|   onFailure  | function |               REQUIRED               |
|   buttonText |  string  |            Login with Instagram      |
|   cssClass   |  string  |                   -                  |
|     tag      |  string  |                button                |
|     type     |  string  |                button                |
| implicitAuth | boolean  |                false                 |


Instagram API Docs: https://www.instagram.com/developer/

You can now also pass child components such as icons into the button component.
```js
  <InstagramLogin
    clientId="5fd2f11482844c5eba963747a5f34556"
    onSuccess={responseInstagram}
    onFailure={responseInstagram}
  >
    <FontAwesome
      name="instagram"
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
