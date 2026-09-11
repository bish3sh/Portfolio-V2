import React from 'react'
import './Project.css'
import calculatorImg from '../assets/calculator.png'
import todoImg from '../assets/todo.png'
import weatherImg from '../assets/weather.png'
import sastoImg from '../assets/sasto.png'
import anyaImg from '../assets/anya-home.jpg'
import anyaImg2 from '../assets/anya-home-2.jpg'
import raktImg from '../assets/raktsewa.jpg'
import raktImg2 from '../assets/raktsewa-2.png'
import minaImg from '../assets/mina.jpg'
import minaImg2 from '../assets/mina-2.png'
import neweraImg from '../assets/new-era.jpg'
import neweraImg2 from '../assets/new-era-2.jpg'
import what2eatImg from '../assets/eat.jpg'
import what2eatImg2 from '../assets/eat-2.jpg'
import Reveal from './Reveal'

const simpleProjects = [
    {
        title: 'Calculator',
        description: 'A fully functional calculator with a clean interface supporting basic arithmetic operations.',
        image: calculatorImg,
        tech: ['HTML', 'CSS', 'JS'],
        link: 'https://bish3sh.github.io/Calculator/'
    },
    {
        title: 'To-Do List',
        description: 'A responsive task management app with add, delete, and mark complete functionality.',
        image: todoImg,
        tech: ['HTML', 'CSS', 'JS'],
        link: 'https://bish3sh.github.io/To-do-Web-App/'
    },
    {
        title: 'Weather Tracker',
        description: 'Real-time weather app with geolocation support and animated forecasts.',
        image: weatherImg,
        tech: ['HTML', 'CSS', 'JS'],
        link: 'https://bish3sh.github.io/Weather-app/'
    }
]

// NOTE: hoverImage defaults to the same image so nothing breaks visually.
// Drop in a second screenshot per project (e.g. import sastoImgHover from '../assets/sasto-2.png')
// and set hoverImage: sastoImgHover to get the actual crossfade swap.
const selectedProjects = [
    {
        title: 'Aanya',
        description: 'A modern online clothing store designed for effortless catalog browsing, personalized style discovery, and a seamless checkout experience.',
        image: anyaImg,
        hoverImage: anyaImg2,
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://bish3sh.github.io/To-do-Web-App/'
    },
    {
        title: 'RaktaSewa',
        description: 'A real-time blood bank platform built to connect donors with emergency requests, streamline inventory tracking, and speed up life-saving blood distribution.',
        image: raktImg,
        hoverImage: raktImg2,
        tech: ['HTML', 'CSS', 'JavaScript', 'Php'],
        link: 'https://bish3sh.github.io/Weather-app/'
    },
      {
        title: 'Mina',
        description: 'A modern and intelligent telemedicine platform developed as a university project, hackthon project to offer a seamless experience for online medical consultations, appointment bookings, and AI-assisted healthcare support.',
        image: minaImg,
        hoverImage: minaImg2,
        tech: ['HTML', 'CSS', 'JavaScript','Python'],
        link: 'https://bish3sh.github.io/Weather-app/'
    },
    {
        title: 'New Era',
        description: 'A sleek digital footwear boutique engineered for immersive collection exploration, dynamic fit guidance, and a friction-free purchase journey.',
        image: neweraImg,
        hoverImage: neweraImg2,
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://bish3sh.github.io/Calculator/'
    },
    {
        title: 'What2Eat',
        description: 'An intuitive, modern food ordering app designed for seamless menu browsing, customization, and real-time tracking.',
        image: what2eatImg,
        hoverImage: what2eatImg2,
        tech: ['HTML', 'CSS', 'JavaScript','PHP'],
        link: 'https://bish3sh.github.io/Calculator/'
    }
]

const Project = () => {
  return (
    <div className='project'>
        {/* <h2 className="heading">Simple Projects</h2>

        <div className="web-projects">
            <div className="web-projects-container">
                {simpleProjects.map((proj, i) => (
                    
                                    
                    <Reveal key={proj.title} delay={i * 150}>
                        <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card"
                        >
                            <div className="card-image">
                                <img src={proj.image} alt={proj.title} />
                            </div>
                            <div className="card-overlay">
                                <div className="card-header">
                                    <h3>{proj.title}</h3>
                                    <p className="card-subtitle">{proj.description}</p>
                                </div>
                                <div className="card-footer">
                                    <div className="card-stats">
                                        {proj.tech.map((t) => (
                                            <span className="tech-tag" key={t}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Reveal>
                    
                ))}
            </div>
        </div> */}

        <h2 className="heading">Works</h2>
        <div className="web-projects-2">
            <div className="web-projects-container-2">
                {selectedProjects.map((proj, i) => (
                    <Reveal key={proj.title} className="project-item" delay={i * 150}>
                        <div className="project-card-2">
                            <div className="card-image-2">
                                <img src={proj.image} alt={proj.title} className="img-base" />
                                <img src={proj.hoverImage} alt={`${proj.title} alternate view`} className="img-hover" />
                            </div>
                        </div>

                        <div className="project-info">
                            <div className="project-tags">
                                {proj.tech.map((t) => (
                                    <span className="tag-pill" key={t}>
                                        <span className="dot"></span>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="info-header">
                                <h3>{proj.title}</h3>
                            </div>

                            <p className="project-description">{proj.description}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Project