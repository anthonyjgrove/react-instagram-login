import { renderComponent, expect } from './test_helper'
import InstagramLogin from '../src'

describe('Instagram Login', () => {
  const defaultText = 'Login with Instagram'
  let component
  let propsObj

  describe('With default props', () => {
    beforeEach(() => {
      propsObj = {
        callback(response) {},
        clientId: '5fd2f11482844c5eba963747a5f34556'
      }
      component = renderComponent(InstagramLogin, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays correct button text', () => {
      expect(component).to.have.text(defaultText)
    })

    it('does not have a class attr', () => {
      expect(component).to.not.have.attr('class')
    })

    it('has inline styles', () => {
      expect(component).to.have.attr('style')
    })
  })

  describe('With custom text and default props', () => {
    const buttonText = 'buttonText'

    beforeEach(() => {
      propsObj = {
        callback(response) {},
        clientId: '5fd2f11482844c5eba963747a5f34556',
        buttonText
      }
      component = renderComponent(InstagramLogin, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays correct button text', () => {
      expect(component).to.have.text(buttonText)
    })

    it('does not have a class attr', () => {
      expect(component).to.not.have.attr('class')
    })

    it('has inline styles', () => {
      expect(component).to.have.attr('style')
    })
  })

  describe('With custom class and default props', () => {
    let cssClass = 'test-class'

    beforeEach(() => {
      propsObj = {
        callback(response) {},
        clientId: '5fd2f11482844c5eba963747a5f34556',
        cssClass
      }
      component = renderComponent(InstagramLogin, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays correct button text', () => {
      expect(component).to.have.text(defaultText)
    })

    it('has a class attr with custom class', () => {
      expect(component).to.have.attr('class', cssClass)
    })

    it('does not have inline styles', () => {
      expect(component).to.not.have.attr('style')
    })
  })

  describe('With children, custom text, and default props', () => {
    const children = 'test'
    const buttonText = 'buttonText'

    beforeEach(() => {
      propsObj = {
        callback(response) {},
        clientId: '5fd2f11482844c5eba963747a5f34556',
        buttonText
      }
      component = renderComponent(InstagramLogin, propsObj, children)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays children text', () => {
      expect(component).to.have.text(children)
    })

    it('does not display default text', () => {
      expect(component).to.not.have.text(defaultText)
    })

    it('does not display custom text', () => {
      expect(component).to.not.have.text(buttonText)
    })

    it('does not have a class attr', () => {
      expect(component).to.not.have.attr('class')
    })

    it('has inline styles', () => {
      expect(component).to.have.attr('style')
    })
  })
})
