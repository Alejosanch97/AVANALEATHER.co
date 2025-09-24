import React from 'react';
import { useNavigate } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import '../Styles/cart.css';

export const CartModal = ({ show, handleClose }) => {
    const { store, dispatch } = useGlobalReducer();
    const { cart, allProducts } = store;
    const navigate = useNavigate();

    const handleRemoveFromCart = (itemId) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: itemId
        });
    };

    const handleChangeColor = (item, newColor) => {
        const product = allProducts.find(p => p.id === item.id);
        
        if (product) {
            const formattedColor = newColor.toLowerCase().replace(/\s/g, '');
            const newImage = product.images[formattedColor];

            if (newImage) {
                dispatch({
                    type: "UPDATE_CART_ITEM_COLOR",
                    payload: {
                        itemId: item.id,
                        newColor: newColor,
                        newImage: newImage
                    }
                });
            }
        }
    };

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

    const handleConfirmOrder = () => {
        handleClose();
        navigate('/order-summary');
    };

    return (
        <div 
            className={`modal fade ${show ? 'show d-block' : ''}`} 
            tabIndex="-1" 
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={(e) => {
                // Cierra el modal solo si se hace clic en el fondo
                if (e.target.classList.contains('modal')) {
                    handleClose();
                }
            }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Mi Carrito de Compras</h5>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        {cart.length === 0 ? (
                            <p className="text-center text-muted">Tu carrito está vacío.</p>
                        ) : (
                            <div>
                                {cart.map((item) => (
                                    <div key={item.id} className="d-flex align-items-center mb-3 border-bottom pb-2">
                                        <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px' }} />
                                        <div className="ms-3 flex-grow-1">
                                            <h6 className="mb-0">{item.name}</h6>
                                            <small className="text-muted d-block">{`Color: ${item.selectedColor || 'N/A'}`}</small>
                                            <small className="text-muted d-block">{formatPrice(item.price)}</small>
                                            {item.colors && item.colors.length > 1 && (
                                                <div className="mt-2">
                                                    <small className="fw-bold d-block mb-1">Cambiar Color:</small>
                                                    <div className="d-flex gap-2">
                                                        {item.colors.map(color => (
                                                            <span
                                                                key={color}
                                                                className={`color-dot color-${color.toLowerCase().replace(/\s/g, '')}`}
                                                                style={{ border: item.selectedColor === color ? '2px solid #8b4513' : '1px solid #ccc', cursor: 'pointer' }}
                                                                onClick={() => handleChangeColor(item, color)}
                                                            ></span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <button 
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => handleRemoveFromCart(item.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                ))}
                                <div className="mt-4 pt-3 border-top">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="text-muted">Subtotal:</h6>
                                        <h6>{formatPrice(subtotal)}</h6>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="text-success">Descuento (10%):</h6>
                                        <h6 className="text-success">- {formatPrice(discount)}</h6>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <h4>Total:</h4>
                                        <h4>{formatPrice(total)}</h4>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button 
                            type="button" 
                            className="btn btn-lg btn-confirm-order" 
                            disabled={cart.length === 0}
                            onClick={handleConfirmOrder}
                        >
                            Confirmar Pedido
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
