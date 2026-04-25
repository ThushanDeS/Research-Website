import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, AlertCircle, Target, GitMerge, Cpu, AlertTriangle, ChevronRight, Server, Database, Activity, Eye, Users, Camera, Zap } from 'lucide-react';
import './Domain.css';

const Domain = () => {
  const [activeSection, setActiveSection] = useState('literature');

  const navItems = [
    { id: 'literature', label: 'Literature Survey', icon: BookOpen },
    { id: 'gap', label: 'Research Gap', icon: AlertCircle },
    { id: 'problem', label: 'Research Problem', icon: AlertTriangle },
    { id: 'objectives', label: 'Research Objectives', icon: Target },
    { id: 'methodology', label: 'Methodology', icon: GitMerge },
    { id: 'technologies', label: 'Technologies Used', icon: Cpu },
  ];

  // Simple scrollspy to highlight active section in sidebar
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="domain-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center page-header"
        >
          <h1 className="section-title">Project <span className="text-gradient">Domain</span></h1>
          <p className="section-subtitle">Comprehensive breakdown of the research domain, literature, gaps, and methodologies.</p>
        </motion.div>

        <div className="domain-layout">
          {/* Sticky Sidebar Navigation */}
          <aside className="domain-sidebar">
            <div className="glass-card sidebar-nav">
              <h3 className="sidebar-title">Contents</h3>
              <ul className="nav-list">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      <item.icon size={18} className="nav-icon" />
                      <span>{item.label}</span>
                      {activeSection === item.id && <ChevronRight size={16} className="active-indicator" />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="domain-content">

            {/* Literature Survey Section */}
            <section id="literature" className="domain-section pt-0">
              <motion.div className="section-header" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <BookOpen className="section-icon" />
                <h2>Literature Survey</h2>
              </motion.div>
              <p className="section-intro">Research on smart bus safety systems spans four major areas. Below is a summary of key studies organized by component.</p>

              <div className="lit-survey-blocks">
                <div className="content-card glass-card">
                  <h3>1. Driver Monitoring and Fatigue Detection</h3>
                  <div className="table-responsive">
                    <table className="modern-table">
                      <thead>
                        <tr><th>Study</th><th>Methodology</th><th>Key Finding</th><th>Limitation</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Sahayadhas et al.</td><td>Physiological sensors (EEG, ECG)</td><td>High accuracy in detecting drowsiness</td><td>Intrusive sensors – impractical for daily bus use</td></tr>
                        <tr><td>Zhang et al.</td><td>CNN-based facial landmark detection</td><td>&gt;90% accuracy using eye blink analysis</td><td>Requires high-res cameras &amp; high processing power</td></tr>
                        <tr><td>Zhang et al. (MobileNet)</td><td>Optimized MobileNet architecture</td><td>&gt;85% accuracy on embedded devices</td><td>Limited dataset diversity</td></tr>
                        <tr><td>Fernando &amp; Weerasinghe (Sri Lanka)</td><td>Camera-based feasibility study</td><td>Preliminary validation</td><td>No production deployment on public buses</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="conclusion-text"><strong>Conclusion:</strong> Non-intrusive, lightweight AI models are needed for practical deployment in Sri Lankan buses.</p>
                </div>

                <div className="content-card glass-card">
                  <h3>2. Route and Road Violation Detection</h3>
                  <div className="table-responsive">
                    <table className="modern-table">
                      <thead>
                        <tr><th>Study</th><th>Methodology</th><th>Key Finding</th><th>Limitation</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Jahangiri et al.</td><td>RFID + image processing</td><td>Effective red light detection</td><td>Requires universal RFID tagging – expensive to scale</td></tr>
                        <tr><td>Thiruvikkraman et al.</td><td>Faster R-CNN + Inception V2</td><td>Simultaneous traffic light &amp; sign detection</td><td>Anchor box constraints for closely spaced objects</td></tr>
                        <tr><td>Sushmitha et al.</td><td>Camera + database</td><td>Multi-violation detection</td><td>Hardware limits prevented true real-time operation</td></tr>
                        <tr><td>Sezan et al. (Bangladesh)</td><td>CNN + near-infrared cameras</td><td>Effective for developing countries</td><td>Focused on passengers, not road violations</td></tr>
                        <tr><td>Zhao et al.</td><td>Background subtraction + CNN</td><td>92.87% accuracy for helmet detection</td><td>Focused only on helmets</td></tr>
                        <tr><td>Rahman et al.</td><td>YOLO + centroid tracking</td><td>Near 100% accuracy for wrong-way detection</td><td>Single violation type only</td></tr>
                        <tr><td>Biswas et al.</td><td>Review of ML approaches</td><td>Identified lane monitoring as underexplored</td><td>No implementation</td></tr>
                        <tr><td>Monica et al.</td><td>IR sensors at fixed points</td><td>Over-speeding detection</td><td>Limited coverage – only fixed highway points</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="conclusion-text"><strong>Conclusion:</strong> A unified system using YOLOv8 for multiple concurrent violations (speeding, red light, double line) is missing and needed.</p>
                </div>

                <div className="content-card glass-card">
                  <h3>3. Overcrowding Management and Rollover Prediction</h3>
                  <div className="table-responsive">
                    <table className="modern-table">
                      <thead>
                        <tr><th>Study</th><th>Methodology</th><th>Key Finding</th><th>Limitation</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Chen et al.</td><td>Comprehensive review of passenger counting</td><td>Identified best practices</td><td>No implementation</td></tr>
                        <tr><td>Tanaka &amp; Suzuki</td><td>IR sensor benchmarking</td><td>&gt;95% accuracy in controlled environments</td><td>Not tested on real bus conditions</td></tr>
                        <tr><td>Kumar et al.</td><td>ESP32 + Firebase</td><td>IoT-based real-time passenger monitoring</td><td>No footboard detection</td></tr>
                        <tr><td>Patel &amp; Shah</td><td>Ultrasonic sensors</td><td>Footboard hazard detection</td><td>No centralized monitoring dashboard</td></tr>
                        <tr><td>NHTSA (USA)</td><td>Static Stability Factor (SSF) calculation</td><td>Fundamental rollover metric</td><td>Static only – no real-time passenger weight</td></tr>
                        <tr><td>Rajamani et al.</td><td>Physics-based vehicle dynamics</td><td>Predicts rollover before it occurs</td><td>Requires vehicle parameters – no integration with IoT</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="conclusion-text"><strong>Conclusion:</strong> No existing system combines real-time passenger counting with dynamic rollover prediction using live IoT data and road geometry.</p>
                </div>

                <div className="content-card glass-card">
                  <h3>4. Emergency Crash Response Systems</h3>
                  <div className="table-responsive">
                    <table className="modern-table">
                      <thead>
                        <tr><th>Study</th><th>Methodology</th><th>Key Finding</th><th>Limitation</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>White et al.</td><td>Threshold-based detection</td><td>Simple implementation</td><td>High false positive rate (hard braking, potholes)</td></tr>
                        <tr><td>Lee et al.</td><td>Sensor fusion (accelerometer + gyroscope)</td><td>Improved accuracy</td><td>Limited severity classification</td></tr>
                        <tr><td>Kumar et al.</td><td>CNN on vehicle motion data</td><td>Crash severity classification</td><td>Requires extensive training data</td></tr>
                        <tr><td>European Commission</td><td>eCall system</td><td>Automatic crash notification</td><td>New vehicles only – expensive</td></tr>
                        <tr><td>General Motors</td><td>OnStar platform</td><td>Direct connection to emergency operators</td><td>Subscription-based, US-focused</td></tr>
                        <tr><td>India – AIS-140 standard</td><td>GPS + emergency buttons</td><td>Mandated for public transport</td><td>Manual trigger only – not automated</td></tr>
                        <tr><td>Sri Lanka – Suwa Seriya</td><td>Ambulance service</td><td>Improved emergency infrastructure</td><td>Accident reporting remains manual</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="conclusion-text"><strong>Conclusion:</strong> An automated, low-cost, retrofittable crash detection system with multi-channel alerting (SMS, voice, dispatch) is needed for Sri Lanka.</p>
                </div>
              </div>
            </section>

            <hr className="section-divider" />

            {/* Research Gap Section */}
            <section id="gap" className="domain-section">
              <motion.div className="section-header" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <AlertCircle className="section-icon text-warning" />
                <h2>Research Gap</h2>
              </motion.div>
              <p className="section-intro">Based on the literature survey, the following gaps remain unaddressed across all four safety components:</p>

              <div className="gap-grid">
                <div className="gap-card">
                  <h4>1. Driver Monitoring Gap</h4>
                  <ul>
                    <li>Existing fatigue detection systems are either intrusive (EEG/ECG sensors) or require expensive high-resolution cameras and powerful GPUs.</li>
                    <li>No production-ready, non-intrusive fatigue detection system has been deployed on public buses in Sri Lanka.</li>
                    <li>Lightweight models like MobileNet have been tested only on limited datasets, not on Sri Lankan driver behaviors and road conditions.</li>
                    <li>Existing fatigue detection systems are standalone units with no integration into fleet dashboards, IoT alerts, or cloud logging.</li>
                    <li>High-accuracy models require powerful GPUs – no lightweight, edge-optimized model exists for affordable hardware like Jetson Nano.</li>
                  </ul>
                </div>
                <div className="gap-card">
                  <h4>2. Route and Road Violation Gap</h4>
                  <ul>
                    <li>Current systems rely mostly on manual checkpoints rather than real-time automated detection, capturing only a tiny fraction of actual violations on long-distance routes.</li>
                    <li>No unified system exists that simultaneously detects speeding, red light violations, and double line crossings in real time.</li>
                    <li>Most solutions require expensive infrastructure (RFID tags, fixed sensors) that is not scalable for developing countries.</li>
                    <li>Lane discipline (double line crossing) remains an underexplored area with very few research implementations.</li>
                    <li>Existing AI models are trained on foreign road conditions and traffic signs (USA, Europe, China), with no dedicated system for Sri Lankan speed limits (40kmh, 50kmh, 60kmh, 70kmh) and local driving behaviors.</li>
                    <li>Most high-accuracy models require powerful GPUs and cannot run on affordable edge devices like NVIDIA Jetson Nano – a lightweight, edge-optimized solution is needed.</li>
                  </ul>
                </div>
                <div className="gap-card">
                  <h4>3. Overcrowding and Rollover Gap</h4>
                  <ul>
                    <li>Existing passenger counting systems focus only on revenue protection and route optimization, not on vehicle safety.</li>
                    <li>No system uses real-time passenger count data to dynamically calculate rollover risk before entering curves.</li>
                    <li>Rollover prediction models assume static vehicle mass and do not account for dynamic changes caused by standing passengers.</li>
                    <li>Physics-based stability calculations have never been integrated with live IoT sensor data from public buses.</li>
                  </ul>
                </div>
                <div className="gap-card">
                  <h4>4. Emergency Crash Response Gap</h4>
                  <ul>
                    <li>Current crash detection systems either have high false positive rates (threshold-based) or require extensive training data (ML-based).</li>
                    <li>Automated crash notification systems (eCall, OnStar) are designed for new vehicles and are expensive or subscription-based.</li>
                    <li>In Sri Lanka, accident reporting still relies on manual phone calls, delaying emergency response during the critical "golden hour."</li>
                    <li>No low-cost, retrofittable crash detection system exists for older bus fleets common in developing countries.</li>
                  </ul>
                </div>
              </div>

              <div className="integration-gap glass-card">
                <h4>Overall Integration Gap</h4>
                <ul>
                  <li>No single platform integrates all four safety components (fatigue detection, violation detection, overcrowding management, crash response) into one unified system.</li>
                  <li>Most solutions are designed for new vehicles and cannot be retrofitted into existing bus fleets.</li>
                  <li>AI models are trained on foreign road conditions, not on Sri Lankan traffic signs, driver behavior, or road geometry.</li>
                </ul>
              </div>
            </section>

            <hr className="section-divider" />

            {/* Research Problem Section */}
            <section id="problem" className="domain-section">
              <motion.div className="section-header" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <AlertTriangle className="section-icon text-danger" />
                <h2>Research Problem</h2>
              </motion.div>
              <div className="problem-card glass-card">
                <p className="problem-intro">Road accidents involving long-distance buses remain a major public safety concern in Sri Lanka. The following problems have been identified:</p>
                <ul className="problem-list">
                  <li>In 2024 alone, 2,541 road fatalities were reported from 2,231 fatal incidents, with a traffic fatality rate of 11.5 per 100,000 inhabitants – higher than the Asia-Pacific average.</li>
                  <li>Bus accidents contributed significantly, with 198 fatalities documented in recent years.</li>
                  <li>The Gerandi Ella bus catastrophe in May 2025, in which an overcrowded bus carrying over 80 passengers slid off a cliff and killed 23 people, highlights the critical need for real-time safety monitoring.</li>
                  <li>Driver fatigue is a major cause of accidents on long-distance routes, yet less than 8% of violations are detected through manual inspections.</li>
                  <li>Traffic violations such as speeding, red light running, and double line crossing are common causes of bus accidents, but traditional manual monitoring is reactive and ineffective.</li>
                  <li>Overcrowding remains a serious problem, with private buses frequently operating at up to 150% of seating capacity, raising the center of gravity and increasing rollover risk, especially on winding mountain roads.</li>
                  <li>Current accident reporting relies on manual communication (calls, messages), resulting in delays within the essential "golden hour" of medical intervention.</li>
                  <li>Road accidents cost Sri Lanka approximately 3-5% of its GDP – nearly $3 billion USD in 2021.</li>
                  <li>While the government has shown commitment through measures such as planned AI monitoring and mandated seat belts, existing technologies operate autonomously and lack integration across safety aspects.</li>
                  <li>Most existing safety systems are designed for new, modern vehicles and cannot be retrofitted into older bus fleets that are common in Sri Lanka.</li>
                  <li>There is no affordable, comprehensive, locally-tailored intelligent transportation solution available for Sri Lanka and other developing countries.</li>
                </ul>
              </div>
            </section>

            <hr className="section-divider" />

            {/* Research Objectives Section */}
            <section id="objectives" className="domain-section">
              <motion.div className="section-header" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Target className="section-icon text-success" />
                <h2>Research Objectives</h2>
              </motion.div>
              <div className="table-responsive glass-card no-padding">
                <table className="modern-table objectives-table">
                  <thead>
                    <tr>
                      <th style={{ width: '20%' }}>Objective</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><span className="objective-badge">Objective 1</span></td><td>Develop a non-intrusive AI-based driver fatigue detection system using lightweight models (MobileNet) with 90%+ accuracy for Sri Lankan road conditions.</td></tr>
                    <tr><td><span className="objective-badge">Objective 2</span></td><td>Implement real-time route and traffic violation detection (speeding, red light, double line) using YOLOv8 at 14+ FPS on embedded hardware.</td></tr>
                    <tr><td><span className="objective-badge">Objective 3</span></td><td>Create an overcrowding management system with IR sensor counting (95%+ accuracy) and a physics-based rollover prediction algorithm using real-time passenger data.</td></tr>
                    <tr><td><span className="objective-badge">Objective 4</span></td><td>Build an automated emergency crash response system using IMU sensors and CNN classification that notifies emergency services within 15 seconds.</td></tr>
                    <tr><td><span className="objective-badge">Objective 5</span></td><td>Integrate all four components into a unified, low-cost, cloud-based platform with web and mobile dashboards, designed for retrofitting into existing Sri Lankan buses.</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="section-divider" />

            {/* Methodology Section */}
            <section id="methodology" className="domain-section">
              <motion.div className="section-header" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <GitMerge className="section-icon text-accent" />
                <h2>Methodology</h2>
              </motion.div>

              <div className="architecture-diagram glass-card mt-4 mb-5">
                <div className="native-architecture">

                  {/* Level 1: Sensors */}
                  <motion.div className="arch-node" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="node-box accent-yellow">
                      <Cpu size={28} className="text-warning" />
                      <span className="node-title">ESP32 IoT Sensors</span>
                      <small>Gyroscope, Accelerometer, GPS, Camera</small>
                    </div>
                  </motion.div>

                  <div className="arch-connector"></div>

                  {/* Level 2: Backend */}
                  <motion.div className="arch-node" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                    <div className="node-box accent-green">
                      <Server size={28} className="text-success" />
                      <span className="node-title">Node.js Backend</span>
                      <small>Central Data Broker</small>
                    </div>
                  </motion.div>

                  <div className="arch-connector"></div>
                  <div className="branching-line"></div>

                  {/* Level 3: Components Grid */}
                  <div className="arch-level-3">
                    {/* Component 1 */}
                    <motion.div className="comp-column" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                      <div className="node-box comp-header accent-blue">
                        <Users size={20} />
                        <span>Comp 1: Overcrowding</span>
                      </div>
                      <div className="node-box sub-node">On-Bus Hardware & ESP32</div>
                      <div className="node-box sub-node">Conductor's Phone App</div>
                      <div className="arch-connector mini"></div>
                      <div className="node-box sub-node highlight">Python ML (Random Forest)</div>
                    </motion.div>

                    {/* Component 2 */}
                    <motion.div className="comp-column" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                      <div className="node-box comp-header accent-purple">
                        <Eye size={20} />
                        <span>Comp 2: Driver Fatigue</span>
                      </div>
                      <div className="node-box sub-node">Driver Face Verification</div>
                      <div className="node-box sub-node">Fatigue Detect (Dlib/EAR)</div>
                      <div className="arch-connector mini"></div>
                      <div className="node-box sub-node highlight text-danger">Local GPIO Buzzer Alarm</div>
                    </motion.div>

                    {/* Component 3 */}
                    <motion.div className="comp-column" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                      <div className="node-box comp-header accent-warning">
                        <Camera size={20} />
                        <span>Comp 3: Violations</span>
                      </div>
                      <div className="node-box sub-node" style={{ padding: '0.6rem', fontSize: '0.8rem' }}>Live Video ➔ YOLO Models</div>
                      <div className="node-box sub-node" style={{ padding: '0.6rem', fontSize: '0.8rem' }}>GPS Speed & Route Logic</div>
                      <div className="arch-connector mini" style={{ height: '10px' }}></div>
                      <div className="node-box sub-node highlight text-danger" style={{ padding: '0.6rem', fontSize: '0.8rem' }}>Driver Buzzer Alert</div>
                      <div className="node-box sub-node highlight" style={{ padding: '0.6rem', fontSize: '0.8rem' }}>Dashboard Reporting</div>
                    </motion.div>

                    {/* Component 4 */}
                    <motion.div className="comp-column" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                      <div className="node-box comp-header accent-danger">
                        <Activity size={20} />
                        <span>Comp 4: Crash Detect</span>
                      </div>
                      <div className="node-box sub-node">Sliding Window (100)</div>
                      <div className="node-box sub-node">Autoencoder Model</div>
                      <div className="arch-connector mini"></div>
                      <div className="node-box sub-node highlight text-danger">Validate & Send Messages</div>
                    </motion.div>
                  </div>

                  <div className="branching-line bottom"></div>
                  <div className="arch-connector"></div>

                  {/* Level 4: Database */}
                  <motion.div className="arch-node" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                    <div className="node-box accent-green">
                      <Database size={28} className="text-success" />
                      <span className="node-title">MongoDB</span>
                      <small>Centralized Data Logs</small>
                    </div>
                  </motion.div>
                </div>

                <div className="architecture-desc mt-5">
                  <h4>System Architecture Overview</h4>
                  <p>The SSMS architecture is highly integrated, connecting edge IoT devices with a central backend to manage the four core safety components simultaneously:</p>
                  <ul>
                    <li><strong>Edge IoT Sensors:</strong> An ESP32 microcontroller collects continuous data from GPS, Accelerometers, Gyroscopes, Temperature, and Light sensors, transmitting it directly to the Node.js backend.</li>
                    <li><strong>Component 1 (Rollover Prediction):</strong> On-Bus Hardware and the Conductor's Phone feed real-time passenger and GPS data into a Python ML Service. A Random Forest model predicts overcrowding and rollover risk with 98.78% accuracy, displaying dynamic alerts on the Web Dashboard.</li>
                    <li><strong>Component 2 (Driver Fatigue):</strong> Cameras capture the driver's face, utilizing Dlib models to detect drowsiness, yawning, and sleepiness based on EAR/MAR logic. If fatigue is detected, a local GPIO buzzer alarm is triggered instantly to alert the driver.</li>
                    <li><strong>Component 3 (Rule Violations):</strong> YOLO models analyze camera feeds to detect Red Light running, Double Line crossings, and Speed Limit violations, while GPS tracks route deviations. The logic triggers immediate alarms and logs evidence to the Authority Dashboard.</li>
                    <li><strong>Component 4 (Crash Detection):</strong> IMU data is windowed (100 readings/window) and normalized. An Autoencoder model calculates reconstruction error to determine a crash. If detected, it validates bias, creates a crash record, and automatically sends emergency messages.</li>
                    <li><strong>Central Database:</strong> All generated data logs from the subsystems are securely stored in a centralized MongoDB database for analytics and historical tracking.</li>
                  </ul>
                </div>
              </div>

              <p className="section-intro">Beyond the high-level architecture, the system is organized into four distinct implementation layers:</p>

              <div className="methodology-layers">
                <div className="layer-card glass-card">
                  <div className="layer-number">01</div>
                  <h3>Bus Sensor Platform</h3>
                  <p>Hardware components placed inside the bus including ESP32 microcontroller, IR sensor arrays for passenger counting, ultrasonic sensors for footboard detection, GPS module for location tracking, accelerometer and gyroscope (IMU) for motion sensing, dashboard camera for vision-based detection, and a buzzer for driver alerts.</p>
                </div>
                <div className="layer-card glass-card">
                  <div className="layer-number">02</div>
                  <h3>Edge Processing Unit</h3>
                  <p>A small computing device (NVIDIA Jetson Nano) that processes raw sensor data locally. It implements IR beam logic for passenger counting with debouncing, runs YOLOv8 inference for road rule violations, processes IMU data using a sliding window approach with Z-score normalization, and extracts features for crash detection.</p>
                </div>
                <div className="layer-card glass-card">
                  <div className="layer-number">03</div>
                  <h3>Backend Services</h3>
                  <p>Cloud-based services including a Python ML Service running a Random Forest classifier for overcrowding prediction (98.78% accuracy), a FastAPI Route Service for geofencing-based route deviation detection, a Node.js orchestration layer with MQTT broker for IoT communication, and MongoDB database for storing all violation logs, passenger data, crash records, and route information.</p>
                </div>
                <div className="layer-card glass-card">
                  <div className="layer-number">04</div>
                  <h3>User Interfaces</h3>
                  <p>A Driver Mobile App providing real-time alerts for rollover risk, fatigue detection, and violations. An Authority Web Dashboard for transport authorities to monitor all buses in real time, view violation logs with captured images, and receive fatigue alerts. An Emergency Services Interface that automatically sends crash alerts via SMS gateway, voice call system, and automatic dispatch protocols.</p>
                </div>
              </div>

              {/* INDIVIDUAL COMPONENT IMPLEMENTATION DETAILS */}
              <div className="component-implementation mt-5">
                <h3 className="section-subtitle-alt text-center mb-5">Individual Component Implementation</h3>

                {/* Component 1: Overcrowding and Rollover Prediction */}
                <motion.div className="component-detail-card glass-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="comp-card-header accent-blue">
                    <div className="header-icon-box">
                      <Users size={28} />
                    </div>
                    <div className="header-text">
                      <h3>Component 1: Overcrowding and Rollover Prediction</h3>
                      <p>Real-time passenger counting and dynamic rollover risk assessment</p>
                    </div>
                  </div>

                  <div className="comp-card-body">
                    <div className="layer-breakdown-grid">
                      <div className="layer-box">
                        <span className="layer-label">Layer 1: Sensors</span>
                        <ul>
                          <li>ESP32 controller</li>
                          <li>IR sensor arrays</li>
                          <li>Ultrasonic sensors</li>
                          <li>IMU & GPS module</li>
                        </ul>
                      </div>
                      <div className="layer-box">
                        <span className="layer-label">Layer 2: Edge</span>
                        <ul>
                          <li>IR beam debouncing</li>
                          <li>Directional counting</li>
                          <li>Seated/Standing calc</li>
                          <li>Rollover risk calculation</li>
                        </ul>
                      </div>
                      <div className="layer-box">
                        <span className="layer-label">Layer 3: Backend</span>
                        <ul>
                          <li>Python ML Service</li>
                          <li>Random Forest Classifier</li>
                          <li>Physics-based model</li>
                          <li>MongoDB storage</li>
                        </ul>
                      </div>
                      <div className="layer-box">
                        <span className="layer-label">Layer 4: UI</span>
                        <ul>
                          <li>Authority Dashboard</li>
                          <li>Analytics visualization</li>
                          <li>Real-time display</li>
                          <li>Risk indicators</li>
                        </ul>
                      </div>
                    </div>

                    <div className="implementation-timeline mt-4">
                      <h4><GitMerge size={18} /> Implementation Logic</h4>
                      <div className="logic-steps">
                        <div className="step"><span>1</span><p>ESP32 collects data from IR doorway sensors every 100ms</p></div>
                        <div className="step"><span>2</span><p>Dual-beam logic determines boarding (+) or alighting (-) direction</p></div>
                        <div className="step"><span>3</span><p>Random Forest model predicts overloading (98.78% accuracy)</p></div>
                        <div className="step"><span>4</span><p>Rollover risk calculated via physics-based sensor fusion</p></div>
                        <div className="step"><span>5</span><p>Buzzer and mobile alerts trigger if risk &gt; threshold</p></div>
                      </div>
                    </div>

                    <div className="comp-footer">
                      <span className="accuracy-pill excellent">98.78% Accuracy</span>
                    </div>
                  </div>
                </motion.div>

                {/* Component 2: Driver Fatigue Monitoring */}
                <motion.div className="component-detail-card glass-card mt-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="comp-card-header accent-green">
                    <div className="header-icon-box">
                      <Eye size={28} />
                    </div>
                    <div className="header-text">
                      <h3>Component 2: Driver Fatigue Monitoring System</h3>
                      <p>AI-based real-time drowsiness detection and driver alert system</p>
                    </div>
                  </div>

                  <div className="comp-card-body">
                    <div className="layer-breakdown-grid">
                      <div className="layer-box">
                        <span className="layer-label">Layer 1: Sensors</span>
                        <ul>
                          <li>Dashboard Camera (IR)</li>
                          <li>GPRS module</li>
                          <li>Battery with alarm</li>
                          <li>Compass sensor</li>
                        </ul>
                      </div>
                      <div className="layer-box">
                        <span className="layer-label">Layer 2: Edge</span>
                        <ul>
                          <li>Face verification (YOLO)</li>
                          <li>Eye closure (EAR)</li>
                          <li>Head pose tracking</li>
                          <li>Drowsiness scoring</li>
                        </ul>
                      </div>
                      <div className="layer-box">
                        <span className="layer-label">Layer 3: Backend</span>
                        <ul>
                          <li>Fatigue data storage</li>
                          <li>Verification logs</li>
                          <li>Trend analysis</li>
                          <li>Alert API</li>
                        </ul>
                      </div>
                      <div className="layer-box">
                        <span className="layer-label">Layer 4: UI</span>
                        <ul>
                          <li>Driver mobile alerts</li>
                          <li>Monitoring panel</li>
                          <li>Historical fatigue logs</li>
                        </ul>
                      </div>
                    </div>

                    <div className="implementation-timeline mt-4">
                      <h4><GitMerge size={18} /> Implementation Logic</h4>
                      <div className="logic-steps">
                        <div className="step"><span>1</span><p>Dashboard camera captures driver's face at 30 FPS</p></div>
                        <div className="step"><span>2</span><p>EAR = (p2-p6 + p3-p5) / (2 * p1-p4) calculation</p></div>
                        <div className="step"><span>3</span><p>If EAR &lt; threshold for 3+ seconds → drowsiness detected</p></div>
                        <div className="step"><span>4</span><p>Local GPIO buzzer triggers immediate alert to driver</p></div>
                        <div className="step"><span>5</span><p>Authority dashboard displays real-time fatigue status</p></div>
                      </div>
                    </div>

                    <div className="comp-footer">
                      <span className="accuracy-pill">94.2% Accuracy</span>
                    </div>
                  </div>
                </motion.div>

                {/* Component 3: Road Rule Violation System */}
                <motion.div className="component-detail-card glass-card mt-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="comp-card-header accent-orange">
                    <div className="header-icon-box">
                      <Camera size={28} />
                    </div>
                    <div className="header-text">
                      <h3>Component 3: Road Rule Violation System</h3>
                      <p>Real-time detection of speeding, red light, and double line violations</p>
                    </div>
                  </div>

                  <div className="comp-card-body">
                    <div className="layer-breakdown-grid">
                      <div className="layer-box">
                        <span className="layer-label">Layer 1: Sensors</span>
                        <ul>
                          <li>Dashboard Camera</li>
                          <li>GPS module (NEO-6M)</li>
                          <li>Speed sensor</li>
                          <li>IMU dynamics</li>
                        </ul>
                      </div>
                      <div className="layer-box">
                        <span className="layer-label">Layer 2: Edge</span>
                        <ul>
                          <li>YOLOv8 inference</li>
                          <li>Sign detection</li>
                          <li>Red light detection</li>
                          <li>Double line classifier</li>
                        </ul>
                      </div>
                      <div className="layer-box">
                        <span className="layer-label">Layer 3: Backend</span>
                        <ul>
                          <li>FastAPI Route Service</li>
                          <li>Violation logs DB</li>
                          <li>Image storage</li>
                          <li>MQTT publish</li>
                        </ul>
                      </div>
                      <div className="layer-box">
                        <span className="layer-label">Layer 4: UI</span>
                        <ul>
                          <li>Driver buzzer alert</li>
                          <li>Violation log viewer</li>
                          <li>Evidence images</li>
                        </ul>
                      </div>
                    </div>

                    <div className="implementation-timeline mt-4">
                      <h4><GitMerge size={18} /> Implementation Logic</h4>
                      <div className="logic-steps">
                        <div className="step"><span>1</span><p>Camera captures video frames at 30 FPS for Jetson Nano</p></div>
                        <div className="step"><span>2</span><p>YOLOv8 models run for speed limit, red light, and double lines</p></div>
                        <div className="step"><span>3</span><p>Sign speed extracted and compared with GPS speed data</p></div>
                        <div className="step"><span>4</span><p>If violation: MQTT message triggers ESP32 buzzer alert</p></div>
                        <div className="step"><span>5</span><p>Violation details (image, GPS) stored in MongoDB</p></div>
                      </div>
                    </div>

                    <div className="comp-footer">
                      <span className="accuracy-pill">96.3% Precision | 14.7 FPS</span>
                    </div>
                  </div>
                </motion.div>

                {/* Component 4: Crash Detection System */}
                <motion.div className="component-detail-card glass-card mt-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="comp-card-header accent-red">
                    <div className="header-icon-box">
                      <Activity size={28} />
                    </div>
                    <div className="header-text">
                      <h3>Component 4: Crash Detection System</h3>
                      <p>Automated collision detection and emergency response notification</p>
                    </div>
                  </div>

                  <div className="comp-card-body">
                    <div className="layer-breakdown-grid">
                      <div className="layer-box">
                        <span className="layer-label">Layer 1: Sensors</span>
                        <ul>
                          <li>3-axis Accelerometer</li>
                          <li>3-axis Gyroscope</li>
                          <li>IMU (MPU6050)</li>
                          <li>Crash sensor</li>
                        </ul>
                      </div>
                      <div className="layer-box">
                        <span className="layer-label">Layer 2: Edge</span>
                        <ul>
                          <li>Sliding window (100)</li>
                          <li>Z-score normalization</li>
                          <li>Feature extraction</li>
                          <li>Decision logic</li>
                        </ul>
                      </div>
                      <div className="layer-box">
                        <span className="layer-label">Layer 3: Backend</span>
                        <ul>
                          <li>Crash data storage</li>
                          <li>Severity CNN model</li>
                          <li>Emergency trigger API</li>
                        </ul>
                      </div>
                      <div className="layer-box">
                        <span className="layer-label">Layer 4: UI</span>
                        <ul>
                          <li>SMS Gateway alerts</li>
                          <li>Voice call system</li>
                          <li>Automatic dispatch</li>
                        </ul>
                      </div>
                    </div>

                    <div className="implementation-timeline mt-4">
                      <h4><GitMerge size={18} /> Implementation Logic</h4>
                      <div className="logic-steps">
                        <div className="step"><span>1</span><p>IMU collects acceleration/gyroscope data at 100Hz</p></div>
                        <div className="step"><span>2</span><p>Z-score normalization and feature extraction</p></div>
                        <div className="step"><span>3</span><p>CNN model classifies severity (Minor / Moderate / Severe)</p></div>
                        <div className="step"><span>4</span><p>If confidence &gt; 0.85: GPS captured and record stored</p></div>
                        <div className="step"><span>5</span><p>SMS, voice calls, and hospital dispatch triggered via API</p></div>
                      </div>
                    </div>

                    <div className="comp-footer">
                      <span className="accuracy-pill excellent">96.7% Accuracy</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Four-Layer Architecture Description */}
              <div className="architecture-desc mt-5">
                <h4>How the Four Layers Work Together</h4>
                <p>The SSMS architecture integrates all four components across the four layers in a coordinated manner:</p>
                <ul>
                  <li><strong>Sensor data flows upward</strong> from the bus sensor platform (Layer 1) to the edge processor (Layer 2), where immediate alerts are generated locally.</li>
                  <li><strong>Data is then sent</strong> to the cloud backend (Layer 3) for storage and further analysis.</li>
                  <li><strong>Processed information</strong> is delivered to the appropriate user interfaces (Layer 4) based on the type of event and intended recipient.</li>
                  <li><strong>Emergency alerts</strong> bypass normal processing and are sent immediately through multiple channels (SMS, voice, dispatch).</li>
                </ul>
              </div>

              <div className="dataset-accuracy mt-5">
                <h3>Dataset Summary and Achieved Accuracy</h3>
                <div className="table-responsive glass-card no-padding mt-3">
                  <table className="modern-table">
                    <thead>
                      <tr>
                        <th>Component</th>
                        <th>Dataset Size</th>
                        <th>Achieved Accuracy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Driver Fatigue Detection</td><td>2,500 images</td><td><span className="accuracy-badge">94.2%</span></td></tr>
                      <tr><td>Speed Limit Detection</td><td>1,148 images</td><td><span className="accuracy-badge">96.3% precision</span></td></tr>
                      <tr><td>Red Light Detection</td><td>848 images</td><td><span className="accuracy-badge neutral">Validated</span></td></tr>
                      <tr><td>Double Line Classification</td><td>234 images</td><td><span className="accuracy-badge neutral">Validated</span></td></tr>
                      <tr><td>Passenger Counting</td><td>5,000 recordings</td><td><span className="accuracy-badge">96.8%</span></td></tr>
                      <tr><td>Crash Detection</td><td>6,200 samples</td><td><span className="accuracy-badge">96.7% (12.3s latency)</span></td></tr>
                      <tr><td>Overcrowding Prediction</td><td>5,000 samples</td><td><span className="accuracy-badge excellent">98.78%</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <hr className="section-divider" />

            {/* Technologies Section */}
            <section id="technologies" className="domain-section pb-5">
              <motion.div className="section-header" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Cpu className="section-icon text-accent" />
                <h2>Technologies Used</h2>
              </motion.div>

              <div className="tech-grid">
                <div className="glass-card tech-card">
                  <h4>Hardware</h4>
                  <div className="tech-tags">
                    <span>ESP32</span><span>IR Sensors</span><span>Ultrasonic</span><span>NEO-6M GPS</span><span>IMU</span><span>Camera</span><span>Jetson Nano</span>
                  </div>
                </div>

                <div className="glass-card tech-card">
                  <h4>AI &amp; Machine Learning</h4>
                  <div className="tech-tags">
                    <span>YOLOv8</span><span>MobileNet</span><span>Random Forest</span><span>CNN</span><span>PyTorch</span><span>Ultralytics</span>
                  </div>
                </div>

                <div className="glass-card tech-card">
                  <h4>Backend &amp; Cloud</h4>
                  <div className="tech-tags">
                    <span>Python</span><span>FastAPI</span><span>Node.js</span><span>MongoDB</span><span>MQTT</span><span>Socket.IO</span><span>Firebase</span>
                  </div>
                </div>

                <div className="glass-card tech-card">
                  <h4>Frontend</h4>
                  <div className="tech-tags">
                    <span>HTML5</span><span>CSS3</span><span>WordPress</span><span>JavaScript</span><span>React</span><span>Vite</span>
                  </div>
                </div>

                <div className="glass-card tech-card">
                  <h4>Geospatial &amp; Weather</h4>
                  <div className="tech-tags">
                    <span>OSMnx</span><span>OpenStreetMap</span><span>Open-Meteo API</span>
                  </div>
                </div>

                <div className="glass-card tech-card">
                  <h4>Protocols</h4>
                  <div className="tech-tags">
                    <span>MQTT</span><span>Socket.IO</span><span>HTTP/REST</span><span>SMS Gateway</span>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
