import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
  };
  static defaultProps = {
    text: '按钮',
  };

  render () {
    const {text} = this.props;
    return (
      <button>
        {text}
      </button>
    );
  }
}
