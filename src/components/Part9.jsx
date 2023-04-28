import React from 'react'
import '../components/Part9.css';

const Part9 = () => {
    return (
        <div className='container-fluid'>
            <div className='container'>

                <h2 className='text-center mt-5 mb-4'>Our Happy Interior Clients</h2>

                <div className='row'>
                    <div class="card-group">


                        <div class="card m-4 cardClient shadow p-3 mb-5 bg-white rounded">
                            <div className='text-center'>
                                <img className='card-img-top customerImg rounded-circle mt-4' src={"https://romanesqueinteriors.com/interior-design-pune/images/rawat.jpeg"} />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center">Mr & Mrs Jain</h5>
                                <p className='text-center'>Pune</p>
                                <p class="card-text text-center">We really liked the way how they have designed and
                                    executed it, and they showed good manner t
                                    hroughout the whole process of our villa renovation</p>
                            </div>
                        </div>


                        <div class="card m-4 cardClient shadow p-3 mb-5 bg-white rounded">
                            <div className='text-center'>
                                <img className='card-img-top customerImg rounded-circle mt-4' src={"https://romanesqueinteriors.com/interior-design-pune/images/img3.jpg"} />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center">Mr & Mrs Rawat</h5>
                                <p className='text-center'>Pune</p>
                                <p class="card-text text-center"> Romanesque Interiors have designed beautifully our 4 BHK Duplex
                                    Flat with such precision and creativity that we are very greatful for the
                                    entire process and The end result is far more perfect than we had imagined.</p>
                            </div>
                        </div>


                        <div class="card m-4 cardClient shadow p-3 mb-5 bg-white rounded">
                            <div className='text-center'>
                                <img className='card-img-top customerImg rounded-circle mt-4' src={"https://romanesqueinteriors.com/interior-design-pune/images/saluja.jpeg"} />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center">Mr & Mrs Saluja</h5>
                                <p className='text-center'>Pune</p>
                                <p class="card-text text-center"> Very creative, honest, hardworking and professional are the words to describe Romanesque.
                                    We have hired them to design and execute our new flat in Magarpatta.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Part9
