import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface slides {
  review: string;
  author: string;
  country: string;
}

const slidesList: slides[] = [{ review: "Good Website", author: "James", country: "Canada" }];
export default function ReviewCarousel(): JSX.Element {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      {(Slider as any)({ ...settings })}
      {slidesList.map((item: slides, index: number) => (
        <div key={index}>
          <p>{item.review}</p>
          <p>{item.author}</p>
          <p>{item.country}</p>
        </div>
      ))}
    </div>
  );
}
