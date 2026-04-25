import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Domain from './pages/Domain';
import Milestones from './pages/Milestones';
import Documents from './pages/Documents';
import Presentations from './pages/Presentations';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="domain" element={<Domain />} />
        <Route path="milestones" element={<Milestones />} />
        <Route path="documents" element={<Documents />} />
        <Route path="presentations" element={<Presentations />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
