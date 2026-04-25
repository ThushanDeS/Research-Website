import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, ChevronDown, Edit2, Save, X } from 'lucide-react';
import './Milestones.css';

const defaultMilestones = [
  {
    id: 'proposal',
    title: 'Project Proposal',
    details: 'Proposal submission & presentation focusing on defining the research problem and proposed solution.',
    date: 'March 15, 2026',
    marks: '10%'
  },
  {
    id: 'progress1',
    title: 'Progress Presentation 1',
    details: 'First progress review covering the initial prototype, literature survey completion, and base architecture.',
    date: 'May 10, 2026',
    marks: '15%'
  },
  {
    id: 'progress2',
    title: 'Progress Presentation 2',
    details: 'Second progress review focusing on model integration, accuracy testing, and dashboard functionality.',
    date: 'August 20, 2026',
    marks: '15%'
  },
  {
    id: 'final',
    title: 'Final Assessment',
    details: 'Comprehensive final project evaluation, demonstrating the fully integrated unified AI platform.',
    date: 'October 15, 2026',
    marks: '40%'
  },
  {
    id: 'viva',
    title: 'Viva',
    details: 'Oral examination and deep dive into the technical implementations and research outcomes.',
    date: 'November 05, 2026',
    marks: '20%'
  }
];

const Milestones = () => {
  const [milestones, setMilestones] = useState(() => {
    const saved = localStorage.getItem('ssms_milestones');
    return saved ? JSON.parse(saved) : defaultMilestones;
  });

  const [selectedId, setSelectedId] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editDate, setEditDate] = useState('');
  const [editMarks, setEditMarks] = useState('');

  const selectedMilestone = milestones.find(m => m.id === selectedId);

  useEffect(() => {
    localStorage.setItem('ssms_milestones', JSON.stringify(milestones));
  }, [milestones]);

  const handleSelect = (e) => {
    const id = e.target.value;
    setSelectedId(id);
    setIsEditing(false);
  };

  const startEditing = () => {
    if (selectedMilestone) {
      setEditDate(selectedMilestone.date);
      setEditMarks(selectedMilestone.marks);
      setIsEditing(true);
    }
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const saveChanges = () => {
    if (!selectedMilestone) return;

    const updatedMilestones = milestones.map(m => {
      if (m.id === selectedId) {
        return { ...m, date: editDate, marks: editMarks };
      }
      return m;
    });

    setMilestones(updatedMilestones);
    setIsEditing(false);
  };

  return (
    <div className="milestones-page">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="section-title">Project <span className="text-gradient">Milestones</span></h1>
          <p className="section-subtitle">Track our progress through key assessment phases and deliverables.</p>
        </motion.div>

        <div className="dropdown-container">
          <label className="dropdown-label">Select an Assessment Phase:</label>
          <div className="custom-select-wrapper">
            <select 
              className="custom-select"
              onChange={handleSelect}
              value={selectedId}
            >
              <option value="" disabled>-- Choose Assessment --</option>
              {milestones.map(m => (
                <option key={m.id} value={m.id}>{m.title}</option>
              ))}
            </select>
            <ChevronDown className="select-icon" />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {selectedMilestone && (
            <motion.div
              key={selectedMilestone.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="milestone-details glass-card"
            >
              <div className="milestone-header">
                <h2>{selectedMilestone.title}</h2>
                {!isEditing && (
                  <button onClick={startEditing} className="icon-btn edit-btn" title="Edit Date & Marks">
                    <Edit2 size={18} />
                  </button>
                )}
              </div>
              
              <p className="milestone-desc">{selectedMilestone.details}</p>
              
              <div className="milestone-meta">
                <div className="meta-item">
                  <Calendar className="meta-icon" />
                  <div className="meta-content">
                    <span className="meta-label">Date</span>
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={editDate} 
                        onChange={(e) => setEditDate(e.target.value)}
                        className="edit-input"
                        placeholder="e.g. October 15, 2026"
                      />
                    ) : (
                      <span className="meta-value">{selectedMilestone.date}</span>
                    )}
                  </div>
                </div>
                <div className="meta-item">
                  <Award className="meta-icon" />
                  <div className="meta-content">
                    <span className="meta-label">Marks Allocation</span>
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={editMarks} 
                        onChange={(e) => setEditMarks(e.target.value)}
                        className="edit-input"
                        placeholder="e.g. 15%"
                      />
                    ) : (
                      <span className="meta-value">{selectedMilestone.marks}</span>
                    )}
                  </div>
                </div>
              </div>

              {isEditing && (
                <div className="edit-actions">
                  <button onClick={cancelEditing} className="btn btn-outline cancel-btn">
                    <X size={16} /> Cancel
                  </button>
                  <button onClick={saveChanges} className="btn btn-primary save-btn">
                    <Save size={16} /> Save Changes
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Milestones;
