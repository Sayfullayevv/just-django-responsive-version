import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import '../styles/coursedetail.css'


export default function CourseDetail() {
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
    const objdata = [
        {
            title: 'Introduction',
            parag: ["Views", "Retrieve View", "Images", "Tailwind CSS", "Django Admin", "Listing App"]
        },

    ]

    const { slug } = useParams()
    const post = Coursedata[slug]

    const { title, desc, date, level, start, image, chapters } = post

    const [toggle, settoggle] = useState()
    const [state, setstate] = useState(true)

    const [select, setselect] = useState(null)

    function accordion(idx) {
        if (select == idx) {
            return setselect(null)
        }

        setselect(idx)
    }

    return (
        <>
            <Navbar />
            <section id='detailcourse'>
                <div className="detailcourse__content">
                    <div className="detailcourse__text">
                        <p>{date}</p>
                        <span>{title}</span>
                        <p>{desc}</p>
                        <p><i class="ri-bar-chart-line"></i>{level}</p>
                        <p className="chapters">{chapters}</p>
                    </div>
                    <div className="detailcourse__image">
                        <img src={image} alt="" />
                        <button>{start}</button>
                    </div>

                </div>
                <div className="accordion__course " >
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
                                            {
                                                e.parag.map((e , id) => {
                                                    return (
                                                        <Link className='couraccor' to={`${window.location}/${id}`}>
                                                            <li> <i class="ri-arrow-right-line"></i> {e}</li>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}
