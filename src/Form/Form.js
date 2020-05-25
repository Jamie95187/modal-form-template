import React from 'react';

const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email"
          placeholder="name@example.com"
        />
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary"" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
