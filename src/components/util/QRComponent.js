import React from 'react'
var QRCode = require('qrcode.react');

export default function QRComponent({price}) {
    const formarprice = (num)=>{
      let price = (Number(num)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits : 2, minimumFractionDigits : 2 });
      return price.length+price;
    }
    const generateCod=(length)=>{
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let pass = "";
        for (let i=0; i < length; i++){
            pass += characters.charAt(Math.floor(Math.random()*characters.length));   
        }
        return pass.toLocaleUpperCase();
    }
    return (
        <div className="d-flex justify-content-center my-5">
          <QRCode
            size="200"
            value=
            {
              `000201010212021640962300843191930415530150008431919091664998900843191921237001110000000406109952006914078431919526800011FACILITADOR0161IZIPAYVIR;${Date.now()};8431919;944679867;137122845747625;;00520486415303604540${formarprice(price)}5802PE5925IZI*CAMARA DE COMERCIO LA6008CHICLAYO6103PER6304${generateCod(4)}`
            }
          />
        </div>
    )
}
