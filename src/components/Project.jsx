import React from 'react'
import './Project.css'
import calculatorImg from '../assets/calculator.png'
import todoImg from '../assets/todo.png'
import weatherImg from '../assets/weather.png'
import sastoImg from '../assets/sasto.png'
import anyaImg from '../assets/anya-home.jpg'
import raktImg from '../assets/raktsewa.png'
import minaImg from '../assets/mina.png'
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

const selectedProjects = [
    {
        title: 'Sasto Masto',
        description: 'A database-focused food ordering platform built for high-speed navigation, intuitive menu browsing, and real-time order tracking.',
        image: sastoImg,
        tech: ['C#'],
        link: 'https://bish3sh.github.io/Calculator/'
    },
    {
        title: 'Aanya',
        description: 'A modern online clothing store designed for effortless catalog browsing, personalized style discovery, and a seamless checkout experience.',
        image: anyaImg,
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://bish3sh.github.io/To-do-Web-App/'
    },
    {
        title: 'RaktaSewa',
        description: 'A real-time blood bank platform built to connect donors with emergency requests, streamline inventory tracking, and speed up life-saving blood distribution.',
        image: raktImg,
        tech: ['HTML', 'CSS', 'JavaScript', 'Php'],
        link: 'https://bish3sh.github.io/Weather-app/'
    },
      {
        title: 'Mina',
        description: 'A modern and intelligent telemedicine platform developed as a university project, hackthon project to offer a seamless experience for online medical consultations, appointment bookings, and AI-assisted healthcare support.',
        image: minaImg,
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://bish3sh.github.io/Weather-app/'
    }
]

const Project = () => {
  return (
    <div className='project'>
        <h2 className="heading">Simple Projects</h2>

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
        </div>

        <h2 className="heading">Works</h2>
        <div className="web-projects-2">
            <div className="web-projects-container-2">
                {selectedProjects.map((proj, i) => (
                    <Reveal key={proj.title} className="project-item" delay={i * 150}>
                        <div className="project-card-2">
                            <div className="card-image-2">
                                <img src={proj.image} alt={proj.title} />
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