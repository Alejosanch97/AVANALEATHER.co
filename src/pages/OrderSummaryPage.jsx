import React, { useState } from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import '../Styles/ordersummary.css';

export const OrderSummaryPage = () => {
    const { store } = useGlobalReducer();
    const { cart } = store;

    // Estado local para el formulario de datos del cliente
    const [formData, setFormData] = useState({
        nombre: '',
        celular: '',
        correo: '',
        pais: '',
        ciudad: ''
    });

    // Calcula el total del pedido
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const discount = subtotal > 150000 ? subtotal * 0.10 : 0;
    const total = subtotal - discount;

    const formatPrice = (price) => {
        return price.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar los datos del formulario y el pedido
        console.log("Datos del cliente:", formData);
        console.log("Resumen del pedido:", cart);
        
        // Simulación de envío de datos
        alert("¡Pedido confirmado! Pronto nos contactaremos contigo para coordinar la entrega y el pago.");
    };

    if (cart.length === 0) {
        return (
            <div className="container mt-5 text-center">
                <h2>Tu carrito está vacío.</h2>
                <p>Por favor, agrega productos para poder ver el resumen del pedido.</p>
                <Link to="/demo" className="btn btn-dark mt-3">Ver Productos</Link>
            </div>
        );
    }

    return (
        <div className="container my-5 order-summary-page">
            <div className="text-center mb-4">
                <h2 className="display-6 fw-bold">¡Gracias por tu compra!</h2>
                <p className="lead text-muted">A continuación, encontrarás el resumen de tu pedido y el formulario para confirmar los datos de envío.</p>
            </div>

            <div className="row g-4">
                {/* Columna izquierda: Resumen de la Compra */}
                <div className="col-md-6">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h5 className="card-title mb-3 fw-bold">Resumen de la Orden</h5>
                            {cart.map((item) => (
                                <div key={item.id} className="d-flex align-items-center mb-3 border-bottom pb-2">
                                    <img src={item.image} alt={item.name} className="img-thumbnail" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                    <div className="ms-3 flex-grow-1">
                                        <h6 className="mb-0">{item.name}</h6>
                                        <small className="text-muted d-block">Color: {item.selectedColor}</small>
                                    </div>
                                    <span className="fw-bold">{formatPrice(item.price)}</span>
                                </div>
                            ))}
                            <div className="mt-4 pt-3 border-top">
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="text-muted">Subtotal:</span>
                                    <span>{formatPrice(subtotal)}</span>
                                </div>
                                {discount > 0 && (
                                    <div className="d-flex justify-content-between mb-1">
                                        <span className="text-success">Descuento (10%):</span>
                                        <span className="text-success">- {formatPrice(discount)}</span>
                                    </div>
                                )}
                                <div className="d-flex justify-content-between mt-2 fw-bold">
                                    <h4>Total:</h4>
                                    <h4>{formatPrice(total)}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna derecha: Datos de Envío y Pago */}
                <div className="col-md-6">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h5 className="card-title mb-3 fw-bold">Datos de Envío</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre Completo</label>
                                    <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="celular" className="form-label">Celular</label>
                                    <input type="tel" className="form-control" id="celular" name="celular" value={formData.celular} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="correo" name="correo" value={formData.correo} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pais" className="form-label">País</label>
                                    <input type="text" className="form-control" id="pais" name="pais" value={formData.pais} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="ciudad" className="form-label">Ciudad</label>
                                    <input type="text" className="form-control" id="ciudad" name="ciudad" value={formData.ciudad} onChange={handleInputChange} required />
                                </div>
                                
                                <h5 className="card-title mb-3 fw-bold">Método de Pago</h5>
                                <div className="form-check mb-4">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id="pagoContraEntrega" checked readOnly />
                                    <label className="form-check-label" htmlFor="pagoContraEntrega">
                                        Pago Contra Entrega
                                    </label>
                                </div>

                                <div className="d-grid mt-4">
                                    <button type="submit" className="btn btn-lg btn-dark">
                                        Confirmar Pedido
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
