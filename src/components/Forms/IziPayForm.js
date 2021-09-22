import React from 'react'

export default function IziPayForm(props) {
  const { error } = props;
  return (
    <div>
      <h2 className="question-title mt-5 text-center">Paga aquí</h2>
      <div className="tarjetas my-4" >
        <img alt="tarjetas" src={require("../../assets/img/tarjetas.svg").default} />
      </div>
      <div className="form">
        <div className="container">
          <div id="myPaymentForm"></div>
          <div className="text-center text-danger">{error}</div>
        </div>
      </div>
    </div>
  )
}
