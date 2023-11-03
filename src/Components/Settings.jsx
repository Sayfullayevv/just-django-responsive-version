import React from 'react'
import Navbar from './Navbar'
import { Link, NavLink } from 'react-router-dom'
import Camera from '../assets/camera.png'

export default function Settings() {
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
                <li>
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
            <span className='main__dash__course-text'>
              Settings
            </span>
            <p className='main__dash__course-text'>
              Manage account and website settings
            </p>
            <div className="dash__course-area" style={{ alignItems: 'start', padding: '20px', height: 'fit-content' }}>
              <span>Your Name</span>
              <p>
                Please enter your full name or a display name you are comfortable with.
              </p>
              <input type="text" value={"android genymotion"} style={{
                width: 'auto',
                fontSize: '.875rem',
                lineHeight: '1.25rem',
                padding: '.5rem .75rem',
                background: 'transparent',
                color: 'white',
                borderRadius: 'calc(0.5rem - 2px)',
                border: '1px solid hsl(216 , 34% , 16%)',
                outline: 'none'
              }} />
              <button>
                Save
              </button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
