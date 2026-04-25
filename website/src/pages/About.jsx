import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import './About.css';

const About = () => {
  const team = [
    {
      name: 'Dias D.G.M',
      role: 'Department of Software Engineering, SLIIT',
      email: 'matheeshadias@gmail.com',
      phone: '+94 74 095 6299',
      achievements: 'Overcrowding Management and Rollover Prediction',
      initials: 'MD',
      image: '/images/dias.jpeg'
    },
    {
      name: 'De Silva U.M.T.K',
      role: 'Department of Software Engineering, SLIIT',
      email: 'thushankanchana21@gmail.com',
      phone: '+94 70 220 1035',
      achievements: 'Route and Road Violation Detection',
      initials: 'UD',
      image: '/images/desilva.jpeg'
    },
    {
      name: 'Sadan M.D.T',
      role: 'Department of Software Engineering, SLIIT',
      email: 'sadantharu@gmail.com',
      phone: '+94 70 556 9962',
      achievements: 'Driver Fatigue Detection',
      initials: 'TS',
      image: '/images/sadan.jpeg'
    },
    {
      name: 'Gamlath G.R.A.A',
      role: 'Department of Software Engineering, SLIIT',
      email: 'grawa202@gmail.com',
      phone: '+94 76 545 9023',
      achievements: 'Emergency Crash Response',
      initials: 'AG',
      image: '/images/gamlath.jpeg'
    }
  ];

  return (
    <div className="section about-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="section-title">About <span className="text-gradient">Us</span></h1>
          <p className="section-subtitle">Meet the dedicated team behind the Smart Safety Monitoring System.</p>
        </motion.div>

        <div className="about-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="glass-card member-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="member-photo-wrapper">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="member-photo" />
                ) : (
                  <div className="member-photo-placeholder">
                    {member.initials}
                  </div>
                )}
                <div className="photo-ring"></div>
              </div>

              <h2 className="member-name">{member.name}</h2>
              <p className="member-role">{member.role}</p>

              <div className="member-details">
                <p><strong>Focus Area:</strong> {member.achievements}</p>
              </div>

              <div className="member-contacts">
                <div className="contact-wrapper">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <span className="contact-info">{member.email}</span>
                </div>
                <div className="contact-wrapper">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <span className="contact-info">{member.phone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
