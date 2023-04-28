import React from 'react';
import logo from '../images/logo.png';
import '../components/Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light fixed-top" id='navbar'>
                <div class="container-fluid">
                    
                    <img class="navbar-brand" id='logo' src={logo} />

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li class="nav-item">
                            <a id='comapanyName' class="nav-link active" aria-current="page" href="#" style={{

                            }}>Romanesque Interiors</a>
                        </li>
                    </ul>

                    <form >
                        <button id='navBarBtn'>Get Free Quote</button>
                    </form>



                </div>
            </nav>
        </div>
    )
}

export default Navbar