import React from 'react';
import '../Styles/footer.css';

export const Footer = () => (
    <footer className="main-footer py-5">
        <div className="container">
            <div className="row">
                {/* Columna 1: Redes Sociales */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <h5 className="footer-title">Síguenos en redes:</h5>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/tu-instagram" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://wa.me/573225109005" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                {/* Columna 2: Información General */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <h5 className="footer-title">Información</h5>
                    <ul className="footer-links list-unstyled">
                        <li><a href="#">Términos de servicio</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                        <li><a href="#">Política de reembolso</a></li>
                        <li><a href="#">Política de envío</a></li>
                        <li><a href="#">Información de contacto</a></li>
                    </ul>
                </div>

                {/* Columna 3: Preguntas Frecuentes y Cuidados */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <h5 className="footer-title">Ayuda</h5>
                    <ul className="footer-links list-unstyled">
                        <li><a href="#">Preguntas frecuentes</a></li>
                        <li><a href="#">Garantía</a></li>
                        <li><a href="#">Cuidados para tus productos</a></li>
                    </ul>
                </div>

                {/* Columna 4: Contacto y Suscripción */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <h5 className="footer-title">Contacto</h5>
                    <ul className="footer-links list-unstyled">
                        <li><a href="tel:+573225109005">Llámanos: +57 322 510 9005</a></li>
                        <li><a href="mailto:avanaleather@gmail.com">Correo: avanaleather@gmail.com</a></li>
                    </ul>
                    <div className="newsletter-form mt-4">
                        <h6 className="newsletter-title">Suscríbete a nuestro boletín</h6>
                        <form>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Tu correo electrónico" />
                                <button className="btn btn-outline-secondary" type="submit">Suscribir</button>
                            </div>
                            <small className="form-text text-muted mt-2">Al suscribirte, aceptas nuestra política de privacidad.</small>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* Ícono flotante de WhatsApp */}
        <a href="https://wa.me/573225109005" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
        </a>
    </footer>
);