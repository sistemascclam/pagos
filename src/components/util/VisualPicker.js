import React from 'react'

export default function VisualPicker({ img, text, delay, handleClick }) {
    return (
            <div className={`mx-1 row animate__animated animate__fadeInDown ${delay}`} onClick={handleClick}>
                <div className={`visual-picker-container col-lg-5 col-md-7  mx-auto mb-3`}>
                    <img
                        className="visual-picker-img"
                        alt="..."
                        src={img}
                    />
                    <span>{text}</span>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
    )
}
