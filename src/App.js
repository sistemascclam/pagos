import React from 'react'
import NavBar from './components/NavBars/NavBar';
import Index from './components/Views/Index';
import 'animate.css';
import './assets/css/index.scss';

export default function App() {
  return (
    <div>
      <NavBar logo={require("./assets/img/cclam-logo-sm.png").default} />
      <div className="container pb-5">
        <Index />
      </div>
    </div>
  )
}
