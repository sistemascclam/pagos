import React, { useState } from 'react'
import PickTypeClient from './PickTypeClient';
import FormStepper from './FormStepper';

export default function Index() {
    const [typeclient, settypeclient] = useState(null);

    const chooseTypeClient = (val) => {
        settypeclient(val);
    }

    return (
        <>
        {
            typeclient ?
            <FormStepper handleClick={()=>chooseTypeClient(null)} typeclient={typeclient} steps={typeclient===1 ? 3 : 4} />
            :
            <PickTypeClient handleClick={chooseTypeClient}/>
        }
        </>
    )
}
