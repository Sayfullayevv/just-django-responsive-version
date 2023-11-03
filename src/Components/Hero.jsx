import React, { useState } from 'react'
import djangologo from '../assets/django.png'
import reactlogo from '../assets/react.png'
import sqllogo from '../assets/sql.png'
import docker from '../assets/docker.png'
import api from '../assets/api.png'
import deploy from '../assets/deploy.png'
import Navbar from './Navbar';
import Footer from './Footer'
import { Link } from 'react-router-dom'


export default function Hero() {
    const [select, setselect] = useState(null)

    const objdata = [
        {
            title: 'How long do I have access to course?',
            parag: " You have lifetime access to the course. You can watch the videos as many times as you want, whenever you want."
        },
        {
            title: 'How long do I have access to course?',
            parag: " You have lifetime access to the course. You can watch the videos as many times as you want, whenever you want."
        },
        {
            title: 'How long do I have access to course?',
            parag: " You have lifetime access to the course. You can watch the videos as many times as you want, whenever you want."
        },
        {
            title: 'How long do I have access to course?',
            parag: " You have lifetime access to the course. You can watch the videos as many times as you want, whenever you want."
        },
        {
            title: 'How long do I have access to course?',
            parag: " You have lifetime access to the course. You can watch the videos as many times as you want, whenever you want."
        },

    ]

    function accordion(idx) {
        if (select == idx) {
            return setselect(null)
        }

        setselect(idx)
    }

    return (
        <>
            <Navbar />
            <section id='hero'>
                <div className="hero__content">
                    <button>
                        Recently Revamped!
                    </button>
                    <span>
                        Your final destination to become a <br />
                        <span>Software Developer</span>
                    </span>
                    <p>
                        Build projects and learn software development with simple and comprehensive courses.
                    </p>
                    <div className="hero__content-btns">
                        <button>Get Started</button>
                        <Link to='/courses' className='linkbtn'><button>View Courses</button></Link>
                    </div>
                </div>
            </section>

            <section id='herovideo'>
                <div className="hero__content-video">
                    <img src="https://i.vimeocdn.com/video/1710487669-4c5bb2d0dee1c3031afc8bc35f3cea8d63aa2f3bbacc2a12499423be6a098dcf-d?mw=700&mh=400" alt="" />
                </div>
            </section>

            <section id='lessons'>
                <div className="lessons__content">
                    <span>
                        What will you learn?
                    </span>
                    <p>
                        Don't waste time learning things that you don't need to know. We cover the most important topics that you need to know to start building applications and get a job as a software developer.
                    </p>
                    <div className="lessons__content-grid">
                        <div>
                            <img src={djangologo} alt="" /> <br />
                            <span>Django 4</span>
                            <p>
                                Models, Views, Templates, Forms, Authentication, and more.
                            </p>
                        </div>
                        <div>
                            <img src={reactlogo} alt="" /> <br />
                            <span>React and Next.js</span>
                            <p>Server and Client side rendering using Next.js and React.</p>
                        </div>
                        <div>
                            <img src={sqllogo} alt="" /> <br />
                            <span>
                                SQL Database
                            </span>
                            <p>Writing SQL, Database design, migrations and more.</p>
                        </div>
                        <div>
                            <img src={docker} alt="" /> <br />
                            <span>
                                Docker
                            </span>
                            <p>Containerization using Docker and Docker Compose.</p>
                        </div>
                        <div>
                            <img src={api} alt="" /> <br />
                            <span>
                                APIs
                            </span>
                            <p>
                                Build APIs using the Django Rest Framework, FastAPI, and others.
                            </p>
                        </div>
                        <div>
                            <img src={deploy} alt="" /> <br />
                            <span>Deployment</span>
                            <p>Deploying to Digital Ocean, Render, and others.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section id='asked'>
                <div className="asked__content">
                    <span>Frequently Asked Questions</span>
                    <div className="asked__content-grid">
                        {
                            objdata.map((e, idx) => {
                                return (
                                    <>
                                        <div onClick={() => accordion(idx)} className={
                                            select === idx ? 'content show' : 'content'
                                        }>
                                            <div className="asked__content-grid-elements">
                                                <span>
                                                    {e.title}
                                                </span>
                                                {
                                                    select === idx ? <i class="ri-arrow-up-s-line"></i> : <i class="ri-arrow-down-s-line"></i>
                                                }
                                            </div>
                                            <p>
                                                {e.parag}
                                            </p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
