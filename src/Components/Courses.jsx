import React from 'react'
import Navbar from './Navbar'
import '../styles/courses.css'
import Footer from './Footer'
import CourseDetail from './CourseDetail'
import { Link } from 'react-router-dom'

export default function Courses() {

  const Coursedata = {
    '1': {
      title: 'Django Crash Course',
      desc: "This course is for people whove never used Django before or for absolute beginners. In the course you will learn the basics of Django by building a simple real estate website.",
      level: 'Beginner',
      start: 'Start',
      image: 'https://justdjango.com/_next/image?url=https%3A%2F%2Fjustdjango-static.sfo2.digitaloceanspaces.com%2Fmedia%2Fcourse_thumbnails%2Fcrashcourse.png&w=750&q=75',
      date: 'Last updated on February 13, 2023',
      chapters: 'Chapters'
    },
    '2': {
      title: 'Django Crash Course',
      desc: "This course is for people whove never used Django before or for absolute beginners. In the course you will learn the basics of Django by building a simple real estate website.",
      level: 'Beginner',
      start: 'Start',
      image: 'https://justdjango.com/_next/image?url=https%3A%2F%2Fjustdjango-static.sfo2.digitaloceanspaces.com%2Fmedia%2Fcourse_thumbnails%2Fcrashcourse.png&w=750&q=75',
      date: 'Last updated on February 13, 2023',
      chapters: 'Chapters'
    },
    '3': {
      title: 'Django Crash Course',
      desc: "This course is for people whove never used Django before or for absolute beginners. In the course you will learn the basics of Django by building a simple real estate website.",
      level: 'Beginner',
      start: 'Start',
      image: 'https://justdjango.com/_next/image?url=https%3A%2F%2Fjustdjango-static.sfo2.digitaloceanspaces.com%2Fmedia%2Fcourse_thumbnails%2Fcrashcourse.png&w=750&q=75',
      date: 'Last updated on February 13, 2023',
      chapters: 'Chapters'
    },
    '4': {
      title: 'Django Crash Course',
      desc: "This course is for people whove never used Django before or for absolute beginners. In the course you will learn the basics of Django by building a simple real estate website.",
      level: 'Beginner',
      start: 'Start',
      image: 'https://justdjango.com/_next/image?url=https%3A%2F%2Fjustdjango-static.sfo2.digitaloceanspaces.com%2Fmedia%2Fcourse_thumbnails%2Fcrashcourse.png&w=750&q=75',
      date: 'Last updated on February 13, 2023',
      chapters: 'Chapters'
    },
    '5': {
      title: 'Django Crash Course',
      desc: "This course is for people whove never used Django before or for absolute beginners. In the course you will learn the basics of Django by building a simple real estate website.",
      level: 'Beginner',
      start: 'Start',
      image: 'https://justdjango.com/_next/image?url=https%3A%2F%2Fjustdjango-static.sfo2.digitaloceanspaces.com%2Fmedia%2Fcourse_thumbnails%2Fcrashcourse.png&w=750&q=75',
      date: 'Last updated on February 13, 2023',
      chapters: 'Chapters'
    },
    '6': {
      title: 'Django Crash Course',
      desc: "This course is for people whove never used Django before or for absolute beginners. In the course you will learn the basics of Django by building a simple real estate website.",
      level: 'Beginner',
      start: 'Start',
      image: 'https://justdjango.com/_next/image?url=https%3A%2F%2Fjustdjango-static.sfo2.digitaloceanspaces.com%2Fmedia%2Fcourse_thumbnails%2Fcrashcourse.png&w=750&q=75',
      date: 'Last updated on February 13, 2023',
      chapters: 'Chapters'
    },
    '7': {
      title: 'Django Crash Course',
      desc: "This course is for people whove never used Django before or for absolute beginners. In the course you will learn the basics of Django by building a simple real estate website.",
      level: 'Beginner',
      start: 'Start',
      image: 'https://justdjango.com/_next/image?url=https%3A%2F%2Fjustdjango-static.sfo2.digitaloceanspaces.com%2Fmedia%2Fcourse_thumbnails%2Fcrashcourse.png&w=750&q=75',
      date: 'Last updated on February 13, 2023',
      chapters: 'Chapters'
    }
  }


  return (
    <>
      <Navbar />
      <section id='courses'>
        <div className="courses__text">
          <span>Courses</span>
          <p>Learn to build applications with Django, Next.js, and more.</p>
        </div>
        <div className="courses__grid">
          {
            Object.entries(Coursedata).map(([slug, { title, desc, level, start, image, date, chapters }]) => {
              return (
                <li key={slug}>
                  <Link to={`/courses/${slug}`} className='course-flex'>
                    <div className="course-flex-text">
                      <span>{title}</span>
                      <p id='desc'>{desc}</p>
                      <p className='level'><i class="ri-bar-chart-line"></i>{level}</p>
                      <button>{start}</button>
                    </div>
                    <div className="course-flex-img">
                      <img src={image} alt="" />
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </div>
      </section>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}
