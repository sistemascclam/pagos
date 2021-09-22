import React from 'react'
import Select from 'react-select'

export default function Persona({ data, handleInputChange }) {
    return (
        <div className="my-5">
            <h2 className="question-title mb-4 text-center">Bríndanos tus datos</h2>
            <div className="row col-10 mx-auto">
                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-6 form-inline">
                            <label className="form-label label-control-input">Ingresa tu DNI o RUC</label>
  <div class="form-group mb-2">
                            <input type="tel" className="form-control" required name="documento" onChange={handleInputChange} value={data.documento} />
                            <button type="submit" class="btn btn-primary">Confirm identity</button>
  </div>
                        </div>
                        <div className="col-lg-9">
                            <label className="form-label label-control-input">Denominación</label>
                            <input type="tel" className="form-control" name="denominacion" value={data.denominación} readOnly />
                        </div>
                    </div>
                </div>
                <div className="col-12  mt-3">
                    <div className="col-12 text-align-left"><strong>¿Quién es?</strong></div>
                    <div className="row">
                        <div className="col-lg-4">
                            <input type="text" className="form-control mt-2" placeholder="Nombres" required name="nombres" onChange={(e) => { if (e.target.value) { e.target.value = e.target.value[0].toUpperCase() + e.target.value.substr(1).toLocaleLowerCase(); } handleInputChange(e); }} value={data.nombres} />
                        </div>
                        <div className="col-lg-4">
                            <input type="text" className="form-control mt-2" placeholder="Apellido paterno" required name="apellidoP" onChange={(e) => { if (e.target.value) { e.target.value = e.target.value[0].toUpperCase() + e.target.value.substr(1).toLocaleLowerCase(); } handleInputChange(e); }} value={data.apellidoP} />
                        </div>
                        <div className="col-lg-4">
                            <input type="text" className="form-control mt-2" placeholder="Apellido materno" required name="apellidoM" onChange={(e) => { if (e.target.value) { e.target.value = e.target.value[0].toUpperCase() + e.target.value.substr(1).toLocaleLowerCase(); } handleInputChange(e); }} value={data.apellidoM} />
                        </div>
                    </div>
                </div>
                <div className="col-12  mt-3">
                    <div className="col-12 text-align-left"><strong>¿Cómo lo contactamos?</strong></div>
                    <div className="row">
                        <div className="col-lg-4">
                            <input type="text" className="form-control mt-2" placeholder="Dirección" required name="direccion" onChange={handleInputChange} value={data.direccion} />
                        </div>
                        <div className="col-lg-4">
                            <input type="tel" className="form-control mt-2" placeholder="Teléfono" required name="telefono" onChange={handleInputChange} value={data.telefono} />
                        </div>
                        <div className="col-lg-4">
                            <input type="email" className="form-control mt-2" placeholder="Correo" required name="correo" onChange={handleInputChange} value={data.correo} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
