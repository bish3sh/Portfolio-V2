import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const Navbar = () => {

const items = ['Home', 'Services', 'Projects', 'Education', 'Contact']
    const [active, setActive] = useState('Home')
    const itemsRef = useRef(null)      // ref on .nav-items instead of .floating-nav
    const indicatorRef = useRef(null)

    useEffect(() => {
        const container = itemsRef.current
        const indicator = indicatorRef.current
        if (!container || !indicator) return

        const activeEl = Array.from(container.querySelectorAll('.nav-item')).find(
            (el) => el.dataset.value === active
        )
        if (activeEl) {
            const rect = activeEl.getBoundingClientRect()
            const parentRect = container.getBoundingClientRect()
            const left = rect.left - parentRect.left
            indicator.style.width = `${rect.width}px`
            indicator.style.transform = `translateX(${left}px)`
        }
    }, [active])

  return (
    <div className="navbar-wrap">
            <nav className="floating-nav">
                <div className="nav-items" ref={itemsRef}>
                    <div className="active-indicator" ref={indicatorRef} />
                    {items.map((it) => (
                        <button
                            key={it}
                            className={`nav-item ${active === it ? 'active' : ''}`}
                            data-value={it}
                            onClick={() => setActive(it)}
                        >
                            {it}
                        </button>
                    ))}
                </div>
            </nav>
        </div>
  )
}

export default Navbar
