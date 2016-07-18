import React, { PropTypes, Component } from 'react';

class InstagramLogin extends Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    clientId: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    scope: PropTypes.string,
    cssClass: PropTypes.string,
    children: React.PropTypes.node,
  };

  static defaultProps = {
    buttonText: 'Login with Instagram',
    scope: 'basic',
  };

  constructor(props) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  componentDidMount() {
    if (window.location.search.includes('code')) {
      this.props.callback(getQueryVariable('code'));
    }
  }

  onBtnClick() {
    const { clientId, scope } = this.props;
    const redirectUri = window.location.href;
    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
  }

  render() {
    const style = {
      display: 'inline-block',
      background: '#d14836',
      color: '#fff',
      width: 190,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 2,
      border: '1px solid transparent',
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
    };
    const { cssClass, buttonText, children } = this.props;
    return (
      <button
        className={ cssClass }
        onClick={ this.onBtnClick }
        style={ cssClass ? {} : style }
      >
        { children ? children : buttonText }
      </button>
    );
  }
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return (false);
}

export default InstagramLogin;
