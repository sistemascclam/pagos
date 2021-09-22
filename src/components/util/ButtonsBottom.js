import React from 'react'

export default function ButtonsBottom({ step, setstep, steps, handleClick, loading }) {
    return (
        <div className="text-center mx-4">
            <div className="d-grid gap-2 col-lg-2 mx-auto">
                {
                    step === steps ?
                        ""
                        :
                        <button className="btn btn-primary text-white" disabled={loading} type="submit" >
                            {
                                (step + 1) === steps ?
                                    (
                                        loading ?
                                            <i className="fas fa-spinner fa-spin"></i>
                                            :
                                            "Procesar"
                                    )
                                    :
                                    <>
                                        Siguiente <i className="fas fa-angle-right"></i>
                                    </>
                            }
                        </button>
                }
            </div>
            {!loading ?
                <div className="back-button mt-2" onClick={step === 1 ? handleClick : () => setstep(step - 1)}>
                    <i className="fas fa-arrow-left"></i> Atrás
                </div>
                :
                ""
            }
        </div>
    )
}
