import React from 'react'
import Select from 'react-select'

export default function Persona({ data, handleInputChange }) {
    return (
        <div className="my-5">
            <h2 className="question-title mb-4 text-center">Queremos saber más de ti</h2>
            <div className="row col-10 mx-auto">
                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-4">
                            <label className="form-label label-control-input">Tipo de documento</label>
                            <Select
                                placeholder=""
                                isSearchable={false}
                                options={[
                                    { value: '1', label: 'DNI' },
                                    { value: '2', label: 'RUC' }
                                ]}
                                onChange={(e) => {
                                    handleInputChange({ target: { value: e.value, name: 'tipoDoc' } });
                                }}
                                value={
                                    data.tipoDoc ?
                                        [
                                            { value: '1', label: 'DNI' },
                                            { value: '2', label: 'RUC' }
                                        ][data.tipoDoc - 1]
                                        :
                                        ''
                                }
                            />
                        </div>
                        <div className="col-lg-4">
                            <label className="form-label label-control-input">Documento</label>
                            <input type="tel" className="form-control" required name="documento" onChange={handleInputChange} value={data.documento} />
                        </div>
                    </div>
                </div>
                <div className="col-12  mt-3">
                    <div className="col-12 text-align-left"><strong>¿Quién es?</strong></div>
                    <div className="row">
                        <div className="col-lg-4">
                            <input type="text" className="form-control mt-2" placeholder="Nombres" required name="nombres" onChange={(e) => { if(e.target.value){e.target.value = e.target.value[0].toUpperCase() + e.target.value.substr(1).toLocaleLowerCase();} handleInputChange(e); }} value={data.nombres} />
                        </div>
                        <div className="col-lg-4">
                            <input type="text" className="form-control mt-2" placeholder="Apellido paterno" required name="apellidoP" onChange={(e) => { if(e.target.value){e.target.value = e.target.value[0].toUpperCase() + e.target.value.substr(1).toLocaleLowerCase();} handleInputChange(e); }} value={data.apellidoP} />
                        </div>
                        <div className="col-lg-4">
                            <input type="text" className="form-control mt-2" placeholder="Apellido materno" required name="apellidoM" onChange={(e) => { if(e.target.value){e.target.value = e.target.value[0].toUpperCase() + e.target.value.substr(1).toLocaleLowerCase();} handleInputChange(e); }} value={data.apellidoM} />
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
