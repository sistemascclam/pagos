import React from 'react';
import VisualPicker from '../util/VisualPicker';

export default function PickTypeClient({handleClick}) {
    return (
        <div>
            <h3 className="question-title animate__animated animate__fadeIn mb-5 text-center">Cuéntanos, cómo quieres realizar tu pago</h3>
            <VisualPicker
                img={require("../../assets/img/asociado.png").default}
                text={"Asociado"}
                delay={"animate__delay-05"}
                handleClick={()=>handleClick(3)}
            />
            <VisualPicker
                img={require("../../assets/img/persona.png").default}
                text={"Persona natural o jurídica"}
                delay={"animate__delay-1s"}
                handleClick={()=>handleClick(1)}
            />
            <VisualPicker
                img={require("../../assets/img/company.png").default}
                text={"Empresa"}
                delay={"animate__delay-1-5s"}
                handleClick={()=>handleClick(2)}
            />
        </div>
    )
}
