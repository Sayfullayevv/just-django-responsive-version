import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import Courses from './Components/Courses'
import Error from './Components/Error';
import Blog from './Components/Blog'
import Pro from './Components/Pro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CourseDetail from './Components/CourseDetail';
import BlogDetail from './Components/BlogDetail';
import Dashboard from './Components/Dashboard'
import Dasharea from './Components/Dasharea';
import Billing from './Components/Billing';
import Settings from './Components/Settings';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='courses' element={<Courses />} />
          <Route path='courses/:slug' element={<CourseDetail />} />
          <Route path='blog' element={<Blog />} />
          <Route path='pro' element={<Pro />} />
          <Route path='blog/:slug' element={<BlogDetail />} />
          <Route path='dashboard/billing' element={<Billing />} />
          <Route path='dashboard/settings' element={<Settings />} />
          <Route path='*' element={<Error />} />
          <Route path='dashboard' element={<Dasharea />} >
            <Route index element={<Dashboard />} />
            <Route path='billing' element={<Billing />} />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
