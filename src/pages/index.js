import React from 'react'
import Link from 'gatsby-link'

import Slider from 'react-slick'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class WorkSlider extends React.Component {

  render() {
    var settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><img src='http://placekitten.com/g/640/480'/></div>
        <div><img src='http://placekitten.com/g/640/480'/></div>
        <div><img src='http://placekitten.com/g/640/480'/></div>
      </Slider>
    );
  }
}

export default () => (
  <div>
    <h1>Immersive audio design for VR</h1>
    <WorkSlider/>
  </div>
)

