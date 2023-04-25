import React from 'react'
import './Part3.css'
const Part3 = () => {
    const li = [
        'Site Visit & Consultation',
        'Design Brief',
        'Layout & Conceptualization',
        'Budget & Payment Schedule',
        'Working Drawings+3D Assistance',
        'Final Touch-up and Delivery of the Project',
    ]
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col">
                    <p>Romanesque Interiors</p>
                    <p>Complete Residential / Commercial <br />Interiors Solution</p>
                    <p>Romanesque Interiors is an architectural firm that is aesthetically <br />
                        enhancing spaces since 2017 in India, Pune. We are a firm that takes  <br />
                        confidence in the field of interior designing and making  <br />
                        architectural spaces all the more ambient and pleasurable to live-in.
                    </p>
                    <ul>
                        <li>{li.map(e => (e))}</li>
                    </ul>
                    <button>Call Now</button>
                </div>
                <div className="col">
                    <p>Calculate Your Interior Cost</p>
                    <p>Premium Interior Designers In Pune.</p>
                    <form action="">
                        <input type="text" placeholder='Full Name' /> <br />
                        <input type="number" placeholder='Phone Number' maxLength={10} /> <br />
                        <input type="text" /> <br />
                        <select name="bhk" id="">
                            <option value="">2BHK</option>
                            <option value="">3BHK</option>
                            <option value="">4BHK</option>
                            <option value="">Row house/Bungalow</option>
                            <option value="">Offices/Commercial Spaces</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Part3