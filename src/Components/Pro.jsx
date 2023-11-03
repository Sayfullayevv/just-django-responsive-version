import React from 'react'
import Navbar from './Navbar'
import '../styles/pro.css'
export default function Pro() {
  return (
    <>
      <Navbar />
      <section id='pro'>
        <div className="section__text">
          <span>
            Lifetime membership
          </span>
          <p>
            A one-time fee for lifetime access to all courses, past, present and future.
          </p>
        </div>
        <div className="pro__card">
          <div className="pro__card-text">
            <span >What's included in the PRO plan</span>
            <p><i class="ri-check-line"></i> Lifetime access for all courses</p>
            <p><i class="ri-check-line"></i> Premium Support</p>
          </div>
          <div className="pro__card-price">
            <span>$199</span>
            <p>Pay once, own it forever</p>
            <button>Get access</button>
          </div>
        </div>
      </section>
    </>
  )
}
