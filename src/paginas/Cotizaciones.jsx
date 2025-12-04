import './Cotizacion.css';
import React, { useState } from 'react';
import { FACTORES_COTIZACION, VALOR_BASE, MAPEO_VALORES, LOCAL_STORAGE_KEY } from '../datos/factores'; 
import Swal from 'sweetalert2'


function Cotizacion () {
    const [propiedadSeleccionada, setPropiedadSeleccionada] = useState('');
    const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState('');
    const [metrosCuadrados, setMetrosCuadrados] = useState('');
    const [cotizacionTotal, setCotizacionTotal] = useState(null);
    
    const formatoMoneda = (numero) => {
        return numero.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const calcularCotizacion = (e) => {
        e.preventDefault(); 
            Swal.fire({
                icon: "success",
                title: "¡Cotización Exitosa!",
                text: "El cálculo se ha completado correctamente.",
            });
        
        if (!propiedadSeleccionada || !ubicacionSeleccionada || Number(metrosCuadrados) <= 0) {
            setCotizacionTotal(null);
            Swal.fire({
                icon: "error",
                title: "¡Error al cotizar!",
                text: "Por favor, completa todos los campos en pantalla",
            });
            return;
            
        }

        const tipoPropiedadJSON = MAPEO_VALORES[propiedadSeleccionada];
        const tipoUbicacionJSON = MAPEO_VALORES[ubicacionSeleccionada];

        const factorPropiedad = FACTORES_COTIZACION.find(f => 
            f.categoria === 'propiedad' && f.tipo === tipoPropiedadJSON
        )?.factor || 1; 

        const factorUbicacion = FACTORES_COTIZACION.find(f => 
            f.categoria === 'ubicacion' && f.tipo === tipoUbicacionJSON
        )?.factor || 1; 
        
        const m2 = Number(metrosCuadrados);
        const resultado = VALOR_BASE * factorPropiedad * factorUbicacion * m2;
        
        setCotizacionTotal(resultado);
    };

    const guardarCotizacion = () => {
        if (cotizacionTotal === null || cotizacionTotal <= 0) {
            Swal.fire({
              title: "¡Error!",
              text: "No hay una cotización válida para guardar.",
              icon: "error", 
            });
            return;
        }

        const nuevaCotizacion = {
            id: Date.now(), // 
            fecha: new Date().toLocaleString(), 
            propiedad: MAPEO_VALORES[propiedadSeleccionada],
            ubicacion: MAPEO_VALORES[ubicacionSeleccionada],
            m2: Number(metrosCuadrados),
            total: cotizacionTotal
        };

        try {
        
            const historialGuardado = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
            
            historialGuardado.push(nuevaCotizacion);

            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(historialGuardado));
            Swal.fire({
              title: "¡Éxito!",
              text: "Cotización guardada exitosamente",
              icon: "success", 
            });
            } catch (error) {
              console.error("Error al guardar en localStorage:", error);
            Swal.fire({
              title: "¡Error!",
              text: "Error al guardar la cotización",
              icon: "error", 
            });
        }
    };

    const resetFormulario = () => {
        setPropiedadSeleccionada('');
        setUbicacionSeleccionada('');
        setMetrosCuadrados('');
        setCotizacionTotal(null);
    };

    return (

        <div className="cotizacion-form-container">
            <div className='from-text'>
               <h1 className="cotizacion-title">Completa los datos solicitados para cotizar</h1>
               <p className='cotizacion-subtitle'>Cotiza tu Seguro en Segundos y Ahorra ⏱️</p>
               <p className='cotizacion-subtitle'>Solo necesitamos 3 datos. Sin compromiso y 100% online. ✅</p>
            </div>

            <form onSubmit={calcularCotizacion}>
                <div className="form-group">
                    <label htmlFor="tipoPropiedad">Tipo de propiedad 🏠</label>
                    <select 
                        id="tipoPropiedad" 
                        name="tipoPropiedad" 
                        className="form-select"
                        value={propiedadSeleccionada} 
                        onChange={(e) => setPropiedadSeleccionada(e.target.value)} 
                    >
                        <option value="" disabled>Selecciona el tipo de propiedad...</option>
                        <option value="casa">Casa</option>
                        <option value="ph">P.H.</option>
                        <option value="depto">Depto. Edificio</option>
                        <option value="barrioPrivado">Barrio Privado</option>
                        <option value="oficina">Oficina</option>
                        <option value="localComercial">Local Comercial</option>
                        <option value="deposito">Depósito Logística</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="ubicacionPropiedad">Ubicación de la propiedad 📌</label>
                    <select 
                        id="ubicacionPropiedad" 
                        name="ubicacionPropiedad" 
                        className="form-select"
                        value={ubicacionSeleccionada} 
                        onChange={(e) => setUbicacionSeleccionada(e.target.value)} 
                    >
                        <option value="" disabled>Selecciona la ubicación...</option>
                        <option value="caba">Ciudad Autónoma de Bs. As.</option>
                        <option value="tandil">Tandil, Buenos Aires</option>
                        <option value="costa">Costa Atlántica</option>
                        <option value="patagonia">Patagonia Argentina</option>
                        <option value="gba">Gran Buenos. Aires.</option>
                        <option value="9deJulio">9 de Julio, Pcia de Bs. As.</option>
                        <option value="chivilcoy">Chivilcoy, Pci de Bs. As.</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="metrosCuadrados">Metros cuadrados 📏</label>
                    <input 
                        type="number" 
                        id="metrosCuadrados"
                        name="metrosCuadrados"
                        placeholder='Ingresa los Metros cuadrados ' 
                        className="form-input"
                        min="15"
                        max="2000" 
                        value={metrosCuadrados} 
                        onChange={(e) => setMetrosCuadrados(e.target.value)}
                    />
                </div>

                <div className='button-container'>
                   <button type="submit" className="cotizacion-button">Cotizar</button>
                   <button type="button" onClick={resetFormulario} className="reset-button"> Resetear</button>
                </div>
            </form>

            {cotizacionTotal !== null && cotizacionTotal > 0 && (
                <div className='resultado-cotizacion'>
                    <h3>✅ Cotización Estimada</h3>
                    <p>
                        El valor para tipo de propiedad {MAPEO_VALORES[propiedadSeleccionada]} con ubicacion en {MAPEO_VALORES[ubicacionSeleccionada]} con {metrosCuadrados} m² es de:
                    </p>
                    <h2>
                        ${formatoMoneda(cotizacionTotal)}
                    </h2>
                    
                    <button 
                        onClick={guardarCotizacion} 
                        className="cotizacion-save-button">💾
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cotizacion;