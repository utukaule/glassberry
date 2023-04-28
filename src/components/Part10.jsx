import React from 'react'
import './Part10.css'
const Part10 = () => {
    const li = [
        'Site Visit & Consultation',
        'Design Brief',
        'Layout & Conceptualization',
        'Budget & Payment Schedule',
        'Working Drawings+3D Assistance',
        'Final Touch-up and Delivery of the Project',
    ]
    const option = [
        '2BHK',
        '3BHK',
        '4BHK',
        'ow house/Bungalow',
        'Offices/Commercial Spaces'

    ]
    return (
        <div className='container mt-5'>
            <div className="row d-flex justify-content-between">
                <div className='col'></div>
                <div className="col-5">
                    <img src={"https://romanesqueinteriors.com/interior-design-pune/images/common/header.png"} alt="" />
                    <h2 className='imgBottom mt-4'>Your Dream House is Waiting For You</h2>
                    <p className='HeadBottom mt-3'>Are You Ready to Get Customised and Best Modern Interior Works For Your Lovely Home?</p>
                    <button className='btnQuote ms-3'>Call Now</button>
                </div>

                <div className='col'></div>

                <div className="col-5 text-center shadow mb-5 bg-body rounded">
                    <div className='head'>
                        <p className='formHead '>Calculate Your Interior Cost</p>
                        <p className='formHead2'>Premium Interior Designers In Pune.</p>
                    </div>

                    <form action="">
                        <input type="text" className='w-75 inputs mt-4' placeholder='Full Name' /> <br />
                        <input type="number" className='w-75 inputs' placeholder='Phone Number' maxLength={10} /> <br />
                        <input type="text" placeholder='Location ' className='w-75 inputs' /> <br />
                        <select name="bhk" className='w-75 inputs' >
                            {option.map((e) => {
                                return <option>{e}</option>
                            })}
                        </select>
                        <br />
                        <button className='btnQuote mb-4'>Get Free Quote</button>
                    </form>
                </div>
                <div className='col'></div>

            </div>
        </div>
    )
}

export default Part10