import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Users, AlertTriangle, Eye, Camera, Zap } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              <span className="text-gradient">Smart Safety</span> Monitoring System
            </h1>
            <h2 className="hero-subtitle">
              For Long-Distance Passenger Transportation in Sri Lanka
            </h2>
            <p className="hero-description">
              A unified AI-based platform that combines driver fatigue detection, route violation monitoring, emergency crash response, and passenger overcrowding management into one system.
              The system improves road safety and public transport management by using AI to monitor drivers, vehicles, and passengers in real time, including emergency crash detection for quick accident response.
            </p>
            <div className="hero-cta">
              <a href="#abstract" className="btn btn-primary">Read Abstract</a>
              <a href="/domain" className="btn btn-outline">Explore Domain</a>
            </div>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-panel image-wrapper">
              <img src="/hero_bus_safety.png" alt="SSMS AI Dashboard" className="hero-image" />
              <div className="glow-effect"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Abstract Section */}
      <section id="abstract" className="section abstract-section">
        <div className="container">
          <motion.div
            className="glass-card abstract-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="section-title">Abstract</h3>
            <p className="abstract-text">
              Road accidents involving long-distance buses remain a major public safety concern in Sri Lanka. Existing monitoring systems address discrete safety issues, but they don't offer comprehensive, affordable solutions. The Smart Safety Monitoring System (SSMS), a unified AI-driven platform that integrates four safety dimensions: driver fatigue detection, route and traffic violation monitoring, emergency crash response, and passenger overcrowding management is presented. The system makes use of GPS geofencing, cloud-based AI models, ESP32 microcontrollers, IMU-based crash detection, infrared passenger counting, and real-time notifications. 94.2% fatigue detection accuracy, 96.3% route violation precision, 96.7% crash detection accuracy with 12.3s latency, and 96.8% passenger counting accuracy were demonstrated.
            </p>
            <div className="keywords">
              <span className="keyword-label">Keywords:</span>
              <span className="keyword">Intelligent Transportation Systems</span>
              <span className="keyword">Driver Fatigue Detection</span>
              <span className="keyword">IoT</span>
              <span className="keyword">Sensor Fusion</span>
              <span className="keyword">Emergency Response</span>
              <span className="keyword">Overcrowding Detection</span>
              <span className="keyword">Road-rule Violation Detection</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Components Section */}
      <section className="section components-section">
        <div className="container">
          <h3 className="section-title">Core System Components</h3>
          
          <div className="components-layout">
            <motion.div 
              className="components-graphic"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-panel graphic-wrapper">
                <img src="/ssms_components_diagram.png" alt="SSMS Core Components Diagram" className="main-graphic" />
                <div className="glow-effect"></div>
              </div>
            </motion.div>

            <div className="components-intro-grid">
              {[
                { 
                  title: 'Driver Fatigue Monitoring', 
                  desc: 'Uses AI-based eye-tracking to detect signs of drowsiness and alerts the driver instantly.',
                  icon: Eye,
                  color: '#10b981'
                },
                { 
                  title: 'Road Rule Violation Detection', 
                  desc: 'Real-time monitoring of speeding, red-lights, and double-line crossings using YOLOv8.',
                  icon: Camera,
                  color: '#f59e0b'
                },
                { 
                  title: 'Overcrowding & Rollover', 
                  desc: 'Predicts dynamic rollover risk by analyzing real-time passenger count and bus weight distribution.',
                  icon: Users,
                  color: '#3b82f6'
                },
                { 
                  title: 'Emergency Crash Response', 
                  desc: 'Automated collision detection using IMU sensors with instant emergency notification (SMS/Voice).',
                  icon: Zap,
                  color: '#ef4444'
                },
              ].map((comp, index) => (
                <motion.div
                  key={index}
                  className="component-intro-card glass-card"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="comp-icon-box" style={{ color: comp.color, borderColor: `${comp.color}44` }}>
                    <comp.icon size={24} />
                  </div>
                  <div className="comp-info">
                    <h4>{comp.title}</h4>
                    <p>{comp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
