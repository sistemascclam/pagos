import React, { useEffect } from 'react'
import Recaptcha from "react-recaptcha";

export default function CaptchaComponent({settoken}) {
    /*CAPTCHA*/
    var captchaDemo
    const verifyCallback = (response) => {
        console.log("verifyCallback");
        settoken(response)
        console.log(response);
    };

    const callback = () => {
        if (captchaDemo?.state?.ready) {
            console.log("done!")
        }
    };

    useEffect(() => {
        if (captchaDemo?.state?.ready) {
            captchaDemo?.reset();
        }
    },[captchaDemo])

    /*CAPTCHA*/
    return (
        <div className="captcha-container">
            <Recaptcha
                ref={e => captchaDemo = e}
                sitekey={process.env.REACT_APP_CAPTCHA_KEY}
                render="explicit"
                size="normal"
                hl="es"
                onloadCallback={callback}
                verifyCallback={verifyCallback}
                expiredCallback={() => { console.log("expired"); callback(); }}
            />
        </div>
    )
}
