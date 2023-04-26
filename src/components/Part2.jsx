import React from 'react'
import '../components/Part2.css';
import home from '../images/home3.png'
const Part2 = () => {
    return (
        <div className='container-fluid'>
            <div className='row col2'>

                <div className='col col1'>
                    <div className='row ms-3 mt-3'>
                        <div className='col d-flex'>
                            <div>
                                <img src={home}  width={65} height={70} />
                            </div>

                            <div>
                                <h4 className='twobhk'>2BHK Interior</h4>
                                <h3 className='price'>₹5 Lakhs*</h3>
                            </div>

                        </div>

                    </div>
                    <div className='row ms-3 mt-4 mb-3'>
                        <div className='col d-flex'>
                            <div>
                                <img src={home}  width={65} height={70} />
                            </div>

                            <div>
                                <h4 className='twobhk'>4BHK Interior</h4>
                                <h3 className='price'>₹15 Lakhs*</h3>
                            </div>

                        </div>

                    </div>
                </div>
                

                <div className='col col1'>
                <div className='row ms-3 mt-4 mb-3'>
                        <div className='col d-flex'>
                            <div>
                                <img src={home}  width={65} height={70} />
                            </div>

                            <div>
                                <h4 className='twobhk'>3BHK Interior</h4>
                                <h3 className='price'>₹10 Lakhs</h3>
                            </div>

                        </div>

                    </div>
                    <div className='row ms-3 mt-3'>
                        <div className='col d-flex'>
                            <div>
                                <img src={home}  width={65} height={70} />
                            </div>

                            <div>
                                <h4 className='twobhk'>Bungalow/Rowhouse</h4>
                                <h3 className='price'>₹20 Lakhs</h3>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='col align-self-center'>
                    <div className="row" >
                        <div className='col' >
                            <a id='linkanchor' className='ps-5' href="">Book Free Consultation</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Part2