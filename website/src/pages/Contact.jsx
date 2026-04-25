import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, CheckCircle2, UserCircle } from 'lucide-react';
import './Contact.css';

const team = [
  {
    name: 'General / All Team',
    email: 'thushankanchana21@gmail.com',
    salutation: 'SSMS Team'
  },
  {
    name: 'Dias D.G.M',
    email: 'matheeshadias@gmail.com',
    salutation: 'Mr. Dias'
  },
  {
    name: 'De Silva U.M.T.K',
    email: 'thushankanchana21@gmail.com',
    salutation: 'Mr. De Silva'
  },
  {
    name: 'Gamlath G.R.A.A',
    email: 'grawa202@gmail.com',
    salutation: 'Mr. Gamlath'
  },
  {
    name: 'Sadan M.D.T',
    email: 'sadantharu@gmail.com',
    salutation: 'Mr. Sadan'
  }
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [selectedMember, setSelectedMember] = useState(team[0]);
  const [templateText, setTemplateText] = useState('');

  // Update template whenever selected member changes
  useEffect(() => {
    setTemplateText(`Subject: Inquiry about Smart Safety Monitoring System\n\nDear ${selectedMember.salutation},\n\n[Your message here]\n\nName:\nAffiliation:\nContact:`);
  }, [selectedMember]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(templateText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMemberChange = (e) => {
    const member = team.find(m => m.name === e.target.value);
    if (member) {
      setSelectedMember(member);
    }
  };

  return (
    <div className="section contact-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="section-title">Contact <span className="text-gradient">Us</span></h1>
          <p className="section-subtitle">Have questions about the Smart Safety Monitoring System? Get in touch with us.</p>
        </motion.div>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="info-card glass-card">
              <h3>Contact Details</h3>

              <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                <UserCircle className="info-icon" />
                <div style={{ flexGrow: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Select recipient</label>
                  <select
                    className="form-select"
                    value={selectedMember.name}
                    onChange={handleMemberChange}
                    style={{ padding: '0.5rem', width: '100%' }}
                  >
                    {team.map(m => (
                      <option key={m.name} value={m.name}>{m.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Email</label>
                  <a href={`mailto:${selectedMember.email}`}>{selectedMember.email}</a>
                </div>
              </div>

              <div className="info-item" style={{ marginTop: '1.5rem' }}>
                <MapPin className="info-icon" />
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Location</label>
                  <p>Department of Software Engineering,<br />Sri Lanka Institute of Information Technology, SLIIT<br />Malabe, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="template-card glass-card">
              <div className="template-header">
                <h3>Email Template</h3>
                <button
                  className={`copy-btn ${copied ? 'copied' : ''}`}
                  onClick={copyToClipboard}
                >
                  {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <textarea
                className="template-content edit-template form-input"
                value={templateText}
                onChange={(e) => setTemplateText(e.target.value)}
                rows="8"
                style={{ width: '100%', resize: 'vertical', minHeight: '200px' }}
              />
              <p className="template-hint">Edit this template directly, then copy it to your email client.</p>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper glass-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Send a Message to {selectedMember.name.split(' ')[0]}</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="john@example.com" className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Inquiry about SSMS" className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder={`Dear ${selectedMember.salutation}, \nHow can we help you?`} className="form-input" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
