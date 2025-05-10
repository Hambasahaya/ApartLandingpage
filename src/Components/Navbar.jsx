import React from "react";
// import '../Styles/style.css'

export default function Navbar(){
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-5 p-3">
    <a className="navbar-brand rounded" href="/">The Daira Room Apartemen </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto d-flex gap-4 bg-white p-2 rounded-5 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#unit">Unit</a>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto">
        <a href="https://wa.link/xzphub" class="btn btn-outline-secondary rounded-5">Contac Us</a>
    </ul>
    </div>
</nav>
    );
}