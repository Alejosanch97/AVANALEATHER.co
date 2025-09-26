import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import '../Styles/demo.css';

// Componente individual de la tarjeta de producto (sin cambios)
const ProductCard = ({ product, handleAddToCart }) => {
    // Estado local para la imagen actual
    const [currentImage, setCurrentImage] = useState(product.mainImage);
    const [currentColor, setCurrentColor] = useState(product.colors[0]);

    // Función para cambiar la imagen al hacer hover en la IMAGEN
    const handleImageHover = () => {
        if (product.hoverImage) {
            setCurrentImage(product.hoverImage);
        }
    };

    // Función para restablecer la imagen al salir de la IMAGEN
    const handleImageLeave = () => {
        setCurrentImage(product.mainImage);
    };

    // Función para cambiar la imagen y el color al pasar el mouse por el punto de color
    const handleColorHover = (color) => {
        const formattedColor = color.toLowerCase().replace(/\s/g, '');
        const imageToDisplay = product.images[formattedColor];
        if (imageToDisplay) {
            setCurrentImage(imageToDisplay);
            setCurrentColor(color);
        } else {
            setCurrentImage(product.mainImage);
            setCurrentColor(product.colors[0]);
        }
    };
    
    // Función para añadir al carrito que llama a la función principal de Demo
    const handleAddClick = () => {
        handleAddToCart(product, currentColor);
    };

    return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
            <div 
                className="product-card h-100 position-relative"
            >
                <img 
                    src={currentImage} 
                    className="card-img-top product-image" 
                    alt={product.name}
                    onMouseEnter={handleImageHover}
                    onMouseLeave={handleImageLeave}
                />
                <div className="card-body text-center">
                    <h5 className="product-card-title">{product.name}</h5>
                    <p className="product-reference text-muted">{product.reference}</p>
                    <div className="product-colors mb-2">
                        {product.colors.map(color => (
                            <span 
                                key={color} 
                                className={`color-dot color-${color.toLowerCase().replace(/\s/g, '')} ${currentColor === color ? 'active-color' : ''}`}
                                title={color}
                                onMouseEnter={() => handleColorHover(color)}
                                onClick={() => handleColorHover(color)}
                            ></span>
                        ))}
                    </div>
                    <p className="product-price">$ {product.price.toLocaleString('es-CO')}</p>
                    <button 
                        className="btn btn-buy-product mt-auto"
                        onClick={handleAddClick}
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
};

