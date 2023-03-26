import { height } from '@mui/system';
import React from 'react';
import {Carousel} from 'react-bootstrap';
const Todaycarousel = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{width:"500px"}}
                        src="https://th.bing.com/th/id/OIP.-isVM3jUqvhxNKtSTqVG7AHaE8?pid=ImgDet&rs=1"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://th.bing.com/th/id/OIP.-isVM3jUqvhxNKtSTqVG7AHaE8?pid=ImgDet&rs=1"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://th.bing.com/th/id/OIP.-isVM3jUqvhxNKtSTqVG7AHaE8?pid=ImgDet&rs=1"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Todaycarousel;
