import React from 'react'

export default function NavBar({ logo }) {
  return (
    <nav className="nav-container d-flex justify-content-between mb-2">
      <img
        alt=""
        src={logo}
        className="img-fluid logo"
      />
      <div>
        <i className="fas fa-wallet"></i>
        <small className="text-nav">Pagos en línea</small>
      </div>
    </nav>
  )
}
