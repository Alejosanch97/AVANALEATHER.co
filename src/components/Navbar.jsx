import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar avana-navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Contenedor de la izquierda: Menú de navegación */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/nosotros" className="nav-link">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productos" className="nav-link">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-link">Contacto</Link>
                        </li>
                        {/* Íconos para móviles dentro del menú desplegable */}
                        <li className="nav-item d-lg-none d-flex justify-content-center mt-3">
                            <a href="https://wa.me/573225109005" target="_blank" rel="noopener noreferrer" className="btn nav-icon-btn">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                            <button className="btn nav-icon-btn">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Contenedor del centro: Logo de Avana */}
                <Link to="/" className="navbar-brand position-absolute top-50 start-50 translate-middle">
                    <img src="./src/assets/img/logosinfondo.png" alt="Avana Leather Logo" className="logo" />
                </Link>

                {/* Contenedor de la derecha: Botones e íconos */}
                <div className="d-flex align-items-center ms-auto">
                    {/* Botón para menú en móviles (Hamburguesa) */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Íconos para vista de escritorio */}
                    <div className="d-none d-lg-flex align-items-center">
                        <button className="btn nav-icon-btn">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <a href="https://wa.me/573225109005" target="_blank" rel="noopener noreferrer" className="btn nav-icon-btn">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};