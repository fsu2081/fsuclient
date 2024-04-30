import React, { useRef } from "react"
import TestimonialCard from "./TestimonialCard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material"
import { testimonials } from "@/data/testimonials"
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
  weight: ["100", "300", "500", "600", "700", "800"],
  subsets: ["latin"],
})

const Testimonials = () => {
  const sliderRef = useRef(null)

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => <ul className="slick_dots  ">{dots}</ul>,
    customPaging: (i) => <div className={`slick__li w-[2rem] h-[2rem] `}></div>,
    responsive: [
      {
        breakpoint: 1000, // screens smaller than 1024px
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1500, // screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
        },
      },
      {
        breakpoint: 2000, // screens smaller than 1200px
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
        },
      },
    ],
  }
  return (
    <div
      className={`md:w-[80%] mx-auto w-full ${montserrat.className} py-16 flex flex-col gap-4 `}>
      <h1
        className={`text-3xl md:text-5xl text-center text-primary-400 font-semibold ${montserrat.className} `}>
        Testimonials
      </h1>
      <div className="w-full h-full flex justify-center items-center ">
        <div
          className="w-[5%] flex items-center justify-center cursor-pointer text-2xl text-black hover:text-primary-400"
          onClick={prevSlide}>
          <ArrowBackIosNewOutlined color="inherit" fontSize="inherit" />
        </div>
        <div className="w-[90%] ">
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </Slider>
        </div>
        <div
          className="w-[5%] flex items-center justify-center cursor-pointer text-2xl text-black  hover:text-primary-400"
          onClick={nextSlide}>
          <ArrowForwardIosOutlined color="inherit" fontSize="inherit" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
