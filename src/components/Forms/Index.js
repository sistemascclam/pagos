import React from 'react'
import Empresa from './Empresa'
import Persona from './Persona'
import Asociado from './Asociado'
import InfoPayment from './InfoPayment'
import IziPayForm from './IziPayForm'


export default function Index(props) {
    const { type, cur } = props;
    const views = [[<Persona {...props} />, <InfoPayment {...props} />, <IziPayForm {...props} />], [<Empresa {...props} />, <InfoPayment {...props} />, <IziPayForm {...props} />]];

    return (
        <div>
            <Asociado {...props} />
        </div>
    )
}
