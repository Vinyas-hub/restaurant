import React from 'react';
import Logimg from '../../Images/logo.png';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const Navbar = () => {
    return (
        <div id="site-header">
            <header id="header" className="Xheader-block-top">
                <Container>
                    <Row>
                        <Col>
                        <div className="main-menu">

                        </div>

                        </Col>
                    </Row>
                </Container>



            </header>

        </div>
        // <div id="site-header">
        // <header id="header" className="Xheader-block-top">
        //     <div className="Xcontainer">
        //     <div className="Xrow">
        //         <div className="main-menu">
        //         {/* navbar */}
        //         <nav className="Xnavbar Xnavbar-default" id="mainNav">
        //             <div className="Xnavbar-header">
        //             <div className="Xlogo">
        //                 <a className="Xnavbar-brand Xjs-scroll-trigger logo-header" href="#">
        //                 <img src={Logimg} alt />
        //                 </a>
        //             </div>
        //             </div>
        //             <div id="navbar" className="Xnavbar-collapse Xcollapse">
        //             <ul className="Xnav Xnavbar-nav Xnavbar-right">
        //                 <li className="active">

        //                 <a href="#banner">
        //                 <span>
        //                 <FontAwesomeIcon icon={faHouse} size="s" style={{color: "#1f512e",}} fade/> &nbsp; Home
        //                 </span></a></li>
        //                 <li><a href="#about"><span><AddBoxIcon style={{color: "#1f512e",} } /> &nbsp; About us</span></a></li>
        //                 <li><a href="#menu">Menu</a></li>
        //                 <li><a href="#our_team">Team</a></li>
        //                 <li><a href="#gallery">Gallery</a></li>
        //                 <li><a href="#blog">Blog</a></li>
        //                 <li><a href="#pricing">pricing</a></li>
        //                 <li><a href="#reservation">Reservaion</a></li>
        //                 <li><a href="#footer">Contact us</a></li>
        //             </ul>
        //             </div>
        //             {/* end nav-collapse */}
        //         </nav>
        //         {/* end navbar */}
        //         </div>
        //     </div>
        //     {/* end row */}
        //     </div>
        //     {/* end container-fluid */}
        // </header>
        // {/* end header */}
        // </div>

    );
};

export default Navbar;