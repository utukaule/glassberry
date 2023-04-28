import React from 'react'
import logo from '../images/logo.png'
const Part11 = () => {
    return (
        <div>
            <div style={{backgroundColor:"#0A2233"}}>
                
                <footer
                    class="text-center text-lg-start text-white"
                    style={{backgroundColor:"#0A2233"}}>
                    <div class="container">
                        <section class="">
                            <div class="row">
                                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <img src={logo} width={70} height={70} />
                                    <p>
                                    Romanesque Interiors is an architectural firm that 
                                    is aesthetically enhancing spaces since 2017 in India, Pune.
                                    </p>
                                </div>

                                <hr class="w-100 clearfix d-md-none" />

                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 class="text-uppercase mb-4 font-weight-bold">Contact Us</h6>
                                    <p>Romanesque Interiors | 1st floor,</p>
                                    <p>Snehleela Building | Apte Road |</p>
                                    <p>Shivaji Nagar | Pune 411004</p>
                                    <p>+91 9322192282</p>
                                    <p>romanesquepune@gmail.com</p>
                                </div>

                                <hr class="w-100 clearfix d-md-none" />
                                <hr class="w-100 clearfix d-md-none" />

                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                                    <a
                                        class="btn btn-primary btn-floating m-1"
                                        style={{backgroundColor: "#3b5998"}}
                                        href="#!"
                                        role="button"
                                    ><i class="fab fa-facebook-f"></i
                                    ></a>

                                    

                                    

                                    <a
                                        class="btn btn-primary btn-floating m-1"
                                        style={{backgroundColor: "#ac2bac"}}
                                        href="#!"
                                        role="button"
                                    ><i class="fab fa-instagram"></i
                                    ></a>

                                    
                                    <a
                                        class="btn btn-primary btn-floating m-1"
                                        style={{backgroundColor: "red"}}
                                        href="#!"
                                        role="button"
                                    ><i class="fab fa-youtube"></i
                                    ></a>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div
                        class="text-center p-3"
                        style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                    >
                        Copyright © 2023 Romanesque Interiors. All rights reserved. Design By The 
                        <a class="text-white" href="https://youtube.com/"
                        > Glassberry IT Solution Pvt Ltd</a
                        >
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Part11;