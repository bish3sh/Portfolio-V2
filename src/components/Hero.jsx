import React from 'react'
import './Hero.css'

const Hero = () => {
  const stats = [
    { id: '01', value: '5+', label: 'YEARS DESIGNING' },
    { id: '02', value: '1M+', label: 'USERS IMPACTED' },
    { id: '03', value: '12+', label: 'PRODUCTS DELIVERED' },
    { id: '04', value: 'END TO END', label: 'RESEARCH TO DELIVERY' },
    { id: '05', value: 'GLOBAL', label: 'CROSS-MARKET WORK' },
    { id: '06', value: 'OPEN', label: 'TO OPPORTUNITIES', highlight: true },
  ]

  return (
    <div className="hero-section">
      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">OH HEYYYY!,<br />YOU FOUND ME!</h1>
        <p className="hero-subtitle">I DESIGN THINGS THAT MAKE PEOPLE'S LIVES A LITTLE EASIER.</p>
        <button className="hero-cta">WANNA CHAT?</button>
      </div>

      {/* Stats Section */}
      <div className="stats-wrapper">
        <p className="stats-intro">fine, get to know me first →</p>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className={`stat-card ${stat.highlight ? 'highlight' : ''}`}>
              <span className="stat-id">{stat.id}</span>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
