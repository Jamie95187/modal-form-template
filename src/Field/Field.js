import React from 'react';
import PropTypes from 'prop-types';
import './text-input-style.css';

class Field extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    locked: PropTypes.bool,
    focussed: PropTypes.bool,
    value: PropTypes.string,
    error: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    locked: false,
    focussed: false,
    value: '',
    error: '',
    label: '',
    onChange: () => ''
  };

  render() {

  }

}

export default Field;
