import React from 'react';

const Newsletter = () => {
  return (
    <form className="form">
      <h3 style={{ textAlign: 'center' }}>Our Newsletter</h3>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>

        <input
          type="text"
          name="name"
          className="form-input"
          id="name"
          defaultValue="sagar"
        />
      </div>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          last name
        </label>

        <input
          type="text"
          name="lastName"
          className="form-input"
          id="lastName"
          defaultValue="kumar"
        />
      </div>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          email
        </label>

        <input
          type="email"
          name="email"
          className="form-input"
          id="email"
          defaultValue="test@gmail.com"
        />
      </div>

      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: '0.5rem' }}
      >
        Submit
      </button>
    </form>
  );
};

export default Newsletter;
