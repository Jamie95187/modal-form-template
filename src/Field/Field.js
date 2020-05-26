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
    predicted: '',
    onChange: () => ''
  };

  // Updates the changes made in the input to be displayed in the DOM
  onChange = event => {
    const { id } = this.props;
    const value = event.target.value;
    this.setState({ value, error: '' });
    return this.props.onChange(id, value);
  }

  constructor(props) {

    super(props);

    // When the 'locked' prop is set to true, we'd like the input only to become focussed
    // when the 'focussed' prop is set to true.

    this.state = {
      focussed: (props.locked && props.focussed) || false,
      value: props.value || '',
      error: props.error || '',
      label: props.label || ''
    };
  }

  render() {
    const { focussed, value, error, label } = this.state;
    const { id, type, locked } = this.props;

    return (
      <div className="field">
        <input
          id={id}
          type="text"
          value={value}
          placeholder={label}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Field;
