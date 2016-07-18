import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDom from 'react-dom';
import chai, {expect} from 'chai';
import chaiJquery from 'chai-jquery';

global.document = jsdom.jsdom('<!doctype html><html><body></body><script></script></html>');
global.window = global.document.defaultView;

const $ = jquery(global.window);

function renderComponent(ComponentClass, props, children) {
  
  const component =  ((children) => {
    
    if(children){ 
      return <ComponentClass {...props}>{children}</ComponentClass>;
    }
      return <ComponentClass {...props}/>;
    
  })(children);
  
  const componentInstance = TestUtils.renderIntoDocument(component);
  
  return $(ReactDom.findDOMNode(componentInstance));
}


$.fn.simulate = function (eventName, value) {
  
  if(value) this.val(value);
  TestUtils.Simulate[eventName](this[0]);
  
};


chaiJquery(chai, chai.util, $);

export {renderComponent, expect};