import React from 'react';
import './about.css';
import about_i_image from '../../Images/about-inset.jpg';
import about_m_image from '../../Images/about-main.jpg';

function About() {
  return (
    <div id="about" className="about-main pad-bottom-100">
        <div className="container pad-top-100 pad-left-20">
            <div className="about-row">
            <div className="about-col1">
                <h2 className="block-title"> About Us </h2>
                <h3>IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco. </p>
                <p> Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, Aenean commodo ligula eget dolor penatibu set magnis is parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, pellentesque eu, pretium quis, sem. quat massa quis enim. Donec vitae sapien ut libero venenatis fauci Nullam quis ante. Etiam sit amet rci eget eros. </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco. </p>
            </div>
            {/* end col */}
            <div className="about-col2">
                <div className="about-images">
                <img className="about-main" src={about_m_image} alt="About Main Image" />
                <img className="about-inset" src={about_i_image} alt="About Inset Image" />
                </div>
            </div>
            </div>
        </div>
    </div>

  );
}

export default About;