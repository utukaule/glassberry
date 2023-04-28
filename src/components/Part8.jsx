import React from 'react'
import "../components/Part8.css"
const Part8 = () => {
    return (
        <div className='container-fluid mainContainer pb-4 pt-3'>

            <div className='container '>
                <h2 className='text-center pt-5' style={{fontWeight:'900'}}>Our Best Interior Design Works</h2>
                <div className='row mt-5'>
                    <div className="col">
                        <div class="card">
                            <img class="card-img-top" src={"https://romanesqueinteriors.com/interior-design-pune/images/gallery/small-gallery-1.jpg"} />
                                
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                            <img class="card-img-top" src={"https://romanesqueinteriors.com/interior-design-pune/images/gallery/small-gallery-2.jpg"} />
                                
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                            <img class="card-img-top" src={"https://romanesqueinteriors.com/interior-design-pune/images/gallery/small-gallery-3.jpg"} />
                                
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                            <img class="card-img-top" src={"https://romanesqueinteriors.com/interior-design-pune/images/gallery/small-gallery-4.jpg"} />
                                
                        </div>
                    </div>
                </div>

                {/*----------------------------Row 2--------------------------------  */}
                <div className='row mt-4 mb-5' >
                    <div className="col">
                        <div class="card">
                            <img class="card-img-top" src={"https://romanesqueinteriors.com/interior-design-pune/images/gallery/small-gallery-5.jpg"} />
                                
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                            <img class="card-img-top" src={"https://romanesqueinteriors.com/interior-design-pune/images/gallery/small-gallery-9.jpg"} />
                                
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                            <img class="card-img-top" src={"https://romanesqueinteriors.com/interior-design-pune/images/gallery/small-gallery-10.jpg"} />
                                
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                            <img class="card-img-top" src={"https://romanesqueinteriors.com/interior-design-pune/images/gallery/small-gallery-8.jpg"} />
                                
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Part8
