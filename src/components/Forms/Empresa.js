import React from 'react'

export default function Empresa({ data, handleInputChange }) {
    return (
        <div className="my-5">
            <h2 className="question-title my-5 text-center">Queremos saber más de tu empresa</h2>
            <div className="row">
                <div className="col-8 mx-auto">
                    <div className="row">
                        <div className="col-lg-4 mb-3">
                            <label className="form-label label-control-input">RUC</label>
                            <input type="tel" className="form-control" required name="ruc" onChange={handleInputChange} value={data.ruc} />
                        </div>
                        <div className="col-lg-8 mb-3">
                            <label className="form-label label-control-input">Razón social</label>
                            <input type="text" className="form-control" required name="razonSocial" onChange={handleInputChange} value={data.razonSocial} />
                        </div>
                        <div className="col-12  mt-3">
                            <div className="col-12 text-align-left"><strong>¿Cómo nos contactamos?</strong></div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <input type="text" className="form-control mt-2" placeholder="Dirección" required name="direccionEmpresa" onChange={handleInputChange} value={data.direccionEmpresa} />
                                </div>
                                <div className="col-lg-4">
                                    <input type="tel" className="form-control mt-2" placeholder="Teléfono" required name="telefonoEmpresa" onChange={handleInputChange} value={data.telefonoEmpresa} />
                                </div>
                                <div className="col-lg-4">
                                    <input type="email" className="form-control mt-2" placeholder="Correo" required name="correoEmpresa" onChange={handleInputChange} value={data.correoEmpresa} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
