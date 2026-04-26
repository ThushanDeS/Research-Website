import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, CheckCircle2, UserCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      setSubmitMessage({
        type: 'error',
        text: 'Email is not configured yet. Please set EmailJS environment variables.'
      });
      return;
    }

    setIsSending(true);
    setSubmitMessage({ type: '', text: '' });

    try {
      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: selectedMember.name,
          to_email: selectedMember.email,
          recipient_salutation: selectedMember.salutation
        },
        emailJsPublicKey
      );

      setSubmitMessage({
        type: 'success',
        text: `Email sent successfully to ${selectedMember.name}.`
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Failed to send email. Please try again in a moment.'
      });
      console.error('EmailJS send failed:', error);
    } finally {
      setIsSending(false);
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="form-input"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Inquiry about SSMS"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder={`Dear ${selectedMember.salutation}, \nHow can we help you?`}
                  className="form-input"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              {submitMessage.text ? (
                <p className={`submit-message ${submitMessage.type === 'success' ? 'success' : 'error'}`}>
                  {submitMessage.text}
                </p>
              ) : null}

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
