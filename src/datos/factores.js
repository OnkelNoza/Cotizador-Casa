// factores.js

// 1. Datos JSON (Tu archivo original)
export const LOCAL_STORAGE_KEY = 'cotizaciones_historial';

export const FACTORES_COTIZACION = [
    { "categoria": "propiedad", "tipo": "Casa", "factor": 1.09 },
    { "categoria": "propiedad", "tipo": "P.H.", "factor": 1.05 },
    { "categoria": "propiedad", "tipo": "Depto. Edificio", "factor": 1.02 },
    { "categoria": "propiedad", "tipo": "Barrio Privado", "factor": 1.19 },
    { "categoria": "propiedad", "tipo": "Oficina", "factor": 2.39 },
    { "categoria": "propiedad", "tipo": "Local Comercial", "factor": 1.41 },
    { "categoria": "propiedad", "tipo": "Depósito Logística", "factor": 1.92 },
    { "categoria": "ubicacion", "tipo": "Ciudad Autónoma de Bs. As.", "factor": 1.13 },
    { "categoria": "ubicacion", "tipo": "Tandil, Buenos Aires", "factor": 1.04 },
    { "categoria": "ubicacion", "tipo": "Costa Atlántica", "factor": 1.29 },
    { "categoria": "ubicacion", "tipo": "Patagonia Argentina", "factor": 1.01 },
    { "categoria": "ubicacion", "tipo": "Gran Buenos. Aires.", "factor": 1.25 },
    { "categoria": "ubicacion", "tipo": "9 de Julio, Provincia de Bs. As.", "factor": 1.005 },
    { "categoria": "ubicacion", "tipo": "Chivilcoy, Provincia de Bs. As.", "factor": 1.012 }
];

export const VALOR_BASE = 351.86;

export const MAPEO_VALORES = {
    casa: "Casa",
    ph: "P.H.",
    depto: "Depto. Edificio",
    barrioPrivado: "Barrio Privado",
    oficina: "Oficina",
    localComercial: "Local Comercial",
    deposito: "Depósito Logística",

    caba: "Ciudad Autónoma de Bs. As.",
    tandil: "Tandil, Buenos Aires",
    costa: "Costa Atlántica",
    patagonia: "Patagonia Argentina",
    gba: "Gran Buenos. Aires.",
    '9deJulio': "9 de Julio, Provincia de Bs. As.",
    chivilcoy: "Chivilcoy, Provincia de Bs. As."
};