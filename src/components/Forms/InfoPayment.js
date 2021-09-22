import React from 'react'
import Agreements from '../util/Agreements'
import CurrencyInput from 'react-currency-input-field';
import CaptchaComponent from '../util/CaptchaComponent'


export default function InfoPayment({ data, handleInputChange, recaptchatoken }) {
    return (
        <div className="my-5">
            <h2 className="question-title my-5 text-center">Información del pago</h2>
            <div className="row">
                <div className="col-8 mx-auto">
                    <div className="row">
                        <div className="col-lg-4 mb-3">
                            <label className="form-label label-control-input">Num. factura<small className="mr-1 text-danger">(Opcional)</small></label>
                            <input type="tel" className="form-control" name="numfact" onChange={handleInputChange} value={data.numfact} />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label className="form-label label-control-input">Importe</label>
                            <CurrencyInput
                                className="form-control" 
                                required
                                name="importe"
                                min="1"
                                prefix="s/."
                                value={data?.importe}
                                groupSeparator={','}
                                decimalSeparator={'.'}
                                placeholder="S/."
                                decimalsLimit={2}
                                onValueChange={(value, name) => 
                                    handleInputChange({ target: { value: value, name: 'importe' } })}
                            />
                        </div>
                        <div className="col-lg-12">
                            <label className="form-label label-control-input">¿A qué servicio corresponde el pago?</label>
                            <input type="text" className="form-control" placeholder="Detalle del servicio" required name="detail" onChange={handleInputChange} value={data.detail} />
                        </div>
                        <Agreements data={data} handleInputChange={handleInputChange} />
                        <CaptchaComponent settoken={recaptchatoken} />
                    </div>
                </div>
            </div>
        </div>
    )
}
