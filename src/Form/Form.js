import React from 'react';
import Field from '../Field/Field';
import './Form.css';

const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <Field
          id={1}
          label="Name"
          predicted="test1Name"
          locked={false}
          active={false}
        />
        <Field
          id={2}
          label="Email"
          predicted="test1@example.com"
          locked={false}
          active={false}
        />
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
