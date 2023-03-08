import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Navbar() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container">
                  <a className="navbar-brand" href="#">Navbar</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" href="#">Link</Link>
                          </li>

                      </ul>
                      <ul className="navbar-nav  mb-2 mb-lg-0">
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Dropdown
                              </a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="#">Action</a></li>
                                  <li><a className="dropdown-item" href="#">Another action</a></li>
                                  <li><hr className="dropdown-divider" /></li>
                                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" aria-current="page" href="/login">Login</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/register">Register</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
    </div>
  )
}
