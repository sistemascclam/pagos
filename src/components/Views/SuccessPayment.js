import React from 'react'
import Lottie from 'react-lottie'
import moment from "moment";
import 'moment/locale/es';
import lottieJson from '../../assets/animations/lf30_editor_8knd39fu.json'
moment.locale('es')

export default function SuccessPayment({paiddata}) {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: lottieJson,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="text-center">
            <div
                className="success-animation mx-auto">
                <Lottie
                    options={defaultOptions}
                />
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
                <h2 className="question-title">{`¡Pago ${paiddata?.orderStatus === 'PAID' ? 'exitoso' : paiddata?.orderStatus === 'PARTIALLY_PAID' ? 'parcialmente pagado' : 'en proceso'}!`}</h2>
                <h1 className="question-title text-primary my-3">S/.{(Number(paiddata?.orderDetails?.orderTotalAmount/100)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits : 2, minimumFractionDigits : 2 })}</h1>
                <h4 className="my-2">{`${paiddata?.customer?.billingDetails.firstName} ${paiddata?.customer?.billingDetails?.lastName}`.toUpperCase()}</h4>
                <p>{moment(paiddata?.serverDate).format('LLLL')}</p>
                <button className="btn btn-primary text-white" onClick={()=>window.location.reload()}>
                    <i className="far fa-file"></i>
                    <small style={{ marginLeft: '.5rem' }}>Nuevo pago</small>
                </button>
            </div>
        </div>
    )
}
