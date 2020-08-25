import React, { Component } from "react"
import Slider from "react-slick"
import { css } from "@emotion/core"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class SimpleSlider extends Component {
  render() {
     var settings = {
       dots: true,
       infinite: false,
       speed: 500,
       slidesToShow: 4,
       slidesToScroll: 4,
       initialSlide: 0,
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 5,
             slidesToScroll: 6,
             infinite: true,
             dots: true,
             initialSlide: 2,
           },
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2,
           },
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           },
         },
       ],
     }
    return (
      <div>
        <h2> Single Item</h2>
        <Slider
          {...settings}
          css={css`
            width: inherit;
            height: 300px;
            background: lightgray;
            .slick-prev:before, .slick-next:before{
                color:black
            }
            margin:0px 0px 50px; 
            @media (max-width:420px){
              max-width:300px;
            }
          `}
        >
          <div>
            <h3
              css={css`
                place-items: center;
              `}
            >
              1
            </h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    )
  }
}
