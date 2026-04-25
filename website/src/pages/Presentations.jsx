import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Presentation, Download, CheckCircle2, ExternalLink } from 'lucide-react';

const presentations = [
  { id: '1', name: 'Proposal Presentation', file: '/documents/proposal-presentation.pdf' },
  { id: '2', name: 'Progress Presentation 1', file: '/documents/pp1-presentation.pdf' },
  { id: '3', name: 'Progress Presentation 2', file: '/documents/pp2-presentation.pdf' },
  { id: '4', name: 'Final Presentation', file: '/documents/final-presentation.pdf' },
];

const Presentations = () => {
  const [fileStatus, setFileStatus] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Check which files exist
  useEffect(() => {
    const checkFiles = async () => {
      const status = {};
      await Promise.all(
        presentations.map(async (pres) => {
          try {
            const res = await fetch(pres.file, { method: 'HEAD' });
            status[pres.id] = res.ok;
          } catch {
            status[pres.id] = false;
          }
        })
      );
      setFileStatus(status);
      setIsLoading(false);
    };
    checkFiles();
  }, []);

  const handleDownload = (pres) => {
    const a = document.createElement('a');
    a.href = pres.file;
    a.download = pres.file.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleView = (pres) => {
    window.open(pres.file, '_blank');
  };

  if (isLoading) return <div className="section text-center">Loading presentations...</div>;

  return (
    <div className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 className="section-title">Project <span className="text-gradient">Presentations</span></h1>
          <p className="section-subtitle">Download slides from our past and upcoming presentations.</p>
        </motion.div>

        <motion.div 
          className="table-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ maxWidth: '900px', margin: '0 auto' }}
        >
          <table>
            <thead>
              <tr>
                <th>Presentation</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {presentations.map((pres) => {
                const exists = fileStatus[pres.id];
                return (
                  <tr key={pres.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
                        <Presentation size={20} style={{ color: exists ? 'var(--accent-primary)' : 'var(--text-muted)' }} />
                        <div>
                          <div>{pres.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                            {pres.file.split('/').pop()}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {exists ? (
                        <span className="status-badge status-done"><CheckCircle2 size={14} /> Available</span>
                      ) : (
                        <span className="status-badge status-pending">⏳ Not Added</span>
                      )}
                    </td>
                    <td>
                      {exists ? (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button 
                            onClick={() => handleDownload(pres)} 
                            className="btn btn-primary" 
                            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                          >
                            <Download size={16} style={{ marginRight: '0.4rem' }} /> Download
                          </button>
                          <button 
                            onClick={() => handleView(pres)} 
                            className="btn btn-outline" 
                            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                          >
                            <ExternalLink size={16} style={{ marginRight: '0.4rem' }} /> View
                          </button>
                        </div>
                      ) : (
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                          Place PDF in public/documents/
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
};

export default Presentations;
