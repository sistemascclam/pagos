import React from 'react'

export default function StepIndicator({ stepCount = 3, cur = 1 }) {
    return (
        <div>
            <div className="mx-auto d-flex justify-content-center step-container">
                {
                    [...Array(stepCount)].map((a, i) =>
                        <div key={i} className="d-flex">
                            <div className={`step-number ${i + 1 <= cur ? 'step-passed' : ''}`}>
                                <div className={i + 1 === cur ? `step-current` : ''}>
                                    <strong>
                                        {
                                            i + 1 < cur ?
                                                <i className="fas fa-check"></i>
                                                :
                                                i + 1
                                        }
                                    </strong>
                                </div>
                            </div>
                            {
                                i + 1 < stepCount ?
                                    <div className={`step-divider ${i + 2 <= cur ? 'step-passed' : ''}`}></div>
                                    :
                                    ""
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}
