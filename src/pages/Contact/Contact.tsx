import './Contact.css';
const Contact: React.FC = () => {
  return (
    <div id="contact" className="mainContactContainer">
      <div className="contactTextDiv">
        <p>35.000+ ALREADY JOINED</p>
        <h2>Stay up-to-date with what we're doing</h2>
        <div className="inputContactContainer">
          <input
            type="text"
            placeholder="Enter your email adress"
            className="inputContact"
          />
          <button type="button" className="buttonContact">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
