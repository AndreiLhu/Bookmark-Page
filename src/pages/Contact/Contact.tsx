import React from 'react';
import './Contact.css';
const Contact: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [error, setError] = React.useState<string>();
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const input = email.trim();

    if (input && input.length && emailRegex.test(input)) {
      setError(undefined);
      alert('Thank you!');
    } else {
      setError('Enter your email!');
    }
  };
  return (
    <div id="contact" className="main-contact-container">
      <div className="contact-text-div">
        <p className="contact-subtitle">35,000+ already joined</p>
        <h2 className="title contact-title">
          Stay up-to-date with what we're doing
        </h2>
      </div>
      <div className="input-contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className={`email-wrapper ${error ? 'error' : ''}`}>
            <input
              type="email"
              className={`input-contact ${error ? 'error' : ''}`}
              placeholder="Enter your email adress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div
              className="error-message"
              style={{ display: error ? 'block' : 'none' }}
            >
              {error}
            </div>

            <button className="button-contact">Contact Us</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
