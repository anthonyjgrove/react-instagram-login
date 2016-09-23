import React, { PropTypes, Component } from 'react';

function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  const code = vars.map(i => {
    const pair = i.split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  })
  .filter(i => {
    if (i) return i;
  });
  return code[0];
}

class InstagramLogin extends Component {
  static propTypes = {
    onSuccess: PropTypes.func.isRequired,
    onFailure: PropTypes.func.isRequired,
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
      this.props.onSuccess(getQueryVariable('code'));
    } else if (window.location.search.includes('error')) {
      this.props.onFailure({
        error: getQueryVariable('error'),
        error_reason: getQueryVariable('error_reason'),
        error_description: getQueryVariable('error_description'),
      });
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
      background: 'linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)',
      color: '#fff',
      width: 200,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 2,
      border: '1px solid transparent',
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: '"proxima-nova", "Helvetica Neue", Arial, Helvetica, sans-serif',
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

export default InstagramLogin;
