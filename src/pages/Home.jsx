// src/pages/Home.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/home.css';

export const Home = () => {

    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    // Datos de los Productos Destacados
    const products = [
        { id: 1, name: 'Bolso Avana', price: 180000, category: 'Bolsos', image: 'https://i.pinimg.com/736x/97/cd/c4/97cdc45be52a44ef611eb487fbfa0c10.jpg' },
        { id: 2, name: 'Bolso Jade', price: 190000, category: 'Bolsos', image: 'https://i.pinimg.com/736x/c0/45/a4/c045a4e9f12b4cf6d081454919a5040f.jpg' },
        { id: 3, name: 'Bolso Navy', price: 200000, category: 'Bolsos', image: 'https://i.pinimg.com/736x/8b/8e/66/8b8e662a04d1ba2d4e8ff150e0a4c779.jpg' },
        { id: 4, name: 'Mochila Marine', price: 250000, category: 'Mochilas', image: 'https://i.pinimg.com/736x/65/16/c8/6516c8a997c5df463d66eafba6991bfc.jpg' },
        { id: 5, name: 'Mochila Nautic', price: 250000, category: 'Mochilas', image: 'https://i.pinimg.com/736x/09/48/b3/0948b3bb07eadc43f49c812288e896cf.jpg' },
        { id: 6, name: 'Cinturón Nut', price: 50000, category: 'Accesorios', image: 'https://i.pinimg.com/736x/03/17/f2/0317f236a8c3ad7610c61ff9f961f3f5.jpg' },
        { id: 7, name: 'Monedero Coral', price: 45000, category: 'Accesorios', image: 'https://i.pinimg.com/736x/97/52/4e/97524e83e4b01867f25f01caff2199a0.jpg' },
        { id: 8, name: 'Tarjetero Caoba', price: 45000, category: 'Accesorios', image: 'https://i.pinimg.com/736x/ea/65/e1/ea65e17654968ab07bf5ecc9495f42a2.jpg' },
        { id: 9, name: 'Llavero', price: 15000, category: 'Complementos', image: 'https://i.pinimg.com/1200x/16/d0/63/16d063d4e547f385968ce82f1822fdd6.jpg' },
        { id: 10, name: 'Portapasaportes', price: 25000, category: 'Complementos', image: 'https://i.pinimg.com/736x/05/8a/dc/058adce4e4a362273ce144df277d0ad6.jpg' },
    ];

    const categories = [
        { id: 1, name: 'Bolsos', image: 'https://i.pinimg.com/736x/6b/51/d1/6b51d16745f28b0f7e6828871708d64f.jpg' },
        { id: 2, name: 'Mochilas', image: 'https://i.pinimg.com/736x/7c/e0/e7/7ce0e7b2ca3b811bcefbd2b7bdf6ea7d.jpg' },
        { id: 3, name: 'Accesorios', image: 'https://i.pinimg.com/736x/03/17/f2/0317f236a8c3ad7610c61ff9f961f3f5.jpg' },
        { id: 4, name: 'Complementos', image: 'https://i.pinimg.com/1200x/16/d0/63/16d063d4e547f385968ce82f1822fdd6.jpg' },
    ];
    
    // Función para añadir productos al carrito
    const handleAddToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
        toast.success(`${product.name} agregado al carrito!`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    
    // Nueva función para manejar el clic en la categoría y navegar
    const handleCategoryClick = (categoryName) => {
        navigate('/demo', { state: { category: categoryName } });
    };

    // FUNCIÓN PARA MOSTRAR LA NOTIFICACIÓN DE GIFT CARD
    const handleGiftCardClick = (e) => {
        e.preventDefault(); // Evita que el enlace recargue la página
        toast.info("¡Próximamente! Estamos trabajando para que puedas comprar tus Gift Cards.", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="home-container">
            {/* Agregamos el ToastContainer al final del componente */}
            <ToastContainer />
            {/* Sección del Carrusel (Carousel de Bootstrap) */}
            <section className="carousel-section">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <video className="d-block w-100 carousel-media" autoPlay muted loop playsInline>
                                <source src="./5758634-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                                Tu navegador no soporta videos.
                            </video>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Calidad y Tradición</h1>
                                <p>Productos de cuero hechos a mano con pasión. Descubre el arte de la marroquinería.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./avana1.png" className="d-block w-100 carousel-media" alt="Avana Leather Logo" />
                        </div>
                        <div className="carousel-item">
                            <img src="./avana2.jpg" className="d-block w-100 carousel-media" alt="Descuento especial" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>¡-30% en toda la tienda!</h1>
                                <p>Aprovecha nuestros precios de liquidación por tiempo limitado.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            {/* --- */}

            {/* Nueva Sección: Texto "Hecho en Pasto, Colombia" */}
            <section className="info-section text-center bg-light-gray section-wrapper">
                <h2 className="section-title">Hecho en Pasto, <span className="text-colombia">Colombia</span></h2>
                <p className="info-text">Descubre la artesanía y calidad de nuestros productos, con un legado 100% colombiano.</p>
            </section>

            {/* Nueva Sección: Categorías de Productos */}
            <section className="categories-section container bg-white section-wrapper">
                <h2 className="text-center section-title">Categorías</h2>
                <div className="row category-grid">
                    {categories.map(category => (
                        <div 
                            key={category.id} 
                            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                            onClick={() => handleCategoryClick(category.name)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="card category-card h-100">
                                <img src={category.image} className="card-img-top category-image" alt={category.name} />
                                <div className="card-body d-flex flex-column align-items-center text-center">
                                    <h3 className="card-title category-name">{category.name}</h3>
                                    <div className="btn category-button mt-auto">Ver Más</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Nueva Sección: El Alma de Avana */}
            <section className="quality-section bg-light-gray section-wrapper">
                <div className="container">
                    <h2 className="text-center section-title mb-5">Detalles que Marcan la Diferencia</h2>
                    <div className="row justify-content-center align-items-center">
                        {/* Columna Izquierda */}
                        <div className="col-md-4">
                            <div className="quality-item mb-4">
                                <h3 className="section-title-small">1. Material exterior cuero 100% natural</h3>
                                <p>
                                    Seleccionamos el mejor cuero 100% natural, curado con procesos responsables que no solo garantizan una textura suave y duradera, sino que también respetan el medio ambiente. Cada pieza comienza con un material que es pura esencia.
                                </p>
                            </div>
                            <div className="quality-item">
                                <h3 className="section-title-small">2. Asa en cuero natural</h3>
                                <p>
                                    El asa corta aporta un toque de sofisticación y estructura. Elaborada con cuero 100% colombiano, cuidadosamente trabajado para brindar resistencia, suavidad y una excelente presentación.
                                </p>
                            </div>
                        </div>

                        {/* Columna Central para la Imagen */}
                        <div className="col-md-4 text-center">
                            <img src="./avana3.png" className="img-fluid central-image" alt="Detalles de calidad del producto" />
                        </div>

                        {/* Columna Derecha */}
                        <div className="col-md-4">
                            <div className="quality-item mb-4">
                                <h3 className="section-title-small">3. Asa larga en reata de algodón o en cuero</h3>
                                <p>
                                    Nuestros bolsos incluyen asa larga en reata o en cuero, según las características de cada diseño y la funcionalidad del producto. Esto te da versatilidad para llevarlo de diferentes maneras.
                                </p>
                            </div>
                            <div className="quality-item">
                                <h3 className="section-title-small">4. Costuras reforzadas</h3>
                                <p>
                                    La belleza reside en los detalles. Por eso, nuestras costuras son la espina dorsal de cada diseño. Utilizamos hilo encerado de alta resistencia, aplicado con precisión artesanal para asegurar que cada bolso sea robusto y duradero.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Sección de Productos Destacados */}
            <section className="featured-products container bg-white section-wrapper">
                <h2 className="text-center section-title">Nuestros Productos Destacados</h2>
                <div id="productCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-wrap="true">
                    <div className="carousel-inner">
                        {/* Se crea un carousel-item por cada 4 productos */}
                        <div className="carousel-item active">
                            <div className="row">
                                {products.slice(0, 4).map(product => (
                                    <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                                        <div className="card product-card h-100">
                                            <img src={product.image} className="card-img-top product-image" alt={product.name} />
                                            <div className="card-body d-flex flex-column align-items-center text-center">
                                                <h3 className="card-title product-name">{product.name}</h3>
                                                <p className="card-text product-price">$ {product.price.toLocaleString('es-CO')}</p>
                                                <button 
                                                    className="btn buy-button mt-auto"
                                                    onClick={() => handleAddToCart(product)}>
                                                    Comprar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                {products.slice(4, 8).map(product => (
                                    <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                                        <div className="card product-card h-100">
                                            <img src={product.image} className="card-img-top product-image" alt={product.name} />
                                            <div className="card-body d-flex flex-column align-items-center text-center">
                                                <h3 className="card-title product-name">{product.name}</h3>
                                                <p className="card-text product-price">$ {product.price.toLocaleString('es-CO')}</p>
                                                <button 
                                                    className="btn buy-button mt-auto"
                                                    onClick={() => handleAddToCart(product)}>
                                                    Comprar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row justify-content-center">
                                {products.slice(8, 10).map(product => (
                                    <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                                        <div className="card product-card h-100">
                                            <img src={product.image} className="card-img-top product-image" alt={product.name} />
                                            <div className="card-body d-flex flex-column align-items-center text-center">
                                                <h3 className="card-title product-name">{product.name}</h3>
                                                <p className="card-text product-price">$ {product.price.toLocaleString('es-CO')}</p>
                                                <button 
                                                    className="btn buy-button mt-auto"
                                                    onClick={() => handleAddToCart(product)}>
                                                    Comprar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </section>

            {/* Sección de Gift Card */}
            <section className="gift-card-section bg-light-gray">
                <video className="d-block w-100 gift-card-media" autoPlay muted loop playsInline>
                    <source src="./4452751-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
                <div className="gift-card-content">
                    <div className="gift-card-box">
                        <h2 className="gift-card-title">GIFT CARD</h2>
                        <p className="gift-card-subtitle">VIRTUAL</p>
                        {/* Agregamos el evento onClick y el estilo de cursor */}
                        <a href="#" className="btn gift-card-button" onClick={handleGiftCardClick}>
                            <span>GIFT CARD</span>
                            <span className="arrow">→</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Sección de Historia de la Marca */}
           <section id="historia-de-la-marca" className="brand-story container bg-white section-wrapper">
                <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                     <h2 className="section-title">Nuestra Historia: El Arte del Cuero, Un Legado Familiar</h2>
                     <p className="lead">
                         Avana Leather nace del sueño de honrar la tradición y convertirla en estilo. 
                         Somos una marca colombiana que lleva en su esencia más de 40 años de pasión, 
                         dedicación y maestría heredada de un padre marroquinero.
                    </p>
                    <p>
                        Cada bolso que creamos no es solo un accesorio: es una pieza única, hecha a mano 
                        con paciencia, amor y respeto por el arte del cuero. Diseñamos para mujeres que 
                        buscan más que moda: buscan autenticidad, comodidad y una belleza que perdure en el tiempo.
                    </p>
                    <p>
                        En Avana creemos en lo exclusivo y en lo consciente. Producimos en pequeña escala, 
                        cuidando cada detalle, honrando al medio ambiente y asegurándonos de que cada pieza 
                        cuente una historia distinta: la tuya.
                    </p>
                    <p className="mt-4 fw-bold">
                        Más de 100 mujeres ya llevan un pedacito de nuestro legado en sus manos, 
                        y hoy queremos que tú también te atrevas a vivir la experiencia Avana.
                    </p>
                </div>
                <div className="col-md-6 text-center mt-3 mt-md-0">
                    <img src="./avana4.png" className="img-fluid story-image" alt="Historia de Avana Leather" />
                </div>
            </div>
            </section>
        </div>
    );
};