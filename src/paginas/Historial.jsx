import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_KEY } from '../datos/factores';
import './Historiales.css';

function Historial() {
    const [historial, setHistorial] = useState([]);

    const navigate = useNavigate();
    const formatoMoneda = (numero) => {
        return numero ? numero.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 'N/A';
    };

    const cargarHistorial = () => {
        try {
            const historialGuardado = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (historialGuardado) {
                const data = JSON.parse(historialGuardado);
                setHistorial(data.reverse()); 
            } else {
                setHistorial([]);
            }
        } catch (error) {
            console.error("Error al cargar historial desde localStorage:", error);
            setHistorial([]);
        }
    };

    const handleVolver = () => {
         navigate('/'); 
    };
    useEffect(() => {
        cargarHistorial();
    }, []); 

  const limpiarHistorial = () => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: '¡Se eliminará todo el historial de cotizaciones de forma permanente!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, ¡eliminar todo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            setHistorial([]);
            
            Swal.fire(
                '¡Eliminado!',
                'Tu historial ha sido borrado.',
                'success'
            );
        }
    });
};

    return (
        <div className="historial-container">
            <h2>Historial de Cotizaciones 📂</h2>

            <button onClick={cargarHistorial} className="recargar-button">Recargar Historial</button>
            

            {historial.length > 0 && (
            <button onClick={limpiarHistorial} className="limpiar-button">Limpiar Historial</button>
            )}

            <button onClick={handleVolver} className="volver-button">🏠 Volver al Cotizador</button>
            
            
            {historial.length === 0 ? (
                <p>No hay cotizaciones guardadas en el historial. ¡Realiza una cotización y guárdala!</p>
            ) : (
                <ul className="historial-list">
                    {historial.map((item) => (
                        <li key={item.id} className="historial-item">
                            <p><strong>Fecha:</strong> {item.fecha}</p>
                            <p><strong>Propiedad:</strong> {item.propiedad}</p>
                            <p><strong>Ubicación:</strong> {item.ubicacion}</p>
                            <p><strong>Superficie:</strong> {item.m2} m²</p>
                            <h4 className="historial-total">
                                Total: ${formatoMoneda(item.total)}
                            </h4>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Historial;
