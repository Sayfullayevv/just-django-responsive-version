import React from 'react'
import Navbar from './Navbar'
import '../styles/blog.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Blog() {

  const blog = {
   "1": {
      img: 'https://justdjango.com/_next/image?url=https%3A%2F%2Fassets.justdjango.com%2Fmedia%2Fpost_thumbnails%2Fdjango-chat.webp&w=750&q=75',
      title: 'Build a Chat App with Django Channels',
      desc: "In this tutorial you will learn how to build a comprehensive chat app with Django Channel, React and TypeScript.",
      date: 'May 24, 2022',
    },
    "2" : {
      img: 'https://justdjango.com/_next/image?url=https%3A%2F%2Fassets.justdjango.com%2Fmedia%2Fpost_thumbnails%2Fdjango-chat.webp&w=750&q=75',
      title: 'Build a Chat App with Django Channels',
      desc: "In this tutorial you will learn how to build a comprehensive chat app with Django Channel, React and TypeScript.",
      date: 'May 24, 2022',
    },
    "3": {
      img: 'https://justdjango.com/_next/image?url=https%3A%2F%2Fassets.justdjango.com%2Fmedia%2Fpost_thumbnails%2Fdjango-chat.webp&w=750&q=75',
      title: 'Build a Chat App with Django Channels',
      desc: "In this tutorial you will learn how to build a comprehensive chat app with Django Channel, React and TypeScript.",
      date: 'May 24, 2022',
    },
    "4": {
      img: 'https://justdjango.com/_next/image?url=https%3A%2F%2Fassets.justdjango.com%2Fmedia%2Fpost_thumbnails%2Fdjango-chat.webp&w=750&q=75',
      title: 'Build a Chat App with Django Channels',
      desc: "In this tutorial you will learn how to build a comprehensive chat app with Django Channel, React and TypeScript.",
      date: 'May 24, 2022',
    },
    "5": {
      img: 'https://justdjango.com/_next/image?url=https%3A%2F%2Fassets.justdjango.com%2Fmedia%2Fpost_thumbnails%2Fdjango-chat.webp&w=750&q=75',
      title: 'Build a Chat App with Django Channels',
      desc: "In this tutorial you will learn how to build a comprehensive chat app with Django Channel, React and TypeScript.",
      date: 'May 24, 2022',
    },
    "6": {
      img: 'https://justdjango.com/_next/image?url=https%3A%2F%2Fassets.justdjango.com%2Fmedia%2Fpost_thumbnails%2Fdjango-chat.webp&w=750&q=75',
      title: 'Build a Chat App with Django Channels',
      desc: "In this tutorial you will learn how to build a comprehensive chat app with Django Channel, React and TypeScript.",
      date: 'May 24, 2022',
    },
  }


  return (
    <>
      <Navbar />
      <div id="blog">
        <div className="blog__text">
          <span>Blog</span>
          <p>Learn more about web development, Django, and more.</p>
        </div>
        <div className="blog__grid">
          {
            Object.entries(blog).map(([slug, { img, title, desc, date }]) => {
              return (
                <Link className='blog-cont' to={`/blog/${slug}`}>
                    <img src={img} alt="" />
                    <span>{title}</span>
                    <p>{desc}</p>
                    <p>{date}</p>
                </Link>
              )
            })
          }
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}
