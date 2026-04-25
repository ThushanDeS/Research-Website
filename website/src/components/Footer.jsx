import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Smart Safety Monitoring System. All rights reserved.</p>
        <p className="affiliation">
          Department of Software Engineering, Sri Lanka Institute of Information Technology
        </p>
      </div>
    </footer>
  );
};

export default Footer;
