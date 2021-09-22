import React, { useState } from 'react'
import StepIndicator from '../util/StepIndicator'
import ButtonsBottom from '../util/ButtonsBottom'
import FormStep from '../Forms/Index'
import SuccessPayment from './SuccessPayment'
import KRGlue from "@lyracom/embedded-form-glue";
import axios from '../../util/Api';

export default function FormStepper({ handleClick, steps, typeclient }) {
    const [step, setstep] = useState(1);
    const [paidOut, setpaidOut] = useState(false);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);
    const [paiddata, setpaiddata] = useState(null);
    const [recaptchatoken, setrecaptchatoken] = useState(null);

    const [datos, setDatos] = useState({
        tipoDoc: 1,
        documento: '',
        nombres: '',
        apellidoP: '',
        apellidoM: '',
        direccion: '',
        telefono: '',
        correo: '',
        /*EMPRESA*/
        ruc: '',
        razonSocial: '',
        direccionEmpresa: '',
        /*EMPRESA*/
        numfact: '',
        importe: '',
        detail: '',
        usoDatos: false,
        condiciones: false,
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const getFormKey = async () => {
        let rpta = await axios.post('/iziini',
            {
                ...datos,
                "tokencaptcha":recaptchatoken,
                "items": [{ "producto": datos.detail, "precio": datos.importe, "cantidad": 1 }]
            }
        );
        return rpta.data.formToken;
    }

    async function checkout() {
        const endpoint = "https://api.micuentaweb.pe";
        const publicKey = process.env.REACT_APP_IZI_PUBLIC_KEY;
        const formToken = await getFormKey();
        //const formToken = "DEMO-TOKEN-TO-BE-REPLACED";
        KRGlue.loadLibrary(endpoint, publicKey)
            .then(({ KR }) =>
                KR.setFormConfig({
                    formToken: formToken,
                    "kr-language": "es-ES"
                })
            )
            .then(({ KR }) => {
                setstep(step + 1);
                setloading(false);
                return KR.addForm("#myPaymentForm")
            })
            .then(({ KR, result }) => {
                KR.showForm(result.formId)
                KR.onSubmit((res) => {
                    console.log(res)
                    if(res.clientAnswer.orderStatus === 'PAID' || res.clientAnswer.orderStatus === 'PARTIALLY_PAID' ||res.clientAnswer.orderStatus === 'RUNNING') {
                        setpaidOut(true);
                        setpaiddata(res.clientAnswer);
                    }else{
                        seterror("No se pudo completar la transacción.");
                    }
                })
            })
            .catch(e =>
                seterror(e + " (see console for more details)")
            );
    }

    const handleCheckOut = () => {
        setloading(true);
        checkout();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((step + 1) === steps) {
            handleCheckOut()
        } else {
            setstep(step + 1)
        }
    }

    return (
        <>
            {
                paidOut ?
                    <SuccessPayment paiddata={paiddata} />
                    :
                    <>
                        <StepIndicator cur={step} stepCount={steps} />
                        <form onSubmit={handleSubmit}>
                            <FormStep
                                type={typeclient === 1 ? 0 : 1}
                                cur={step - 1}
                                handleInputChange={handleInputChange}
                                data={datos}
                                error={error}
                                recaptchatoken={setrecaptchatoken}
                            />
                            <ButtonsBottom
                                setstep={setstep}
                                step={step}
                                steps={steps}
                                handleClick={handleClick}
                                loading={loading}
                            />
                        </form>
                    </>
            }
        </>
    )
}