export const Demo = () => {
    const { store, dispatch } = useGlobalReducer();
    const { allProducts } = store;
    const location = useLocation();

    const initialCategory = location.state?.category ? [location.state.category] : [];
    
    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const [priceRange, setPriceRange] = useState([0, 300000]);
    const [selectedCategories, setSelectedCategories] = useState(initialCategory);
    const [selectedColors, setSelectedColors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('default');
    
    // NUEVO ESTADO para controlar si los filtros están visibles en móvil (Offcanvas)
    const [showMobileFilters, setShowMobileFilters] = useState(false); 

    const uniqueCategories = [...new Set(allProducts.map(p => p.category))];
    const uniqueColors = [...new Set(allProducts.flatMap(p => p.colors))];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Función de filtrado: se envuelve en useCallback para evitar re-renderizados innecesarios, aunque no es estrictamente necesario en este contexto.
    const runFilters = useCallback(() => {
        let tempProducts = [...allProducts];

        // 1. Filtrar por búsqueda
        if (searchTerm) {
            tempProducts = tempProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.reference.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // 2. Filtrar por categorías
        if (selectedCategories.length > 0) {
            tempProducts = tempProducts.filter(product => selectedCategories.includes(product.category));
        }

        // 3. Filtrar por colores
        if (selectedColors.length > 0) {
            tempProducts = tempProducts.filter(product => product.colors.some(color => selectedColors.includes(color)));
        }

        // 4. Filtrar por rango de precio
        tempProducts = tempProducts.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);

        // 5. Ordenar los productos
        if (sortBy === 'price_asc') {
            tempProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price_desc') {
            tempProducts.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'name_asc') {
            tempProducts.sort((a, b) => a.name.localeCompare(b.name));
        }

        setFilteredProducts(tempProducts);
    }, [selectedCategories, selectedColors, priceRange, searchTerm, sortBy, allProducts]);

    useEffect(() => {
        runFilters();
    }, [runFilters, location.state]);

    // HANDLERS (Sin cambios, pero se mantienen para completar el código)
    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        setSelectedCategories(prev =>
            checked ? [...prev, value] : prev.filter(cat => cat !== value)
        );
    };

    const handleColorChange = (e) => {
        const { value, checked } = e.target;
        setSelectedColors(prev =>
            checked ? [...prev, value] : prev.filter(color => color !== value)
        );
    };

    const handlePriceRangeChange = (e) => {
        const { name, value } = e.target;
        setPriceRange(prev => {
            const newRange = [...prev];
            if (name === "minPrice") newRange[0] = parseInt(value);
            if (name === "maxPrice") newRange[1] = parseInt(value);
            return newRange;
        });
    };
    
    // Función para añadir al carrito (Sin cambios)
    const handleAddToCart = (product, color) => {
        const formattedColor = color.toLowerCase().replace(/\s/g, '');
        const itemToAdd = {
            id: product.id,
            name: product.name,
            reference: product.reference,
            price: product.price,
            image: product.images[formattedColor] || product.mainImage,
            selectedColor: color,
            colors: product.colors,
            images: product.images,
        };

        dispatch({
            type: "ADD_TO_CART",
            payload: itemToAdd,
        });
    };
    
    // *** FUNCIÓN AUXILIAR PARA RENDERIZAR EL CONTENIDO DE LOS FILTROS ***
    // Esto evita la duplicación del código HTML del filtro.
    const renderFilterContent = () => (
        <>
            <div className="filter-group mb-4 pb-3 border-bottom">
                <h5 className="filter-heading">Precio</h5>
                <div className="price-range-display mb-2">
                    $ {priceRange[0].toLocaleString('es-CO')} - $ {priceRange[1].toLocaleString('es-CO')}
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <input
                        type="range"
                        min="0"
                        max="300000"
                        value={priceRange[0]}
                        name="minPrice"
                        onChange={handlePriceRangeChange}
                        className="form-range"
                    />
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <small>$0</small>
                    <small>$300.000+</small>
                </div>
            </div>

            <div className="filter-group mb-4 pb-3 border-bottom">
                <h5 className="filter-heading">Categoría</h5>
                <div className="category-list">
                    {uniqueCategories.map(category => (
                        <div key={category} className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value={category}
                                id={`cat-${category}`}
                                checked={selectedCategories.includes(category)}
                                onChange={handleCategoryChange}
                            />
                            <label className="form-check-label" htmlFor={`cat-${category}`}>
                                {category}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-group mb-4 pb-3 border-bottom">
                <h5 className="filter-heading">Color</h5>
                <div className="color-filter-grid">
                    {uniqueColors.map(color => (
                        <div key={color} className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value={color}
                                id={`color-${color}`}
                                checked={selectedColors.includes(color)}
                                onChange={handleColorChange}
                            />
                            <label className="form-check-label color-dot-label" htmlFor={`color-${color}`}>
                                <span className={`color-dot color-${color.toLowerCase().replace(/\s/g, '')}`} title={color}></span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

    // *** INICIO DEL RENDER PRINCIPAL ***
    return (
        <div className="demo-page container-fluid py-5">
            <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Productos</li>
                </ol>
            </nav>

            <div className="row">
                
                {/* 1. Botón de Filtro para Móviles (Visible sólo en pantallas pequeñas < 992px) */}
                <div className="col-12 d-lg-none mb-4">
                    <button 
                        className="btn btn-primary w-100 mobile-filter-btn"
                        onClick={() => setShowMobileFilters(true)}
                    >
                        Filtrar Productos
                    </button>
                </div>

                {/* 2. Columna de Filtros de Escritorio (Oculta en móviles) */}
                <aside className="col-lg-3 d-none d-lg-block filters-column">
                    <h4 className="filters-title mb-4">Filtrar Por</h4>
                    {renderFilterContent()}
                </aside>

                {/* 3. Contenedor Principal de Productos */}
                <main className="col-lg-9 col-12 products-grid-container">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <p className="product-count mb-0">Hay {filteredProducts.length} productos</p>
                        <div className="sort-by-group d-flex align-items-center">
                            <label htmlFor="sortSelect" className="me-2 text-muted">Ordenar por:</label>
                            <select
                                id="sortSelect"
                                className="form-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="default">Seleccionar</option>
                                <option value="name_asc">Nombre (A-Z)</option>
                                <option value="price_asc">Precio (Menor a Mayor)</option>
                                <option value="price_desc">Precio (Mayor a Menor)</option>
                            </select>
                        </div>
                    </div>

                    <div className="row product-cards-grid">
                        {filteredProducts.length === 0 ? (
                            <div className="col-12 text-center py-5">
                                <p className="lead">No se encontraron productos con los filtros seleccionados.</p>
                                <button className="btn btn-outline-secondary" onClick={() => {
                                    setSelectedCategories([]);
                                    setSelectedColors([]);
                                    setPriceRange([0, 300000]);
                                    setSearchTerm('');
                                    setSortBy('default');
                                }}>
                                    Borrar Filtros
                                </button>
                            </div>
                        ) : (
                            filteredProducts.map(product => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                    handleAddToCart={handleAddToCart}
                                />
                            ))
                        )}
                    </div>
                </main>
            </div>
            
            {/* 4. Overlay/Offcanvas para Filtros Móviles */}
            {showMobileFilters && (
                <div className="mobile-filters-overlay d-lg-none">
                    <div className="filters-content-modal">
                        <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                            <h4 className="filters-title mb-0">Filtrar Por</h4>
                            <button className="btn-close" onClick={() => setShowMobileFilters(false)}></button>
                        </div>
                        
                        {/* Contenido de los filtros renderizado por la función */}
                        {renderFilterContent()}
                        
                        <button 
                            className="btn btn-buy-product w-100 mt-4" 
                            onClick={() => setShowMobileFilters(false)}
                        >
                            Ver {filteredProducts.length} Productos
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};