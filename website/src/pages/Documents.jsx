import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2, ExternalLink } from 'lucide-react';

const documents = [
  { id: '1', name: 'Project Charter', file: '/documents/project-charter.pdf' },
  { id: '2', name: 'Proposal Document', file: '/documents/proposal-document.pdf' },
  { id: '3', name: 'Checklist Documents', file: '/documents/checklist-documents.pdf' },
  { id: '4', name: 'Final Document – Part 1', file: '/documents/final-document-part1.pdf' },
  { id: '5', name: 'Final Document – Part 2', file: '/documents/final-document-part2.pdf' },
  { id: '6', name: 'Final Document – Part 3', file: '/documents/final-document-part3.pdf' },
  { id: '7', name: 'Final Document – Main', file: '/documents/final-document-main.pdf' },
];

const Documents = () => {
  // Track which files actually exist in public/documents/
  const [fileStatus, setFileStatus] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Check which PDF files exist by sending a HEAD request
  useEffect(() => {
    const checkFiles = async () => {
      const status = {};
      await Promise.all(
        documents.map(async (doc) => {
          try {
            const res = await fetch(doc.file, { method: 'HEAD' });
            status[doc.id] = res.ok;
          } catch {
            status[doc.id] = false;
          }
        })
      );
      setFileStatus(status);
      setIsLoading(false);
    };
    checkFiles();
  }, []);

  const handleDownload = (doc) => {
    const a = document.createElement('a');
    a.href = doc.file;
    a.download = doc.file.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleView = (doc) => {
    window.open(doc.file, '_blank');
  };

  if (isLoading) return <div className="section text-center">Loading documents...</div>;

  return (
    <div className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 className="section-title">Project <span className="text-gradient">Documents</span></h1>
          <p className="section-subtitle">Access all required project deliverables.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="table-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Document Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => {
                  const exists = fileStatus[doc.id];
                  return (
                    <tr key={doc.id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
                          <FileText size={20} style={{ color: exists ? 'var(--accent-primary)' : 'var(--text-muted)' }} />
                          <div>
                            <div>{doc.name}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                              {doc.file.split('/').pop()}
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
                              onClick={() => handleDownload(doc)} 
                              className="btn btn-primary" 
                              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                            >
                              <Download size={16} style={{ marginRight: '0.4rem' }} /> Download
                            </button>
                            <button 
                              onClick={() => handleView(doc)} 
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Documents;
