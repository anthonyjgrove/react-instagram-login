'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import InstagramLogin from '../src/instagram';
// import InstagramLogin from '../dist/instagram-login';

const responseInstagram = (response) => {
  console.warn(response);
};

ReactDOM.render(
  <InstagramLogin
    clientId='5fd2f11482844c5eba963747a5f34556'
    callback={responseInstagram}
    scope='likes+comments'
  >
    <FontAwesome
      name='instagram'
    />
    <span> Login with Instagram</span>
  </InstagramLogin>,
  document.getElementById('instagram-login')
);