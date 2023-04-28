import React from 'react'
import carouselOne from '../images/rom-slider01.webp';
import carouselTwo from '../images/rom-slider02.webp';
import '../components/Carousel.css';

const Carousel = () => {
  return (
    <div className=''>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

        <div class="carousel-inner">

          <div className="carousel-item active imgBackground" >
            <img src={carouselOne} class="img" />
            <div class="carousel-caption d-none d-md-block">

              <h2 className='imgContent1'>ONE-STEP SOLUTION FOR ALL YOUR <br/>INTERIOR NEEDS.</h2>
              <p className='para'>Customised & Theme Based Work</p>
              <div id='imgBtn'>
                <button className='popup'>Consult Now</button>
              </div>

            </div>

          </div>

          <div class="carousel-item imgBackground">
            <img src={carouselTwo} class="img" />
            <div class="carousel-caption d-none d-md-block">

              <h1 className='imgContent2' >Modern And Elegent Designs</h1>
              <p className='para'>Balancing Your Needs And Wants!</p>
              <div id='imgBtn'>
                <button className='popup' >Consult Now</button>
              </div>

            </div>

          </div>


        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel