import React from 'react'

export default function Agreements({ data, handleInputChange }) {
    return (
        <div className="col-12 mt-4">
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="datosPersonalesCheck"
                    required
                    onChange={(e) => {
                        handleInputChange({ target: { value: e.target.checked, name: 'usoDatos' } });
                    }}
                    checked={data.usoDatos}
                />
                <label className="form-check-label" htmlFor="datosPersonalesCheck">Autorizo el <a href="https://policies.google.com/terms?hl=es" target="_blank" rel="noreferrer">Uso de mis Datos Personales.</a></label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="terminosCheck"
                    required
                    onChange={(e) => {
                        handleInputChange({ target: { value: e.target.checked, name: 'condiciones' } });
                    }}
                    checked={data.condiciones}/>
                <label className="form-check-label" htmlFor="terminosCheck">Acepto haber leído y estar de acuerdo con los <a href="https://policies.google.com/terms?hl=es" target="_blank" rel="noreferrer">Términos y Condiciones del Servicio</a></label>
            </div>
        </div>
    )
}
