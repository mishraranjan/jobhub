import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Browse from './pages/Browse';
import Profile from './pages/Profile';
import JobDescription from './pages/JobDescription';
import Companies from './components/admin/Companies';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';
import AdminJobs from './components/admin/AdminJobs';
import CreateJob from './components/admin/CreateJob';
import Applicants from './components/admin/Applicants';
import ProtectedRoute from './components/admin/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/description/:id' element={<JobDescription />} />
        <Route path='/admin/companies' element={<ProtectedRoute><Companies /></ProtectedRoute>} />
        <Route path='/admin/companies/create' element={<ProtectedRoute><CompanyCreate /></ProtectedRoute>} />
        <Route path='/admin/companies/:id' element={<ProtectedRoute><CompanySetup /></ProtectedRoute>} />
        <Route path='/admin/jobs' element={<ProtectedRoute><AdminJobs /></ProtectedRoute>} />
        <Route path='/admin/jobs/create' element={<ProtectedRoute><CreateJob /></ProtectedRoute>} />
        <Route path='/admin/jobs/:id/applicants' element={<ProtectedRoute><Applicants /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
