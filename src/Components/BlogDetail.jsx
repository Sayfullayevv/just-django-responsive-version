import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import '../styles/blogdetail.css'
import Code from '../assets/code.png'
import Footer from './Footer'

export default function BlogDetail() {
    const [code, setcode] = useState(
        `
THIRD_PARTY_APPS = [
    ...
    'channels',
]
        `
    )

    const [codetwo, setcodetwo] = useState(
        `
application = ProtocolTypeRouter(
    {
        "http": get_asgi_application(),
        "websocket": URLRouter(routing.websocket_urlpatterns),
    }
)
        `
    )
    const blog = {
        "1": {
            img: 'https://justdjango.com/_next/image?url=https%3A%2F%2Fassets.justdjango.com%2Fmedia%2Fpost_thumbnails%2Fdjango-chat.webp&w=750&q=75',
            title: 'Build a Chat App with Django Channels',
            desc: "In this tutorial you will learn how to build a comprehensive chat app with Django Channel, React and TypeScript.",
            date: 'May 24, 2022',
        },
        "2": {
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
    const { slug } = useParams()
    const eachblog = blog[slug]

    const { title, img, desc, date } = eachblog

    return (
        <>
            <Navbar />
            <section id='blogdetail'>
                <div className="blogdetail__content">
                    <div className="blogdetail__content-title">
                        <p>
                            {date}
                        </p>
                        <span>
                            {title}
                        </span> <br />
                        <img src={img} alt="" />
                    </div>
                    <div className="blogdetail__content-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi possimus illum provident fugit repudiandae unde explicabo necessitatibus nam esse repellat tempore cum nemo temporibus ratione perspiciatis eius aspernatur praesentium voluptate, repellendus accusamus quaerat animi consequatur? Tempora a adipisci numquam, hic beatae quisquam at. Veniam eveniet atque minima? Similique, id tenetur! Iure pariatur, nobis molestiae numquam optio quod? Modi nam facilis eligendi iste eius labore, necessitatibus repudiandae, assumenda suscipit magnam perferendis. Harum, architecto, laudantium exercitationem, ab amet assumenda quae distinctio esse natus tempore omnis rem quam ipsam facilis accusantium odit. Quo earum maiores praesentium velit voluptatibus laudantium sit magnam porro!
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum at ut repellat inventore ad. Reiciendis minus, magnam maiores ullam dolores impedit officia assumenda corporis numquam quaerat neque pariatur fugit, explicabo ipsam incidunt voluptatem dolorem sed dolore laudantium. Cupiditate recusandae, ratione quasi repudiandae magni fugiat ipsam obcaecati expedita laudantium atque illum aliquam facilis. Fuga porro nam reprehenderit ea nulla cumque! Non necessitatibus tempore magnam consequatur repellat accusantium quia quisquam harum esse amet illum dolore animi perferendis nesciunt nihil explicabo vitae, ipsum fugit. Harum est natus officiis minus ut? Maxime accusantium, obcaecati, vero asperiores enim itaque dolores necessitatibus beatae exercitationem, impedit corporis.
                        </p>
                        <div className="code__area">
                            <pre>
                                <p>
                                    {code}
                                </p>
                            </pre>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellendus? Consectetur magnam accusamus expedita quas deserunt dicta repellat corporis nemo debitis commodi aliquid, odit sit dignissimos vero corrupti at earum natus pariatur enim sunt, laboriosam architecto! Error voluptates minima explicabo porro officia. Aliquam debitis quam, doloribus id quis obcaecati itaque hic, impedit distinctio nulla vero placeat porro culpa labore odit, necessitatibus ad maxime sint! Excepturi itaque porro quibusdam cum distinctio eligendi iure ea totam pariatur unde in saepe quaerat debitis officia reiciendis fugiat odio repellendus sequi alias, aliquid harum quam, sit perferendis iusto? Illum pariatur et repellat perferendis, est a?
                        </p>

                        <span>
                            Django Channels Setup
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum at ut repellat inventore ad. Reiciendis minus, magnam maiores ullam dolores impedit officia assumenda corporis numquam quaerat neque pariatur fugit, explicabo ipsam incidunt voluptatem dolorem sed dolore laudantium. Cupiditate recusandae, ratione quasi repudiandae magni fugiat ipsam obcaecati expedita laudantium atque illum aliquam facilis. Fuga porro nam reprehenderit ea nulla cumque! Non necessitatibus tempore magnam consequatur repellat accusantium quia quisquam harum esse amet illum dolore animi perferendis nesciunt nihil explicabo vitae, ipsum fugit. Harum est natus officiis minus ut? Maxime accusantium, obcaecati, vero asperiores enim itaque dolores necessitatibus beatae exercitationem, impedit corporis.
                        </p>
                        <div className="code__area">
                            <pre>
                                <p>pip install channels</p>
                            </pre>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellendus? Consectetur magnam accusamus expedita quas deserunt dicta repellat corporis nemo debitis commodi aliquid, odit sit dignissimos vero corrupti at earum natus pariatur enim sunt, laboriosam architecto! Error voluptates minima explicabo porro officia. Aliquam debitis quam, doloribus id quis obcaecati itaque hic, impedit distinctio nulla vero placeat porro culpa labore odit, necessitatibus ad maxime sint! Excepturi itaque porro quibusdam cum distinctio eligendi iure ea totam pariatur unde in saepe quaerat debitis officia reiciendis fugiat odio repellendus sequi alias, aliquid harum quam, sit perferendis iusto? Illum pariatur et repellat perferendis, est a?
                        </p>
                        <div className="code__area">
                            <pre>
                                <p>
                                    {codetwo}
                                </p>
                            </pre>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellendus? Consectetur magnam accusamus expedita quas deserunt dicta repellat corporis nemo debitis commodi aliquid, odit sit dignissimos vero corrupti at earum natus pariatur enim sunt, laboriosam architecto! Error voluptates minima explicabo porro officia. Aliquam debitis quam, doloribus id quis obcaecati itaque hic, impedit distinctio nulla vero placeat porro culpa labore odit, necessitatibus ad maxime sint! Excepturi itaque porro quibusdam cum distinctio eligendi iure ea totam pariatur unde in saepe quaerat debitis officia reiciendis fugiat odio repellendus sequi alias, aliquid harum quam, sit perferendis iusto? Illum pariatur et repellat perferendis, est a?
                        </p>

                    </div>
                </div>
            </section>
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}
