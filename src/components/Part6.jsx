import React from 'react'
import '../components/Part6.css';
import img1 from '../images/bhk1.jpg';
import img2 from '../images/bhk02.png';
import img3 from '../images/bhk03.jpg';


import img4 from '../images/Process.png';

const Part6 = () => {
    return (
        <div>
            <div className='container'>
                <h2 className='partHead mt-5'>Get All In One Interior Solutions <br /> In Pune</h2>

                <div class="card-group mt-5 mb-5">

                    <div class="card m-3 border-0 shadow p-3 mb-5 bg-white rounded">
                        <img class="card-img-top" src={img1} alt="Card image cap" />

                        <div class="card-body">
                            <h5 class="card-title">2BKH Interior</h5>
                            <p class="card-text">Starting from 5-7 Lakhs</p>
                        </div>
                    </div>

                    <div class="card m-3 border-0 shadow p-3 mb-5 bg-white rounded" >
                        <img class="card-img-top" src={img2} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">2BKH Interior</h5>
                            <p class="card-text">Starting from 5-7 Lakhs</p>
                        </div>
                    </div>

                    <div class="card m-3 border-0 shadow p-3 mb-5 bg-white rounded">
                        <img class="card-img-top" src={img3} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">2BKH Interior</h5>
                            <p class="card-text">Starting from 5-7 Lakhs</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container-fluid part6Process'>
                <div className='container pt-5 pb-5'>
                    <img src={img4} alt="" width={'100%'} />
                </div>
            </div>


        </div>
    )
}

export default Part6