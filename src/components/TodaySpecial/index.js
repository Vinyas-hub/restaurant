import React from 'react';
import './today.css';
import spimg1 from '../../Images/special-menu-1.jpg';
import spimg2 from '../../Images/special-menu-2.jpg';
import spimg3 from '../../Images/special-menu-3.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Today() {
    return (
        <div className="special-menu pad-top-100 parallax">
            <div className="container">
                <Container>
                    <Row>
                        <Col>
                            <h2 class="block-title color-white text-center"> Today's Special </h2>
                            <h5 class="title-caption text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia,nostrud exercitation ullamco. </h5>
                            <div class="special-box">
                                <Carousel>
                                    <Carousel.Item>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Card className="bg-dark text-white">
                                                        <Card.Img src={spimg1} alt="Card image" />
                                                        <Card.ImgOverlay>
                                                            <Card.Title>Card title</Card.Title>
                                                            <Card.Text>
                                                                This is a wider card with supporting text below as a natural lead-in
                                                                to additional content. This content is a little bit longer.
                                                            </Card.Text>
                                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                                        </Card.ImgOverlay>
                                                    </Card>

                                                </Col>
                                                <Col>
                                                    <Card className="bg-dark text-white">
                                                        <Card.Img src={spimg2} alt="Card image" />
                                                        <Card.ImgOverlay>
                                                            <Card.Title>Card title</Card.Title>
                                                            <Card.Text>
                                                                This is a wider card with supporting text below as a natural lead-in
                                                                to additional content. This content is a little bit longer.
                                                            </Card.Text>
                                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                                        </Card.ImgOverlay>
                                                    </Card>

                                                </Col>
                                                <Col>
                                                    <Card className="bg-dark text-white">
                                                        <Card.Img src={spimg3} alt="Card image" />
                                                        <Card.ImgOverlay>
                                                            <Card.Title>Card title</Card.Title>
                                                            <Card.Text>
                                                                This is a wider card with supporting text below as a natural lead-in
                                                                to additional content. This content is a little bit longer.
                                                            </Card.Text>
                                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                                        </Card.ImgOverlay>
                                                    </Card>

                                                </Col>
                                            </Row>
                                        </Container>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Card className="bg-dark text-white">
                                                        <Card.Img src={spimg3} alt="Card image" />
                                                        <Card.ImgOverlay>
                                                            <Card.Title>Card title</Card.Title>
                                                            <Card.Text>
                                                                This is a wider card with supporting text below as a natural lead-in
                                                                to additional content. This content is a little bit longer.
                                                            </Card.Text>
                                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                                        </Card.ImgOverlay>
                                                    </Card>

                                                </Col>
                                                <Col>
                                                    <Card className="bg-dark text-white">
                                                        <Card.Img src={spimg1} alt="Card image" />
                                                        <Card.ImgOverlay>
                                                            <Card.Title>Card title</Card.Title>
                                                            <Card.Text>
                                                                This is a wider card with supporting text below as a natural lead-in
                                                                to additional content. This content is a little bit longer.
                                                            </Card.Text>
                                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                                        </Card.ImgOverlay>
                                                    </Card>

                                                </Col>
                                                <Col>
                                                    <Card className="bg-dark text-white">
                                                        <Card.Img src={spimg2} alt="Card image" />
                                                        <Card.ImgOverlay>
                                                            <Card.Title>Card title</Card.Title>
                                                            <Card.Text>
                                                                This is a wider card with supporting text below as a natural lead-in
                                                                to additional content. This content is a little bit longer.
                                                            </Card.Text>
                                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                                        </Card.ImgOverlay>
                                                    </Card>

                                                </Col>
                                            </Row>
                                        </Container>
                                    </Carousel.Item>
                                </Carousel>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
};

export default Today;