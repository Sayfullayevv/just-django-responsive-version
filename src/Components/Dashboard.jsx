import React from 'react'
import Navbar from './Navbar'
import '../styles/dashboard.css'
import Camera from '../assets/camera.png'
import { Link, Outlet, NavLink } from 'react-router-dom'


export default function Dashboard() {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div id="dashboard">
        <div className="dashboard__container">
          <div className="dashboard__links">
            <ul>
              <Link to={'/dashboard'}>
                <li style={{
                  background: 'hsl(216, 34%, 17%)'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path></svg>
                  Courses
                </li>
              </Link>
              <NavLink to={'/dashboard/billing'}>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                  Billing
                </li>
              </NavLink>
              <NavLink to={'/dashboard/settings'}>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  Settings
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="dashboard__content">
            <span>
              Course Library
            </span>
            <p>
              View your courses.
            </p>
            <div className="dash__course-area">
              <img src={Camera} alt="" />
              <span className='main__dash__course-text'>No courses purchased</span>
              <p className='main__dash__course-text'>
                You haven't added any courses yet.
              </p>
              <button>
                <Link to={'/pro'} style={{ color: 'black' }}>
                  Start learning
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
