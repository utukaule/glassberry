import React from 'react'
import '../components/Part7.css';

import img1 from '../images/Warranty.png';
import img2 from '../images//Budget.png';
import img3 from '../images/Certified.png';
import img4 from '../images/Customize.png';

const Part7 = () => {
    return (
        <div>
            <div className='container'>
                <h2 className='partHead mt-5'>Why Choose Us</h2>

                <div class="card-group mt-5 mb-5">

                    <div class="card m-3 p-3 mb-5 cardback text-center">
                        <img class="card-img-top choose" src={img1} />
                        <div class="card-body">
                            <h5 class="card-title">2BKH Interior</h5>
                        </div>
                    </div>

                    <div class="card m-3 p-3 mb-5 cardback text-center" >
                        <img class="card-img-top choose" src={img2} />
                        <div class="card-body">
                            <h5 class="card-title">10 Years Warranty</h5>
                        </div>
                    </div>

                    <div class="card m-3 p-3 mb-5 cardback text-center">
                        <img class="card-img-top choose" src={img3} />
                        <div class="card-body">
                            <h5 class="card-title">Interior in Budget</h5>
                        </div>
                    </div>

                    <div class="card m-3 p-3 mb-5  cardback text-center">
                        <img class="card-img-top choose" src={img4} />
                        <div class="card-body">
                            <h5 class="card-title">Certified Architect</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container-fluid part6Process'>
                <div className='container pt-5 pb-5'>
                    <div className="row">
                        <div className="col text-center">
                            <h2 className='text-white'>Get Best Interior Design By Experts</h2>
                        </div>
                        <div className="col text-center">
                            <button className='equire ps-3 pe-3 pt-2 pb-2'>Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Part7;